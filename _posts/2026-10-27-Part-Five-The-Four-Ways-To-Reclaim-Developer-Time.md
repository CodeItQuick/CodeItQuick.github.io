---
layout: post
name: Part 5 - The Four Ways to Reclaim Developer Time
description: Cut, automate, and delegate busywork to protect developer focus time.
image: iceberg_buckets.jpg
time: "7m:42s"
tags: developer-time all
series: developer-time
redirect_from:
  - /2026/10/17/Maximizing-Developer-Coding-Time.html
  - /2026/10/17/Part-Two-The-Four-Ways-To-Reclaim-Developer-Time.html
  - /2026/10/17/Part-Four-The-Four-Ways-To-Reclaim-Developer-Time.html
  - /2026/10/27/Part-Four-The-Four-Ways-To-Reclaim-Developer-Time.html
---

<div class="w-full text-center">
    <h1>Part 5 - The Four Ways to Reclaim Developer Time</h1>
    <h6>(Reading Time: 7 minutes 42 seconds)</h6>
</div>

# Introduction

In [Part 1, Making Invisible Developer Work Visible](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), I introduced
five purposes of engineering work: Build, Fix, Improve, Run, and Evolve. Building features and fixing bugs are the work
everyone sees. Keeping systems running, improving how they work, and adapting them to change usually sit below the waterline.

In [Part 2A](/2026/10/25/Part-2A-Understanding-Engineering-Capacity.html), we followed three developers through two sprints
and accounted for 424 of their 480 hours. In [Part 2B](/2026/10/26/Part-2B-Understanding-Activity-Based-Engineering-Costs.html),
we asked who that work was for, and found the pull request reviews, scrum meetings, and direct messages that never made it
onto the board. In [Part 3](/2026/10/26/Part-3-Understanding-Value-Of-Engineering-Work.html), we looked at the technical,
tactical, and strategic value that engineering work is expected to produce.

So we can now describe the work, see where the time goes, and explain why we expect it to matter. That leaves the question
the earlier parts didn't answer. Once the work is visible, what do we do about the parts that aren't worth the time? Some 
of this work is necessary. But are we performing it in the most effective way? More importantly, should we be doing it at 
all?

There's one more cost the earlier parts didn't capture. Part 2B told us what an activity consumes. It didn't tell us what
that activity pushed out. Every hour spent on a status meeting is an hour that wasn't spent on the next feature, the bug
fix in the backlog, or the upgrade we keep postponing. That's the opportunity cost: the value of the best work we gave up
to do this work instead. It never shows up on a Jira board, because the work it describes never happened.

So before trying to optimize an activity, we should understand why we're doing it, what value it provides, and whether that
value is greater than the value of what we could do with the same hours. There are four approaches we can take: eliminating,
automating, delegating, and enabling self-service.

# Where to Look First

Part 2B split the second sprint's 240 hours into three kinds of consumption. 120 hours were direct, 74 were indirect, and
46 were overhead. Each kind points us toward a different approach.

| Classification       | Sprint Two (Hours) | Who It Serves                       | Start With                  |
|----------------------|--------------------|-------------------------------------|-----------------------------|
| Overhead Consumption | 46                 | Everything, and nothing in particular | Eliminate                   |
| Indirect Consumption | 74                 | Several consumption objects at once | Delegate or self-service    |
| Direct Consumption   | 120                | A single feature or service         | Automate                    |
{: .table .table-zebra}

Overhead is the first place to look. Scrum meetings and direct messages support every consumption object, which means no
single feature or service owns them. Nobody owns them, so nobody questions them. That makes overhead the best candidate
for elimination. Indirect work is shared. A pull request review or a database migration serves more than one system, so somebody has to
coordinate it. That coordination is where delegation and self-service help. The question is whether a developer needs to
be the one answering it.

Direct work is the work we wanted to do. We aren't asking whether the customer portal needs its button. We're asking whether
47 hours of checking that the button works is the right way to get there. That's where automation pays off. These aren't 
rules. Overhead can be automated and direct work can be delegated. But the classification tells us where to start asking.

# 1. Eliminate Unnecessary Work

