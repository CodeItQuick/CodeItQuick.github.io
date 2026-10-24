---
layout: post
name: Part 2A - Understanding Engineering Capacity
description: Understanding where engineering capacity goes and building a simple capacity statement.
image: iceberg_buckets.jpg
time: "6m:30s"
tags: developer-time all
---

<div class="w-full text-center">
    <h1>Part 2A - Understanding Engineering Capacity</h1>
    <h6>(Reading Time: 6 minutes 30 seconds)</h6>
</div>

# Jira Isn't a Capacity Statement

Have you ever been asked why a development team isn't delivering more features? Let's say we have five developers working 
forty hours a week. That's 200 hours of engineering capacity every week. It sounds like a lot of time, so where is it going? 
Usually we open Jira, look at the stories that were completed, and try to explain what everyone was doing.

There's nothing wrong with starting there. A Jira board can tell us what work we're managing, what has been completed, and 
what we still intend to do. Depending on how we estimate our work, it may even give us an idea of the effort involved. But 
a list of completed stories isn't the same thing as accounting for the team's available capacity.

Consider a feature estimated at twenty hours. That estimate might include researching the problem, writing the code, testing it, 
reviewing the changes, and deploying the solution. We don't need a separate ticket for every one of those activities; they're 
already part of delivering the feature. Now consider the same developer interviewing a candidate, attending a company meeting, 
or helping another team investigate a production issue. Some teams record that work, others don't. Either way, those hours 
are no longer available for whatever was planned on the board.

This doesn't mean the developer wasn't working, or that Jira is somehow broken. It means we're asking a work-tracking tool 
to answer a different question. Before we can understand the cost of engineering work, we should at least have an idea of 
how much capacity we're consuming and where it's going.

# Where Engineering Capacity Goes

In [Part 1, Making Invisible Developer Work Visible](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), I 
introduced five purposes of engineering work: Build, Fix, Improve, Run, and Evolve. These describe what we're trying to 
accomplish, rather than all of the individual activities involved in accomplishing it.

Consider a team responsible for a customer portal, a billing service, and the infrastructure supporting both. Some of 
its work might look like this:

| Purpose | Example |
| ------- | ------- |
| **Build** | Add a new customer account feature |
| **Fix** | Correct an invoice calculation defect |
| **Improve** | Reduce the time required to run automated tests |
| **Run** | Monitor production systems and verify backups |
| **Evolve** | Migrate an application to a supported .NET runtime |
{: .table .table-zebra .table-hover}

Each of these purposes can involve coding, testing, code review, design, research, and communication. Two developers might 
spend an afternoon reviewing and testing a customer feature. That's still Build work; it doesn't become a new category of 
engineering work because someone opened a pull request. If we already counted their review and testing time in Build, 
counting it again under code review would make our capacity statement wrong.

There's also work that doesn't fit neatly into any of the five purposes. Hiring interviews, general company meetings, 
mandatory training, and some team coordination all consume capacity. A meeting to investigate a particular production 
defect could be counted under Fix, while a general department meeting may be better represented as shared organizational 
work. The classification depends on what the meeting was for, not whether it happened in a calendar or a ticket.

None of this tells us whether a meeting was worth attending or whether the team should be spending more time on Build 
than Run. That's a different discussion. For now, we're interested in the capacity required to do the work we've taken 
on, including responsibilities that aren't represented by a feature or defect.

# Building an Engineering Capacity Statement

Let's continue with our hypothetical five-developer team and look at two weeks of work. Assuming ten working days at eight 
hours per day, we start with 400 scheduled person-hours. One developer takes two days of vacation and another takes a 
sick day, leaving 376 available person-hours. We should subtract that time before examining the work; otherwise, we might 
end up trying to explain twenty-four hours that nobody was available to work.

We're counting *person-hours*, not elapsed time. If two developers pair on a problem for three hours, that consumes six 
person-hours. A one-hour meeting with all five developers consumes five. This doesn't make developers interchangeable units 
of output. It just gives us a common unit for describing how much of the team's working time was available and consumed.

## Accounting for the Work

Using completed work, incident records, calendars, and what the team remembers about the period, we might come up with the 
following statement. The numbers are made up, but the exercise is something a team could do without introducing a new 
time-tracking system.

