---
layout: post
name: Part 2C - The Financial Cost of Engineering Work
description: Developer-hours aren't interchangeable. Turn engineering capacity into dollars without ignoring who can actually do the work.
image: iceberg_buckets.jpg
time: "11m:00s"
tags: developer-time all
---

<div class="w-full text-center">
    <h1>Part 2C - The Financial Cost of Engineering Work</h1>
    <h6>(Reading Time: 11 minutes)</h6>
</div>

## Introduction

In the previous articles, we looked at where engineering capacity goes, and how different activities consume that capacity. We can now begin describing the cost of engineering work in terms of hours. But how do we translate those hours into dollars?

At first, this seems relatively simple. Developers have salaries, contractors have hourly rates, and infrastructure has operating costs. If we know how many hours a particular activity takes, we should be able to calculate how much it costs.

There is a problem with this approach. Not every developer can accomplish the same work in the same amount of time.

An organization might employ ten software engineers, each working forty hours a week. That's 400 hours of engineering capacity. But does that mean we have 400 hours available to work on any engineering problem?

Not necessarily.

One developer may know everything about the billing service, while another has never worked on it. One might be experienced with database performance, while another specializes in frontend development. Even developers with similar skills may have substantially different knowledge of the systems they maintain.

*[Insert Resource Planning four-panel comic here]*

The financial cost of engineering involves more than assigning a monetary value to a developer's time. We need to understand who can perform the work, what resources they require, and how much effort completing the work will actually consume.

## 1. From Engineering Hours to Dollars

In [Part 2A](/2026/10/24/Part-2A-Understanding-Engineering-Capacity.html), we established that engineering teams have finite capacity. In [Part 2B](/2026/10/24/Part-2B-Understanding-Activity-Based-Engineering-Costs.html), we looked at the activities consuming that capacity, and how those activities could be attributed to the systems, products, and other things we support.

Now we need to understand how much it costs to supply that capacity.

The obvious starting point is developer salaries. If a developer makes $130,000 annually, we know at least part of the cost of employing that developer.

However, salary is not the total cost to the organization.

There are also employer-paid benefits, payroll taxes, equipment, software subscriptions, and the shared costs associated with supporting the employee. Depending on the organization, there may be additional expenses for offices, administrative support, and other overhead.

Accountants sometimes describe a more complete employment cost as a *fully loaded labour cost*. For management planning, we can use that cost to calculate an approximate hourly resource rate.

Consider a fictional developer with the following annual costs:

| Cost | Annual Amount |
|---|---:|
| Base Salary | $130,000 |
| Benefits and Employer Payroll Costs | $28,000 |
| Allocated Equipment, Tools, and Shared Overhead | $22,000 |
| **Total Annual Resource Cost** | **$180,000** |

Suppose we have 1,800 available working hours per year after vacations, holidays, and other time off. These hours still include meetings, reviews, and other engineering activities. We aren't assuming every hour is spent coding.

Dividing $180,000 by 1,800 gives us an approximate loaded cost of $100 per working hour.

This provides a useful planning number. We can take the activities identified in Part 2B and assign an approximate monetary cost to the capacity they consume.

But there are limitations.

An organization may already be paying that salary regardless of what the developer works on. Allocating $1,000 of labour cost to a particular task does not mean the company spent an additional $1,000 in cash because that task was performed.

Contractors are somewhat different. Depending on their agreements, assigning additional hours might create additional expenditures. Cloud infrastructure can also produce costs that vary with usage, while other infrastructure and software subscriptions may have already been purchased.

We need to distinguish the cost of providing capacity from the additional money required to perform particular work.

And even with accurate resource rates, we still haven't answered one important question.

Can the available developer actually complete the task?

## 2. The Problem with Generic Resources

Engineering managers and project planners frequently describe staffing in terms of resources.

We have five developers. We need another two developers. A project requires 200 developer-hours. Someone is assigned 50% to one project and 50% to another.

These are reasonable ways to describe capacity, but they make an important assumption if we use them without further qualification.

They treat developer-hours as interchangeable.

Suppose we're estimating an upgrade to a billing service. The upgrade involves modifying a third-party payment integration, updating several database operations, and ensuring existing customers aren't charged incorrectly.

We have two developers available.

Developer A has worked on the billing service for several years. They understand the payment provider, know which parts of the system are particularly fragile, and are familiar with the tests needed to verify the changes.

