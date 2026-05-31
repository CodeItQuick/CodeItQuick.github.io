---
layout: post
name: Stop Story Splitting By Task Decomposition
description: Discussions of why story splitting does not work
image: spartan_zombie.webp
time: "9m:00s"
tags: quality all
---

# Stop Story Splitting By Task Decomposition

The common failure mode of story splitting by task decomposition is a common failure mode of agile methodology. 

In this article I will illustrate why story splitting by task decomposition is oversimplified and not helpful. I will 
show how to implement the SPIDR framework on effective story splitting.

# The Purpose of Story Splitting

Why do we split the story? The goal could be multi-tasking (giving multiple developers tasks), project coordination, shotgunning
a feature, or just estimating costs. At the core of scrum, and agile seems to be this philosophy around story estimation, splitting,
and velocity calculations. And sure, they do have meaning. When the business owner wants to introduce a feature that will generate
so much revenue, meet some customer need, or create a greater product, we owe it to him to give some semblance of cost of both the
feature and the cost of delay. 

# The Reason for Story Splitting

But what are we really trying to achieve with this exercise? Is it actually helpful to take one large task and split it into
two smaller tasks? What have we gained? Well we've really only gained something if task A can suddenly be done by developer A,
and task B can be done by developer B in parallel. We've also gained something if the tasks are done in sequence, because all the sudden
blocking task A can go into sprint 1, and our unblock task B can go into sprint 2. So whether it's a parallelize or serializable
task, we have gained something. We also gain something by de-risking the epic/story. It is better to implement a 2-day story and change
direction over a 2-week story.

What if task A has no relation to a PR going into the codebase? So in the serialization example we've merely communicated "Oh I completed x thing",
but no code has been changed. No value has been inherently delivered until Task B is completed.

# A Metaphor: Reviewing All Restaurants in Your City

Let's use a metaphor now, rather than these abstract task A, task B. Our goal is to project manage reviewing all of the
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
B. (Workflow Path) Collect public data on all the restaurants in my area/Lightly review all restaurants and use 1-5 score ratings (Business Rules)
C. (Interface) Deeply review (Business Rules) the top restaurants (Data Subset) and use category score ratings (Business Rules)
D. (Spike) Synthesize the Report: What is important to getting a high critic score?

# Conclusion

By changing how we think about the problem, and how we ship the solution, we have added value to the process. We have rethought
our approach, and can now ship with confidence knowing we will complete our customer need in the allotted time. Previously with
story splitting we were merely taking reviewing all the restaurants in town and micromanaging our poor reviewer. By changing
how it ships, we've taken what would originally have taken years, and shortened it down to whatever time the owner is willing
to put into the project.

