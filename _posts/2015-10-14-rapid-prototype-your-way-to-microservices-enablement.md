---
layout: post
title: Rapid Prototype your way to Microservices Enablement
categories: []
tags: []
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

# Rapid Prototype your way to Microservices Enablement

> Use task automation and the modern web to break open your monolith to the masses.

Middleware and back end systems are often the life-blood of any business. They are where all of your business processes, data and the other bits of your “secret sauce” reside. An API, or set of microservices, is seen as a basic requirement of today’s enterprise software packages, especially as more and more of the software we integrate our applications and systems with resides in the cloud.

More and more businesses are realising that there is no competitive edge in the actual technologies used to do something. The technology landscape is now one of several vendors, software packages and hosted offerings for every single step of your pipeline. The value your business creates around the services it provides is what people buy into. To achieve a level of integration that people will want to take advantage of, businesses need to organise their services and expose them, securely, to the masses.

## Opening up is a struggle (aka “it’s not you, it’s me”)

Like all successful relationships, mutual bi-directional communication is key. Microservices are the key to making this happen, making available those select parts of your “secret sauce” without giving away the full recipe. Knowing what to open up is difficult - why would your business want to give anything away?

As organisations and even governments become more and more transparent and give their data away for free, so to must businesses be able to adapt to be the place systems integrators and software re-sellers come to.

> As a systems integrator, you’ve boiled your choices of visualisation tooling down to two competitors. Both can produce stunning visuals, fast, and in a responsive manner. One requires users to explicitly log in to its GUI to view anything. The other allows visuals to be rendered on demand via a call to a microservice, so that they can be embedded within your existing portal for a consistent user experience. Which one will will you go for?

Put simply, if your business operates a closed, microservice-less model, you will lose to your competition, despite the fact that their service may be inferior functionally or by the quality of the data returned.

Microservices enable new revenue streams and business models. For example, [Money Dashboard](https://moneydashboard.com), a service that consolidates users bank accounts to monitor and categorise income and outgoings, wouldn’t exist as a business if the UK banks did not open up for integration via microservices.

**Something** is better than *nothing*.

## No API? No good

As mentioned earlier, an API or catalogue of microservices is nowadays seen as a basic requirement of any modern software. Microservices are a part of the software fabric your business is known for. Whilst “API or die” might to some sound a little strong, there is some truth to the statement. Software that doesn’t have an API will quickly be eschewed in favour of more integration-friendly options, even if the business functionality exposed doesn’t offer the same quality as that of a “closed” or monolithic competitor.

The modern web is an always on, interconnected, accessible experience. Your software needs to be part of this, and the very same technologies upon which the modern web is built can be leveraged to facilitate your microservices enablement.

## Plan your microservices enablement - Identify what to expose

Any business process or back-end service to be opened up as a microservice needs to be put on the table for discussion, but in a way that is going to present value for your potential customers and integration partners. Security and authentication need to be considered, meaning decisions need to be made as to what information can be given away for “free” (requiring no explicit authorisation), and what requires authorisation.

Typically, this activity involves documenting the business processes and services that are available to be considered for opening up to the world in the form of microservices.

## Organise microservices into logical groups

When sifting through your microservice “catalogue”, some themes or logical groupings will naturally present themselves. For example the following may all be grouped together as “customer” operations:
* retrieving customer details
* adding a customer
* removing a customer
* editing a customer

An online groceries site may have several related “basket” microservices such as:
* Add item
* Remove item
* Edit item quantity
* Search basket

## The façade

In Software Engineering, the facade is a design pattern. Analogous to an architectural facade, a software facade is an object that provides a simplified interface to a larger body of code, such as a class library. This pattern can be used to great effect in exposing discreet parts of a system under an elegant set of microservices. This also provides the maintainers of the software with an opportunity to deal with technical debt without affecting the interface, or facade, of those services as called by an external application, meaning things can be improved “under the hood” over time.

## Make it happen

There are generally 3 key pieces of technology that need to be in place to facilitate the exposure of microservices:
* Web server, to be the “gateway” between processing logic and the outside world.
* Logic to handle calls to a specific endpoint, mapping that to one or more network, back-end system or middleware calls.
* The back end systems themselves

## Automate all the things

Leveraging the technologies of the modern web - JavaScript and HTML in particular - we’ve been able to create a free, open source repository that allows for expedited microservices enablement, exposing services by means of a simple web server and the generation of the API, or microservices catalogue. By generating the boilerplate code and subsequent web server wiring, developers are free to work on the integration with their back-end or middleware services.

Get the code and instructions on how to set up at the [Slalom Microservices Enablement repository on github](https://github.com/aaronallport/generator-microservice-catalog). Follow the instructions at the repository to get set up and generating microservices in no time.