Developer B has similar general programming experience, but has never worked on this service.

Both are competent developers. Both have eight hours available tomorrow.

Do we really have sixteen hours of equivalent billing-service expertise?

No.

Developer B might spend much of that time learning how the system works. Developer A might already know exactly where to make the changes.

This difference is not necessarily about seniority or overall programming ability. Developer B might be substantially more effective than Developer A when working on the frontend application, or a completely different backend service.

Capability depends on the work being performed.

There are several dimensions to consider. Developers have different technical skills, knowledge of particular systems, familiarity with business rules, and experience with the tools required to accomplish the task.

Availability is another constraint. The developer with the necessary expertise might be working on something else, supporting production, or simply unavailable when the work needs to happen.

This doesn't mean every developer is irreplaceable. Most knowledge can be transferred, and many tasks can be performed by different people. But the cost of making that substitution is not necessarily zero.

A spreadsheet might identify two available developers with identical job titles. It cannot automatically tell us that only one of them understands why changing a particular database column breaks the invoicing process.

That difference matters when estimating costs.

## 3. Capacity Isn't Capability

Suppose Developer A has a loaded hourly rate of $120, while Developer B costs $75 per hour.

A simple resource-cost comparison suggests that assigning work to Developer B should be cheaper.

But what happens when Developer A can finish the task in four hours, while Developer B requires twenty?

Developer A costs $480. Developer B costs $1,500.

The developer with the higher hourly rate is considerably cheaper for this particular task.

Does that mean organizations should always assign expensive developers to difficult work?

Of course not.

Higher compensation doesn't automatically mean higher capability, and capability isn't uniform across different engineering problems. We're also assuming the task is completed to the same standard, without additional assistance or rework.

What happens if Developer B needs help from Developer A?

Now we're consuming capacity from both developers. We might also need time for reviewing the changes, understanding the implementation, and correcting mistakes.

Collaboration is not free.

This becomes especially important when multiple developers depend on the same person.

Imagine three developers working on separate changes to the billing service. Each one needs the assistance of the same experienced developer to understand a different part of the application.

We have three developers working independently, at least in theory. In practice, all three might be waiting on the same person.

Adding another developer would increase the team's total available hours. It would not necessarily increase its immediate ability to complete billing-service work.

This is one reason increasing staffing doesn't produce a proportional increase in completed work. There are costs associated with onboarding, communicating, coordinating, and transferring knowledge. Some tasks also cannot be divided effectively among several developers.

However, specialization is not necessarily a permanent constraint.

Pairing, reviewing code, documenting important decisions, and collectively maintaining systems can spread knowledge across the team. A developer who requires significant assistance today might be able to perform similar work independently next month.

In some situations, pairing can even reduce the total effort required by catching misunderstandings early.

The question isn't whether developers should collaborate. It's how much capacity that collaboration consumes, and what capabilities are available afterward.

When we estimate financial costs, we need to account for the resources involved in completing the work, rather than assuming an arbitrary number of developer-hours can accomplish it.

## 4. Financial Cost Versus Cost of Completion

Let's put some numbers behind this.

Suppose we need to modify a billing integration to handle failed payment requests more reliably. The work includes understanding the existing integration, changing the application, testing the changes, and deploying them safely.

We have two developers available.

Developer A is familiar with the billing system and has a loaded labour cost of $120 per hour. Developer B is experienced but unfamiliar with this particular service, and has a loaded cost of $75 per hour.

For the sake of this example, both developers can produce an implementation meeting the same requirements. We are comparing two possible assignments, not evaluating the employees themselves.

**Option A: Developer A implements the change.**

| Activity | Calculation | Cost |
|---|---|---:|
| Implementation and testing by A | 10 hours × $120 | $1,200 |
| Code review by B | 3 hours × $75 | $225 |
| Additional test environment usage | Estimated | $80 |
| **Total** | | **$1,505** |

**Option B: Developer B implements the change with assistance.**

| Activity | Calculation | Cost |
|---|---|---:|
| Implementation and testing by B | 24 hours × $75 | $1,800 |
| Knowledge transfer and pairing by A | 6 hours × $120 | $720 |
| Additional rework by B | 6 hours × $75 | $450 |
| Code review by A | 3 hours × $120 | $360 |
| Additional test environment usage | Estimated | $120 |
| **Total** | | **$3,450** |

