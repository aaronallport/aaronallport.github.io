---
layout: post
title: 5 Javascript Tips for Visualforce Pros
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

![JavaScript, JavaScript Everywhere](/images/js_js_everywhere.jpg "JavaScript, JavaScript Everywhere")

> JavaScript is the double-edged sword of browser magic and copious head-scratching trying to get your code working. As someone who has developed with [JavaScript](https://www.javascript.com) for almost 17 years I've been fortunate enough to know how to use it to do amazing things on the Force.com platform. [Visualforce](https://developer.salesforce.com/page/An_Introduction_to_Visualforce) isn't going anywhere, but JavaScript is going *everywhere*. Answering the question "What would a Visualforce dev need to know about Javascript?" I present 5 tips on how Visualforce developers can take their JavaScript skills to the next level.

## Tip 1: (Re)Learn javascript!

I know you know JavaScript, but when was the last time you picked up a book or read a great article on the importance of well written, structured code? Given the ubiquity of JavaScript and the web, there is a plethora of resources available to you - 99.9% of which are free. Personal favourites of mine are [Eloquent JavaScript](http://eloquentjavascript.net) and [JavaScript Allongé](https://leanpub.com/javascriptallongesix/read). I read both of these great resources (amongst others) at least once a year.

Look out in particular for closures (something JavaScript Allongé covers well) and [self executing functions](http://markdalgleish.com/2011/03/self-executing-anonymous-functions/), asynchronous code such as [Ajax](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started), [promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises) and [namespaces](https://www.kenneth-truyers.net/2013/04/27/javascript-namespaces-and-modules/) (including [global namespace pollution](http://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted)). These advanced topics take you from "person who knows JavaScript" to "person who is JavaScript ninja".

JavaScript is a truly "write once run anywhere" language that currently is standardised as [ECMAScript 2016](https://www.ecma-international.org/ecma-262/7.0/). As web browsers continue to be released, additional features are added, some ahead of specification. Therefore there may be different implementations of the same idea without a formal specification (hence the advent of sites like [Can I Use](http://caniuse.com)). Understanding the language to the point of being able to read and understand new features when released by browser vendors will make you stand above the rest and be able to sit at the bleeding edge of JavaScript.

Lastly, [Salesforce Lightning](https://developer.salesforce.com/lightning) relies on JavaScript for interactivity and asynchronous processing in the browser. When you create a [Lightning component](https://trailhead.salesforce.com/project/quickstart-lightning-components), your client-side controller and helper are JavaScript files. When you understand [JavaScript Object Notation](http://www.json.org) and it's use in authoring code, you'll be able to understand why Lightning Component code is structured the way it is and appreciate the thinking behind it.

## Tip 2: Develop and learn by enriching your VisualForce experience

Start small and don't try and run before you can walk. Visualforce pages with a sprinkling of JavaScript benefit from being gradually enhanced with the power JavaScript brings. Don't try and migrate your Visualforce to Lightning in one fell swoop (that would not only take time but not deliver anything over and above the functionality delivered by your Visualforce pages in the immediate term).

Instead, build up a component library of the functionality you're able to add in to your Visualforce pages. By building your JavaScript in a de-coupled manner, it can be easily ported over to JavaScript when the time comes. This way you'll save development time by re-using what you already have. For example, start by writing asynchronous code to take the burden off of your users requiring page refreshes for simple record updates.

I'll finish this section on the same point - start small. That mighty oak tree you climbed as a kid started life as a single acorn.

## Tip 3: Separate your concerns

JavaScript is a great tool in your arsenal of technological wizardry, but has been used, abused and bent to will over the years. The trinity of HTML, CSS and JavaScript are all designed to do one fundamental job each:

* [HTML](https://en.wikipedia.org/wiki/HTML) is for content
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) is for presentation
* JavaScript is for interactivity, both user-facing and "behind the scenes", such as partial page refreshes.

Don't put Visualforce merge syntax in your JavaScript. You'd be "muddying the waters" between what Visualforce and JavaScript are good for.

Keeping your JavaScript clean will only help you long-term. If you decide to follow tip 2 and build up the JavaScript in your Visualforce pages as a component library, keeping things clean will save you head-scratching, [de-coupling](https://philipwalton.com/articles/decoupling-html-css-and-javascript/) and re-writing your JavaScript months from now.

## Tip 4: Learn how to test JavaScript

![You don't test your JavaScript?](/images/dont_test_js.jpg "You don't test your JavaScript?")

Because JavaScript can be executed in virtually any web browser, and written in any text or code editor, testing JavaScript often resorts to:

* Write/edit some JavaScript
* Check to see if it does what you aimed for it do do in the browser
* If it works, all is good
* If it doesn't, repeat this process

Learning how to write unit tests for your JavaScript can add an extra degree of assurance that things are going to execute the way you've always intended them to, even when you make a change to another part of your codebase. Just like you [test your Apex classes and triggers](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing.htm), JavaScript can be tested too. My favourite test runner for JavaScript is [Karma](https://karma-runner.github.io/1.0/index.html). It allows you to write JavaScript tests - in JavaScript - using the [Jasmine](https://jasmine.github.io), [Mocha](https://jasmine.github.io) or [QUnit](https://qunitjs.com) methods of describing your code. Karma can be executed on the command line, so it can easily be introduced as part of a development pipeline. Currently, Lightning Component JavaScript doesn't need to have tests written for it. I personally see that changing in future. Besides, it's damn good practice to be testing your code in a repeatable fashion.

## Tip 5: Keep your JavaScript looking trim

Being able to write concise, well commented code is something we all strive for. With the advent of JavaScript frameworks such as [AngularJS](https://angularjs.org) and [React](https://facebook.github.io/react/), there is a potential problem of ["code bloat"](https://en.wikipedia.org/wiki/Code_bloat). When authoring JavaScript code, try and find that magical balance between concise code and readability. You'll never know when you will have to re-visit what you've built, so think ahead and write your code knowing that someone will be reading it and will need to understand what is going on.

[Bundling](javascript bundling), [Source Maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) and [Minification](https://en.wikipedia.org/wiki/Minification_(programming)) are topics for a separate post, but when done as part of a solid JavaScript development pipeline, your trim code can run lean.

## Bonus Tip 6: JavaScript grows in dominance, both within and outside of the Force.com platform.

When your JavaScript skills are at a level you feel comfortable with, you're free to take your skills elsewhere to complement your Force.com platform development. Salesforce's very own [Heroku](https://www.heroku.com) supports [NodeJS](https://nodejs.org/en/) ([amongst others](https://devcenter.heroku.com/start)), so you're able to create server-executed JavaScript packages for more complex and bespoke tasks. You can publish these on a repository such as [NPM](https://www.npmjs.com) if you wish and give back to the Open-Source community to boot.

Now 21 years young, [JavaScript has come on leaps and bounds](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript) since it was seen as little more that something to annoyingly flash text at web page visitors and put snow on your web pages during the holiday season. Learn it, use it, master it. You'll be glad you did.

![I like JavaScript. JavaScript is my favourite.](/images/i_like_javascript.jpg "I like JavaScript. JavaScript is my favourite.")
