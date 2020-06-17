---
layout: post
title: An Introduction to DevOps in Salesforce
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

# An Introduction to DevOps in Salesforce

> This is the first post in a series about building an effective Salesforce deployment pipeline that your whole team will love. Written by [Aaron Allport](https://linkedin.com/in/aaronallport/) and [Stuart Grieve](https://linkedin.com/in/stuart-grieve/).

![Photo by Austin Distel on Unsplash](/images/devops-101.jpeg "Photo by Austin Distel on Unsplash")

## DevOps 101

The term DevOps derives from the integration of development and IT operations, two teams which historically; very much worked in isolation. The idea originally came about in 2007 by Patrick Debois, a Belgian consultant and Agile practitioner, who started to become vocal about the challenges between IT Operations and Software Development teams. Fast forward to 2009, following a presentation delivered by John Allspaw and Paul Hammond titled “10+ Deploys per Day: Dev and Ops Cooperation at Flickr”; Debois formed a now global conference called “Devopsdays” — officially coining the term. “So, I now know the origins of DevOps, but what’s it going to do for me?” I hear you ask.

Well, DevOps is as much about strategy and technology, as it is about an organisation’s culture and your team’s mindset. Traditionally, development and operations teams have entirely different objectives and performance indicators, which has fostered a “here’s this new piece of code, now go run it” mentality.

In today’s world, the scope for automation is huge; be it in deployments, testing or infrastructure. Made all the more achievable with the breadth of tools available. Overall, by breaking down this silo, teams can be empowered to fail fast, reduce waste to build leaner, and react to market changes faster.

## The Cultural Impact of DevOps

Irrespective of technology or team skillset, a move to DevOps involves a cultural shift that may at first feel uncomfortable for many. DevOps is a way in which developers and operations teams can work together more closely to quickly realise business benefits of technology change. The pace at which change can be realised is increased. Increased pace can sometimes induce “fear of the unknown” in corporations moving out of their comfort zone.

This is a tough pill to swallow for historically risk-averse organisations such as Financial Services and Insurers, but it needn’t be. Instead of seeing a project fail due to a large piece of functionality taking a long time to implement and the subsequent “back to the drawing board” and “blame culture”, problems are things to be fixed, and change can come about more quickly through proven processes and techniques such as continuous integration and continuous deployment. The huge releases that historically take a weekend to deploy (often out of hours) are full of risk. They often represent substantial change to code, configuration and other client infrastructure.

By increasing the frequency of deployments, the actual scope of change in each is automatically reduced. One can easily argue and sell the benefits of a process that can be increasingly tested and optimised, with lower-risk changes (because of a more frequent process). Customers (internal and external) get functionality faster. Bugs are fixed faster. One of the ultimate goals of continuous delivery is that go-lives should be so low risk that folks barely notice, instead of stress-inducing “weekender” go-lives.

Ultimately though embracing a culture of smaller, more frequent releases; risk is reduced, features and fixes get release quicker, and the deployment pipeline (explained in more detail below) can be enhanced and refined through continuous improvement. As the development and feedback loop is tightened, teams within organisations can become more open and collaborative.

As software is developed, tested and released, it is monitored, and feedback is realised in each cycle of development:

![Development Cycle](/images/devops-cycle.png "Development Cycle")

## What is a Deployment Pipeline?

A deployment pipeline is the series of steps that your Salesforce configuration and code will go through to get from your local machine or development environment to production. This can include different environments for systems integration testing, user acceptance testing and finally production. By having all configuration and code changes go through a deployment pipeline of multiple environments, anything making its way to production will have been tested multiple times, in multiple contexts.

By automating and standardising the steps to get code and configuration to each environment, there can be confidence in the integrity of the process of getting code and configuration to a desired end-state (with no human intervention).

Put simply, automating the “run book” of yesteryear as much as possible to ensure that what was developed goes forth into production with no manual intervention is the ultimate goal of any deployment pipeline.

There are many software tools that exist to facilitate tasks being done, often coming with pre-packaged scripts and other accelerators to assist in getting up-and-running as quickly as possible. These tools are often able to report back statuses of failed build/deploys so that teams can get to work fixing issues.

## Enter, Salesforce DX

For a long time, many felt that Salesforce was lagging behind in the DevOps space. Sure, those who had graduated from managing their deployment process using change-sets to the Ant Migration Tool or Force.com IDE were laughing, but there was still a lot left to be desired. For instance, if you’ve had any run-ins with Ant, you’d be familiar with the build.properties. This plain text file was responsible for connecting to your Salesforce org and contained, yep, you guessed it- your username, password and any security tokens.

Salesforce announced the SFDX Command Line Interface at Dreamforce in 2016, and it became generally available in the Winter ’18 release. The developer community rejoiced, and DevOps practices such as Continuous Integration, Automated Testing and Infrastructure as Code were finally enabled within the Salesforce toolset.

![SFDX](/images/sfdx.jpeg "SFDX")

Let’s start with Continuous Integration, commonly referred to as CI. CI is the practice whereby developers regularly push their code to a central repository or environment, resulting in constant collaboration. This greatly reduces the chance of bugs, as no-one should be working in isolation. We mentioned earlier that SFDX is a Command Line Interface (CLI), which in layman’s terms is simply a way to control software using text commands. Armed with SFDX, every developer on a team now had a super lightweight tool to retrieve and deploy metadata, run tests and create disposable environments. Being a CLI, it created the opportunity to integrate with a vast selection of automation tools, which can monitor the changes the team are making and automatically trigger builds to your Salesforce environments.
Just as deployments were able to be automated, the same was true for testing. Previously developers would have perfectly functioning code and hand it over to operations, moving onto the next feature; only to be told that after being combined with the rest of the team’s work it is now failing. SFDX has an array of testing commands to fulfil all our testing needs. Coupled with our automation tools, we can create gates whereby any new changes must be tested rigorously before entering the core codebase.

![The Wall of Confusion](/images/wall-of-confusion.jpeg "The Wall of Confusion")

Finally, Infrastructure as Code. Salesforce professionals have environments they can safely build on, whether that be Developer Editions or Sandboxes. However, creating a new Sandbox can take some time- maybe a few hours, maybe a couple of days. It varies depending on the level of customisation on the source environment being copied, organisation size and who else is in the queue in front of you. SFDX introduced Scratch Orgs, disposable environments which can be created in seconds. Using a definition file to describe what features and settings are required, a developer can create a new environment to build or test changes by executing a single command. Manage this file at a project level, and you can be assured that your whole team are working in consistent environments.

## What’s Next?

Taking a DevOps approach provides the bridge between development and operations teams, positively influencing company culture. Close collaboration and the use of tooling to optimise and streamline development and surrounding processes means risk is lowered and release frequency can increase. With a firm grounding in the theory explained in this post, organisations move on to plan for how they can operate in the “brave new world” of Salesforce development and release management.

> Stay tuned for our next post in the series about building an effective Salesforce deployment pipeline that your whole team will love. We’ll explore environments, branching models, and ways to ensure your Salesforce project has a successful DevOps strategy.