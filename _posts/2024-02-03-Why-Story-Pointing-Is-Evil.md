---
layout: post  
name: Why Story Pointing Is Evil  
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

# Why Story Pointing Is Evil

## Introduction & Problem Statement
One of the problems with talking about story pointing, is that it's very much two points of opposing views with no clear "right" answer. 
I also cannot think of any science that would show they are either "good" or "bad". All the same I'm going to attempt to bring you to my point
of view. Not only are story points not useful, they downright contribute to a toxic work environment.

At the core I very much think its garbage in and garbage out. I cannot estimate even my nearest task, and asking me to estimate tasks that I haven't looked at/etc. are even less accurate. 
I've also done pointing poker. Maybe you can rate stories against each other, but I very much have my doubts. If the underlying problem is if you give me a task, and I cannot tell you how 
long or difficult it is (really you want how long, and hide it with "complexity"), then there is no activity that makes it more accurate.

I think to the manager you are doing something like  
1. A takes 3 days
2. B takes 3 days
3. C takes 3 days

Therefore, we will be done in 9 days. However, from my point of view all of these estimates are wildly wrong. So I don't see what you get out of me going "this will take 3 days", and you get 
even less adding the values -> you are just summing 3 values that are essentially made up.

It also sets up a weird game that the developer all of a sudden has a self-interest in playing. 
Pretend that the developer believes the above estimates are accurate. It's in his best interests to tell management    
1. A takes 5 days  
2. B takes 5 days  
3. C takes 5 days  

All of a sudden the manager thinks there's 15 days of work. However, if I go and do the work in the 9 days I think it'll take, I'm a "hero".
There's also a math problem going on here, say in the best case I'm 90% likely to hit my estimate. Then for three tasks
the likelihood I'm collectively "correct" in estimating is 90% * 90% * 90% = 72.9%. I'll be wrong 1/3 of the time, which in
real-time will be much too high.

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
estimating something, so why continue to try to estimate these tasks?
