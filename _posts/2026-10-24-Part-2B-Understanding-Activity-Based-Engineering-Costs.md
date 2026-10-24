---
layout: post
name: Part 2B - Understanding Activity-Based Engineering Costs
description: Use activity-based costing to trace engineering hours back to the features and services that demand them.
image: iceberg_buckets.jpg
time: "12m:00s"
tags: developer-time all
---

<div class="w-full text-center">
    <h1>Part 2B - Understanding Activity-Based Engineering Costs</h1>
    <h6>(Reading Time: 12 minutes)</h6>
</div>

## 1. From Purpose to Activity

In [Part 1](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), we introduced five types of engineering work: Build, Fix, Improve, Run, and Evolve. These describe what we're trying to accomplish, whether that's delivering a new feature, fixing a defect, or adapting an existing system to changing requirements.

In [Part 2A](/2026/10/24/Part-2A-Understanding-Engineering-Capacity.html), we began looking at the capacity these responsibilities consume. We looked at how a team of five developers might spend 400 hours over two weeks, and how much of that time goes toward implementation, testing, reviewing, coordination, investigation, and reporting.

But there is another question we haven't answered.

**What is actually demanding those activities?**

Knowing that our team spent 70 hours testing tells us something about how our capacity was consumed. It doesn't tell us what required that testing.

Consider two developers working on completely different things.

One is building a new checkout feature. The other is upgrading an unsupported framework. Their work has different organizational purposes. The first is Build, while the second is Evolve.

However, both developers may spend time on:

- Writing code
- Testing changes
- Reviewing pull requests
- Investigating unexpected behaviour
- Coordinating releases

The activities are similar, even when the reasons for performing them are different.

Now imagine management asks why the team spends so much time reviewing pull requests. Do we have too many pull requests? Are they too large? Is the code difficult to understand? Are reviewers waiting on other developers?

We cannot answer those questions by knowing we spent 40 hours reviewing code.

We need to connect the activities back to the work that required them.

This is where activity-based costing becomes useful.

## 2. Direct Costs, Indirect Costs, and Overhead

Accounting has a concept called a *cost object*. It's whatever we're trying to determine the cost of.

In manufacturing, that might be a product. In engineering, it could be a feature, a project, an application, a service, or even a customer.

Suppose we're building a checkout feature. We want to understand how much engineering effort it requires.

The time spent implementing that feature is relatively easy to identify. If a developer spends 20 hours working directly on the feature, those hours can be attributed to it.

This is a direct cost.

But implementation isn't the only activity involved. Someone needs to review the code, test the changes, and potentially investigate an issue before the feature reaches production.

If we can reasonably identify the time spent on those activities for the checkout feature, they're also direct costs.

The important distinction is that **direct costs are costs we can trace to a particular cost object**. They aren't limited to writing code.

Now consider a developer maintaining a shared deployment pipeline. That pipeline supports our checkout feature, but it also supports fifteen other services.

How much of that developer's time should we attribute to the checkout feature?

We could divide the cost equally across the services. We could allocate it based on deployment frequency. Or perhaps we could measure the actual effort required to support deployments for each service.

But each approach makes assumptions.

Costs that cannot be conveniently or economically traced to a particular object are indirect costs. When these are shared support costs, we may describe them as overhead.

Overhead is not necessarily wasted time. A shared deployment pipeline might make every other development activity substantially easier.

And direct versus indirect is relative to what we're measuring.

Maintaining the pipeline could be a direct cost of operating our deployment platform, but an indirect cost of delivering the checkout feature.

Why does this matter?

Because an engineering team might appear to spend most of its time delivering features while the cost of supporting those features is distributed across activities nobody associates with the original work.

We don't need to assign every hour to a feature. In many cases, retaining a category for shared responsibilities is more defensible than inventing a precise allocation.

What matters is understanding which costs we can reasonably attribute, which costs are shared, and what assumptions we're making when we distribute them.

## 3. Activities, Cost Pools, and Cost Drivers

Activity-based costing, or ABC, provides an established approach for relating resource costs to the activities consuming those resources and then to the cost objects requiring those activities.

In conventional ABC, the flow looks something like this:

**Resources → Activities → Cost Objects**

This is an accounting relationship. It doesn't describe the order in which management decides what work should be performed.

Let's take code reviews as an example.

Our engineering team has a certain amount of capacity available. During the two-week period, developers spend 40 hours reviewing code.

We can group the resources consumed by that activity into a *cost pool*.

In a monetary model, the pool would contain the relevant costs of providing the review activity, such as the labour cost of the time spent reviewing. For now, we'll use developer-hours as a measure of effort. Part 2C will look more closely at the financial costs of supplying engineering capacity.

