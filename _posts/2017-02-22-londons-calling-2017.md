---
layout: post
title: London's Calling 2017
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

![London's Calling Sticker](/images/LDNsCall.jpg "London's Calling Sticker")

> On the 10th of February 2017, I attended [London's Calling](http://www.londonscalling.net) '17 after [winning a free ticket in a retweet competition](http://www.londonscalling.net/congratulations-to-our-retweet-competition-winners/). Here I share what I experienced from attending my first Salesforce community-led conference.

[London's Calling](http://www.londonscalling.net) 2017 was the second annual London's Calling conference, an event run by the Salesforce community here in the UK. If you've attended any of the Admin or Developer meet-ups in London, you'll recognise some familiar faces on the organiser roster. Held in the fantastic [Skills Matter CodeNode](https://skillsmatter.com/about-us#venue) (located near Liverpool Street Station), it felt much more relaxed than the sheer scale and pandemonium of the [London leg of the Salesforce World Tour](http://www.salesforce.org/events/salesforce-world-tour-london/). I met lots of great people and definitely want to come back next year!

## Opening Keynote

Following a perfect combination of bad flight connections due to weather and various other things going on in the US right now, [Peter Coffee](https://twitter.com/petercoffee?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) was unable to make it to the conference in person. However, despite it being in 1am in Los Angeles, Peter gave the Keynote speech from his hotel room in his usual charismatic style. Within 30 seconds you'd forgotten he wasn't in the room!

Entitled "A refresher in statistical significance", Peter spoke about how we should flip our thinking about things we either take for granted or see through one lens only. For example, flipping our perception of what a customer is. Is the person the customer or the asset? Should the customer be an attribute of an asset?

As developers, we shouldn't be content with saying "I know how to code". These days, that's the equivalent of saying "I can drive a car". Useful, but unremarkable in isolation. Coding isn't a career anymore. The thinking that is applied, with coding the tool to implement it, is the skill. Artificial Intelligence is gaining traction where it is now the biggest threat to developers. Facebook have AI writing AI code. Google have an AI-based translate service that learns about language constructs to the point that it doesn't need to learn every language right away - it can make it's own rules and effectively re-write itself for efficiency.

In order to evaluate how good something is, we have to measure and model. For example, with an Apple Watch, a Smart Fridge and a Smart Toilet, I can monitor what goes in me, what I am up to, and what comes out. That's the measurement. Applying models to this data can make me more efficient because I only need to go to the doctors when something is wrong. The models are used to define what the boundaries are, and those will of course shift with age, diet, climate, etc.

Using modelling techniques, we can explore data diversity. Re-thinking data segmentation opens up new types of digital customers. We need to focus on the behaviours and expectations of these customers, because people are passengers, not test pilots. Yes, there are the relative few who are the beta testers and "pilot" phase consumers, but by understanding what people do and expect, we can provide experiences that make everyone want our products and services.

## Delivering Lightning Projects – Thinking in Components

Delivered by [Barry Hughes](https://twitter.com/devinthecloud), this was a great first session for the more developer and architect-minded like myself. Barry spoke about [Base Lightning Components](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/lightning_overview.htm) and the [Lightning Design System Starter Kit](https://github.com/salesforce-ux/design-system-starter-kit), something he uses every time he goes to build something. Barry showed us how it is a great tool for mocking up Lightning designs. It's packaged up using NPM, meaning those of us who have used it before needn't be afraid of some gnarly installation process. Barry went on to speak about the forthcoming SLDS updates for Spring '17 how we should look to use composite components and [nesting](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/qs_aotp_app_step4_nested.htm) more and more going forward.

## Getting Certified – proven tips for success

Next up, I went to a session that focussed on [certification](http://certification.salesforce.com). As someone going through the motions with getting certified, I learnt about the useful of mapping my own certification journey. I was relieved to hear that my focus on using the Salesforce help, Implementation guides, Videos and Architecture Academy was the right thing to do. I also learnt that there are Field Service Lightning and CPQ Specialist certifications coming our way and these technologies gain maturing within the Salesforce ecosystem.

## Do not fear the command line, you’re smarter than it

For those who have never used the command-line before, this was a great learner session. For those who know what running sed in a bash shell means, it was more of a refresher. I learnt the most about the (soon to be retired) Force.com CLI, where the combination of what had been covered was put together to show querying for Account records in a Salesforce instance, piping through grep, piping that through sed to update said records as they were streamed in. Finally, this was all piped back into the Force.com CLI toolset to push those changes back to the same Salesforce instance. A great way to show the power of piping and how one line of commands can become extremely powerful. The [Force.com CLI](https://force-cli.heroku.com) is being replaced by the new [Salesforce Developer Experience (DX)](https://www.salesforce.com/products/platform/products/salesforce-dx/) CLI, which is currently in beta. I've also made notes to look at the [Lightning CLI](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/cli_intro.htm) and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (which is what the new DX CLI is being built on).

## Demojam

In the hour before lunch we were treated to a [Demojam](https://appexchange.salesforce.com/results?keywords=demojam), where contestants have 3 minutes each to do a live demo of a solution or product. We saw demonstrations from each of the exhibitors in the expo area, with the victor being Taskfeed. I was really impressed with the short, sharp nature of the Demojam concept. It kept the attention of people for the full hour, and certainly gave me a very quick intro to all who presented. I know who I'll be speaking to more about their products afterwards!

## Trailhead!

There were Lightning and Equality pins on offer, and I had all but one already meaning I had a challenge to do whilst I ate lunch. I duly completed the last lightning badge and decided that given I was 3 away from the 100 mark, I'd go for those. At thew time of writing, I'm on 100 [Trailhead](https://trailhead.salesforce.com) badges.

## Secrets of the Success Community

As a frequent user of the [Success Community](https://success.salesforce.com), I thought I had better pop along to this session to see if there are any tips on how I can help or be helped better. This session reinforced some concepts I already knew, but added a few extra tips and hacks along the way. Tips include:
* Search first before asking
* Be specific
* Give context
* Be appreciative

By answering questions we all learn more. I personally find having a tab open to the community at all times encourages me to dip in more than I otherwise would do.

The session went on to cover the Idea Exchange, which is like a suggestions box where folks can post, vote and comment on ideas for the Salesforce platform. Be sure to search twice BEFORE you post an idea! When ideas hit a magical threshold of 2500 points (thats 250 unique votes for an idea), it is then discussed for inclusion on the Salesforce Product roadmap.

Salesforce post their known issues at [https://success.salesforce.com/issues_index](https://success.salesforce.com/issues_index), so be sure to check there if something is already known and being fixed.

Lastly, the discussion moved to User Groups. User Groups are regular meet-ups that are customer-led. They provide a great networking opportunity and are free to attend. They usually have food and drink provided too. Those that would like some speaking experience should volunteer to speak. After all, you only get out what you put in, and here is a great way to give back to the Salesforce Community local to you. For what it is worth, I attend the London Developer User Group (Meetup page is [here](https://www.meetup.com/LondonSalesforceDevelopers/)).

## 10 commandments for writing spiffy Lightning Apps

This one is pretty self explanatory, so I'll just jot down the "10 commandments".

* Use `ui:message` for audio notifications - your users will be glad you did! It makes sense to build accessible applications that utilise the technology we have available.
* Look at Dispatcher Event Handling - in large component-count scenarios, having a dispatcher component to listen for and decide which component instances should receive a targeted event to those component instances is an example of a best practice. See more event best practices at [Events Best Practices](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/events_best_practices.htm)
* Manually enforce FLS and CRUD in Apex controllers - Don't be lazy. FLS and CRUD permissions are not explicitly checked, so it is up to you to make sure users only see and interact with the data they should be able to and nothing more.
* Locker Service - It's coming and there is nothing you can do about it. OK perhaps that was harsh, but you had better understand what Locker Service is and what it means for you as a Lightning developer. For the record, it exists for good reason, so don't fight it.
* Salesforce-Lightning-CLI - It exists to help build Lightning Applications and Components faster, so you'd be silly not to invest some time learning about it.
* Don't ignore those Lightning warnings in your Browser's developer console - Warnings are there for a reason. Seen a little performance warning? What do you think happens to a seemingly microscopic performance issue after a browser window has been open for several hours? Whilst you're at it, utilise `try/catch` and actually log out your errors!
* Use Un-bound expressions in mark-up where you can - They are far more performance-friendly as two-way binding isn't being used. In short, use `{# .. }` syntax instead of `{! .. }`
* Avoid looping in mark-up - It KILLS application performance. Just don't do it. There are plenty of other ways of producing mark-up from iterables without resorting to using loops in the component mark-up.
* For production, ensure you use "useAppCache=true" on the `aura:application` tag. It caches resources, increasing performance. Lovely!
* Install the [Lightning Inspector Chrome Extension](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/inspector_intro.htm) - Just do it and you'll be glad you did. Your users will thank you for making things as fast as possible.

## Things You Never Knew Your Mavensmate Could Do!

As an avid user of [Mavensmate](http://mavensmate.com), I saw this session advertised and through I could probably do with learning a thing or two to see if my already more productive workflow could be made even more so. Little did I know that Mavensmate can be run from the command-line (which will be interesting with the upcoming Salesforce DX). Being an open-source project, the audience were actively encouraged to find issues and submit pull requests.

Little did I know just how powerful the combination of the command-palette and MavensMate are (we were shown an example using [SublimeText](https://www.sublimetext.com) but [Atom](https://atom.io) and [VSCode](https://code.visualstudio.com) work just as well). From the command-palette, one can:

* Create a resource bundle
* Deploy a resource bundle
* Deploy to a server
* Execute Apex scripts (store Apex scripts in GutHub or similar)
* Execute SOQL (results are output as JSON as per the REST API spec - this makes creating test data files super simple!)
* New Apex Class - uses templates that are available on GitHub for free. These can be tailored locally so that customisations to those templates are possible.

I've come away from this session about something MavensMate could do - I'll most likely document when it is ready.

## Closing Keynote: Empathy

We were treated to a closing keynote on the subject of Empathy, and now we can be more empathic to our colleagues and customer. Given by [Belina Parmar OBE](https://twitter.com/belindaparmar), she talked about how we can't be empathic by saying "we feel what you feel" but by actually learning and listening and measuring. For example, from the simplest changing of the colour of soap in the bathroom through to the clothes we wear, we can strike the right note with those we deal with. A great example she gave was of the typical "suited and booted" car salesperson. By changing the attire to a softer blazer, open-collar and jeans, customers were more receptive to the fact that the salesperson was just a person like everyone else. In fact, the car dealership sales went up by 23% over the next 3 months.

# My Final Remarks

I would throughly recommend attending the next London's Calling to anyone who wants a day-long Salesforce conference in a relaxed and informal setting. There was the expected mini-expo, but it was more on specific solution providers. The Demo Jam was a superb touch, but I loved the fact the venue really made the session-driven format work so well. I'll definitely be asking my superiors to go back next year!