The most effective way to complete a task is to avoid doing it in the first place. In [Part 3](/2026/10/26/Part-3-Understanding-Value-Of-Engineering-Work.html),
we described three dimensions of value. Before accepting recurring work, ask which of them it provides:
  * **Technical:** Does it improve our engineering capabilities?
  * **Tactical:** Does it address an immediate business or operational need?
  * **Strategic:** Does it support a longer-term organizational objective?

If we can't name one, the work is a candidate for elimination. Remember that expected value isn't delivered value, either.
A status meeting is expected to keep stakeholders informed. It only delivers tactical value if somebody still needs the update.

The classic example is "this meeting could have been an email". A recurring meeting or status report usually starts for a
good reason, but that reason can disappear long before the meeting does. Standups are a good candidate. They are supposed
to be daily, but as I covered in [Agile And Scrum Drift in Development](/2026/07/17/Agile-Drift-In-Development.html), our
team runs fewer of them because the stakeholders only need updates a couple of days a week.

Our three developers are in the same position. In the second sprint, Developers 1 and 2 each spent 8 hours in scrum
meetings. That's 16 hours of overhead that no feature or service owns. If the stakeholders only need an update a couple of
days a week, cutting the meetings back gives us 8 of those hours.

Rather than optimizing the process, consider eliminating it or reducing its scope. Start with the assumption that the work
may not be necessary, and establish why it should continue. Start with no, then move toward maybe.

# 2. Automate Repetitive Activities

If work cannot be eliminated, we should consider whether it can be automated.

We were spending 2-3 hours each day collecting deployment metrics. A dashboard can replace much of that manual activity.
Automated testing is the same idea: we want to be fairly certain a change works on the standard use-case without someone
clicking through it by hand every release.

Look at the second sprint again. Developer 1 spent 47 hours making sure the button works. Developer 2 spent 61 hours making
sure the hot fix works. That's 108 of the sprint's 240 hours, almost half, spent watching two changes in production.
Automated checks won't take that to zero, but they can bring it down to something like 30.

However, automation introduces costs of its own. Before building something, consider:
  * Does an existing tool already provide this functionality?
  * Could we purchase or configure something instead?
  * How much time would automation save?
  * What are the implementation and ongoing maintenance costs?

This is the comparison the earlier parts set up. Part 2B gives us the cost side: the hours the activity consumes today,
plus the hours to build and maintain the automation. Part 3 gives us the value side: what we expect to do with the hours we
get back. After the automation ships, check whether we actually got those hours back, and whether they went somewhere useful.

AI may reduce implementation effort, but making something cheaper to build doesn't necessarily make it worth building.

# 3. Delegate Work

Some activities need to happen, but don't necessarily need to be performed by developers. DevOps requests, QA requests, and
IT requests are common examples. A request might go through a form that someone outside the development team approves,
instead of landing on a developer's desk.

Delegation shouldn't simply transfer the problem elsewhere. Consider the cost of the handoff. How much knowledge or context
must be transferred? Does another team understand the underlying problem, or are we just sending them a narrowly defined
ticket?

Sometimes a brief conversation is more effective than a detailed ticket and several rounds of clarification. The goal is to
reduce the overall cost of completing the work, rather than simply move it off the developer's plate.

The database migration is a good example of when not to delegate. Developer 3 spent 64 hours creating test data for it.
On paper, that looks like work a QA team could take on. But Developer 3 designed the migration in the first sprint, and
the test data depends on that design. By the time we transferred the context, we'd have spent most of the hours we were
trying to save. So the migration stays where it is.

# 4. Enable Self-Service

Developers are often interrupted by requests for information, access, or other routine activities. When these requests are
common, repeatable, and well understood, self-service may be an effective solution.

Instead of having developers manually provide deployment information, make that information available through a dashboard.
The deployment metrics dashboard does this for product owners who want to know how a particular initiative is going.

In our second sprint, Developers 1 and 3 spent about 3 hours a day between them answering direct messages and digging
through logs for the answers. Over a ten-day sprint, that's 30 hours spent producing, by hand, what could have been this
dashboard. If most of those messages are "is it deployed yet?" or "how is the migration going?", a dashboard can answer
them without interrupting anyone. That won't remove every message, but it can cut the 30 hours in half.