How do we determine what belongs in the review pool?

We need some basis for assigning resources to activities. In ABC, these are often called *resource drivers*.

For engineering labour, the amount of developer time spent performing an activity is a reasonable starting point. We might estimate it using short periods of observation, team-level sampling, or records we already maintain.

Once we have our review cost pool, we need to understand which features or services consumed that reviewing activity.

This requires an *activity driver*: a measure with a plausible relationship to how much of the activity a cost object consumes.

For example, consider three engineering activities:

| Activity | Possible activity driver |
|---|---|
| Pull-request reviews | Review time required by a change |
| Testing | Testing effort required by a change or release |
| Operational support | Support or investigation time required by a service |

We could try using the number of pull requests, test executions, or production incidents instead. These are easier to count.

But do they adequately explain the consumption of resources?

Imagine our team reviewed 20 pull requests over two weeks, consuming 40 developer-hours.

That's an average of two hours per pull request.

We might decide that every pull request should be allocated two hours of review effort.

Except one pull request might be a trivial dependency update, while another involves changing how payments are processed across several services.

Both count as one pull request.

We've calculated an average, but that doesn't mean we've found a particularly useful cost driver.

A good driver should have a defensible relationship with the resources being consumed. The number of pull requests may be useful when their review requirements are reasonably consistent. When they aren't, we may need to account for differences in complexity or estimate the time required.

If review time can already be traced directly to a particular feature, there may be little reason to allocate it using an average in the first place.

There is also a variation of ABC called *time-driven activity-based costing*, developed by Robert Kaplan and Steven Anderson.

Rather than maintaining a large collection of activity allocations, time-driven ABC models the cost of supplying resource capacity and estimates the time required for different transactions or activities. These time estimates can account for variations in the work.

This may be particularly interesting for recurring engineering activities, such as routine support requests, standardized releases, or operational procedures.

It is less straightforward when every task is different.

Software development is not an assembly line, and trying to reduce novel engineering problems to one standard duration would introduce many of the same problems we encounter with task estimation.

Still, the underlying idea is useful: **understand what resources an activity consumes, then understand what demands that activity.**

## 4. Applying Activity-Based Costing to Engineering

Let's return to the hypothetical team from [Part 2A](/2026/10/24/Part-2A-Understanding-Engineering-Capacity.html).

We have five developers working over two weeks, representing 400 hours of total scheduled working capacity, assuming 40 hours per developer per week and no absences.

Our initial activity breakdown looked like this:

| Activity | Hours |
|---|---:|
| Implementation and changes | 180 |
| Testing | 70 |
| Code review | 40 |
| Meetings and coordination | 50 |
| Investigation and research | 40 |
| Reporting and administration | 20 |
| **Total** | **400** |

This gives us an approximate capacity statement.

But what if we want to understand which parts of our engineering responsibilities are demanding those activities?

Imagine that during these two weeks, our team is primarily working on a new checkout feature, supporting an existing billing service, and maintaining shared team infrastructure and responsibilities.

For simplicity, assume the checkout feature and billing-service work are separate assignments, so we don't attribute the same hour to both.

After examining the work, we construct the following hypothetical allocation:

| Activity | Checkout feature | Billing service | Shared / unallocated | Total |
|---|---:|---:|---:|---:|
| Implementation | 110 | 45 | 25 | 180 |
| Testing | 40 | 20 | 10 | 70 |
| Code review | 22 | 12 | 6 | 40 |
| Coordination | 15 | 10 | 25 | 50 |
| Investigation | 5 | 30 | 5 | 40 |
| Reporting | 5 | 5 | 10 | 20 |
| **Total** | **197** | **122** | **81** | **400** |

*All figures are illustrative estimates, not measurements from an actual team. Shared or unallocated hours are retained rather than forcibly assigned to the two deliverables.*

This changes the questions we can ask.

Previously, we knew that reviewing code consumed 40 hours.

Now we can see that 22 hours were attributed to the checkout feature, 12 hours to the billing service, and six hours remained shared.

Why did the checkout feature consume more review effort?

Perhaps the implementation required more complicated changes. Perhaps the code was unfamiliar to reviewers. Perhaps there were several rounds of review because the requirements changed.

Or perhaps we simply assigned the hours incorrectly.

The allocation itself doesn't answer the question. It tells us where to investigate.

We can do something similar with operational support.

The billing service consumed 30 hours of investigation, compared with just five for the checkout feature.

Was the service experiencing production failures? Were developers investigating intermittent behaviour? Was there a difficult customer issue? Or were they researching a planned change?

Those are different problems, with potentially different solutions.

The distribution of hours gives us a starting point for understanding which conditions are creating demand for engineering work.

