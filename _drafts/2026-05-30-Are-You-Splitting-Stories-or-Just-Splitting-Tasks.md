---
layout: post
name: Are You Splitting Stories, or Just Splitting Tasks?
description: Discussions of why story splitting does not work
image: spartan_zombie.webp
time: "9m:00s"
tags: quality all
---

# Are You Splitting Stories, or Just Splitting Tasks?

The common failure mode is not story splitting itself. It is confusing task decomposition with value slicing.

**Task decomposition** is splitting work by the activities required to complete it. The work is smaller, but each step does
not necessarily produce useful work on its own. **Value decomposition** is splitting work by smaller usable outcomes that 
still provide value, feedback, learning, and risk reduction. When task decomposition replaces value decomposition, the team 
may end up with smaller work items that still do not produce a usable outcome.

I will show why task decomposition is often mistaken for story splitting, and why that mistake creates smaller tasks without 
creating smaller outcomes.

# Why we split stories

The goal could be multi-tasking (giving multiple developers tasks), project coordination, shotgunning a feature, or just 
estimating costs. Many scrum implementations end up centering around story estimation, splitting, and velocity calculations.
These practices can be useful, especially when the business needs to reason about cost, delay, sequencing, and risk. When 
the business owner wants to introduce a feature that will generate so much revenue, meet some customer need, or create a 
greater product, we owe it to them to give some semblance of cost of both the feature and the cost of delay. 

But what are we really trying to achieve when we split a story? The goal is not merely to create smaller tasks, fill a 
sprint, or give multiple developers something to do. Those may be useful side effects, but they are not the point. The 
real value of story splitting is that it gives us a smaller outcome we can deliver, validate, or learn from. A split is 
useful when it reduces risk, creates feedback, or lets the business make a better decision sooner. A split is weak when 
it only says, “we completed step one,” but nothing usable, testable, or valuable has changed.

# An Example: Reviewing All Restaurants in Your City

Our goal is to project manage reviewing all the restaurants within our city. So we begin by asking a review how long it 
will take, and they tell us 6 months. Six months is a long time to wait for feedback, so we ask whether the work can be 
split into smaller pieces.. We need to know more about the inner workings of our food critique, so we ask for a task 
breakdown. Split the story. We give them a sprint timeframe of 30 minutes.

So they give us roughly:

```
Title: Repeat until all 100 restaurants in town are reviewed
A. Walk to restaurant (1 hour)
B. Order food (30 minutes)
C. Eat food (30 minutes)
D. Write down their critique into a piece of paper and send it to the owner (us) (30 minutes)
```

But wait, our 1 hour estimate is outside our sprint timeframe. If we split purely by duration, we might arrive at something like this:

```
Title: Repeat until all 100 restaurants in town are reviewed
A. Walk halfway to restaurant (30 minutes)
B. Walk the other half to the restuarant (30 minutes)
B. Order food (30 minutes)
C. Eat food (30 minutes)
D. Write down their critique into a piece of paper and send it to the owner (us) (30 minutes)
```

But something is off. The work is now smaller, but the outcome is not. Nothing useful has been reviewed, validated, or delivered.

Ultimately, we have split the story by task decomposition rather than value decomposition. Each task is split by the activities
required to complete it. 

# SPIDR Story Splitting the Restaurant Example

We will now attempt to split the stories by a value decomposition method using the SPIDR framework. What we actually want 
is smaller vertical slices that still produce a usable outcome. The SPIDR framework adds a helpful framing for story splitting:  

SPIDR gives us several ways to look for smaller outcomes:  

Split By Spike: How many restaurants are actually in the area? How many public data sources are available?  
Split By Data Subset: Review just the Top 5 Restaurants   
Split By Workflow Path: Review the restaurants with public-review research only (eg: Yelp, etc.)  
Split By Interface: The reviewer uses Yelp/Google reviews first, then physically reviews only selected restaurants.  
Split By Business Rules: Start with a 1-5 overall score rating, then later add category score ratings  

To bring it all together, to split by the various mechanisms for a story:  

A. (Spike) Discover all the restaurants in my area  
B. (Workflow Path) Collect public data on all the restaurants in my area/Lightly review all restaurants and use (Business Rules) 1-5 score ratings  
C. (Interface) Deeply review (Data Subset) the top restaurants and use (Business Rules) category score ratings  
D. (Spike) Synthesize the Report: What is important to getting a high critic score?  

# Conclusion

By changing how we think about the problem, and how we ship the solution, we have added value to the process. We have rethought
our approach, and can now ship with confidence knowing we can now deliver the most useful version of the customer need within
the time available. Previously with story splitting we were merely taking reviewing all the restaurants in town and 
micromanaging our poor reviewer. By changing how it ships, we've taken what would originally have taken years, and shortened 
it down to whatever time the owner is willing to put into the project.

