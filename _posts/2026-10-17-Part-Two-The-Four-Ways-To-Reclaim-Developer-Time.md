---
layout: post
name: Part 2 - The Four Ways to Reclaim Developer Time
description: Cut, automate, and delegate busywork to protect developer focus time.
image: iceberg_buckets.jpg
time: "2m:10s"
tags: developer-time all
series: developer-time
redirect_from:
  - /2026/10/17/Maximizing-Developer-Coding-Time.html
---

<div class="w-full text-center">
    <h1>Part 2 - The Four Ways to Reclaim Developer Time</h1>
    <h6>(Reading Time: 3 minutes 30 seconds)</h6>
</div>

# Introduction

In [part 1](/2026/01/21/Making-Invisible-Developer-Work-Visible.html) of this series we looked at all the work developers
do that isn't coding. Meetings, troubleshooting, support requests, collecting metrics, and other administrative work are
all part of the job.

Some of this work is necessary. But are we performing it in the most effective way? More importantly, should we be doing
it at all?

Before trying to optimize an activity, we should understand why we're doing it, what value it provides, and whether that
value justifies the time spent. There are four approaches we can take: eliminating, automating, delegating, and enabling
self-service.

# 1. Eliminate Unnecessary Work

The most effective way to complete a task is to avoid doing it in the first place. Before accepting recurring work, ask:
  * What problem are we actually solving?
  * What happens if we stop doing this?
  * Is the work worth the time we're spending on it?

The classic example is "this meeting could have been an email". A recurring meeting or status report usually starts for a
good reason, but that reason can disappear long before the meeting does. Standups are a good candidate. They are supposed
to be daily, but as I covered in [Agile And Scrum Drift in Development](/2026/07/17/Agile-Drift-In-Development.html), our
team runs fewer of them because the stakeholders only need updates a couple of days a week.

Rather than optimizing the process, consider eliminating it or reducing its scope. Start with the assumption that the work
may not be necessary, and establish why it should continue. Start with no, then move toward maybe.

# 2. Automate Repetitive Activities

If work cannot be eliminated, we should consider whether it can be automated.

We were spending 2-3 hours each day collecting deployment metrics. A dashboard can replace much of that manual activity.
Automated testing is the same idea: we want to be fairly certain a change works on the standard use-case without someone
clicking through it by hand every release.

However, automation introduces costs of its own. Before building something, consider:
  * Does an existing tool already provide this functionality?
  * Could we purchase or configure something instead?
  * How much time would automation save?
  * What are the implementation and ongoing maintenance costs?

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

# 4. Enable Self-Service

Developers are often interrupted by requests for information, access, or other routine activities. When these requests are
common, repeatable, and well understood, self-service may be an effective solution.

Instead of having developers manually provide deployment information, make that information available through a dashboard.
The deployment metrics dashboard does this for product owners who want to know how a particular initiative is going.

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

If improving the workflow requires authority beyond your role, bring the problem to your manager with a concrete
explanation of the time spent, the proposed change, and the expected benefit. A portion of their job is enabling you
through these kinds of changes.

The objective isn't simply to maximize the hours developers spend coding. It's to reduce unnecessary effort while
preserving the outcomes that matter.
