---
layout: post
name: Part 2B - Understanding Activity-Based Engineering Costs
description: Understanding how engineering activities consume capacity and what creates demand for them.
image: iceberg_buckets.jpg
time: "9m:00s"
tags: developer-time all
---

<div class="w-full text-center">
    <h1>Part 2B - Understanding Activity-Based Engineering Costs</h1>
    <h6>(Reading Time: 9 minutes)</h6>
</div>

# From Purpose to Activity

In [Part 1, Making Invisible Developer Work Visible](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), I introduced 
five purposes of engineering work: Build, Fix, Improve, Run, and Evolve. In Part 2A, we used those purposes to understand 
where a team's capacity was going. We started with 400 scheduled person-hours over two weeks, subtracted twenty-four hours 
of leave, and tried to account for the remaining 376 hours.

That exercise told us how much capacity went toward different responsibilities. It didn't tell us much about the activities 
required to carry out those responsibilities, or which features and services were demanding them.

Consider two developers. One is adding a customer account feature, while the other is upgrading a billing service to a 
supported runtime. One is doing Build work and the other is doing Evolve work. Both may spend time researching the problem, 
changing code, testing, reviewing pull requests, and coordinating a release. Different purposes, many of the same activities.

Now suppose we discover that our team spent thirty-two hours reviewing code. Is that a lot? What would we compare it with? 
We could count pull requests, but that doesn't tell us why one review took fifteen minutes and another took most of an 
afternoon. We could also decide that thirty-two hours sounds excessive and tell everyone to review faster. I'm sure 
nothing could go wrong with that approach.

Before trying to reduce an activity, we should understand what work is demanding it. That's the part activity-based costing 
can help us investigate.

# Direct Costs, Indirect Costs, and Overhead

In accounting, the thing we're trying to determine a cost for is called a *cost object*. That might be a manufactured product, 
but it can also be a project, a feature, a service, or something else we're responsible for delivering or operating.

Suppose we want to understand the engineering effort required to deliver a new account feature. The feature is our cost 
object. A developer spends twenty hours implementing it, another developer spends four hours reviewing the changes, and 
the team spends six hours testing them. Assuming we can reasonably trace all thirty hours to that feature, the implementation, 
review, and testing are all directly attributable. The fact that some of the work happened in a pull request or a test 
suite doesn't suddenly make it indirect.

Now consider the deployment pipeline used by the account feature, the billing service, and a dozen other applications. 
Someone spends an afternoon maintaining it. We know the pipeline supports the feature, but how much of that afternoon 
should the feature be responsible for?

We could divide the effort equally among applications, assign it based on deployment frequency, or leave it as a shared 
responsibility. Those choices give different answers, and none becomes correct simply because we put a formula in a spreadsheet.

A *direct cost* can be traced to the cost object in a practical and economically reasonable way. An *indirect cost* cannot, 
so it needs an allocation method if we're going to assign it. Shared support costs are often treated as overhead, but 
overhead isn't a synonym for unnecessary work. Keeping the deployment system operating may be one of the more useful 
things the team does.

The distinction also depends on what we're measuring. Maintaining the deployment pipeline might be a direct cost of the 
engineering platform and an indirect cost of the account feature. The activity hasn't changed; the cost object has.

For now, we'll follow engineering effort in person-hours rather than dollars. ABC normally allocates monetary resource 
costs, which we'll address in Part 2C. Using hours here lets us look at demand for engineering capacity without pretending 
every developer-hour has an identical financial cost.

# Activities, Cost Pools, and Cost Drivers

Activity-based costing, or ABC, connects the resources an organization supplies to the activities consuming them, and then 
to the cost objects demanding those activities. In accounting terms, resource costs are assigned to activities and activity 
costs are assigned to cost objects. This describes an allocation model, not the sequence in which we decide what work the 
team should do.

