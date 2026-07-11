---
layout: post
name: Part 3 - What Splitting a Story Actually Requires
description: How to split stories, and what to call the meeting it's done in
image: story_splitting_generic.png
time: "3m:20s"
tags: agile all
---

<div class="w-full text-center">
    <h1>What Splitting a Story Actually Requires</h1>
    <h6>(Reading Time: 3 minutes 20 seconds)</h6>
</div>

# Introduction
Alright, now "Split the story. Eight is too many story points and we need smaller stories.". Perhaps you've heard this a
lot, and to your agile team the developers are refusing to do as asked. But is it really that simple to split stories?
In practice understanding the how of what you are building is integral to story estimation. This article discusses the meetings
necessary to continually get your Jira planning more correct.

# Some Background
## What We Ended Up With
The backend team began having a meeting every Tuesday. The conversation was too technical to include anyone else really. 
We have backlog grooming and sprint planning already. In theory "splitting the story" is supposed to happen in those meetings.
However, in practice doing it properly takes hours. So the discussion migrated to its own slot.

## Describing The Meeting

What actually happens during this meeting? We pull up the existing plan in Jira tickets, and propose ways to tackle the
existing problem. The ideas could be purely architectural, like "we should make this part of the system similar to this
other part of the system". Other times we are doing story point arithmetic, eg: we said this story is 8 points, do we
actually just not understand the work involved yet? Then there are further questions: with this story split in this manner
can we have multiple people work on it in parallel?
  
  
There are two tasks happening at once: shape the design, divide the work. Splitting for size and parallelism is very tricky,
and often not possible. Does the way we divide the work effect the shape of the design? Sometimes absolutely, if we have 
multiple microservices built into the architecture one of the key ideas is to allow for parallel work, or easily allow for
upstream or downstream work to be completed. This is a question more to mull around in the back of your head, since I don't
think the answer is clear.

# What Does XP Think Of This?
What does my inner XP-programmer think of all this planning? Well not a lot, and really it runs counter to a lot of the
lessons we learned through XP. Xp says "just start coding", and you'll "discover the design as you go". However, is that
really sufficient when someone else wants to know how long it's going to take? How much is this feature going to cost? I
argue it isn't, we owe the business reasonable estimates for timelines. Sure, the timelines will be pushed back, rearranged
multiple times, and look nothing like they did at the start. However, we should make an effort to hit our thumb-in-the-air
estimations for the overall time period of the project.

A major benefit of all of this planning is we can start to think how to transform the plan. What if we attempted to deliver
what we are looking for sooner? We understand the "why" of what we are doing, and are looking for the end result with some
hard coding, maybe there is no fancy UI to allow us to configure the changes easily, etc. Only invest what is necessary
to get the feature completed.

# What Should We Call The Meeting?
On the calendar our meeting is just simply called 'pairing'. A misnamed meeting that is its own issue. However, the obvious
names are not so obvious:

- **Story splitting meeting.** Undersells it, and naming it this would misrepresent what is actually happening
- **Spike.** Doesn't fit
- **Tech spec meeting / architecture review.** Doesn't fit either, these kinds of meetings are typically across projects
- **Design meeting.** Closer. The design is exactly what informs how the stories get split, structured, and pointed.
- **Technical refinement.** Also closer

# Working-Sessions to Determine Your Jira Plan
The meeting is itself a working-session, and the output are the Jira tickets we get out of it to feed the backend developer
team with enough work. It's very practical in its nature. If I was forced to name it, I'd call it: "Technical Design Refinement".
Which is kind of funny, because it feels like three separate words simply fused together. So even though the name of the
meeting is still nebulous to me, I think the purpose and use case are significantly more clear.