### What About Testing?

Testing provides another interesting example.

The checkout feature consumed 40 hours of testing, compared with 20 for the billing service.

Does this mean we're spending too much time testing the checkout feature?

Not necessarily.

We might discover that the additional testing effort was associated with less subsequent rework, fewer escaped defects, or a smoother release.

Alternatively, the feature might have required more testing because its implementation was unusually complicated.

Testing could also be consuming excessive time because the test suite is slow, unreliable, or difficult to maintain.

We cannot distinguish these explanations from the activity allocation alone.

What we can do is compare the patterns with additional information: changes in implementation effort, rework, production defects, release problems, and the difficulty of modifying the code.

Over time, we might observe that work receiving more testing effort also takes longer initially but requires less subsequent rework.

That's worth investigating.

It is not proof that more testing caused the reduction in rework. The nature of the work, team experience, system complexity, and many other factors could also explain the difference.

### How Would We Collect This Information?

We don't need every developer recording fifteen-minute blocks against Jira tickets.

We can start with information the team already has.

Pull-request histories can help identify where reviews occurred. Incident records can associate support work with particular services. Calendar information provides some visibility into coordination. Periodic team discussions or brief sampling exercises can help estimate activities that aren't otherwise recorded.

None of these sources is perfect. A pull request tells us that a review happened, not necessarily how long it took.

The objective is to produce a reasonable team-level model that developers recognize as plausible.

If we cannot confidently attribute an activity to a particular feature or service, we can leave it shared or unallocated.

A model that admits uncertainty is more useful than one that manufactures precision.

## 5. What Cost Allocation Can and Cannot Explain

Activity-based costing gives us a way to organize the consumption of engineering resources.

It does not automatically explain why that consumption occurred.

There are several problems worth keeping in mind.

First, our measurements are imperfect.

A developer might spend an afternoon debugging a production incident, only to discover that the problem originated in another service. Which service should receive that investigation cost?

The answer depends on the purpose of our analysis. We might attribute the effort to the incident being investigated, or to the service ultimately responsible, but these are different accounting choices.

Second, engineering activities aren't always cleanly separated.

When practicing TDD, writing tests and implementing code can be part of the same continuous activity. Pair programming may involve implementation, review, design, and knowledge sharing simultaneously.

We can establish conventions for classification without pretending these boundaries are absolute.

Third, activities differ in complexity.

One production incident might take ten minutes to resolve. Another could consume several developers for several days. Counting incidents as though they have identical costs will distort our understanding of the services involved.

The same applies to pull requests, deployments, test executions, and almost every other activity we might want to measure.

Fourth, cost allocation is not the same as understanding what caused the cost.

Imagine one service consistently demands twice as much support effort as another.

Is the first service poorly engineered?

Maybe. But it could also serve ten times as many customers, support more complicated business rules, or be subject to stricter reliability requirements.

Our model tells us where the effort was consumed. It does not tell us whether that consumption was justified or avoidable.

And finally, we need to be careful about what decisions we make using this information.

If a team spends 80 hours supporting a service, those hours don't necessarily represent 80 hours we can eliminate by shutting it down or replacing it. Some engineering capacity is shared, some is committed to other responsibilities, and some costs won't immediately disappear when demand changes.

There is also a cost to maintaining the accounting model itself.

We could spend several hours every week trying to improve the accuracy of our activity allocations. At some point, we'd be consuming significant engineering capacity to account for engineering capacity.

That's not particularly helpful.

The goal should be to use enough detail to support better questions and decisions, without creating another administrative responsibility that outweighs the benefit.

And this information should not become a ranking of individual developers. A developer doing difficult investigative work may produce very little visible output while consuming substantial time. That tells us something about the nature of the assignment, not how productive the developer is.

## Conclusion

[Part 2A](/2026/10/24/Part-2A-Understanding-Engineering-Capacity.html) helped us understand where engineering capacity was being consumed.

Activity-based costing takes that investigation further, connecting resources and activities to the features, services, and responsibilities that demand them.

We can begin to understand how much effort is associated with developing a feature, maintaining a service, or supporting the engineering organization itself.

But an allocation is still an estimate, built on assumptions about the work and how we measure it.

It doesn't establish whether that work was valuable, necessary, or performed efficiently.

Those are questions we'll return to when we examine value and prioritization.

Before we can make financial decisions, however, we need to understand another part of the equation.

We've looked at engineering capacity in developer-hours. What does it actually cost the organization to supply those hours?

That's the subject of [Part 2C — The Financial Cost of Engineering Work](/2026/10/24/Part-2C-The-Financial-Cost-Of-Engineering-Work.html).
