---
layout: post
name: Part 2A - Understanding Engineering Capacity
description: Jira tracks work, not capacity. Build a capacity statement to see where engineering time really goes.
image: iceberg_buckets.jpg
time: "9m:00s"
tags: developer-time all
---

<div class="w-full text-center">
    <h1>Part 2A - Understanding Engineering Capacity</h1>
    <h6>(Reading Time: 9 minutes)</h6>
</div>

## 1. Jira Isn't a Capacity Statement

Have you ever been asked why a development team isn't delivering more features? Maybe the team has five developers, each working 40 hours a week. That's 200 hours of engineering capacity every week. So where are those 200 hours going?

The obvious answer is to look at Jira. We can pull up the sprint board, review completed stories, inspect bugs, and get some understanding of what the developers have been doing.

But does that explain where our engineering capacity went?

Jira is useful for tracking work. It tells us what the team is trying to accomplish, what has been completed, and what remains. Depending on how the team manages its work, it may also give us some understanding of the effort involved.

What it doesn't necessarily provide is a complete accounting of engineering capacity.

Consider a developer working on a feature estimated at 20 hours. That estimate might already include researching the requirements, writing code, testing, reviewing changes, and deploying the solution. Those activities don't need individual tickets to be accounted for. They're part of delivering the feature.

Now consider the same developer attending a company-wide meeting, interviewing a job candidate, and helping another team diagnose an operational problem.

Where do those activities appear?

Sometimes they appear as tickets. Sometimes they appear in calendars. Sometimes they aren't recorded anywhere.

Does that mean the developer wasn't working? Of course not.

There's an important distinction here. **A work-tracking system describes work being managed. A capacity statement attempts to explain how the team's available working time was consumed.**

We shouldn't assume missing tickets mean missing work. We also shouldn't assume that every hour not represented by a ticket is available for building features.

Before we can understand the cost of engineering work, we need to understand where engineering capacity is actually going.

## 2. Where Engineering Capacity Goes

In Part 1, [*Making Invisible Developer Work Visible*](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), I introduced five purposes of engineering work: Build, Fix, Improve, Run, and Evolve.

These categories describe why engineering work exists, rather than the individual activities required to complete it.

Consider a team responsible for a customer portal, a billing service, and the infrastructure supporting both.

That team might spend its time on:

| Purpose | Example |
|---|---|
| Build | Adding a new customer account feature |
| Fix | Correcting an invoice calculation defect |
| Improve | Reducing the time required to execute automated tests |
| Run | Monitoring production systems and verifying backups |
| Evolve | Migrating an application to a supported .NET runtime |

All five activities consume capacity. And all five may involve designing, coding, testing, reviewing, documenting, or communicating.

We shouldn't create separate capacity categories for every development activity when those activities are already part of delivering the work.

For example, if two developers spend an afternoon reviewing and testing a new customer feature, that's still Build work. The work doesn't suddenly become a sixth engineering purpose because someone opened a pull request.

But not everything a development team does can be attributed to one of these five purposes.

Developers attend organizational meetings, participate in hiring, complete administrative requirements, and spend time learning. Teams also have coordination responsibilities that don't belong to any particular feature, defect, or system.

A team-wide planning meeting may concern several different kinds of engineering work. A discussion about changing the team's development practices might not be attributable to any particular deliverable.

We can distinguish these activities from work attributable to a specific engineering purpose.

**Attributable engineering work** is capacity consumed in delivering something within Build, Fix, Improve, Run, or Evolve.

**Shared and organizational activities** consume engineering capacity but aren't necessarily attributable to a particular deliverable.

That distinction isn't a judgment about whether the activities are necessary.

Helping another developer solve a problem could be essential. A planning meeting might prevent weeks of wasted development. Training could allow a team to take responsibility for a system it previously couldn't support.

The purpose here isn't to determine which activities are valuable. We'll get to that later in the series.

For now, we're asking a simpler question: how much capacity do these responsibilities consume?

## 3. Building an Engineering Capacity Statement

Let's use a hypothetical team of five developers. They maintain our customer portal, billing service, and supporting infrastructure.

We're going to examine a two-week period.

Assuming five working days per week, eight paid working hours per day, and no holidays, we start with:

**5 developers × 10 days × 8 hours = 400 person-hours**

Notice that we're measuring person-hours, not elapsed time.

If two developers pair on a problem for three hours, they've consumed six person-hours of capacity. The activity took three hours on the calendar, but involved two people.

Likewise, a one-hour meeting involving all five developers consumes five person-hours.

This doesn't imply that five developers are interchangeable, or that five hours from one developer will produce the same results as five hours from another. We're measuring the amount of working time available to the team, not converting people into identical units of productive output.

### Start With Available Capacity

Our team has 400 scheduled person-hours, but one developer takes two days of vacation and another takes one sick day.

That removes 24 person-hours.

We now have **376 available person-hours** during the period.

We need to account for leave before examining what happened to the remaining capacity. Otherwise, we could mistake unavailable time for unexplained work.

### Estimate the Work Performed

Using completed work records, estimates, operational information, and the team's knowledge of what happened, we reconstruct an approximate statement.

