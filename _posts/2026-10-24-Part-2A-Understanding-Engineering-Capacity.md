---
layout: post
name: Part 2A - Understanding Engineering Capacity
description: Understanding where engineering capacity goes and building a simple capacity statement.
image: iceberg_buckets.jpg
time: "6m:30s"
tags: developer-time all
series: developer-time
---

<div class="w-full text-center">
    <h1>Part 2A - Understanding Engineering Capacity</h1>
    <h6>(Reading Time: 6 minutes 30 seconds)</h6>
</div>

# Jira Isn't a Capacity Statement

Have you ever been asked why a development team isn't delivering more features? Let's say we have three developers working 
forty hours a week. That's 160 hours of engineering capacity every week. It sounds like a lot of time, so where is it going? 
Usually we open Jira, look at the stories that were completed, and try to explain what everyone was doing.

There's nothing wrong with starting there. A Jira board can tell us what work we're managing, what has been completed, and 
what we still intend to do. Depending on how we estimate our work, it may even give us an idea of the effort involved. But 
a list of completed stories isn't the same thing as accounting for the team's available capacity.

# Where Engineering Capacity Goes

In [Part 1, Making Invisible Developer Work Visible](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), I 
introduced five purposes of engineering work: Build, Fix, Improve, Run, and Evolve. These describe what we're trying to 
accomplish, rather than the individual activities involved in accomplishing it.

Consider a team of three developers responsible for a customer portal. 

## Accounting for the Work

**Definitions**  
Activity Cost Pool:   
> An activity cost pool is a collection of costs associated with performing a specific activity or group of related 
> activities within an organization, which are subsequently allocated to products, services, or other cost objects using 
> an appropriate cost driver.

Activity Cost Driver:
> An activity cost driver is a measurable factor that determines or reflects how much of an activity is consumed by a 
> product, service, or other cost object, and is used to allocate costs from an activity cost pool to those cost objects.

Cost Object:
> A cost object is anything for which an organization wants to separately measure, accumulate, or assign costs, such as 
> a product, service, project, system, department, or customer.

If we look at the work distributed to the different activities over two sprints, it looks like this:

**Two Week Summary - Sprint One**

| Person      | Task                                | Activity Cost Pool | Activity Cost Driver | Cost Object            | Hours |   
|-------------|-------------------------------------|--------------------|----------------------|------------------------|-------|
| Developer 1 | Add button to Customer Portal       | Build              | Coding               | Customer Portal        | 40    |
| Developer 1 | Test button added to Portal         | Build              | Testing              | Customer Portal        | 40    |  
| Developer 2 | Find invoice bug                    | Fix                | Debugging            | Invoice Calculation    | 40    | 
| Developer 2 | Fix invoice bug                     | Fix                | Coding               | Invoice Calculation    | 10    | 
| Developer 2 | Add tests to prevent bug recurring  | Fix                | Testing              | Invoice Calculation    | 30    | 
| Developer 3 | Migrate database to new format      | Evolve             | Designing            | Engineering Department | 80    | 
{: .table .table-zebra .table-hover}

**Two Week Summary - Sprint Two**

| Person      | Task                                   | Activity Cost Pool | Activity Cost Driver | Cost Object            | Hours |   
|-------------|----------------------------------------|--------------------|----------------------|------------------------|------|
| Developer 1 | Release button to production           | Build              | Build Pipeline       | Customer Portal        | 20   |
| Developer 1 | Ensure button works                    | Build              | Observability        | Customer Portal        | 60   |  
| Developer 2 | Release hot fix                        | Fix                | Build Pipeline       | Invoice Calculation    | 20   | 
| Developer 2 | Ensure hot fix works                   | Fix                | Observability        | Invoice Calculation    | 60   | 
| Developer 3 | Migrate database by creating test data | Evolve             | Coding               | Engineering Department | 80   | 
{: .table .table-zebra .table-hover}

**Monthly Summary - Cost by Cost Object**

| Cost Object            | Activity Cost Pool | Designing | Debugging | Coding  | Testing | Build Pipeline | Observability | Total   |
|------------------------|--------------------|-----------|-----------|---------|---------|----------------|---------------|---------|
| Customer Portal        | Build              | 0         | 0         | 40      | 40      | 20             | 60            | 160     |
| Invoice Calculation    | Fix                | 0         | 40        | 10      | 30      | 20             | 60            | 160     |
| Engineering Department | Evolve             | 80        | 0         | 80      | 0       | 0              | 0             | 160     |
| **Total**              |                    | **80**    | **40**    | **130** | **70**  | **40**         | **120**       | **480** |
{: .table .table-zebra .table-hover}


Note: whether a cost is direct (Customer Portal/Invoice Calculation) or indirect (Engineering Department) depends on the cost object, not on the cost driver.

# Conclusion - Understanding Capacity

[Part 1](/2026/01/21/Making-Invisible-Developer-Work-Visible.html) gave us five ways to describe the purpose of engineering work. Here we've taken a first pass at accounting for the 
capacity consumed by that work, along with shared responsibilities that may never appear on the sprint board. We don't 
need a perfect record of every developer's day to start asking better questions about where the time goes.

We also haven't established whether that capacity was well spent. That's a separate question. Before we can get there, we 
should look more closely at the activities involved in engineering work, and what actually creates demand for them. That's 
where activity-based costing becomes useful in [Part 2B](/2026/10/24/Part-2B-Understanding-Activity-Based-Engineering-Costs.html).
