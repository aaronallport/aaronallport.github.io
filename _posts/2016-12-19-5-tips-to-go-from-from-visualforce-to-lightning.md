---
layout: post
title: 5 tips to go from Visualforce to \#Lightning
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

> Along with many Salesforce developers, I've been transitioning my way from [Visualforce](https://developer.salesforce.com/page/An_Introduction_to_Visualforce) to [Lightning](https://developer.salesforce.com/lightning) (framework, components, design system and all). Moving from Visualforce to Lightning doesn't need to be daunting. Here I share 5 tips to make the transition just that little bit smoother.

![Dr. Evil introduces this blog post: #Lightning](/images/hash_tag_lightning.jpg "Dr. Evil introduces this blog post: #Lightning")

# Tip 1: Client-side FTW!

One of the major changes introduced with the Salesforce Lightning framework is that it represents a new, "modern web" way of developing applications on the [Force.com platform](https://developer.salesforce.com/platform/force.com). Whereas Visualforce can be compared to [JSP](https://en.wikipedia.org/wiki/JavaServer_Pages) (or any other submit/full-refresh) model of interacting with web applications, the Lightning framework provides for rich [client-side](https://en.wikipedia.org/wiki/Client-side) applications that do more in the hands of your users.

Utilising [event-driven](https://en.wikipedia.org/wiki/Event-driven_architecture) architectures and asynchronous data exchange, data is transferred between client and server as it is needed, providing for a light-weight applications experience. Understanding client-side [MVC](https://en.wikipedia.org/wiki/Model–view–controller) patterns will pay dividends when working with the Lightning framework.

Personally I add an additional double-meaning to the "C" in "MVC", to account for the fact that there is now both a client-side and server-side controller component (client-side controllers for the stuff that happens in the browser and calling external, and server-side controllers for data access, complex server-side logic, and the like).

Next, Lightning Applications are broken down in to [Lightning Components](https://www.youtube.com/watch?v=qm_kQFfRIaY). The event-driven architecture allows for fully de-coupled and component-based client-side awesomeness. These components can choose to subscribe to the events they care about. This means that implementation details for components can change over time, as the parameters passed in events form the payload of data exchange between your components. No more deploying entire Visualforce pages when something changes!

There's a [client-side framework](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_open_source.htm) to handle all of the heavy lifting when dealing with client-side operations, such as eventing and server-side callouts. That leads nicely on to the next tip...

# Tip 2: JavaScript, JavaScript, JavaScript

Being client-side, [JavaScript](https://en.wikipedia.org/wiki/JavaScript) is now your friend. Whether you like it or not, this late adolescent-aged technology is now the "glue" that binds everything together on the client-side. [JSON](http://www.json.org) is now the data exchange format of choice.

JavaScript has been in use for a while now, and I'll be surprised if a Salesforce developer has made their way this far using Visualforce without a little JavaScript dabbling. The lightning framework utilises JavaScript, given that JavaScript provides client-side web interactivity.

[Learn JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript). Personally, I liked [JavaScript Allongé](https://leanpub.com/javascriptallongesix/read), as it provides a great grounding in how JavaScript actually works and executes. Learn JavaScript Object Notation, and not only will your JavaScript authoring be fit for the modern web, but you'll be able to talk JSON for data exchange to the server too.

# Tip 3: You have your own design team

With the Lightning Framework comes the [Lightning Design System](https://www.lightningdesignsystem.com). This is the [Bootstrap](http://getbootstrap.com) to your Lightning applications. With the Lightning Design System, your UI can move with the times and be in-fitting with the rest of the Force.com platform.

Implementing the Lightning Design System in your applications is as simple as declaring what element you're using and any additional classes you wish to apply.

# Tip 4: Apex doesn't need to be the Swiss Army Knife anymore (and that's a good thing)

Let's face it, [Apex](https://developer.salesforce.com/page/Apex_Code:_The_World's_First_On-Demand_Programming_Language) is the only tool we have had up until now to do amazing complex things on the server-side. We have bent and moulded our Apex code to fit the weird and wonderful use-case for our all encompassing Visualforce pages that contained bags of fully-coupled code that required heaps of Apex to do the bespoke operations required of our users.

Apex still has a place, and if anything it has become more specialised, more relevant. Apex is no longer the Swiss Army Knife, but rather the surgical scalpel that allows for precision in your code. Just like client-side code is now de-coupled, so is your server-side code. Your controller code still exists, but you can now [annotate the methods](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm) to be exposed to your Lightning Applications and Components. That annotation you ask? It's simple. Annotate the methods you want exposed with: `@AuraEnabled`

These [exposed methods can now be called by your client-side controller](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm) code.

# Tip 5: Long live Visualforce!

Visualforce isn't going anywhere soon. In fact, it's entirely possible to [utilise Lightning from within Visualforce pages](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_visualforce.htm). Transitioning from Visualforce needn't be an "on/off" process for your users. Changes can be gradually introduced over time to your users, and implementation of Lightning can easily be accommodated within existing development cycles.

There is still a time and a place for Visualforce technology (at the time of writing, Lightning Components cannot yet be embedded within Lightning record detail views for example), so don't put those Visualforce skills out to pasture just yet.

This is an exciting time to be a Salesforce developer, crafting component-based applications on the Force.com platform that are fit for the modern web.

# Where to now?

 Honestly, there's no better place to get started with Lightning than on Trailhead. Give [Develop for Lightning Experience](https://trailhead.salesforce.com/en/trail/lex_dev) a try. For bed-time reading, there's the [Lightning Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm)
