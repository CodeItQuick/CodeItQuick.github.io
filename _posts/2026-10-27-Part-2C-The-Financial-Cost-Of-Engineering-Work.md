---
layout: post
name: Part 2C - The Financial Cost of Engineering Work
description: Understanding the monetary cost of engineering capacity and why developer-hours are not interchangeable.
image: iceberg_buckets.jpg
time: "9m:00s"
tags: developer-time all
series: developer-time
---

<div class="w-full text-center">
    <h1>Part 2C - The Financial Cost of Engineering Work</h1>
    <h6>(Reading Time: 9 minutes)</h6>
</div>

# From Engineering Hours to Dollars

In [Part 2A, Understanding Engineering Capacity](/2026/10/24/Part-2A-Understanding-Engineering-Capacity.html), we looked at
where a development team's time was going. In [Part 2B, Understanding Activity-Based Engineering Costs](/2026/10/24/Part-2B-Understanding-Activity-Based-Engineering-Costs.html),
we examined the activities that consume capacity, and the features and services that demand them. Now we need to put
a monetary cost against that capacity.

That sounds like the easy part. Developers have salaries, contractors have rates, and infrastructure has bills. If we know
how many hours an activity consumed, shouldn't we be able to calculate what it cost?

Let's start with a fictional developer earning $80,000 a year. Salary isn't the full cost of employing someone. The employer
also pays benefits and payroll costs, and provides equipment, software, and other shared support. For planning purposes, we
might estimate the annual cost of supplying that developer's capacity as follows:

| Resource cost | Annual amount |
| --- | ---: |
| Salary | $80,000 |
| Benefits and employer payroll costs | $17,000 |
| Allocated equipment, tools, and shared overhead | $20,000 |
| **Total annual resource cost** | **$117,000** |
{: .table .table-zebra .table-hover }

Assume the developer has 1,800 available working hours in the year after leave and holidays. Those hours still include
meetings, reviews, production support, and other responsibilities. Dividing $117,000 by 1,800 gives us an estimated loaded
resource cost of $65 per available hour. This is a planning rate, not the employee's salary converted into an hourly wage.

In [Part 2B](/2026/10/24/Part-2B-Understanding-Activity-Based-Engineering-Costs.html), our hypothetical team attributed 248 person-hours to the customer portal, billing service, and engineering
platform. If we used an average loaded rate of $65 per hour, that would represent $16,120 in attributed resource costs.
That's the monetary layer missing from our earlier activity-based costing example.

But there's an assumption hiding in that calculation. We treated all 248 hours as if they cost the same amount, and as if
any available hour could be used for any engineering problem. Neither is necessarily true.

# The Problem With Generic Resources

Engineering plans frequently describe people as resources. We have five developers, we need another developer, or we have
200 developer-hours available to finish a project. That can be useful when describing available time. The problem
starts when we assume those hours are interchangeable.

<!-- Insert the four-panel resource-planning comic here. -->

Suppose our team has two developers available to update a billing integration. Developer A has worked on the billing service
for several years. They know the payment provider, the business rules, and which tests have a habit of failing for reasons
that aren't immediately obvious. Developer B is an experienced programmer but has never worked on this service.

Both developers have eight hours available tomorrow. Do we have sixteen hours of equivalent billing-service capability?
Not really. Developer B may need to investigate an integration Developer A already understands.

That doesn't make Developer A a better developer. The situation might be reversed on the customer portal or deployment
platform. Capability depends on the work; familiarity with one system doesn't necessarily transfer to another.

This matters because a staffing plan might identify an available developer without identifying an available capability.
One developer might know the programming language but not the domain. Another might know the system but be busy
with an incident. People are interchangeable in theory, which is why theory never has to fix prod.

Of course, developers can substitute for one another. Otherwise no team could survive a vacation. But substitution may
require training, pairing, or additional reviews. Those activities consume capacity whether or not we create tickets for them.

# Capacity Isn't Capability

Consider two developers with loaded resource costs of $80 and $50 per hour. If we choose purely by hourly rate, the second
developer looks cheaper. But suppose the first can complete a particular change in four hours, while the second needs twenty.
The first option consumes $320 of attributed labour cost. The second consumes $1,000.

This doesn't establish that expensive developers are more productive. A lower rate doesn't guarantee a lower cost for a
particular task, and a different task might reverse the result.

Assistance makes this more complicated. What if the developer unfamiliar with the system needs another developer to explain
the architecture, review an approach, or help investigate an unexpected failure? Both developers are now consuming capacity,
even if the ticket is assigned to only one of them.

We see a similar problem when several developers depend on one specialist. Imagine three changes to the billing service
being developed simultaneously. Each developer needs help from the same person who understands the payment integration.
We've added three developers to the project, but their progress may still depend on the availability of one person.

Adding people increases available hours, but not necessarily immediately usable capacity for a particular task. Knowledge
transfer, coordination, and work that can't easily be split create constraints a headcount estimate may miss.

That doesn't mean we should keep all the billing-service knowledge with one developer. Pairing, code review, documentation,
and shared ownership can make other developers effective on the system. That work consumes capacity now, but may reduce
dependencies and prevent rework later.

We need to estimate the capacity required to complete the work, including collaboration, rather than assuming every hour
on the team's calendar contributes equally to every task.

# Financial Cost Versus Cost of Completion