| Capacity allocation | Person-hours |
|---|---:|
| Build | 112 |
| Fix | 40 |
| Improve | 32 |
| Run | 32 |
| Evolve | 32 |
| **Attributable engineering work** | **248** |
| Shared coordination | 56 |
| Organizational administration | 24 |
| General learning and onboarding | 16 |
| Unmeasured / unexplained | 32 |
| **Total available capacity** | **376** |

The statement reconciles with our available capacity.

Of the original 400 scheduled person-hours, 24 were unavailable. Of the remaining 376, we've approximately attributed 344 hours to identifiable activities, with 32 hours left unmeasured.

These are hypothetical numbers. In practice, we would be estimating them, not pretending to know exactly how every minute was spent.

### How Would We Collect This Information?

We don't need every developer recording what they were doing in fifteen-minute intervals.

Start with information the team already has.

Jira can provide a reasonable starting point for attributable engineering work, especially when tickets have estimates expressed in effort-hours. If the team uses story points, we shouldn't invent a universal conversion to hours. We can instead reconstruct approximate effort for the period with the team.

Operational records can help identify incidents, monitoring responsibilities, deployment work, and unexpected support requests.

Calendars can provide rough estimates for recurring meetings and organizational commitments. Remember to account for the number of developers involved, not simply the duration of the meeting.

We can use a short team discussion to identify anything significant that those records missed.

For the first attempt, estimates rounded to a few hours may be sufficient. We're trying to understand the distribution of capacity, not produce a minute-by-minute history.

One particularly important consideration is **double-counting**.

Suppose a team estimates that a feature consumed 30 person-hours. That estimate already includes design discussions, implementation, testing, and code reviews by the people involved.

If we then add another six hours of code review to our capacity statement, we've counted some of the same work twice.

Likewise, a meeting dedicated to resolving a particular production incident might already be part of Fix. We shouldn't automatically put it under shared coordination simply because it appears in a calendar.

The distinction is whether the effort has already been included in the relevant work category.

There's another complication. Estimates made before starting work aren't necessarily the capacity actually consumed. A 20-hour estimate might turn into 35 hours because of an unexpected dependency. For a retrospective statement, we should use our best approximation of the work performed, not simply add up the original estimates.

And what about those remaining 32 hours?

We don't know.

They might represent unrecorded assistance, interruptions, ordinary gaps between activities, inaccurate estimates, or work that nobody thought to mention.

That's why we've kept an unexplained category. Forcing those hours into Build or Run would make the spreadsheet look better without improving our understanding.

## 4. What the Statement Reveals

Let's return to our team.

We started with 400 scheduled person-hours. After leave, 376 remained. Of those, approximately 248 were attributable to one of our five engineering purposes.

That's roughly two-thirds of the team's available capacity.

Does that mean the team was only 66% productive?

No.

It tells us that approximately 66% of its available capacity was attributed to identifiable engineering work within those five categories. The remaining capacity was consumed by other responsibilities or wasn't adequately measured.

Productivity and capacity consumption aren't the same thing.

Consider the 56 hours of shared coordination. That's about 15% of our available capacity. Perhaps some of those meetings could have been emails. Perhaps other meetings prevented expensive mistakes.

We can't determine that from the capacity statement alone.

Nor can we assume that eliminating 20 hours of meetings would produce 20 additional hours of feature development. The meetings may have been resolving dependencies that otherwise would have delayed development. Some saved time may become fragmented across the team rather than available as a useful block of effort.

The statement tells us where to investigate, not necessarily what to eliminate.

### Look for Patterns

One two-week period isn't particularly informative on its own.

Imagine repeating the statement over several periods.

We might notice that Run consistently consumes more capacity than expected. Or that Fix increases following certain releases. Perhaps shared coordination grows significantly as more teams become dependent on our services.

These patterns allow us to ask better questions.

Why is operational support consuming so much capacity? Are we spending more time fixing production defects than we previously understood? Has our organizational coordination changed as the company has grown?

None of these questions can be answered by looking at a sprint board alone.

The statement also gives us a way to discuss changing responsibilities.

If our team takes ownership of another service, we should expect some change in its capacity allocation. Additional monitoring, maintenance, and support responsibilities have to be accommodated somewhere.

We can't assume that the team will continue delivering the same amount of feature work while absorbing those responsibilities.

### Don't Confuse Precision With Understanding

There are limits to this approach.

Hours spent working don't tell us how difficult the work was, how effectively it was performed, or what the organization received from it.

Two developers might each spend eight hours resolving similar defects, with very different outcomes. One might permanently address the cause while another implements a temporary workaround.

Our statement records sixteen person-hours. It doesn't tell us which solution was better.

Our classifications are also approximations. Work may span several purposes, and some shared responsibilities won't fit neatly into our categories.

The goal isn't to force a perfect accounting system onto software development. It's to produce a reasonable description of where the team's capacity is being consumed, understand the uncertainty, and improve that understanding over time.

## Conclusion

A Jira board can tell us what work we're managing. It doesn't necessarily explain where all our engineering capacity is going.

By looking at available person-hours, attributable engineering work, shared responsibilities, and unexplained capacity, we can develop a more complete picture.

That picture doesn't tell us whether we're spending our time wisely. It doesn't tell us how productive our developers are, either.

But it gives us a starting point for a different question: **what does all this engineering capacity actually cost?**

That's where we'll go next.
