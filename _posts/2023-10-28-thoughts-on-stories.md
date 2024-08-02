---
layout: post
name: Thoughts on Stories
description: In my blog article on agile story splitting, I explained how to break down large user stories into smaller, manageable pieces to fit within a single sprint.  
image: story_splitting_zombies.png
tags: agile all
---

# Story Splitting

The concept of story splitting is simple enough. Your engineering manager wants you to go "faster"; really what he's asking
for is more story points per sprint. The way to achieve this isn't actually to "code faster", since we're limited in how
fast we code by a multitude of things. The real answer is to give your manager more insight into what you're doing at any
given point in time. This is achieved by taking your current work and splitting it into more bite-sized chunks that are
easily digestible. Yum. But how do you accomplish this?

After trying to split stories for about a year and a half seriously now, and very much failing. I had a kind of "AHA!" or
Eureka! moment. What if I actually just treated every story given to me as an "epic"? Really, the tasks/stories given to me
are just functionality we need added to the website, in one way or another. They typically last 1->6 months (in the worst cases).
So in the extreme cases they actually _are_ epics lasting 6 months, and in the short-case they are still not what's thought of as
"thin vertical slices".

So after my big aha, I put the task I'm given at the "design" phase, and then start splitting off stories on what I'm pull
requesting into the codebase. The other big "aha!" moment immediately after this - just because I PR something into the 
codebase doesn't mean the actual _behaviour_ of the codebase has to change. Really I've just made a stepwise change 
that improves something, adds a feature, or the ability to add a feature. My current task is to get rid of some large methods
on an even larger class. I start making each move of a large method a PR, and thus it is also a story on my board. Whether
its separating domain logic from database logic, or figuring out where that gnarly utility method _actually_ belongs and moving 
it, they are all stories.

The jury is still out on my story-splitting experiment. I plan on creating new stories for the next week, until either the
sprint retrospective on Wednesday, or my Engineering Manager 1-on-1 on Thursday. I want to see how it pans out - is this 
actually a useful exercise? Or a total waste of time and purely a thought experiment? I don't really know, but hopefully 
I remember to update this blog when I find out.
  
# Story Pointing - Evil or Not

# Argument Outline

For those that would prefer a TLDR; in code form

```js
    function GarbageInGarbageOut() {
        // definitions
        const developmentEstimation = "hard";
        const storypointing = "estimation";
        // logic
        if (storypointing == estimation && 
            developmentEstimation !== "easy" && 
            developmentEstimation === "hard") {
            return true;
        } else {
            return false;
        }
    }
```

# Note

I actually have to re-read this article, in light of my above logic. Writing out the argument in code allowed me to
see flaws in the arguments. This article is currently a WIP until I remove this note and flush out my thoughts more.

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
   Story pointing and time estimation provide a framework to balance these needs.
7. **Improving Efficiency**:   
   Story pointing and time estimation can drive continuous improvement in efficiency by providing data for analysis and reflection.
8. **Resource Allocation**:  
   Story points and time estimates can guide effective resource allocation by providing a clear picture of workload distribution.
9. **Progress Tracking**:    
   Story pointing and time estimation are fundamental to tracking progress in a structured manner.

# The value proposition of project management

The value proposition of project management lies in its ability to systematically plan, execute, and complete projects efficiently and effectively. Here are the key components of this value proposition:

1. Improved Planning and Organization
2. Enhanced Resource Management
3. Risk Mitigation
4. Improved Communication and Collaboration
5. Higher Quality Deliverables
6. Better Time Management
7. Cost Control
8. Continuous Improvement
9. Stakeholder Satisfaction

The value proposition of project management is its ability to deliver projects successfully by enhancing planning, resource management, risk mitigation, communication, quality, time management, cost control, continuous improvement, and stakeholder satisfaction. This comprehensive approach ensures that projects are completed efficiently, effectively, and to the satisfaction of all parties involved.

Why track a Say/Do Ratio? What's the point?
=========

The say do ratio is used to prevent spillover from stories/tasks in a single sprint. Its a ratio that
is meant to drive splitting stories or working in smaller incremental values.

Definitions
-----------
User Story: A single chunk of work that is scoped down to the minimum possible increment that STILL has meaning to the user.
Example: If you are clicking a button and that triggers 10 microservices in the backend, the smallest unit of work is the button click
and whatever behaviour changes in reference to the user afterwards (Perhaps an email gets sent).

Technical Task: A single chunk of work divided from a user story that still delivers an incremental piece of value that still has meaning to a developer.
Example: If you are clicking a button and that triggers 10 microservices that are all in separate repositories, the incremental value unit will be at
least as big as 10 pull requests into each microservice (assuming these are separated).

Say/Do Ratio: A ratio made in an effort to size down or further split a unit of work - this could either be a User Story or a Technical Task. Story points
are supposed to be used to get the units. These should be "committed" status stories only in the numerator, and I believe all stories are the denominator.

Examples - User Stories:
Sprint Results 01/01/2024 (2 week increment):
* User Story 1 (13 points): Spills Over
* User Story 2 (8 points): Completed
* User Story 3 (5 points): Completed  
  Say Do Ratio: (5 points + 8 points) / (5 + 8 + 13) points = 50%

Examples - Technical Tasks:  
Sprint Results 01/01/2024 (2 week increment):
* User Story 1 (8 points): Spills Over
* User Story 2 (5 points): Completed
* User Story 3 (3 points): Completed  
  Say Do Ratio: (5 points + 3 points) / (5 points + 3 points + 8 points) = 50%

Observations
------------
1. User Stories are larger than technical tasks essentially by definition.
2. The largest technical task would be exactly equal to the user story.
3. User Stories are significantly harder to scope down without paying down technical debt in advance.
4. Technical Tasks almost always have further divisions that may not be useful, but can be made.
5. User Stories will have a single unit of work that is the minimum acceptable by product/sales,
   and it will be extremely difficult to scope down after that point.
6. User stories have direct value to the customer
7. Technical tasks are only value to the customer if treated in their groupings (user stories)
