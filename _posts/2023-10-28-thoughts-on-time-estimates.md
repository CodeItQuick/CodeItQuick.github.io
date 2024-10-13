---
layout: post
name: Thoughts on Project and Task Estimation
description: Exploring ideas within project and task estimation for development  
image: story_splitting_zombies.png
tags: agile all
---

# Outline
1. The Problems Inherent With Time Estimation
2. Why Estimate?
3. Kinds of Estimation
4. 


# Methods of Estimation

## Introduction

We'll first talk about general problems with estimation. Since there will always be someone in the organization (frequently a
business person, or someone who has to pay for the work), estimation will likely exist for quite some time. Let's first discuss
some downfalls of estimation.

## Garbage In Garbage Out

The underlying problem for developers posed by "lets do estimation", or trying to record a length/complexity of time for a task,
is that their tasks are not easy to estimate. 

What makes a task easy to estimate? It's tasks that fit on the following dimensions

1. **Repetitive or Routine Tasks**  
   Two tasks in development could even look the same to an outside observer, and be entirely different.
2. **Well-Defined Tasks**  
   There are "no well-defined tasks" in development. In fact, a common mistake by a junior developer is to say "it will be easy", or "its just".
3. **Small, Independent Tasks**  
   In development there are so many unknown dependencies that unit testing/regression testing is extremely helpful. Regression
   testing allows us to make sure our codebase doesn't take a step back when making a change.
4. **Tasks with Established Patterns or Templates**  
   There may be patterns in the code, but more often times the patterns are very loosely defined.
5. **Tasks with High Historical Data**  
   Each task in development is unique, so there are no historical information on the task.
6. **Low Complexity Tasks**  
   There are also no low complexity or easy tasks. See the earlier note. Calling a task "low complexity" is a negative free-roll.
   You are either right, and people are happy you finish the task on time, or it is a complex task, and you are way later. Therefore,
   it's much smarter to severally sandbag the tasks.
7. **Tasks with Limited Dependencies**  
   There could be limited dependencies, but there are *often* unknown dependencies, which is even worse.
8. **Well-Documented and Standardized Tasks**  
   The tasks could be well documented, and you could even invest more time into documentation. But they are never standardized,
   and making standard operating procedures (SOPs) would be a major antipattern for development as none of the tasks are
   routine enough.

What makes a task hard to estimate? 

1. Novel or Innovative Tasks
2. Complex and Multifaceted Tasks
3. Tasks with High Uncertainty or Risk
4. Tasks Dependent on External Factors
5. Poorly Defined or Ambiguous Tasks
6. Tasks with High Collaboration Needs
7. Tasks Involving Significant Learning Or Exploration
8. Tasks with Dynamic or Changing Requirements
9. Creative or Design-Oriented Tasks

In short form, we can answer "yes" to all the above. Development tasks readily fit into the buckets we don't want for
estimating something.

# Why continue to try to estimate these tasks?

There is an obvious counter-point here. If you know exactly how long a task is going to take, why estimate it at all?
You could just give the person the task, and come back however many days needed later to pick-up the item.

What is the purpose of estimating? Estimating time for tasks fits into the following categories. These initial four 
I saw the value immediately.

1. **Customer Satisfaction**:   
   Being able to deliver features on time and within scope on a small feature basis is valuable.
2. **Goal Setting**:  
   Setting goals as a developer can be helpful for staying motivated.
3. **Risk Management**:  
   Managing the scope and how of the task is necessary to not overrun on either scope or time.
4. **Managing Expectations**:  
   Tempering the team leads expectations with the task is important and a continual battle.

These four items I think takes a bit more convincing that it's a benefit of estimating developer tasks.

6. **Planning and Scheduling**:  
   While agile methodologies emphasize flexibility and adaptability, planning and scheduling are still essential.
   Time estimation provide a framework to balance these needs.
7. **Improving Efficiency**:   
   Time estimation can drive continuous improvement in efficiency by providing data for analysis and reflection.
8. **Resource Allocation**:  
   Time estimates can guide effective resource allocation by providing a clear picture of workload distribution.
9. **Progress Tracking**:    
   Time estimation are fundamental to tracking progress in a structured manner.

# The Solution: Longer Term Soft Deadlines

I believe estimation at the task level is asking for trouble. It can lead to micromanagement, and a level of perceived
detail that does not exist. There are other options in project estimation, including hard deadlines and soft deadlines.
The option I've seen most commonly in contracting, or solo development are soft deadlines. I'll get this to you in 2-3
months, and if it's late by a week or two that's ok. I think budgeting is another valid approach to the problem. Decide
how much time you can afford to spend on a problem, then invest that time and see what happens. Make each new decision
of time investment at successive intervals.