Let's return to the billing service and put some more realistic numbers behind it. Suppose we need to update the payment
integration to handle failed requests more reliably. The work involves understanding the current behaviour, implementing
the change, testing it, reviewing it, and deploying it.

Developer A knows the billing service and has a loaded cost of $80 per hour. Developer B has a loaded cost of $50 per hour,
but is unfamiliar with this integration. We assume either approach meets the same requirements. The following estimates are
fictional.

Under the first option, Developer A spends ten hours implementing and testing the change, and Developer B spends three hours
reviewing it. Under the second, Developer B spends twenty-four hours implementing and testing, plus six hours on rework.
Developer A contributes six hours of knowledge transfer and pairing, followed by three hours of review. Assume we also incur
some additional test environment usage that isn't included in the loaded labour rates.

| Resource consumed | A implements | B implements |
| --- | ---: | ---: |
| Developer A at $80/hour | 10 hours = $800 | 9 hours = $720 |
| Developer B at $50/hour | 3 hours = $150 | 30 hours = $1,500 |
| Additional test environment costs | $80 | $120 |
| **Estimated total resource cost** | **$1,030** | **$2,340** |
| **Total developer-hours** | **13** | **39** |
{: .table .table-zebra .table-hover }

Developer B has the lower rate, but the second option consumes three times as many developer-hours and more than twice the
attributed resource cost. It still requires nine hours from the person familiar with billing.

Does that make the first option the obvious choice? Not necessarily. Developer A might be unavailable until next week, or
Developer B might learn enough to handle the next change independently. Costing and resource planning are related, but they
answer different questions.

## Are We Actually Spending More Money?

There's another distinction we need to make. The $1,030 and $2,340 figures are estimated costs *attributed* to the work.
They aren't necessarily the additional cash expenditures caused by doing it.

If A and B are salaried employees, the organization may pay them the same amount regardless of which task they work on.
Assigning their existing capacity doesn't automatically increase payroll. It does use time that could have gone elsewhere.
Contractor hours, overtime, and usage-based cloud services may create additional costs.

Accounting also distinguishes an expenditure from an expense. An organization can acquire something and incur an obligation
to pay for it before cash changes hands. An expense is recognized in financial reporting in the period required by the
applicable accounting rules. For example, purchasing a server can involve an expenditure up front, while its cost is
recognized as depreciation expense over its useful life.

Some software development costs can also qualify for capitalization, depending on the work and the accounting standards
being applied. Under IFRS, qualifying development costs may be recognized as an asset once specific conditions are met;
research costs generally are not. U.S. GAAP has different rules depending on the type of software and circumstances.
Capitalization changes the timing of expense recognition. It doesn't make the engineering work free.

So we have at least three different financial questions. How much resource cost should be attributed to the work? How much
additional or avoidable cost does the work create? And when is that cost recognized as an accounting expense? The answers
can be different, even when we're talking about the same feature.

# What Financial Costing Reveals and Misses

Combining the capacity statement, the activity-based cost model, and loaded resource rates lets us estimate the costs
attributed to supporting services, maintaining a deployment pipeline, or implementing a feature.

We can also begin to see why apparently similar work has different costs. Perhaps a billing change requires specialized
knowledge. Perhaps the customer portal takes more review time because it affects several applications. Perhaps a shared
platform consumes resources even when nobody is currently delivering a feature that depends on it. The calculations give
us something to investigate, not an explanation by themselves.

Shared overhead is one limitation. We might allocate the cost of equipment, subscriptions, and supporting departments
across developers or projects, but those allocations depend on conventions. Assigning $500 of shared infrastructure to a
feature doesn't prove that canceling the feature would save $500. The infrastructure may still be needed by everyone else.

Resource rates depend on assumptions as well. Another organization might use a different number of practical working hours,
or report shared overhead separately. We need to know what's included so we don't count costs twice.

And then there's uncertainty about the work itself. If a billing change takes thirty hours instead of ten, a beautifully
calculated rate of $65.37 per hour isn't going to rescue the estimate. A more precise rate doesn't make an uncertain
implementation estimate more precise.

I also wouldn't use this information to rank developers by their cost per ticket or lines of code. A developer who spends
an afternoon helping colleagues understand a difficult system may appear to complete less individual work while making the
team more capable. The purpose is to estimate the cost of accomplishing engineering work, not to turn salaries and Jira
tickets into a productivity leaderboard.

A team-wide average rate is sufficient for some questions. Others require task-specific effort and capabilities. The
level of detail should match what we're trying to estimate.

# Conclusion - The Financial Cost of Engineering Work

[Part 2A](/2026/10/24/Part-2A-Understanding-Engineering-Capacity.html) showed us where engineering capacity went. [Part 2B](/2026/10/24/Part-2B-Understanding-Activity-Based-Engineering-Costs.html) connected that capacity to activities and the systems and
features consuming them. Here we've added monetary resource costs, and the complication that developers don't all supply
the same capabilities at the same time.

Engineering capacity can be counted in hours, but engineering capability can't be reduced to interchangeable hours. A
hundred developer-hours are still a hundred hours. That doesn't mean they're a hundred hours of the expertise we need.

We now have a way to estimate what engineering work costs, along with some reasons those estimates can be wrong. Whether
the work is worth those costs is a separate question, and one we'll return to when we discuss value.
