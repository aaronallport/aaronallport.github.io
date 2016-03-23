---
layout: post
title: Can we avoid cloud-vendor lock in?
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

> If I move or provision services in the Cloud - am I stuck with that vendor?

In this post, as part of the [Slalom London](https://www.slalom.com/locations/london) Cloud Transformation series, I'll be exploring how we can build our offerings in a vendor-agnostic manner. This extends to the design of the software itself, the provisioning of cloud services, and examples of where this is being done today.

## Why lock-in is bad

Freedom and choice is a good thing. After all, it is what drives the competition between cloud providers for your business. Buyer beware however, because what at first seems an 'open' offering may soon have you being monopolized by your cloud provider. Becoming tightly coupled with the services offered by a cloud provider only adds to the expense and time necessary to move to another provider in the future, and puts you at the mercy of changes to their pricing model in the meantime. If a provider becomes susceptible to a huge security breach, how much will a move away truly cost you?

## Am I locked in to a particular vendor?

To establish if you are locked-in to your current cloud provider, ask yourself the following questions:
* Can I move my business logic easily and independently of the API or micro-services layer from which users interact with my application, with minimal configuration changes to my application?
* Can I move my ENTIRE data layer independently of my business logic layer, with minimal configuration changes to my application?
* Can I move any or all parts of my application from one cloud provider to another (and even back again), from a single command?

If you cannot answer "yes" to every single question, then read on!

## Abstraction of your application layers

The [software engineering concept of abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)) is a technique for managing complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level. In simple terms, it means complex software can be given a simple means from which to interact with it.

In a [previous blog post](http://aaronallport.com/2015/10/14/rapid-prototype-your-way-to-microservices-enablement.html), I discussed how the value your business creates around the services it provides is what people buy into. To achieve a level of integration that people will want to take advantage of, businesses need to organise their services and expose them, securely, to the masses. By introducing a layer of abstraction through micro-services, you've immediately de-coupled your complex logic, or secret sauce, from the users that interact with it.

Ultimately, each layer of your application should be exposed to the next through the use of a micro-services layer or similar.

## Moving your business logic from one provider to another

When applications are broken down into their component services, by layer, and de-coupled to the point of micro-service calls being configuration-driven (for host, port, and other info), moving a layer of your application from [Amazon Web Services](http://aws.amazon.com/) to [Microsoft Azure](https://azure.microsoft.com/en-gb/) all of a sudden isn't a big deal. Users know no different (nor does your application for that matter!)

## Provisioning cloud services and abstraction of cloud infrastructure

It is normal to have an entire environment configuration scripted. That makes good business sense in terms of simple time saving and repeatability, and the return on investment of such a move is easy to calculate (and justifiable to management). If a manual deployment takes 3 man-hours, and a script takes 9 man-hours to write, then after three deployments, you're into positive ROI territory (time is money after all).

Ultimately, you will need to gather the commands and configuration options necessary to deploy your application layers on each target environment. [Microsoft Azure](https://azure.microsoft.com/en-gb/documentation/articles/virtual-machines-command-line-tools/), and [Amazon Web Services](https://aws.amazon.com/cli/) both have command-line interface support to facilitate environment provisioning and changes through scripted commands. If you aren't already doing so, scripting your current environment provisioning and configuration should be seen as a paramount task in order to achieve like-for-like replication of your current cloud setup.

## Avoiding cloud provider lock-in pitfalls

What may at first seem an open platform may not be so "open" after all. When designing your cloud architecture, ensure you aren't locking yourself into a platform that actually has intricacies that will cause headaches if you move provider. For example, [IBM Bluemix](http://www.ibm.com/cloud-computing/bluemix/) support for containers is actually a technology called [IBM Containers](http://www.ibm.com/cloud-computing/bluemix/containers/), based on [Docker](https://www.docker.com/) technology. Therefore, you can't "lift and shift" your existing Docker containers from IBM Bluemix to another provider, because they aren't actually Docker containers you're running on IBM Bluemix.

Additionally, cloud providers have launched semi-proprietary services based on existing technologies to ease the set-up and configuration of certain services. An example of this is [Amazon Web Services ElastiCache](https://aws.amazon.com/elasticache/), a clustered in-memory caching solution that runs on top of [Memcached](http://www.memcached.org/) or [Redis](http://redis.io/). Whilst this service takes away the pain of setting up a clustered in-memory caching solution running on dedicated AWS servers, depending on it in your application will mean that moving away to another cloud provider just became more difficult. Therefore, only use these services if absolutely necessary and unavoidable.

### DevOps considerations

Automation is key, and in a world where tearing down and re-building environments is considered the day-to-day, cloud provider provisioning needs to be seamless, and configuration driven. Just as I've spoken on the need to de-couple your application layers to achieve the agnostic cloud provider dream, this principal of abstraction should extend to your environment provisioning too. Therefore, spinning up your entire app should be the case of a script running against a configuration file (ideally moving between cloud providers should need little more than updating the configuration your provisioning scripts run against). [Ansible](https://www.ansible.com/), [Puppet](https://puppetlabs.com/) and other [DevOps](https://en.wikipedia.org/wiki/DevOps) tools of choice can be utilized with your provider-agnostic scripts.

## Practical examples

[Microsoft recently announced they are going to make SQL Server available on Linux](https://blogs.microsoft.com/blog/2016/03/07/announcing-sql-server-on-linux/). This is very exciting news as it de-couples an historically Windows-based enterprise database package from its legacy operating system. As an application owner, you aren't tied to having to use Windows-based cloud compute instances to host your [SQL Server](https://www.microsoft.com/en-gb/server-cloud/products/sql-server/) services.

[Cloudify](http://getcloudify.org/) is a service that exists purely to orchestrate cloud environments. It works with [Amazon Web Services](http://aws.amazon.com/), [Microsoft Azure](https://azure.microsoft.com/en-gb/), [CloudStack](https://cloudstack.apache.org/), [Softlayer](http://www.softlayer.com/) and [Google Cloud Compute](https://cloud.google.com/compute/).

[Salesforce](http://www.salesforce.com/uk/) is an example of a complete [Platform-as-a-Service (PaaS)](https://en.wikipedia.org/wiki/Platform_as_a_service), whereby the infrastructure, integration layer, software upgrades and application itself are all hosted and managed by Salesforce. As an administrator or developer, you manage **changes** to Salesforce. You have access through API's and Salesforce-produced tools to get your data whenever you want.

## The silver lining

Being cloud agnostic requires up-front investment in terms of application de-coupling, integrations and environment provisioning automation through configuration-driven scripting. The benefits however can be huge. Without being locked-in to any one cloud provider, organisations are inherently more flexible in their cloud architecture set-ups.

## Other posts in the Slalom London Cloud Transformation Series

This post is part of the Slalom London Cloud Transformation series:

* [Cloud Transformation - tidy up your mess!](https://www.linkedin.com/pulse/cloud-transformation-tidy-up-your-mess-matt-mould)
* [The Cloud, not just someone else’s computer](https://www.linkedin.com/pulse/cloud-just-someone-elses-computer-robert-eriksson)
* [How do you know if you are ready for the cloud?](https://www.linkedin.com/pulse/how-do-you-know-ready-cloud-miguel-blasco)