These are fictional estimates, not measured productivity differences. We're assuming the loaded labour rates exclude the separately charged test environment costs, and that the listed activities don't overlap.

Developer B has the lower hourly cost, yet Option B consumes considerably more engineering resources.

It also requires 39 developer-hours rather than 13, including time from Developer A.

The cost difference is not caused by Developer B being a worse engineer. It's caused by differences in task-specific familiarity, the assistance required, and the amount of work involved in reaching the same result.

There is another issue. What if Developer A isn't available for two weeks?

Option A may require less effort and carry a lower attributed cost, but it might not be possible to start immediately. This is why financial costing and resource planning need to work together. The first describes monetary costs; the second considers when the required capabilities are available.

### Are These Real Expenses?

There's an important accounting distinction here.

In both examples, we allocated a monetary cost to the engineering capacity consumed. That does not mean the organization necessarily incurred an equivalent amount of additional cash expenditure.

If both developers are salaried employees, their compensation may remain unchanged regardless of which option we choose.

The $1,505 and $3,450 estimates describe the resource costs attributed to the work. They are not necessarily the additional cash costs of choosing one option over another.

An expenditure generally refers to spending money or acquiring something with a payment obligation. An accounting expense is a cost recognized against income in a particular reporting period.

These don't always occur at the same time.

For example, purchasing a server can create a cash expenditure today, while the cost may be recognized as depreciation expense over several years.

Software development has another complication. Depending on the accounting standards and circumstances, qualifying development costs may be capitalized as assets rather than immediately recognized as expenses.

Under IFRS, for example, research costs are generally expensed, while qualifying development costs are capitalized once the required criteria are satisfied. U.S. GAAP has its own rules for internal-use and externally marketed software.

Capitalization changes when costs appear in the income statement. It doesn't make the resources free, or eliminate the underlying expenditures.

For planning purposes, we therefore need to keep three different numbers straight: the cost attributed to consuming engineering capacity, the additional costs the organization would actually incur, and the expenses recognized in financial reporting.

They answer different questions.

## 5. What Financial Costing Reveals—and Misses

Once we understand both the activities being performed and the resources required to perform them, we can build a more complete picture of engineering costs.

We can estimate how much engineering capacity different systems consume, translate that capacity into monetary terms, and understand which capabilities are required to support particular kinds of work.

We can also identify potential constraints.

Perhaps the organization has plenty of frontend capacity but limited experience with database performance. Perhaps most changes to a particular system require assistance from a single developer. Or perhaps a supposedly inexpensive task regularly requires several people to coordinate before anything can be completed.

These details are important when estimating the financial cost of maintaining and changing software.

However, adding more detail doesn't necessarily make our estimates more accurate.

We still have to make assumptions about how much time activities consume, which people can perform them, and how shared costs should be allocated.

Shared overhead is particularly difficult. An organization's office lease, security team, and common infrastructure may support many engineering activities. Allocating those costs to individual tasks can help explain where organizational spending is attributed, but the allocation doesn't establish how much expenditure could actually be avoided.

The same problem exists with loaded hourly rates.

A $100 hourly cost might be a reasonable estimate for planning. But if the actual work requires seventeen hours instead of ten, calculating a more precise hourly rate won't fix the estimate.

And if the task requires expertise that isn't available, knowing the exact hourly rate is of limited help.

We should also avoid turning these estimates into individual productivity measurements.

The purpose isn't to discover which employee produces the cheapest line of code, or to rank developers according to their salaries. A developer who spends an afternoon helping three colleagues might appear less productive individually while making the team substantially more capable.

The useful unit of analysis is the work we need to accomplish and the resources required to complete it.

Sometimes a simple team-wide rate is sufficient. Sometimes the distinction between a particular capability and a generic developer-hour is essential. The amount of detail should depend on the decision the estimate is intended to support.

The goal is to understand costs, not manufacture precision.

## Conclusion

Engineering capacity can be counted in hours, but engineering capability cannot be reduced to interchangeable hours.

Financial costing helps us understand the monetary cost of supplying engineering resources. However, the cost of completing work depends on which capabilities are required, who has them, their availability, and the additional effort required to accomplish the task.

A hundred developer-hours are still a hundred hours. They just aren't necessarily a hundred hours of the capability we need.

Now that we've identified the work, its activities, the capacity it consumes, and its financial costs, we have a better foundation for discussing engineering decisions.

Understanding what something costs is one question. Understanding what it's worth is another.
