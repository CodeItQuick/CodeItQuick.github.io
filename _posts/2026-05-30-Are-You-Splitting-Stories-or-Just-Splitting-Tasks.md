---
layout: post
name: Part 1 - Are You Splitting Stories, or Just Splitting Tasks?
description: Discussions of why story splitting does not work
image: splitting_stories_or_tasks.png
time: "6m:54s"
tags: agile all
---

<div class="w-full text-center">
    <h1>Part 1 - Are You Splitting Stories, or Just Splitting Tasks?</h1>
    <h6>(Reading Time: 4 minutes 31 seconds)</h6>
</div>

# Introduction

We are given a large task to breakdown. So we divide it into several separate tasks, and call them user stories. User stories
are frequently too large on first draft, so we have a need to split them into smaller tasks. We want to split these stories 
because large stories delay learning. The value, feedback, and decision making we get from early feedback on what we are 
build is valuable. A common failure mode is while story splitting is confusing task decomposition with value decomposition.

> **Task decomposition** is splitting work by the activities required to complete it. The work is smaller, but each step does
not necessarily produce useful work on its own.   

> **Value decomposition** is splitting work by smaller usable outcomes that 
still provide value, feedback, learning, and risk reduction. When task decomposition replaces value decomposition, the team 
may end up with smaller work items that still do not produce a usable outcome.  

I will show why task decomposition is often mistaken for story splitting, and why that mistake creates smaller tasks without 
creating smaller outcomes. We will learn to deliver the same value, but sooner.

<p align="center" width="100%">
    <img src="/assets/images/task-vs-value-decomposition.png"  alt="Task Vs Value Decomposition" height="512" width="512" />
</p>  

# Why We Split Stories

Teams split stories for many reasons: coordinating work, sequencing delivery, estimating cost, reducing risk, or enabling 
multiple people to contribute. Many scrum implementations end up centering around story estimation, splitting, and velocity 
calculations. These practices can be useful, especially when the business needs to reason about cost, delay, sequencing, 
and risk. When the business owner wants to introduce a feature that will generate so much revenue, meet some customer need, 
or create a greater product, we owe it to them to give some semblance of cost of both the feature and the cost of delay. 

But what are we really trying to achieve when we split a story? The goal is not to create smaller tasks, fill a sprint, 
or give multiple developers something to do. Those may be useful side effects, but they are not the point. The real value 
of story splitting is that it gives us a smaller outcome we can deliver, validate, or learn from. A split is useful when 
it reduces risk, creates feedback, or lets the business make a better decision sooner. A split is weak when it only says, 
“we completed step one,” but nothing usable, testable, or valuable has changed.


<p align="center" width="100%">
    <img src="/assets/images/restaurant_reviewing.png"  alt="Story Splitting Generic" height="512" width="512" />
</p>  

# An Example: Reviewing All Restaurants in Your City

Our goal is to project manage reviewing all the restaurants within our city. So we begin by asking a reviewer how long it 
will take, and they tell us 6 months. Six months is a long time to wait for feedback, so we ask whether the work can be 
split into smaller pieces. We need to know more about the inner workings of our food critique, so we ask for a task 
breakdown. Split the story. To make the example exaggerated, imagine our planning window is only 30 minutes.

So they give us roughly:

```
Title: Repeat until all 100 restaurants in town are reviewed
A. Walk to restaurant (1 hour)
B. Order food (30 minutes)
C. Eat food (30 minutes)
D. Write down their critique (30 minutes)
```

But wait, our hour estimate is outside our sprint timeframe. If we split purely by duration, we might arrive at something like this:

```
Title: Repeat until all 100 restaurants in town are reviewed
A. Walk halfway to restaurant (30 minutes)
B. Walk the other half to the restuarant (30 minutes)
B. Order food (30 minutes)
C. Eat food (30 minutes)
D. Write down their critique (30 minutes)
```

But something is off. The work is now smaller, but the outcome is not. Nothing useful has been reviewed, validated, or 
delivered. So what changed? We made the work smaller, but not the delivered outcome. Each task is split by the activities 
required to complete it. 

<p align="center" width="100%">
    <img src="/assets/images/story_splitting_generic.png"  alt="Story Splitting Generic" height="512" width="512" />
</p>  

# SPIDR Story Splitting the Restaurant Example

SPIDR gives us a different way to look at the same problem. What we want is smaller vertical slices that still 
produce a usable outcome. The SPIDR framework adds a helpful framing for story splitting:  

SPIDR gives us several ways to look for smaller outcomes:  

```
Split By Spike: How many restaurants are in the area?
Split By Data Subset: Review just the Top 5 Restaurants   
Split By Workflow Path: Review the restaurants with Yelp
Split By Interface: The reviewer uses Yelp/Google reviews
Split By Interface: Physically reviews only selected restaurants.  
Split By Business Rules: Start with a 1-5 overall score rating
Split By Business Rules: Add category score ratings  
```

To bring it all together, to split by the various mechanisms for a story:  

```
A. (Spike) Discover all the restaurants in my area  
B. (Workflow Path) Collect public data on all the restaurants
C. (Interface) Deeply review (Data Subset) the top restaurants 
D. (Spike) What is important to getting a high critic score?  
```

<p align="center" width="100%">
    <img src="/assets/images/bigger-steps-smaller-outcome.png"  alt="Smaller Outcomes" height="512" width="512" />
</p>  

# Conclusion

By changing how we think about the problem, and how we ship the solution, we have added value to the process. We have 
rethought our approach, and can ship with confidence knowing we can deliver the most useful version of the customer need 
within the time available. Previously, we had made the activities smaller without making the outcome smaller. By changing 
how it ships, we make partial value possible. The owner no longer has to choose between the entire project or nothing; 
they can choose the most useful outcome for the time available.