Let's use code reviews. Our developers supply working capacity, and some of that capacity is consumed by reviewing changes. 
The costs assigned to reviewing form an *activity cost pool*. In a financial model, the pool would contain the cost of 
the resources used to provide that activity. In our simpler example, we'll keep track of the person-hours consumed by reviews.

How do the resources get assigned to the activity? A *resource driver* measures how much of a resource an activity uses. 
Developer time spent reviewing code is one possible resource driver. If we estimate that reviewing consumed thirty-two 
person-hours, that's our initial measure of the review activity's resource consumption.

The next question is what demanded those reviews. An *activity driver* provides a basis for assigning the activity to cost 
objects. We might use the number of pull requests for each feature or service. That would be convenient, since GitHub 
already counts them for us. But is the number of pull requests a reasonable measure of reviewing effort?

If sixteen pull requests consumed thirty-two review-hours, the average is two hours per pull request. We could allocate 
two hours to each one. That might be reasonable for a set of similar, routine changes. It's considerably less convincing 
if some of those pull requests change a configuration value and others modify several services involved in processing 
payments.

The same problem appears elsewhere. A test execution might take thirty seconds or several hours of investigation after it 
fails. One production incident might be resolved by restarting a process; another might require three developers to 
investigate an intermittent failure for two days. Counting occurrences tells us how frequently an activity was demanded, 
not necessarily how much effort each occurrence required.

A useful cost driver needs a plausible relationship with resource consumption. A correlation between two measurements may 
suggest a relationship worth investigating, but doesn't establish that one is an appropriate basis for allocating cost. 
And when we can trace actual review or testing effort to a feature, we may not need an averaged driver at all.

There is also *time-driven activity-based costing*, associated with Robert Kaplan and Steven Anderson. It uses the cost 
of supplying practical resource capacity and an estimate of the time different activities require. Time estimates can 
vary with the characteristics of the work, rather than assuming every occurrence takes the same amount of time. That can 
be useful for fairly repeatable activities, such as standard releases or routine support requests. It's harder to apply 
to novel development work, where we may not know what the problem involves until we've investigated it. We'll return to 
the monetary capacity rates in Part 2C.

# Applying Activity-Based Costing to Engineering

Let's return to the five-developer team from Part 2A. The team had 400 scheduled hours, twenty-four hours of leave, and 
376 available person-hours. Of those available hours, we attributed 248 to Build, Fix, Improve, Run, and Evolve. The rest 
included fifty-six hours of shared coordination, twenty-four hours of organizational administration, sixteen hours of 
general learning, and thirty-two hours we couldn't confidently explain.

We don't need to change those totals. Instead, let's examine the activities within the 248 hours of attributable engineering 
work. Suppose the team supports a customer portal, a billing service, and a shared engineering platform. After reviewing 
the work and talking with the developers, we might come up with this additional breakdown:

| Activity | Customer portal | Billing service | Engineering platform | Total |
| --- | ---: | ---: | ---: | ---: |
| Implementation and changes | 66 | 28 | 18 | 112 |
| Testing | 25 | 14 | 7 | 46 |
| Code review | 20 | 8 | 4 | 32 |
| Investigation and design | 8 | 20 | 10 | 38 |
| Deployment, monitoring, and support | 5 | 9 | 6 | 20 |
| **Total** | **124** | **79** | **45** | **248** |
{: .table .table-zebra .table-hover }

These are invented numbers, not observations from a real engineering team. They're also another view of the same 248 hours, 
not 248 additional hours. We haven't added coding, testing, and reviewing on top of the Build and Fix work from Part 2A. 
We've divided that work by activity and attributed it to three different cost objects. The shared coordination, administration, 
learning, and unexplained time remain outside this table rather than being forced into the features and services.

We can already ask different questions. Why did the billing service require twenty hours of investigation and design? 
Perhaps it's experiencing production problems, perhaps the team is planning a complicated migration, or perhaps nobody 
understands part of the existing implementation. The table shows where the effort went, but it doesn't tell us which 
explanation is right.

