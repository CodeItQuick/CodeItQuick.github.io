---
layout: post
name: Part 5 - Delivering New Engineering Value
description: Turning engineering capacity into useful delivered outcomes
image: iceberg_buckets.jpg
time: "5m:00s"
tags: developer-time all
series: developer-time
redirect_from:
  - /2026/10/29/Part-6-Delivering-New-Engineering-Value.html
---

<div class="w-full text-center">
    <h1>Part 5 - Delivering New Engineering Value</h1>
    <h6>(Reading Time: Approximately 5 minutes)</h6>
</div>

# Introduction - Bringing Cost and Value Together

In the previous articles, we've examined engineering capacity, how that capacity is consumed, and the technical, tactical,
and strategic value that engineering work is expected to produce. We've also looked at prioritizing that work and reclaiming
capacity through elimination, automation, delegation, and self-service.

We've established what our work costs, why we expect it to be valuable, and where we're going to invest our limited capacity.
But we haven't really examined what happens when we bring those things together. At the organizational level, the basic
financial equation is straightforward:

**Profit = Revenue - Costs**

Engineering contributes to both sides of this equation. We can develop capabilities that increase revenue, reduce the
cost of existing operations, or protect the revenue and capabilities the organization already depends on. The question is
how we turn our engineering investments into something that improves the organization's position after accounting for
their costs.

# Understanding the Remainder

Let's consider the two sides of the equation. In Part 3, we introduced Technical, Tactical, and Strategic value. These
describe why engineering work might be worth doing. In Part 2, we examined engineering capacity and consumption, giving
us a way to understand the resources required to perform that work.

Revenue and costs are financial quantities. Engineering value is broader than revenue, and capacity is measured in hours
rather than dollars. We need to be careful about treating these as interchangeable. For example, a feature that generates
additional customer purchases has a direct relationship to revenue. Improving reliability might instead protect existing
revenue by preventing outages. A database migration might reduce future costs or enable capabilities that haven't generated
revenue yet.

These activities can all be valuable without producing an immediate increase in sales. When we can estimate their financial
benefits and costs, we can calculate a contribution. Where the benefits are not financially measurable, we should describe
the expected net value rather than pretending we've calculated profit. The objective isn't to assign an imaginary dollar
value to every engineering task. It's to understand what we're gaining relative to what we're spending.

# Three Ways to Improve the Equation

There are three broad ways engineering can improve the organization's economic position.

**Increase revenue.** Building a feature that attracts new customers, enabling a new market, or improving a purchasing
experience can increase the revenue the organization generates. This is perhaps the most recognizable contribution
from engineering, but it isn't the only one.

**Reduce costs.** Improving infrastructure efficiency, eliminating recurring manual work, or reducing operational
expenses can improve profitability without generating any additional revenue. If we deliver the same capability at a
lower cost, the remainder increases.

**Protect existing value.** Fixing critical defects, maintaining reliability, and adapting systems to changing
requirements can prevent lost revenue or avoid future expenses. Sometimes the most valuable engineering work is
preventing something bad from happening.

These mechanisms aren't mutually exclusive. Improving a service's performance might reduce infrastructure costs while
also allowing the organization to support more customers. The important distinction is that **engineering work can increase
the remainder without necessarily increasing revenue.**

# Connecting the Five Types of Engineering Work

Let's return to the five purposes of engineering work: Build, Fix, Improve, Run, and Evolve. Each of these represents a
different reason for performing engineering work. None of them determines the economic outcome by itself.

| Engineering Work | Possible Economic Contribution                                    |
|------------------|-------------------------------------------------------------------|
| Build            | Generate additional revenue through a new capability              |
| Fix              | Restore a purchasing process that was losing sales                |
| Improve          | Reduce the infrastructure costs of an existing service            |
| Run              | Protect existing revenue through operational reliability          |
| Evolve           | Avoid future maintenance costs or enable entry into a new market  |
{: .table .table-zebra}

