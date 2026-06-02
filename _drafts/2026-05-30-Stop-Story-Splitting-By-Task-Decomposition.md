---
layout: post
name: Stop Story Splitting By Task Decomposition
description: Discussions of why story splitting does not work
image: spartan_zombie.webp
time: "9m:00s"
tags: quality all
---

# Stop Story Splitting By Task Decomposition

The common failure mode is not story splitting itself. It is confusing task decomposition with value slicing.

In this article I will illustrate why story splitting by task decomposition is oversimplified and not helpful. I will 
show how to implement the SPIDR framework on effective story splitting.

# Why we split stories

The goal could be multi-tasking (giving multiple developers tasks), project coordination, shotgunning a feature, or just 
estimating costs. At the core of scrum, and agile seems to be this philosophy around story estimation, splitting,
and velocity calculations. And sure, they do have meaning. When the business owner wants to introduce a feature that will generate
so much revenue, meet some customer need, or create a greater product, we owe it to them to give some semblance of cost of both the
feature and the cost of delay. 

But what are we really trying to achieve when we split a story? The goal is not merely to create smaller tasks, fill a 
sprint, or give multiple developers something to do. Those may be useful side effects, but they are not the point. The 
real value of story splitting is that it gives us a smaller outcome we can deliver, validate, or learn from. A split is 
useful when it reduces risk, creates feedback, or lets the business make a better decision sooner. A split is weak when 
it only says, “we completed step one,” but nothing usable, testable, or valuable has changed.

What if task A has no relation to a PR going into the codebase? So in the serialization example we've merely communicated "Oh I completed x thing",
but no code has been changed. No value has been inherently delivered until Task B is completed.

# An Example: Reviewing All Restaurants in Your City

Let's use a metaphor now, rather than these abstract task A, task B. Our goal is to project manage reviewing all the
restaurants within our city. So we begin by asking a review how long it will take, and they tell us 6 months. We think this
isn't good enough, 6 months is too much cost. We need to know more about the inner workings of our food critique, so we
ask for a task breakdown. Split the story. We give them a sprint timeframe of 30 minutes.

So they give us roughly:

```
Title: Repeat until all 100 restaurants in town are reviewed
A. Walk to restaurant (1 hour)
B. Order food (30 minutes)
C. Eat food (30 minutes)
D. Write down their critique into a piece of paper and send it to the owner (us) (30 minutes)
```

But wait, our 1 hour estimate is outside our sprint timeframe. So we must split the walk to a restaurant story into:


```
Title: Repeat until all 100 restaurants in town are reviewed
A. Walk halfway to restaurant (30 minutes)
B. Walk the other half to the restuarant (30 minutes)
B. Order food (30 minutes)
C. Eat food (30 minutes)
D. Write down their critique into a piece of paper and send it to the owner (us) (30 minutes)
```

But something is off. Our loyal food critic feels micromanaged, unheard, and like an order taker. But what have we done wrong?

# SPIDR Story Splitting the Restaurant Example

The previous story split was by task composition. What we actually want is smaller vertical slices that still produce a 
usable outcome. The SPIDR framework adds a helpful framing for story splitting:  

Now to expand this to all the acronym title's of story splitting:  

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
our approach, and can now ship with confidence knowing we will complete our customer need in the allotted time. Previously with
story splitting we were merely taking reviewing all the restaurants in town and micromanaging our poor reviewer. By changing
how it ships, we've taken what would originally have taken years, and shortened it down to whatever time the owner is willing
to put into the project.

