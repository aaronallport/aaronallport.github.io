---
layout: post
title: Plot your Salesforce leads on a map
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

> Using the power of automatic geocoding, quickly and easily see your Salesforce leads on a map using location-aware data.

With my first [Salesforce](https://www.salesforce.com/) blog post I thought I'd dive right in to a write-up and example of a feature in particular. As of the [Spring '16 release](http://www.salesforce.com/customer-resources/releases/spring16/) of Salesforce, standard address fields have had automatic geocoding applied to them. In this blog post, I'll show how to quickly and easily create a Lightning component (based heavily on: [Creating a Lightning Map Component](https://developer.salesforce.com/blogs/developer-relations/2015/04/creating-salesforce-lightning-map-component.html)) that plots leads on a map, calculating the distance to them when an individual lead is inspected. I've done all of this work in a Developer Edition environment, so I can vouch that it works! This blog post assumes familiarity with the lightning interface and the developer console.

## Re-visited: Creating a Lightning Map Component

Salesforce Developer Relations very helpfully wrote the above blog post to illustrate just how simple and easy it is to create Lightning components, and in particular being able to create a map that plots a single marker showing where Dreamforce is hosted. I've used that example as the basis from which we can then use automatic geocoded data to plot leads. If you aren't familiar with it, I strongly advise you give it a read.

# Create custom fields on the user object

The first thing we'll need to do is create a custom field on the User object to state our base location (imagine we're the salesperson - we're setting the lat/long of our office or wherever we're based). Create the following field:

* Type: Geolocation
* Name: Base location

Add to the page layout in the standard manner. When done, populate a latitude and longitude in your new custom field for your user record.

## Create the Server-side controller class to retrieve current user and lead information

Next, open the developer console and create a new Apex Class. Call it "LeadVisualiserSSController". Change the class definition to this:
```
public with sharing class LeadVisualiserSSController {
	@AuraEnabled
    public static List<Lead> getLeads() {
        return [
            SELECT Id, Name, Latitude, Longitude
            FROM Lead
            WHERE OwnerId = :UserInfo.getUserId() AND Latitude != NULL AND Longitude != NULL
        ];
    }

    @AuraEnabled
    public static User getUserInfo() {
        return [
            SELECT Id, Name, Base_Location__Latitude__s, Base_Location__Longitude__s
            FROM User
            WHERE Id = :UserInfo.getUserId()
        ];
    }
}
```

## Creating the Lead Visualiser component

Create a Lightning component called "Lead Visualiser" from the developer console.

Next, we'll add the code for the component markup, controller, helper and styling.

### Add the Leaflet mapping library

Follow the step entitled "Import Leaflet as a Static Resource" from [Creating a Lightning Map Component](https://developer.salesforce.com/blogs/developer-relations/2015/04/creating-salesforce-lightning-map-component.html) to import the Leaflet library.

### Component

The following code will define the component markup. This does a number of things:

* Specifies the server-side controller
* Creates an array to store lead information
* Creates a User object definition
* Instantiates the Leaflet map library
* Creates a division to hold the map itself

```html
<aura:component implements="force:appHostable" controller="LeadVisualiserSSController">
    <aura:attribute name="leads" type="Lead[]" />
    <aura:attribute name="userInfo" type="User" />

    <ltng:require styles="/resource/leaflet/leaflet.css" />
    <ltng:require scripts="/resource/leaflet/leaflet.js" afterScriptsLoaded="{!c.mapLoaded}" />

    <div class="map" id="map"></div>
</aura:component>
```

### Controller

Things now start to get interesting. We need to instantiate our map, get user data, get leads data, plot the leads on the map as markers, but not before we've calculated the distance from the base lat/long on our user record so we can display that info when a marker is clicked. Phew!

```js
({
    mapLoaded: function(component, event, helper) {
        // Get a handle on our server-side controller methods       
        var leadsAction = component.get("c.getLeads");
        var userAction = component.get("c.getUserInfo");

        // Instantiate the user and leads objects - these are populated later
        var userInfo = {};
        var leads = {};

        // Set initial map parameters
        var map = window.L.map("map", {zoomControl: true});

        // Instantiate the map
        window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
        	{
            	attribution: "Tiles © Esri"
            }).addTo(map);

        // Set the default view of the map based on the users location
        map.locate({setView: true, maxZoom: 16});

        // Set the leads callback functionality
       	leadsAction.setCallback(
        	this,
            function(response) {
                var state = response.getState();

                // Haversine Distance is explained in the Helper
                var haversineDistance;

                if (component.isValid() && state === "SUCCESS") {  
                    // Put the user information into the leads variable                  
                    leads = response.getReturnValue();
                    component.set("v.leads", leads);

                    // Get all Leads and plot as Markers
                    for (var i = 0; i < leads.length; i++) {
                        if (leads[i].Latitude !== null && leads[i].Longitude !== null) {
                            // Calculate the Haversine Distance. Again, Haversine Distance is explained in the Helper
                            haversineDistance = helper.calculateHaversineDistance(leads[i].Latitude, leads[i].Longitude, userInfo.Base_Location__Latitude__s, userInfo.Base_Location__Longitude__s);
                            // Draw the markers on the map, with the Lead Name and calculated Distance
                            L.marker([leads[i].Latitude, leads[i].Longitude]).addTo(map)
                            	.bindPopup(leads[i].Name + "<br />Distance from your base location: " + haversineDistance + " miles");
                        }
                    }
                }
            }
        );

        // Set the user information callback functionality
        userAction.setCallback(
        	this,
            function(response) {
                var state = response.getState();

                if (component.isValid() && state === "SUCCESS") {
                    // Put the user information into the userInfo variable
                    userInfo = response.getReturnValue();
                    component.set("v.userInfo", userInfo);
               	}
            }
        );

        // Lastly, queue up the server-side calls
        $A.enqueueAction(userAction);
        $A.enqueueAction(leadsAction);
	}
})
```

### Helper

Use the following code for the Helper:

```js
({
    // Calculate the Haversine Distance between a pair of lat/long co-ordinates.
    // See [What formulae does the Geolocation Distance use?](http://salesforce.stackexchange.com/questions/32585/what-formulae-does-the-geolocation-distance-use) for more information
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

This one is simple, thankfully!

```css
.THIS.map {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
```

You're done creating the Lightning component! Save everything! Next, we'll create the tab definition.

## Make Lead Visualiser visible to use

In Setup, click Create > Tabs. Click New in the Lightning Component Tabs section.

Select "c:Lead Visualiser" as the Lightning Component. Specify "Lead Visualiser" as the Tab Label and "Lead_Visualiser" as the Tab Name.

Click the magnifier icon and select a tab icon of your choice. Click Next and Save.

## Try it!

Finally, load the component in Salesforce Lightning. From the App Launcher, select "Other Items" and select "Lead Visualiser". Here's the finished result.

![Screenshot of the Lead Visualiser](/images/LeadVisualiser.png "Screenshot of the Lead Visualiser")

Of course, having the user location automatically update based on location would be awesome to facilitate automatic distance calculations. This could be done by creating an Apex web service and having the Leaflet map automatically update the user location at given intervals.

Enjoy exploring the power of geocoding and location-based services in Salesforce! I'd love to hear thoughts and ideas. I'm at [http://twitter.com/aaronallport](http://twitter.com/aaronallport)
