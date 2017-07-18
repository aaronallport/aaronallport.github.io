---
layout: post
title: Lightning Test Service
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

> Test your Lightning component code using the Lightning Test Service (currently in Pilot)

## Your Lightning Components should be tested too

As a key part of the Lightning Experience, lightning components can contain a lot of JavaScript. Currently, that JavaScript goes untested. You can throw you lightning components pretty much straight into your production Salesforce environment.

As a stickler for "doing it right", I was glad to see the Lightning Test Service (or LTS for short) make an appearance on [GitHub](https://github.com/forcedotcom/LightningTestingService). Currently in Pilot, LTS allows for testing of JavaScript code within Lightning components. Currently there's a Jasmine wrapper, but any JavaScript test framework will work with LTS (if you're prepared to create a wrapper for that framework, but I expect the GitHUb repo will be updated to include these in future).

The LTS is available in two forms:
* An unmanaged package thats installed to your Developer Org.
* A CLI plugin to Salesforce DX

Folks are encouraged to install the unmanaged package before trialling the CLI plugin. I'm encouraged that this crucial piece of the testing puzzle is being addressed. Rather than repeat the documentation with an example here, I implore you to [go and find out](https://github.com/forcedotcom/LightningTestingService) for yourself.
