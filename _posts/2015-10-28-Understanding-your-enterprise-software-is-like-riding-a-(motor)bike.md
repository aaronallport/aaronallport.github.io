---
layout: post
title: Understanding your enterprise software is like riding a (motor)bike
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

> No matter how big and complex it may seem, Enterprise software can (and should) be fully understood to get the best from it

## Enterprise software packages are behemoths that you'll never fully grasp!

All too often I hear stories of organisations that have purchased large software packages or licenses, only to then not flex them to realise the fullest potential of their software asset. Sometimes, organisations are lacking in the skills needed to support their enterprise software, but more often than not, the legacy of no-one adopting the software becomes ingrained in those who carry out the business day-to-day.

When my previous employer decided they wanted to harmonise their software platform to be on Microsoft asp.net, I was responsible for assessing the pipeline of an existing Java-based asset to understand the complexities and challenges we'd face when the activities of migration happened. To my surprise, the reason a piece of software called [TeamCity](https://www.jetbrains.com/teamcity/) exists in the pipeline is because it is being used to orchestrate [Microsoft Team Foundation Server](https://www.visualstudio.com/products/tfs-overview-vs) and many batch scripts. The reason? No-one dare touch the configuration of the existing tooling, so much so that layers of additional complexity are put on top instead. The truth is, no-one understands how this stuff works properly. TeamCity, whilst a great bit of software, is unnecessary as Team Foundation Server can do the part of their development process that TeamCity does.

## A personal case in point

Just over two weeks ago, on the 4th of October 2015, I purchased my first motorcycle. She's a [2013 Kawasaki VN900 Custom](http://www.kawasaki.co.uk/en/products/cruiser/2013/vn900_custom/overview?Uid=0602WlhZXFhZWV5ZWlxeXF5RWFpaXVtRRg0GRT0j), and she is a beauty.

![Picture of me and my new Kawasaki VN900 Custom motorcycle](/images/me_vn900-collection.jpg "Me and my new Kawasaki VN900 Custom motorcycle")

> Me, having the obligatory "I've bought a bike!" photo at [Colchester Kawasaki](http://www.colchesterkawasaki.co.uk/)

I could go into explaining how the bike being belt-driven makes for a smoother ride, but I have a confession to make. At the time of writing, I am completely unable to ride a motorcycle.

## Breaking it down

Just like being competent to get the most from a large scale piece of enterprise software, I find myself having to break down the challenge of riding my motorcycle in to several stages so that I am [able to ride a 900cc motorcycle](https://www.gov.uk/ride-motorcycle-moped/bike-categories-ages-and-licence-requirements) (I'm based in the UK, so can only attest to the UK requirements):

* [Obtain provisional motorcycle license](https://www.gov.uk/apply-first-provisional-driving-licence)
* [Compulsory Basic Training](https://www.gov.uk/cbt-compulsory-basic-training) or CBT (this lets you ride on the road, with "L" plates, on a machine no bigger than 125cc)
* [Motorcycle theory Test](https://www.gov.uk/driving-theory-test)
* [Full "A" license Test - Part 1](https://www.gov.uk/motorcycle-practical-test/what-happens-during-the-motorcycle-practical-test)
* [Full "A" license Test - Part 2](https://www.gov.uk/motorcycle-practical-test/what-happens-during-the-motorcycle-practical-test)

The trouble with enterprise software is that companies who have these large implementations without taking the time to understand their capabilities, tend to get no further than the CBT stage. This means that large [Salesforce](http://www.salesforce.com/) implementation is used for a tiny amount of functionality, or in the case of my previous employer, a fear of altering whats there due to lack of understanding. The irony is, these things only ends up costing more money in the long-term.

So, to break down enterprise software, functional areas that can be exploited to gain business benefit should be tackled in a logical order. CRM systems for example require organisation structure, account record management and the like. This could translate into the following functional areas for understanding and mastery:

* Organisation structure and hierarchy
* Permissions model (who should have access to what, and what should they be able to do?)
* Basic reporting and dashboard creation to provide basic management information on those records created

## Enterprise software understanding FTW!

When software is understood well and folks have the full "A" license in terms of their competency, companies can really use their software to its fullest potential. Much like my learning to ride a motorcycle, folks typically attend structured modules or training on particular software functions.

An example of this would be Salesforce. There are CRM concepts, organisation and hierarchy, workflows, Apex, VisualForce pages, the Lightening Design System, and a whole heap of "under the hood" functionality. The key is to break down the features and tackle them in order of importance for business needs, meaning business benefit can be realised and built upon over time.

In short, invest now before it costs you more money in the long run, "supporting" a system that you can't utilise to the fullest.
