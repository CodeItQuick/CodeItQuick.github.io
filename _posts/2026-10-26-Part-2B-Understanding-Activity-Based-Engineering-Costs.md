---
layout: post
name: Part 2B - Understanding Activity-Based Engineering Costs
description: Understanding how engineering activities consume capacity and what creates demand for them.
image: iceberg_buckets.jpg
time: "2m:54s"
tags: developer-time all
series: developer-time
---

<div class="w-full text-center">
    <h1>Part 2B - Understanding Activity-Based Engineering Costs</h1>
    <h6>(Reading Time: 2 minutes 54 seconds)</h6>
</div>

# From Purpose to Activity

In [Part 1, Making Invisible Developer Work Visible](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), I introduced 
five purposes of engineering work: Build, Fix, Improve, Run, and Evolve. In [Part 2A](/2026/10/25/Part-2A-Understanding-Engineering-Capacity.html), 
we followed three developers through two sprints and accounted for 442 of their 480 hours. We could see which purposes and 
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
| Developer 1 | Release button to production           | Build              | Customer Portal      | 6                            | Direct Cost    |
| Developer 1 | Ensure button works                    | Build              | Customer Portal      | 55                           | Direct Cost    | 
| Developer 2 | Release hot fix                        | Fix                | Invoice Calculation  | 6                            | Direct Cost    |
| Developer 2 | Ensure hot fix works                   | Fix                | Invoice Calculation  | 61                           | Direct Cost    | 
| Developer 3 | Migrate database by creating test data | Evolve             | Engineering Platform | 74                           | Direct Cost    | 
{: .table .table-zebra}

# Hidden Costs - Invisible Development Work

| Person      | Task                                   | Activity Cost Pool | Cost Object          | Activity Cost Driver (Hours) | Classification 
|-------------|----------------------------------------|--------------------|----------------------|------------------------------|----------------|
| Developer 1 | PR Review                              | Fix                | Invoice Calculation  | 5                            | Indirect Cost  |
| Developer 1 | Scrum Meeting                          | Build              | Customer Portal      | 8                            | Overhead       |
| Developer 1 | Direct Messages                        | Build              | Engineering Platform | 6                            | Overhead       |
| Developer 2 | PR Review                              | Build              | Customer Portal      | 5                            | Indirect Cost  |
| Developer 2 | Scrum Meeting                          | Build              | Invoice Calculation  | 8                            | Overhead       | 
| Developer 3 | Direct Messages                        | Evolve             | Engineering Platform | 6                            | Overhead       | 
| Developer 3 | Migrate database by creating test data | Evolve             | Invoice Calculation  | 37                           | Indirect Cost | 
| Developer 3 | Migrate database by creating test data | Evolve             | Customer Portal      | 37                           | Indirect Cost | 
{: .table .table-zebra}

# Total Costs - Development Work

| Person      | Classification    | Hours | Rate | Total | 
|-------------|-------------------|-------|------|-------|
| Developer 1 | Direct Costs      | 61    | 75   | 4575  |
| Developer 1 | Indirect Costs    | 5     | 75   | 375   |
| Developer 1 | Overhead Costs    | 14    | 75   | 1050  |
| Developer 2 | Direct Costs      | 67    | 55   | 3685  |
| Developer 2 | Indirect Costs    | 5     | 55   | 275   |
| Developer 2 | Overhead Costs    | 8     | 55   | 440   |
| Developer 3 | Direct Costs      | 74    | 95   | 7030  |
| Developer 3 | Indirect Costs    | 0     | 95   | 0     |
| Developer 3 | Overhead Costs    | 6     | 95   | 570   |
{: .table .table-zebra}

# Department Total Costs 

| Cost Objects         | Direct Costs | Indirect Costs | Overhead | Total Cost |
|----------------------|--------------|----------------|----------|------------|
| Customer Portal      | 4575         | 275            | 600      | 5450       | 
| Invoice Service      | 3685         | 375            | 440      | 4500       | 
| Engineering Platform | 7030         | 0              | 1020     | 8050       | 
{: .table .table-zebra}

# Conclusion - Understanding Activity-Based Costs

[Part 2A](/2026/10/25/Part-2A-Understanding-Engineering-Capacity.html) told us where the team's capacity went. Here 
we've asked who that work was for. Most of the second sprint traces directly to the customer portal or the invoice 
calculation. The rest is reviews, meetings, and messages. Each one is small on its own, but they touch every developer 
and every cost object, and they rarely show up on a Jira board.

The database migration shows why the classification matters. Measured against the engineering platform, Developer 3's 
seventy-four hours are a direct cost. Measured against the customer portal and the invoice calculation, the same hours become 
an indirect cost, split thirty-seven and thirty-seven. The work didn't change. The question we asked did. And that even split is a 
choice we made, not something we discovered about how the work was done.

We now have a way to estimate what engineering work costs, and who it costs for. Whether the work is worth those 
costs is a separate question. In [Part 4 - The Four Ways to Reclaim Developer Time](/2026/10/17/Part-Two-The-Four-Ways-To-Reclaim-Developer-Time.html), 
we'll look at that hidden work and decide whether to eliminate it, automate it, delegate it, or turn it into self-service.