| Capacity allocation | Person-hours |
| ------------------- | -----------: |
| Build | 112 |
| Fix | 40 |
| Improve | 32 |
| Run | 32 |
| Evolve | 32 |
| **Attributable engineering work** | **248** |
| Shared coordination | 56 |
| Organizational administration | 24 |
| General learning and onboarding | 16 |
| Unmeasured or unexplained | 32 |
| **Total available capacity** | **376** |
{: .table .table-zebra .table-hover}

Of the original 400 scheduled hours, twenty-four were lost to leave. We can approximately account for 344 of the remaining 
376 hours, leaving thirty-two unexplained. That isn't a failure of the exercise. It's an admission that we don't have a 
perfect record of everything that happened over two weeks.

## Where Do the Numbers Come From?

We can start with information we already collect. Work items and incident records help reconstruct feature development, 
fixes, operational support, and migrations. Calendars tell us about meetings, provided we account for how many developers 
attended. Then we can talk to the team about significant work that wasn't recorded anywhere. We probably won't remember 
every interruption, but we don't need to reconstruct everyone's day in fifteen-minute increments to learn something useful.

We do need to be careful about estimates. A feature originally estimated at twenty hours could have taken thirty-five 
after the team discovered an unexpected dependency. Adding the original estimates together tells us what we expected to 
consume, not necessarily what we actually consumed. For a statement about the past, we need the best reasonable estimate 
of work performed.

We also have to avoid counting the same work twice. Suppose a feature consumed thirty person-hours, including six hours 
of design discussions and code review. If the thirty hours are already included under Build, we shouldn't add another six 
under shared coordination. The same applies to an incident discussion that has already been counted under Fix. It may be 
easier to use broad categories than to pretend we can accurately distribute every meeting across several features.

What about the thirty-two unexplained hours? Perhaps there was unrecorded support, interruptions, gaps between activities, 
or simply inaccurate estimates. We don't know, which is why I would leave them unexplained. Moving them into another 
category makes the total look tidy, but doesn't make it more accurate.

# What the Statement Tells Us

In our example, 248 of the 376 available hours went toward work attributable to Build, Fix, Improve, Run, or Evolve. That's 
about 66% of the team's available capacity. Does that mean the developers were only 66% productive? No. It means roughly 
two-thirds of their available time was attributed to those five purposes, while the rest went toward shared responsibilities 
or wasn't adequately measured.

The statement also shows fifty-six hours of shared coordination, about 15% of available capacity. Perhaps some of those 
meetings could have been removed. Perhaps others prevented costly mistakes, resolved dependencies, or helped the team 
coordinate work it couldn't complete independently. The capacity statement doesn't tell us which explanation is right, 
and removing twenty hours of meetings doesn't guarantee twenty additional hours of completed feature development.

## Looking for Patterns

One two-week statement gives us a snapshot. Repeating the exercise occasionally might reveal something more interesting. 
If Run gradually consumes more capacity, has the team taken responsibility for more services? If Fix grows after releases, 
are we dealing with recurring production problems? If shared coordination increases as the company grows, is the team 
spending more of its time working across organizational boundaries?

Those questions don't require us to decide immediately that any category is too large. They give developers and managers 
a place to investigate. They can also make planning discussions more realistic. If a team takes ownership of another 
service, monitoring, maintenance, and support have to come from somewhere. We shouldn't simply assume the team will 
continue delivering the same amount of feature work while absorbing those responsibilities.

There are limits to this approach. Hours don't tell us how difficult the work was, how effectively someone performed it, 
or what the organization received in return. Two developers might each spend eight hours fixing a defect, with one producing 
a lasting correction and the other creating a temporary workaround. Both used eight person-hours. The accounting alone 
doesn't tell us which outcome was better.

# Conclusion - Understanding Capacity

Part 1 gave us five ways to describe the purpose of engineering work. Here we've taken a first pass at accounting for the 
capacity consumed by that work, along with shared responsibilities that may never appear on the sprint board. We don't 
need a perfect record of every developer's day to start asking better questions about where the time goes.

We also haven't established whether that capacity was well spent. That's a separate question. Before we can get there, we 
should look more closely at the activities involved in engineering work, and what actually creates demand for them. That's 
where activity-based costing becomes useful in Part 2B.
