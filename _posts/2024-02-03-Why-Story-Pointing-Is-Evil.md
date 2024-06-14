---
layout: post  
name: Story Pointing - Evil or Not
description: The article argues that story pointing is inherently flawed and contributes to a toxic work environment. Estimating tasks accurately is challenging, and developers may sandbag estimates to appear more productive, leading to distrust and conflict with management.  
image: evil_devil_zombie_graveyard.webp  
tags: agile all
---

# Argument Outline

For those that would prefer a TLDR; in code form  

```js
    function GarbageInGarbageOut() {
        // definitions
        const developmentEstimation = "hard";
        const storypointing = "estimation";
        // logic
        if (storypointing == estimation && developmentEstimation !== "easy" && developmentEstimation === "hard") {
            return true;
        } else {
            return false;
        }
    }
```

# Note

I actually have to re-read this article, in light of my above logic. Writing out the argument in code allowed me to
see flaws in the arguments.

# Story Pointing - Evil or Not

## Garbage in Garbage Out

The underlying problem for developers posed by "lets do story-pointing", or trying to record a length/complexity of time for a task, 
is that their tasks are not easy to estimate. In fact, they fit what ChatGPT defines as a poor tasks to estimate.

What makes a task easy to estimate? It's tasks that fit on the following dimensions

1. Repetitive or Routine Tasks  
Two tasks in development could even look the same to an outside observer, and be entirely different.  
2. Well-Defined Tasks  
There are "no well-defined tasks" in development. In fact, a common mistake by a junior developer is to say "it will be easy", or "its just".  
3. Small, Independent Tasks  
In development there are so many unknown dependencies that unit testing/regression testing is extremely helpful. Regression
testing allows us to make sure our codebase doesn't take a step back when making a change.  
4. Tasks with Established Patterns or Templates  
There may be patterns in the code, but more often times the patterns are very loosely defined.  
5. Tasks with High Historical Data  
Each task in development is unique, so there are no historical information on the task.  
6. Low Complexity Tasks  
There are also no low complexity or easy tasks. See the earlier note. Calling a task "low complexity" is a negative free-roll.
You are either right, and people are happy you finish the task on time, or it is a complex task, and you are way later. Therefore,
it's much smarter to severally sandbag the tasks.  
7. Tasks with Limited Dependencies  
There could be limited dependencies, but there are *often* unknown dependencies, which is even worse.  
8. Well-Documented and Standardized Tasks  
The tasks could be well documented, and you could even invest more time into documentation. But they are never standardized,
and making standard operating procedures (SOPs) would be a major antipattern for development as none of the tasks are
routine enough.  

What makes a task hard to estimate? ChatGPT rates it difficult if it falls into the following dimensions

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

What is the purpose of estimating? Estimating time for tasks fits into the following categories. These initial four I saw
the value immediately.
**Effective Project Management Items**    
Definition: All these elements are essential components of effective project management, aimed at delivering successful outcomes in a structured and predictable manner.    
5. **Customer Satisfaction**:   
Being able to deliver features on time and within scope on a small feature basis is valuable.  
6. **Goal Setting**:  
Setting goals as a developer can be helpful for staying motivated.  
7. **Risk Management**:  
Managing the scope and how of the task is necessary to not overrun on either scope or time.  
8. **Managing Expectations**:  
Tempering the team leads expectations with the task is important and a continual battle.  

**Operational Efficiency Items (I'm not sold on these)**  
Definition: All these elements are crucial for maintaining and enhancing operational efficiency, ensuring that tasks are completed in the most effective and productive manner possible.  
1. **Planning and Scheduling**:  
   While agile methodologies emphasize flexibility and adaptability, planning and scheduling are still essential. 
Story pointing and time estimation provide a framework to balance these needs.
2. **Improving Efficiency**:   
   Story pointing and time estimation can drive continuous improvement in efficiency by providing data for analysis and reflection.
3. **Resource Allocation**:  
   Story points and time estimates can guide effective resource allocation by providing a clear picture of workload distribution.
4. **Progress Tracking**:    
   Story pointing and time estimation are fundamental to tracking progress in a structured manner.

