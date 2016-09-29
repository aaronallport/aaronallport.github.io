---
layout: post
title: New and improved Salesforce leads on a map
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

> Building on my previous post, I have improved the mapping of leads.

Hot on the heels of [Plot your Salesforce leads on a map](http://aaronallport.com/2016/08/04/plot-your-salesforce-leads-on-a-map.html), I've made some updates to the code to improve the experience and provide some additional functionality.

## Remove the custom fields on the user object

The field "Base location" on the User object doesn't need to be queried anymore, so it can be removed.

## Modify the Server-side controller class

Next, open the developer console and open the "LeadVisualiserSSController" Apex class. Change the class definition to this:

```java
public with sharing class LeadVisualiserSSController {
    @AuraEnabled
    public static List<Lead> getLeads() {
        return [
            SELECT Id, Name, Latitude, Longitude
            FROM Lead
            WHERE OwnerId = :UserInfo.getUserId() AND Latitude != NULL AND Longitude != NULL
        ];
    }
}
```

We've removed the call to get details about the user.

### Component

Modify the lightning component markup to remove references to the user data:

```html
<aura:component implements="force:appHostable" controller="LeadVisualiserSSController">
    <aura:attribute name="leads" type="Lead[]" />

    <ltng:require styles="/resource/leaflet/leaflet.css" />
    <ltng:require scripts="/resource/leaflet/leaflet.js" afterScriptsLoaded="{!c.mapLoaded}" />

    <div class="map" id="map"></div>
</aura:component>
```

### Controller

The controller code gets slimmed down now we're not querying for user details. However, we now link to the lead record and re-calculate the distance to the leads based on the users lat/long. The map also follows the user. Lastly, we add a marker for the user in the maps centre. Phew!

```js
({
    mapLoaded: function(component, event, helper) {        
        var leadsAction = component.get("c.getLeads");
        var leads = {};
        var map = window.L.map("map", {zoomControl: true, center: [51.505, -0.00], zoom: 16});
        var userPosition;
        var userLatLng;
        var leadPopups = [];

        // https://github.com/pointhi/leaflet-color-markers
        var redIcon = new L.Icon({
            iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        // Draw the map
        window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
        	{
            	attribution: "Tiles © Esri"
            }).addTo(map);

        // Center the map
       	map.locate({watch: true, setView: true, maxZoom: 16});

        // Draw the user
        userLatLng = map.getCenter();
        userPosition = L.marker([userLatLng.lat, userLatLng.lng], {icon: redIcon}).addTo(map);

        // Draw the markers, including links to the lead records
        // - Whenever a popup is opened, call the function

       	leadsAction.setCallback(
        	this,
            function(response) {
                var state = response.getState();

                if (component.isValid() && state === "SUCCESS") {                    
                    leads = response.getReturnValue();
                    component.set("v.leads", leads);

                    // Get all Leads, plot as Markers
                    for (var i = 0; i < leads.length; i++) {
                        if (leads[i].Latitude !== null && leads[i].Longitude !== null) {
                            leadPopups[i] = L.marker([leads[i].Latitude, leads[i].Longitude])
                            	.bindPopup("<a href=\"/one/one.app#/sObject/" +
                                	leads[i].Id + "/view\">" + leads[i].Name +
                                    "</a><br /><br />Distance from your location: " +
                                    helper.calculateHaversineDistance(leads[i].Latitude, leads[i].Longitude, userLatLng.lat, userLatLng.lng) +
                                    " miles"
                                )
                            	.addTo(map);                               
                        }
                    }
                }

                // Update the user position whenever the map center updates
                map.on("locationfound", function(e) {
                    userPosition.setLatLng(e.latlng);
                    userLatLng = map.getCenter();

                    if (leadPopups !== null && leadPopups !== undefined) {
                        for (var i = 0; i < leadPopups.length; i++) {
                        	leadPopups[i].setPopupContent("<a href=\"/one/one.app#/sObject/" +
                        		leads[i].Id + "/view\">" + leads[i].Name +
                            	"</a><br /><br />Distance from your location: " +
                            	helper.calculateHaversineDistance(leads[i].Latitude, leads[i].Longitude, userLatLng.lat, userLatLng.lng) +
                            	" miles");                        
                    	}
                    }
                });
            }
        );

        $A.enqueueAction(leadsAction);
	}
})
```

### Helper

The help stays exactly the same:

```js
({
    // Calculate the Haversine Distance between a pair of lat/long co-ordinates.
    // See "What formulae does the Geolocation Distance" at http://salesforce.stackexchange.com/questions/32585/what-formulae-does-the-geolocation-distance-use for more information
    calculateHaversineDistance: function(lat1, lon1, lat2, lon2) {
        // Earth's radius varies from 6356.752 km at the poles to 6378.137 km at the equator
    	var radius = 6371.00;
        var dLat = this.toRadians(lat2 - lat1);
        var dLon = this.toRadians(lon2 - lon1);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.asin(Math.sqrt(a));
        var kmToMiles = 0.621371;

        return (radius * c * kmToMiles).toFixed(2);
    },

    // Given a degree, calculate the value in radians
    toRadians: function(degree) {
    	return ((degree * 3.1415926) / 180);
    }
})
```

### Styling

This one stays as simple as before, thankfully!

```css
.THIS.map {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
```

## Try it!

Finally, load the component in Salesforce Lightning. From the App Launcher, select "Other Items" and select "Lead Visualiser". Here's the finished result.

![Screenshot of the improved Lead Visualiser](/images/leads_on_map.jpg "Screenshot of the improved Lead Visualiser")

With a few code modifications (and much slimming down), we're able to dramatically improve the experience!

I've shared this code on Github also: [https://github.com/aaronallport/SFMapLeadsNearMe](https://github.com/aaronallport/SFMapLeadsNearMe)
