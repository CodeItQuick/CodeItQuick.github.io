---
layout: post
name: Thoughts on Project and Task Estimation
description: Exploring ideas within project and task estimation for development  
image: story_splitting_zombies.png
tags: agile all
---

# Methods of Estimation

## 1. Introduction
We'll first talk about general problems with estimation. Since there will always be someone in the organization looking
to figure out costs, or when a feature will get in the hands of a customer, estimation will likely exist for quite some 
time. Let's first discuss some downfalls of estimation.

## 2. Undelivered Promises
My biggest criticism of story pointing in particular is with undelivered promises. The pro-storypointers tend to pitch you
on theory, and not the reality of the implementation. We'll make burndown charts of our velocity, figure out deadlines months
in advance, and be able to predict the future! Unfortunately I haven't seen anything further from the truth in their implementation.
I've never seen a meaningful velocity calculated, seen accurate points estimates given in terms of complexity, or been able
to guess how much work the group can do due to the story points alone. This last point, each engineer can somewhat guess
the work they are willing to take on, there are no pointing needed for that task.

A quick list of all the undelivered promises for story pointing in my view:
1. **Promotes Consistency in Delivery**:  
   The work has no consistency, how can its delivery therefore have consistency?
2. **Facilitates Continuous Improvement**:  
   I've seen way more dysfunction than improvement from them
3. **Neutralizes Time-Based Pressure**:  
   Because measuring in complexity takes the pressure off? I think not.
4. **Promotes Fair Workload Distribution**:   
   Everyone is different, their workloads will be different. Also, story points doesn't solve this.
5. **Improves Sprint Planning and Forecasting**:   
   Never even seen it attempted; The storypointing I've seen has been so far from this ideal it's a major complaint of mine
6. **Promotes Team Autonomy and Self Organization**:   
   This is a product of good communication on the development team.

## 3. Managing Estimation and Task Risk
These are things we cannot control about developer tasks.

* High Historical Data  
* Repetitive or Routine   
* Low Complexity 
* Standardized

These are within our control to limit within a developer task.

* Limited Dependencies  
* Well-Documented   
* Established Patterns or Templates  
* Small, Independent   
* Well-Defined   

What makes tasks difficult

* Complex and Multifaceted 
* Novel or Innovative 
* High Collaboration Needs
* Involving Significant Learning Or Exploration
* Dynamic or Changing Requirements
* Creative or Design-Oriented 
* Poorly Defined or Ambiguous 
* Dependent on External Factors
* High Uncertainty or Risk

In short form, we can answer "yes" to all the above. Development tasks readily fit into the buckets we don't want for
estimating something.

## 4. It's not the estimates we want - it's the discussion

As a previous business analyst, it became apparent fairly often my measurements were more about the discussion than the
numbers.

### 4a. Encourages Team Collaboration and Shared Understanding
The act of story-pointing has resulted in product discussion with developers about general scope and what they want to
accomplish from a requirements point of view. I think these processes cannot easily be replaced, but the acceptance testing
philosophy of defining requirements with tests could be one replacement. I don't think story points need to be the main
output, but if they cause these discussions to happen that's probably a good thing.

### 4b. Identifies Risks and Unknowns Early
Identifying risks upfront or as early as possible is important. Funny enough, XP and scrum I think somewhat disagree on
requirements gathering. XP believes requirements are more incremental, whereas scrum believes a large part of these can
be determined beforehand. From what I've seen the latter is a bit of a pipe dream, but still the truth lies somewhere in
the middle of these two statements.

### 4c. Helps Manage Scope Creep
Scope in general is something I've been thinking of more lately. How do we properly identify all parts of this epic,
story, or ticket, so we don't end up in the trap of ever expanding scope creep. I've been the guy that picked up "just one task"
from the backlog only to discover it's a significant amount of work to implement in every library that requires the change.
I've seen overruns in general features countless times as well, but honestly the root cause of those overruns is not believing
the engineers when they give their honest estimate. Or perhaps not being willing to accept the answer.

Development is a lot about getting a solution into the hands of a customer, so the customer can tell you what they don't
like about the solution, and you can build on-top of that.