But self-service isn't appropriate for every problem. Some requests require discussion to understand what the person
actually needs. A ticketing system or form can reduce interruptions, but it can also strip away important context.
Self-service works best when the problem and the expected outcome are already understood.

# Putting It Into Practice

Start by identifying where developer time is going. Make recurring activities visible, then question why they exist.

For each activity:
  1. **Eliminate:** Does this work need to happen?
  2. **Automate:** Can technology reduce the effort required?
  3. **Delegate:** Is someone else better positioned to perform it?
  4. **Self-service:** Can the person needing the result obtain it independently?

These techniques are not mutually exclusive, and they shouldn't be applied blindly.

## The Second Sprint, Revisited

Let's apply them to the second sprint from Part 2B. We cut the scrum meetings back to a couple of days a week, put the
answers to the most common direct messages on a dashboard, and replace most of the manual checking with automated checks.
The pull request reviews, the release tasks, and the database migration stay as they are. They already have a clear value.

| Activity                         | Classification       | Approach     | Before (Hours) | After (Hours) | Reclaimed (Hours) |
|----------------------------------|----------------------|--------------|----------------|---------------|-------------------|
| Scrum Meeting                    | Overhead Consumption | Eliminate    | 16             | 8             | 8                 |
| Direct Messages                  | Overhead Consumption | Self-Service | 30             | 15            | 15                |
| Ensure button / hot fix works    | Direct Consumption   | Automate     | 108            | 31            | 77                |
| PR Review                        | Indirect Consumption | Keep         | 10             | 10            | 0                 |
| Migrate database                 | Indirect Consumption | Keep         | 64             | 64            | 0                 |
| Release button / hot fix         | Direct Consumption   | Keep         | 12             | 12            | 0                 |
| **Total**                        |                      |              | **240**        | **140**       | **100**           |
{: .table .table-zebra}

Those 100 hours don't disappear. They go back into the five purposes from Part 1. The automated checks aren't free, so the
first 40 hours go into building them. That's Improve work. The rest finally gets to the work that was waiting.

| Purpose  | Hours | Work                                                 |
|----------|-------|------------------------------------------------------|
| Improve  | 40    | Build automated checks for the portal and invoices   |
| Build    | 40    | Next customer portal feature                         |
| Evolve   | 20    | Start the next dependency upgrade                    |
| **Total**| **100** |                                                    |
{: .table .table-zebra}

Look at that second table from the other direction. The next customer portal feature and the dependency upgrade were
always the price of 108 hours of manual checking. We were paying it every sprint. Nobody wrote it down, because nobody
compared the checking against the work it displaced.

The Improve hours are a one-time cost. In the sprints after that, all 100 hours are available for Build, Fix, Run, and
Evolve work. That's the real question behind reclaiming developer time. Not how many hours we saved, but what we can do
with them now, and whether that's worth more than what we were doing before.

If improving the workflow requires authority beyond your role, bring the problem to your manager. You don't have to show
up with a complaint about meetings. The earlier parts of this series give you the case:
  * **The time spent:** [Part 2A](/2026/10/25/Part-2A-Understanding-Engineering-Capacity.html) shows where the hours went,
    including the ones that never made it onto the board.
  * **Who it serves:** [Part 2B](/2026/10/26/Part-2B-Understanding-Activity-Based-Engineering-Costs.html) shows whether
    those hours are direct, indirect, or overhead.
  * **The expected benefit:** [Part 3](/2026/10/26/Part-3-Understanding-Value-Of-Engineering-Work.html) explains what
    value the work provides, and what value the reclaimed hours could provide instead.

Add the proposed change and a before-and-after table like the one above, and you have a conversation your manager can act
on. A portion of their job is enabling you through these kinds of changes.

The objective isn't simply to maximize the hours developers spend coding. Engineering capacity is limited, so every piece
of work competes with every other piece of work for it. Making the work visible, measuring it, attributing it, and
valuing it all lead to the same place: an honest comparison between what we're doing and what we could be doing instead.
Reclaiming developer time is how we act on that comparison.
