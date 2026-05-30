---
layout: post
name: Actually, You Cannot Split The Story
description: Discussions of why story splitting does not work
image: spartan_zombie.webp
time: "9m:00s"
tags: quality all
---

# Actually, Stop Story Splitting, For the Health of the Project

Stop the story splitting, immediately. Yes, you are doing it in good faith. And yes, sometimes it even "works". The problem
is your focusing on the wrong thing, and bringing dysfunction to your team. 

In this article I will illustrate why story splitting is a waste of time, while changing how the feature ships to production
is a meaningful reframe.

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
task, we have gained something.

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

# Introducing Changing How It Ships

Well, now we rethink how we operate. Rather than story splitting, we are going to change how it ships. The main offender:
Walk to a restaurant (1 hour) will first be tackled. What if you drove? So now our task list is:

```
Title: Repeat until all 100 restaurants in town are reviewed
A. Drive to restaurant (15 minutes)
B. Order food (30 minutes)
C. Eat food (30 minutes)
D. Write down their critique into a piece of paper and send it to the owner (us) (30 minutes)
```

Whew, everything is in one sprint now. Well that's refreshing. However, we have to review all 100 restaurants in town, our epic 
is huge! We never did look at the bigger picture. What if we rethought-again the task at the epic level?

```
A. Spike: Discover how many restaurants are in town, and review method
B. Check Yelp for all of the restaurants reviews, find the top 10
C. For the top 10 of restaurants, complete a detailed review
```

Once our spike is done, B and C can be done in parallel. If there are only 15 restaurants in town, maybe we want to review
all of them? While if there's 3000, maybe we only both to review the top 5?

# Conclusion

By changing how we think about the problem, and how we ship the solution, we have added value to the process. We have rethought
our approach, and can now ship with confidence knowing we will complete our customer need in the allotted time. Previously with
story splitting we were merely taking reviewing all the restaurants in town and micromanaging our poor reviewer. By changing
how it ships, we've taken what would originally have taken years, and shortened it down to whatever time the owner is willing
to put into the project.

