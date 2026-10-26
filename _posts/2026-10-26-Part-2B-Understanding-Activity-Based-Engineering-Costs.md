---
layout: post
name: Part 2B - Understanding Activity-Based Engineering Costs
description: Understanding how engineering activities consume capacity and what creates demand for them.
image: iceberg_buckets.jpg
time: "9m:00s"
tags: developer-time all
series: developer-time
---

<div class="w-full text-center">
    <h1>Part 2B - Understanding Activity-Based Engineering Costs</h1>
    <h6>(Reading Time: 9 minutes)</h6>
</div>

# From Purpose to Activity

In [Part 1, Making Invisible Developer Work Visible](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), I introduced 
five purposes of engineering work: Build, Fix, Improve, Run, and Evolve. In [Part 2A](/2026/10/25/Part-2A-Understanding-Engineering-Capacity.html), 
we followed three developers through two sprints and accounted for 480 hours of work. We could see which purposes and 
activities consumed that time, and which parts of the system it supported.

But those sprint tables only show the work somebody thought to write down. Releasing a button and checking that it works 
are easy to record. The pull request review before the release, the daily scrum, and the steady stream of direct messages 
usually aren't. Neither is the fact that a database migration for the engineering platform is really being done on behalf 
of the customer portal and the invoice calculation.

In this article, we'll take the second sprint from Part 2A and ask a different question. Not where the time went, but 
who the work was for. Some of it traces cleanly to a single feature or service. Some of it is shared, and some of it 
never made it onto the board at all.

# Direct Costs, Indirect Costs

| Person      | Task                                   | Activity Cost Pool | Cost Object          | Activity Cost Driver (Hours) | Classification 
|-------------|----------------------------------------|--------------------|----------------------|------------------------------|----------------|
| Developer 1 | Release button to production           | Build              | Customer Portal      | 20                           | Direct Cost    |
| Developer 1 | Ensure button works                    | Build              | Customer Portal      | 60                           | Direct Cost    | 
| Developer 2 | Release hot fix                        | Fix                | Invoice Calculation  | 20                           | Direct Cost    |
| Developer 2 | Ensure hot fix works                   | Fix                | Invoice Calculation  | 60                           | Direct Cost    | 
| Developer 3 | Migrate database by creating test data | Evolve             | Engineering Platform | 80                           | Direct Cost    | 
{: .table .table-zebra .table-hover}

# Hidden Costs - Invisible Development Work

| Person      | Task                                   | Activity Cost Pool | Cost Object          | Activity Cost Driver (Hours) | Classification 
|-------------|----------------------------------------|--------------------|----------------------|------------------------------|----------------|
| Developer 1 | PR Review                              | Fix                | Invoice Calculation  | 1                            | Indirect Cost  |
| Developer 1 | Scrum Meeting                          | Build              | Customer Portal      | 1                            | Overhead       |
| Developer 1 | Direct Messages                        | Build              | Engineering Platform | 3                            | Overhead       |
| Developer 2 | PR Review                              | Build              | Customer Portal      | 1                            | Indirect Cost  |
| Developer 2 | Scrum Meeting                          | Build              | Invoice Calculation  | 1                            | Overhead       | 
| Developer 3 | Direct Messages                        | Evolve             | Engineering Platform | 3                            | Overhead       | 
| Developer 3 | Migrate database by creating test data | Evolve             | Invoice Calculation  | 40                           | Indirect Cost | 
| Developer 3 | Migrate database by creating test data | Evolve             | Customer Portal      | 40                           | Indirect Cost | 
{: .table .table-zebra .table-hover}

# Total Costs - Development Work

| Person      | Classification    | Hours | Rate | Total | 
|-------------|-------------------|-------|------|-------|
| Developer 1 | Direct Costs      | 80    | 40   | 3200  |
| Developer 1 | Indirect Costs    | 1     | 40   | 40    |
| Developer 1 | Overhead Costs    | 4     | 40   | 160   |
| Developer 2 | Direct Costs      | 80    | 20   | 1600  |
| Developer 2 | Indirect Costs    | 1     | 20   | 20    |
| Developer 2 | Overhead Costs    | 1     | 20   | 20    |
| Developer 3 | Direct Costs      | 80    | 60   | 4800  |
| Developer 3 | Indirect Costs    | 0     | 60   | 0     |
| Developer 3 | Overhead Costs    | 3     | 60   | 180   |

# Department Total Costs 

| Cost Objects         | Direct Costs | Indirect Costs | Overhead | Total Cost |
|----------------------|--------------|----------------|----------|------------|
| Customer Portal      | 3200         | 20             | 40       | 3260       | 
| Invoice Service      | 1600         | 40             | 20       | 1660       | 
| Engineering Platform | 4800         | 0              | 300      | 5100       | 

# Conclusion - Understanding Activity-Based Costs

[Part 2A](/2026/10/25/Part-2A-Understanding-Engineering-Capacity.html) told us where the team's capacity went. Here 
we've asked who that work was for. Most of the second sprint traces directly to the customer portal or the invoice 
calculation. The rest is reviews, meetings, and messages. Each one is small on its own, but they touch every developer 
and every cost object, and they rarely show up on a Jira board.

The database migration shows why the classification matters. Measured against the engineering platform, Developer 3's 
eighty hours are a direct cost. Measured against the customer portal and the invoice calculation, the same hours become 
an indirect cost, split forty and forty. The work didn't change. The question we asked did. And that even split is a 
choice we made, not something we discovered about how the work was done.

We still haven't shown the financial cost of supplying that capacity. Developer-hours aren't interchangeable in financial 
terms, and an allocated cost isn't always a cost we can avoid. That's where we'll go next in [Part 2C - The Financial 
Cost of Engineering Work](/2026/10/27/Part-2C-The-Financial-Cost-Of-Engineering-Work.html).