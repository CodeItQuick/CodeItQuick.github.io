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

## 2. The Estimation Inputs - Are they reliable?
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

## 3. It's not the metrics we want - it's the discussion

As a previous business analyst, it became apparent fairly often my measurements were more about the discussion than the
numbers. 

### 3a. Encourages Team Collaboration and Shared Understanding
The act of story-pointing has resulted in product discussion with developers about general scope and what they want to
accomplish from a requirements point of view. I think these processes cannot easily be replaced, but the acceptance testing
philosophy of defining requirements with tests could be one replacement. I don't think story points need to be the main
output, but if they cause these discussions to happen that's probably a good thing.

### 3b. Identifies Risks and Unknowns Early
Identifying risks upfront or as early as possible is important. Funny enough, XP and scrum I think somewhat disagree on
requirements gathering. XP believes requirements are more incremental, whereas scrum believes a large part of these can
be determined beforehand. From what I've seen the latter is a bit of a pipe dream, but still the truth lies somewhere in
the middle of these two statements.

### 3c. Helps Manage Scope Creep
Scope in general is something I've been thinking of more lately. How do we properly identify all parts of this epic,
story, or ticket, so we don't end up in the trap of ever expanding scope creep. I've been the guy that picked up "just one task"
from the backlog only to discover it's a significant amount of work to implement in every library that requires the change.
I've seen overruns in general features countless times as well, but honestly the root cause of those overruns is not believing
the engineers when they give their honest estimate. Or perhaps not being willing to accept the answer.

## 4. Undelivered Promises
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

## 5. The Unavoidable: Longer Term Soft Deadlines
I believe estimation at the task level is asking for trouble. It can lead to micromanagement, and a level of perceived
detail that does not exist. There are other options in project estimation, including hard deadlines and soft deadlines.
The option I've seen most commonly in contracting, or solo development are soft deadlines. I'll get this to you in 2-3
months, and if it's late by a week or two that's ok. I think budgeting is another valid approach to the problem. Decide
how much time you can afford to spend on a problem, then invest that time and see what happens. Make each new decision
of time investment at successive intervals.  

Development is a lot about getting a solution into the hands of a customer, so the customer can tell you what they don't
like about the solution, and you can build on-top of that.