The review figures raise another question. The customer portal consumed twenty review-hours, the billing service eight, 
and the platform four. Imagine we also knew that those changes involved five, six, and five pull requests respectively. 
Using the average of two hours per pull request would allocate ten hours to the portal, twelve to billing, and ten to the 
platform. That's quite different from the effort we estimated actually went into each one.

If we can reconstruct review effort with reasonable confidence, the direct estimates are more informative. If we can't, 
pull-request counts might still provide a rough allocation, provided we're clear about the assumptions. We shouldn't mistake 
an allocation rule for a discovery about how the engineers worked.

Testing is similar. The portal used twenty-five hours of testing. Should we try to reduce that number? Maybe. But first 
I'd want to know what happened to the work afterward. Did the team spend less time fixing defects? Was there less rework 
after release? Did the testing identify problems that would otherwise have reached customers? Alternatively, was the 
test suite unreliable enough that developers spent half the afternoon rerunning it?

We might observe that some features require more testing initially but less subsequent rework. That's a useful pattern 
to investigate, not proof that testing caused the reduction in rework. Different features, codebases, developers, and 
release conditions could account for the difference. We'd need additional evidence before deciding what to change.

This doesn't require ticket-level time tracking. Pull requests, incident records, calendars, and occasional discussions 
with the team can provide a starting point. Some activities will be easy to associate with a feature or service; others 
won't. If we're unable to allocate something reasonably, leaving it shared or unexplained is better than inventing precision.

# What Cost Allocation Can and Cannot Explain

An allocation tells us where we've assigned the consumption of resources. That is not necessarily the same as explaining 
what caused it, whether the work was necessary, or whether it was performed well.

Take a production incident. A developer might spend six hours investigating the billing service before discovering that 
the problem came from a shared library. Do those hours belong to billing, to the library, or to the incident itself? That 
depends on the question we're asking. Different cost objects and allocation rules can be defensible, but they lead to 
different statements about where effort was consumed.

There are also activities that don't separate cleanly. With TDD, writing a test, changing an implementation, and investigating 
a failing assertion may happen in one continuous cycle. When two developers pair, they may be designing, implementing, 
reviewing, and sharing knowledge at the same time. We can choose sensible conventions for classifying that work without 
pretending there are precise boundaries between every activity.

And then there's complexity. If two services each experience five incidents, that doesn't mean they demanded the same 
operational effort. Even if one consumes three times as many support hours, it doesn't follow that it's poorly engineered. 
It might serve more customers, handle more complicated requirements, or have stricter availability expectations. We need 
to understand those differences before treating one service as more efficient than another.

Allocated effort also isn't necessarily avoidable effort. Suppose we assign ten hours of shared platform maintenance to 
a feature. Canceling that feature doesn't mean ten hours of platform work disappear. Some costs are shared, some responsibilities 
remain, and some capacity can't immediately be recovered or redirected. Financial decisions need that distinction, which 
is one reason this article cannot replace Part 2C.

Finally, we should consider the effort required to maintain the model. If the team spends several hours each week recording, 
reconciling, and arguing about activity classifications, we've created another activity that consumes engineering capacity. 
At some point the accounting exercise needs its own accounting exercise.

I also wouldn't use this information to rank developers. A developer spending two days investigating an obscure production 
problem might appear to accomplish less than one who closes several straightforward tickets. An activity allocation tells 
us something about the work being demanded, not the relative ability or value of the people performing it.

# Conclusion - Understanding Activity-Based Costs

Part 2A showed us how available engineering capacity was distributed across different responsibilities. Here we've taken 
a closer look at the activities involved and the features, services, and shared systems that demand them. Activity-based 
costing gives us a way to connect those pieces, provided we're careful about what our allocations do and don't establish.

We still haven't shown the financial cost of supplying that capacity. Developer-hours aren't interchangeable in financial 
terms, and an allocated cost isn't always a cost we can avoid. That's where we'll go next in Part 2C - The Financial 
Cost of Engineering Work.