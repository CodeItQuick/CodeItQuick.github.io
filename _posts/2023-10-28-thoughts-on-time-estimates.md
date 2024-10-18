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
There are several aspects of developer tasks that are beyond our control, including whether they have high historical 
data, are repetitive or routine, have low complexity, or are standardized. Tasks with high historical data provide 
insights based on previous experiences, but we cannot manufacture such history if it doesn't exist. Similarly, whether a 
task is repetitive or routine depends on the nature of the work itself, as some projects inherently involve novelty or 
one-off challenges. The complexity of a task is also often dictated by the problem being solved, and while we can strive 
to simplify processes, some tasks will remain complex by their very nature. Lastly, standardization depends on the 
maturity of the processes in place—some tasks may be too unique or exploratory to fit into standardized frameworks. 
These factors, while helpful when present, cannot always be engineered or influenced by the team.

To increase the likelihood of task completion, it is important to strive for certain qualities. Limiting dependencies 
helps prevent bottlenecks and delays caused by waiting on others. Well-documented tasks ensure clarity, reducing the 
need for back-and-forth communication and minimizing misunderstandings. Established patterns or templates streamline 
work by providing proven solutions, saving time and effort. Keeping tasks small and independent makes them more manageable 
and easier to track, while well-defined tasks with clear objectives reduce ambiguity, ensuring the team understands what 
needs to be done from the outset. These practices together create a smoother workflow and improve the chances of tasks 
being completed on time.

Certain factors can make tasks more difficult, and reducing these challenges increases the likelihood of success. Tasks 
that are complex and multifaceted require more effort to manage and execute, while novel or innovative work introduces 
uncertainty since there are no precedents to follow. High collaboration needs can slow progress due to coordination 
challenges, and tasks involving significant learning or exploration demand extra time for research and upskilling. 
Dynamic or changing requirements can lead to rework, while creative or design-oriented tasks often require iterative 
processes that are hard to predict. Poorly defined or ambiguous tasks create confusion and delays, and those dependent 
on external factors introduce risks beyond the team’s control. Tasks with high uncertainty or risk can also stall progress, 
making it harder to estimate timelines or plan effectively. Addressing these difficulties helps streamline the workflow 
and improves the chances of successful task completion.

## 4. It's not the estimates we want - it's the discussion

What are some positives that we get out of estimation beyond the forecasting?

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

## Overall

As a previous business analyst, it became apparent fairly often my measurements were more about the discussion than the
numbers.
