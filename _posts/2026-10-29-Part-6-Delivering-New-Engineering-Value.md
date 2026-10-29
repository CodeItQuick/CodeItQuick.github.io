---
layout: post
name: Part 6 - Delivering New Engineering Value
description: Turning engineering capacity into useful delivered outcomes
image: iceberg_buckets.jpg
time: "5m:00s"
tags: developer-time all
series: developer-time
---

<div class="w-full text-center">
    <h1>Part 6 - Delivering New Engineering Value</h1>
    <h6>(Reading Time: Approximately 5 minutes)</h6>
</div>

# Introduction

In the previous articles, we've worked through understanding what engineering does, how much capacity that work consumes,
what value it might produce, and how we can prioritize and reclaim engineering capacity.

In [Part 5 - The Four Ways to Reclaim Developer Time](/2026/10/27/Part-Five-The-Four-Ways-To-Reclaim-Developer-Time.html),
we looked at eliminating, automating, delegating, and enabling self-service to reclaim engineering capacity. We've identified
work worth doing, and we've made time available to do it. Now what?

Having the right priorities and enough engineering capacity doesn't guarantee that we'll actually deliver anything useful.
We still need to turn that capacity into working software, improved systems, or whatever outcome we originally intended to
produce.

This is where engineering delivery comes in.

# Breaking Work into Deliverable Value

Let's return to the customer portal example from Part 5.

We've reclaimed engineering capacity and decided to invest some of it into a new customer portal feature. The team estimates
that the feature will require several weeks of work.

How should we approach delivering it?

We could break the feature into tasks: database changes, backend implementation, frontend implementation, testing, and
deployment. Each task gets assigned to an engineer, and we begin working through them. The problem is that completing these 
tasks doesn't necessarily deliver any value. Until they're integrated into something usable, we've mostly produced unfinished work.

An alternative is to break the feature into smaller pieces of deliverable value. Perhaps the first iteration allows customers
to view the status of their requests. The next lets them update those requests, and another introduces notifications. Each 
iteration delivers something useful independently of the remaining work. This is the distinction between **task decomposition 
and value decomposition**. Smaller tasks aren't inherently better. Smaller deliverable outcomes let us realize benefits sooner, 
reduce the amount of unfinished work, and discover problems before we've invested months into a solution.

Not every piece of engineering work needs to be customer-facing. A dependency migration, reliability improvement, or internal
tooling change can also deliver useful value. The important question is whether the work produces a meaningful result, rather
than simply completing another activity.

# Understanding Engineering Flow

Once we've decided what to deliver, we need to understand how work moves through our engineering organization.

Consider a feature that requires two days of development, three days waiting for code review, another four days waiting
for testing, and a week before the next scheduled deployment. We've spent two days writing code, but it takes several 
weeks before anyone can use the result. We could try to make our developers code twice as fast. That would save a day, 
but it wouldn't solve the underlying problem.

**The constraint isn't necessarily how quickly we can write software. It's how quickly we can deliver it.**

This is why understanding engineering flow matters.

We need to consider the entire process, from beginning implementation through integration, validation, and release. That
includes the time spent waiting for another engineer, another team, or some organizational process. Work in progress matters
here as well. When developers are juggling several partially completed features, they introduce context switching, 
increase coordination, and potentially delay finishing any one of them.

Starting more work isn't necessarily the same as delivering more work.

# Removing Barriers to Delivery

Once we understand how work flows through the organization, we can start addressing the things slowing it down.

Some of those barriers are technical.

Automated testing can reduce the time required to validate a change. Continuous integration can expose problems earlier.
Smaller changes can make code reviews easier, and deployment automation can reduce the effort and risk associated with
releasing software.

Other barriers are organizational.

Perhaps a team needs approval from three other teams before releasing a feature. Perhaps testing happens exclusively at
the end of a development cycle. Maybe nobody is available to review changes because everyone is busy working on their own
priorities.

These problems won't necessarily be solved by adding developers or asking existing developers to work harder.

We also need to consider how teams are organized. If every feature requires multiple handoffs between specialized teams,
coordination becomes part of the cost of delivery. That doesn't mean specialization is inherently bad. Engineers possess 
different skills, experience, and knowledge. Treating them as interchangeable units of capacity, as we discussed in Part 2, 
doesn't reflect how engineering actually works.

The objective should be to reduce unnecessary dependencies and handoffs, while preserving the expertise required to
deliver the work correctly.

# Delivering in Smaller Increments

One of the benefits of delivering smaller increments is that we're making fewer assumptions at once.

Imagine spending three months developing the entire customer portal feature before releasing anything. We're assuming
that our requirements are correct, that our design will work, and that customers will find the result useful.

Now imagine releasing a smaller capability after two weeks.

We can validate whether the software works in its intended environment, discover integration problems, and identify
technical issues before building additional functionality on top of it. We haven't necessarily proven that the feature 
produces the business value we expected. That's a separate question.

What we've done is reduce the distance between implementation and delivery.

This also gives us opportunities to reconsider our original decisions. If an early increment reveals that our approach
is unnecessarily complicated, changing direction is generally easier than after we've completed the entire feature. The 
goal isn't to release software as frequently as possible. It's to make useful changes available without accumulating
unnecessary delays, risks, or unfinished work.

# Delivery Isn't the Same as Realized Value

Let's assume we've finished the customer portal feature. It's implemented, tested, deployed, and available to customers. 
From an engineering delivery perspective, we've accomplished what we set out to do.

But what if customers don't use it?

What if we intended to reduce customer support requests, but the number of requests remains unchanged?

We may have delivered exactly what we planned, without producing the value we expected. In [Part 3 - Understanding the Value of Engineering Work](/2026/10/26/Part-3-Understanding-Value-Of-Engineering-Work.html),
we distinguished between expected value and delivered value. That distinction matters here because engineering delivery
is only one part of the broader framework.

We can understand our costs, prioritize correctly based on the information available, and deliver efficiently, while
still making incorrect assumptions about the benefits of our work. That doesn't necessarily mean our delivery process 
failed. It means we need to examine the results.

# Conclusion - Delivering Engineering Value

Engineering capacity is limited, and how effectively we turn that capacity into deliverable results matters.

Breaking work into useful increments, reducing unnecessary waiting and handoffs, and improving our ability to integrate
and release changes all help us deliver the work we've chosen to pursue. But delivery is not the end of the process. We've 
made a change available. Now we need to determine whether that change actually produced the benefits we expected, and what 
we should do differently as a result