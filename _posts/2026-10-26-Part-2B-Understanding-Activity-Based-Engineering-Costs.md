---
layout: post
name: Part 2B - Understanding Activity-Based Engineering Consumption
description: Understanding how engineering activities consume capacity and what creates demand for them.
image: iceberg_buckets.jpg
time: "2m:54s"
tags: developer-time all
series: developer-time
---

<div class="w-full text-center">
    <h1>Part 2B - Understanding Activity-Based Engineering Consumption</h1>
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

# Direct Consumption, Indirect Consumption

| Person      | Task                                   | Activity Pool | Consumption Object   | Activity Driver (Hours) | Classification       |
|-------------|----------------------------------------|---------------|----------------------|-------------------------|----------------------|
| Developer 1 | Release button to production           | Build         | Customer Portal      | 6                       | Direct Consumption   |
| Developer 1 | Ensure button works                    | Build         | Customer Portal      | 55                      | Direct Consumption   | 
| Developer 2 | Release hot fix                        | Fix           | Invoice Calculation  | 6                       | Direct Consumption   |
| Developer 2 | Ensure hot fix works                   | Fix           | Invoice Calculation  | 61                      | Direct Consumption   | 
| Developer 3 | Migrate database by creating test data | Evolve        | Engineering Platform | 74                      | Direct Consumption   | 
{: .table .table-zebra}

# Hidden Consumption - Invisible Development Work

| Person      | Task                                   | Activity Pool | Consumption Object   | Activity Driver (Hours) | Classification       |
|-------------|----------------------------------------|---------------|----------------------|-------------------------|----------------------|
| Developer 1 | PR Review                              | Fix           | Invoice Calculation  | 5                       | Indirect Consumption |
| Developer 1 | Scrum Meeting                          | Build         | Customer Portal      | 8                       | Overhead Consumption |
| Developer 1 | Direct Messages                        | Build         | Engineering Platform | 6                       | Overhead Consumption |
| Developer 2 | PR Review                              | Build         | Customer Portal      | 5                       | Indirect Consumption |
| Developer 2 | Scrum Meeting                          | Build         | Invoice Calculation  | 8                       | Overhead Consumption | 
| Developer 3 | Direct Messages                        | Evolve        | Engineering Platform | 6                       | Overhead Consumption | 
| Developer 3 | Migrate database by creating test data | Evolve        | Invoice Calculation  | 37                      | Indirect Consumption | 
| Developer 3 | Migrate database by creating test data | Evolve        | Customer Portal      | 37                      | Indirect Consumption | 
{: .table .table-zebra}

# Total Consumption - Development Work

| Person      | Classification       | Hours | 
|-------------|----------------------|-------|
| Developer 1 | Direct Consumption   | 61    |
| Developer 1 | Indirect Consumption | 5     |
| Developer 1 | Overhead Consumption | 14    |
| Developer 2 | Direct Consumption   | 67    |
| Developer 2 | Indirect Consumption | 5     |
| Developer 2 | Overhead Consumption | 8     |
| Developer 3 | Direct Consumption   | 74    |
| Developer 3 | Indirect Consumption | 0     |
| Developer 3 | Overhead Consumption | 6     |
{: .table .table-zebra}

# Department Total Consumption

| Consumption Objects  | Direct Consumption | Indirect Consumption | Overhead Consumption | Total Consumption (Hours) |
|----------------------|--------------------|----------------------|----------------------|---------------------------|
| Customer Portal      | 61                 | 5                    | 8                    | 74                        | 
| Invoice Calculation  | 67                 | 5                    | 8                    | 80                        | 
| Engineering Platform | 74                 | 0                    | 12                   | 86                        | 
{: .table .table-zebra}

# Conclusion - Understanding Activity-Based Consumption

[Part 2A](/2026/10/25/Part-2A-Understanding-Engineering-Capacity.html) told us where the team's capacity went. Here 
we've asked who that work was for. Most of the second sprint traces directly to the customer portal or the invoice 
calculation. The rest is reviews, meetings, and messages. Each one is small on its own, but they touch every developer 
and every consumption object, and they rarely show up on a Jira board.

The database migration shows why the classification matters. Measured against the engineering platform, Developer 3's 
seventy-four hours are direct consumption. Measured against the customer portal and the invoice calculation, the same 
hours become indirect consumption, split thirty-seven and thirty-seven. The work didn't change. The question we asked did. 
And that even split is a choice we made, not something we discovered about how the work was done.

We now have a way to see what consumes engineering effort, and who that effort is for. Whether the work is worth that effort 
is a separate question. In [Part 4 - The Four Ways to Reclaim Developer Time](/2026/10/17/Part-Two-The-Four-Ways-To-Reclaim-Developer-Time.html), 
we'll look at that hidden work and decide whether to eliminate it, automate it, delegate it, or turn it into self-service.