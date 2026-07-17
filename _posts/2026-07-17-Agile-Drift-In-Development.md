---
layout: post
name: Agile Drift in Development
description: How to implement changes in your Agile Ceremonies
image: story_splitting_generic.png
time: "2m:42s"
tags: agile all
---

<div class="w-full text-center">
    <h1>Agile Drift In Development</h1>
    <h6>(Reading Time: 2 minutes 42 seconds)</h6>
</div>

# Introduction
Dogmatic following of the agile manifesto, also known as Cargo-culting, is a common failure state in agile. A lot of companies
claim to be agile without following the actual principles. True buy-in of agile involves an understanding that they are 
a necessarily ideal set of values and principles. It also isn't a blind following of rules, and never was. The agile or
XP way of working is meant as a starting point that should be constantly adjusted. We will discuss different ways the
teams I have worked on have deviated from traditional agile in productive manners.

<p align="center" width="100%">
    <img src="/assets/images/cargo-cult-vs-real-agile.png"  alt="Cargo Cult Vs Real Agile" height="512" width="512" />
</p>  

# Standups
Standups are supposed to be daily. This is the generic advice that is throughout the industry, and may cause arguments 
if it was suggested to run standup at a different frequency. However, we run a backend meeting once a week, and two more
standups throughout the week. From a development standpoint that is not ideal, since developers are working closely enough 
together that they need daily updates. However, this daily standup can be more of a crutch for developers than a feature. 
Developers just remain stuck until the following standup, rather than unblocking themselves. External stakeholders only
need to be updated a couple days a week, so it fits better with their schedule to only have a couple standups.

<p align="center" width="100%">
    <img src="/assets/images/daily-standup-crutch-or-feature.png"  alt="Daily Standup Crutch Or Feature" height="512" width="512" />
</p>  

# Who Writes The Stories
Traditionally, product owners are the ones writing all epics and stories. The argument is that the stories should be from
a user perspective, and list requirements. However, there is a tradeoff to this in that product owners do not understand
the development flow. They typically have a very poor understanding of the codebase in comparison to the developers.
Therefore, on our team the epics are typically written by the product owners, while the detailed stories are written by
developers. This has allowed us to provide more detailed plans and timelines on a given endgoal.

<p align="center" width="100%">
    <img src="/assets/images/story-writing.png"  alt="Story Writing" height="512" width="512" />
</p>  

# Milestones
We also tend to deliver value as incrementally as possible in terms of milestones. We determine the overall end goal, and
then think of different ways to accomplish the end goal. An analogy for this is you could often drive by car, or fly by 
plane to a given destination. There are tradeoffs to both these approaches. Likewise, we think of the various stopping points
in the development of the feature or overall goal that provides value to the user, and then deliver the value in those 
increments.

<p align="center" width="100%">
    <img src="/assets/images/another-sooner-not-faster.png"  alt="Plane or Car?" height="512" width="512" />
</p>  

# What We Don't Touch: Retros
Not everything gets bent, and retrospectives is an example of a ceremony we are doing in a very traditional manner. 
Retrospectives happen whether something happened during the sprint or not. Conflict is kind of the default expected behaviour
so it is rare that we have nothing to talk about. However, in the unlikely event everything went well, the retrospective
can be filled with praise and kudos, or reflection on what has been going well over the past several sprints.

<p align="center" width="100%">
    <img src="/assets/images/retro-every-sprint.png"  alt="Retro Every Sprint" height="512" width="512" />
</p>  

# The Guardrail Is You
Not all good ideas should be introduced to the team. I've often been in a scenario where I was presented with conflicting
opinions to my own, and rather than dig in to my arguments I had to take a step back. It's important to go with the will
of the team. If most of the team disagrees with your suggested "improvement" then it should not go through. Introducing
adjustments to Agile through the retro is a valued practice that allows for necessary adapation of the Agile Manifesto, or
XP principles.