These examples aren't exclusive relationships. Building something might reduce costs. Improving an existing system might
enable new revenue. Evolving a system might be necessary simply to continue operating. We already know that one work item
can produce Technical, Tactical, and Strategic value simultaneously. Now we're asking another question: **How does that
value affect the organization's economic position?**

Consider a database migration. The work belongs primarily in Evolve, but the economic contribution depends on why
we're performing it. Replacing an unsupported database might prevent future maintenance expenses. Improving database
performance might reduce infrastructure costs. Supporting additional customers might increase revenue.

The work hasn't changed. What we're examining is how its benefits contribute to the remainder.

# Reinvesting Engineering Capacity

Let's return to our three-developer team and the customer portal example.

In Part 4, we reclaimed 100 hours of engineering capacity by reducing unnecessary meetings, automating repetitive
checks, and providing self-service access to information. We allocated that capacity to three activities:

| Work                    | Capacity  | Purpose |
|-------------------------|-----------|---------|
| Automated checks        | 40 hours  | Improve |
| Customer portal feature | 40 hours  | Build   |
| Dependency upgrade      | 20 hours  | Evolve  |
| Total                   | 100 hours |         |
{: .table .table-zebra}

What have we actually gained?

The automated checks might reduce future engineering consumption. The customer portal feature might generate additional
revenue. The dependency upgrade might prevent an expensive failure or eliminate a constraint on future development. Let's
put some hypothetical numbers against the customer portal feature. Suppose the 40 hours of engineering effort cost $4,000
when we account for compensation and related expenses. We expect the feature to generate $12,000 in additional revenue over
the next year, with another $2,000 in support and operating costs over that period.

Our estimated contribution is:

**$12,000 - $4,000 - $2,000 = $6,000**

That's a projected financial contribution, not necessarily $6,000 in additional company profit. Other business costs
may apply, and we're making assumptions about how much revenue the feature will actually produce. This also raises an
important distinction from Part 4. **Reclaiming 100 hours of engineering capacity isn't the same thing as saving 100 hours
of salary expenses.**

We're still paying those developers. What we've created is the opportunity to invest their time somewhere else. That
might increase revenue, reduce future expenditures, avoid additional hiring, or produce other benefits. The financial result
depends on what those reclaimed hours accomplish.

# Not Every Investment Needs to Generate Revenue

There's a danger in reducing all engineering decisions to whether a feature generates more money than it costs.

Some work is necessary to preserve the organization's ability to operate. Consider the dependency upgrade from our example.
It might generate no additional revenue. But perhaps the current dependency is approaching end-of-support, and leaving it
unchanged exposes the organization to significant operational risk.

Does that make the migration worthless? Of course not. The expected value may come from avoiding a future expense, protecting
existing revenue, or maintaining the ability to continue developing the product. We should consider the likelihood and
consequences of those risks rather than assuming that avoiding an uncertain future cost is the same as receiving money today.
This is why our earlier classification of Technical, Tactical, and Strategic value matters. Financial returns are
important, but not every useful engineering contribution produces an immediate, directly measurable return.

# Conclusion - What Did We Gain?

Engineering capacity is limited, and every activity consumes some of it. Part 2 gave us a way to understand that consumption.
Part 3 gave us a way to describe the value we expect from the work. Prioritization and optimization help us decide where
to spend our capacity and how to make more of it available.

Now we've brought those ideas together. Engineering can improve the organization's position by generating additional revenue,
reducing costs, or protecting existing value. Build, Fix, Improve, Run, and Evolve can each contribute to those outcomes
in different ways.

But our calculations are still based on expectations. A feature expected to generate $12,000 might generate $2,000. An
automation expected to reclaim 100 hours might only reclaim 20. A migration intended to reduce operational risk might
introduce new problems. We've made our investment and delivered the work. Now we need to determine whether we actually
received the benefits we expected.

That brings us to Part 7 - Measuring Outcomes and Feedback.