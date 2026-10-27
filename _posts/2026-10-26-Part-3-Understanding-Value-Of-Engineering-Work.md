---
layout: post
name: Part 3 - Understanding the Value of Engineering Work
description: Understanding engineering work
image: iceberg_buckets.jpg
time: "2m:54s"
tags: developer-time all
series: developer-time
---

# From Cost to Value

In [Part 1, Making Invisible Developer Work Visible](https://codeitquick.github.io/2026/01/21/Making-Invisible-Developer-Work-Visible.html), 
we introduced five different purposes of engineering work: Build, Fix, Improve, Run, and Evolve.

In [Part 2A, Understanding Engineering Capacity](https://codeitquick.github.io/2026/10/25/Part-2A-Understanding-Engineering-Capacity.html), 
we examined where engineering capacity goes. In [Part 2B, Understanding Activity-Based Engineering Costs](https://codeitquick.github.io/2026/10/26/Part-2B-Understanding-Activity-Based-Engineering-Costs.html), 
we examined how engineering consumption can be attributed to different activities and systems.

We now have a way to describe the work, identify the activities involved, and estimate what they cost. But we haven't 
answered an important question: what value does that work actually produce? Consider the database migration from Part 2B. 
We know how much engineering time was spent performing the migration, and we know which systems benefit from it. That doesn't 
tell us why the migration was worth doing in the first place.

Maybe the existing database was approaching the end of support. Maybe the migration would improve performance. Maybe it 
would allow the organization to introduce new capabilities that weren't previously possible. Each of these represents a 
different reason for performing the same work. To understand engineering value, we need to look beyond what work is being 
performed and examine what the organization expects to gain from it.

# Three Dimensions of Engineering Value

I want to introduce three dimensions for describing the value of engineering work: Technical, Tactical, and Strategic. These 
aren't mutually exclusive categories. A single piece of engineering work can provide value in more than one dimension.

| Value | Primary Question | Examples |
|---|---|---|
| Technical | How does this improve our engineering capabilities? | Maintainability, reliability, performance, developer productivity |
| Tactical | How does this address an immediate business or operational need? | Defect resolution, customer requests, operational problems |
| Strategic | How does this support longer-term organizational objectives? | New markets, future capabilities, scalability, reducing long-term risk |
{: .table .table-zebra}

## Technical Value

Technical value comes from improving the systems, tools, and capabilities that engineering relies on.

Consider improving an automated test suite. The immediate result might not be a new customer-facing feature. Instead, the 
improvement makes it easier to detect regressions, reduces manual testing, or allows developers to make changes with greater 
confidence. Technical value is not necessarily visible to the customer, but that doesn't make it less important. However, 
simply changing technology doesn't guarantee technical value. Rewriting a functioning service in a different language might 
improve maintainability, or it might introduce complexity without solving a meaningful problem.

The value comes from the improvement produced, not the technical activity itself.

## Tactical Value

Tactical value addresses an immediate business or operational need.

Fixing a production defect, implementing a customer-requested enhancement, or resolving an operational problem may all 
provide tactical value. Consider a production defect preventing customers from completing a purchase. Fixing the defect 
restores an existing business capability and addresses an immediate problem. But tactical value isn't limited to work 
customers can see. A developer investigating logs to answer a product manager's question may provide information required 
to resolve an operational issue or make an immediate decision.

That activity might never become an independent Jira ticket, but it can still provide tactical value.

## Strategic Value

Strategic value contributes to longer-term organizational objectives or future capabilities.

Consider an organization planning to expand into a new market. Supporting that market might require changes to its 
architecture, new integrations, or additional infrastructure. The strategic value comes from enabling the organization's 
longer-term objective, rather than simply completing the technical work. Strategic value can also come from preserving 
future options. A migration might prevent the organization from becoming dependent on unsupported technology, reducing a 
constraint on future development.

However, not every long-term technical improvement is automatically strategic. The connection to an organizational 
objective still needs to be established.

# Relating Value to the Five Types of Engineering Work

In Part 1, we introduced Build, Fix, Improve, Run, and Evolve as five purposes of engineering work. These categories describe 
what we are trying to accomplish. The three value dimensions describe why accomplishing that work matters. The distinction 
is important because the same purpose of work can produce different kinds of value.

| Engineering Work | Technical Value | Tactical Value | Strategic Value |
|---|---|---|---|
| Build | Introduce a reusable capability | Deliver a requested feature | Enable a new product or market |
| Fix | Eliminate an underlying technical weakness | Restore broken functionality | Protect a critical business capability |
| Improve | Reduce complexity or improve reliability | Remove an immediate performance bottleneck | Support expected growth |
| Run | Maintain system health and operational reliability | Restore or sustain business operations | Preserve continuity of a strategically important service |
| Evolve | Modernize technology and dependencies | Meet an upcoming compliance deadline | Enable future capabilities or reduce long-term constraints |
{: .table .table-zebra}

These examples aren't fixed relationships. They demonstrate that **the purpose of the work doesn't determine the type of value it produces**.

Consider the database migration from Part 2. The migration belongs primarily in Evolve because we're adapting an existing 
system to changing constraints. But the benefits depend on why we're performing it. If the migration replaces an unsupported 
database, it may provide technical value by reducing maintenance and compatibility risks. If the old database is causing 
immediate operational problems, the same migration may also provide tactical value. If the new database supports an expansion 
into another market, it may provide strategic value.

We haven't changed the type of engineering work. We've identified several reasons why performing that work could matter. 
This is also why technical work shouldn't automatically be classified as delivering only technical value, or product work 
as delivering only tactical or strategic value.

A technical improvement can support a business objective. A feature can improve the underlying engineering system. The 
categories are independent, even when they influence one another.

# Expected Value Versus Delivered Value

There's one more distinction we need to make. **The value we expect from engineering work is not necessarily the value we 
receive.** Suppose a team spends twenty hours improving the performance of a service because they believe it will reduce 
customer wait times. The work might be completed successfully, the tests might pass, and the improvement might be deployed. 
But if the service wasn't responsible for the customers' performance problems, the expected business benefit may never 
materialize.

The team completed the engineering work. That doesn't mean it delivered the expected value. The opposite can also happen. 
An experiment might fail to produce the desired product improvement but reveal an important constraint or invalidate an 
assumption. That information can still be useful, even though the original expected outcome wasn't achieved.

This distinction applies to all three value dimensions. Technical value might be expected to reduce maintenance effort. 
Tactical value might be expected to resolve an operational problem. Strategic value might be expected to enable a future 
business opportunity. In each case, the classification describes the benefit we're trying to achieve. It doesn't establish 
that the benefit occurred.

Not every benefit can be measured precisely, and not every useful activity needs its own financial return. But we should 
be able to explain why we expect the work to matter and, where practical, examine whether it achieved that purpose.

# Conclusion - Understanding Engineering Value

Build, Fix, Improve, Run, and Evolve describe the purposes of engineering work. Technical, Tactical, and Strategic describe 
different dimensions of the value that work may produce.

A single piece of work can produce multiple forms of value, and those benefits aren't necessarily obvious from the Jira 
ticket or the engineering activities involved.

We've now examined what engineering teams do, how much capacity their activities consume, what those activities cost, and 
what value they are expected to produce.

But understanding cost and value doesn't tell us which work should be done first.

That's the next problem: how do we decide between competing investments when engineering capacity is limited?

In Part 4, *Prioritizing Engineering Work*, we'll examine how costs, expected benefits, risk, and opportunity costs influence those decisions.
