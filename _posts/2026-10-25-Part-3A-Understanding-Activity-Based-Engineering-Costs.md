---
layout: post
name: Part 3A - Understanding Activity-Based Engineering Consumption
description: Understanding how engineering activities consume capacity and what creates demand for them.
image: iceberg_buckets.jpg
time: "2m:54s"
tags: developer-time all
series: developer-time
redirect_from:
  - /2026/10/25/Part-2A-Understanding-Activity-Based-Engineering-Costs.html
  - /2026/10/26/Part-2B-Understanding-Activity-Based-Engineering-Costs.html
---

<div class="w-full text-center">
    <h1>Part 3A - Understanding Activity-Based Engineering Consumption</h1>
    <p class="reading-time">Reading time: 2 minutes 54 seconds</p>
</div>

# From Purpose to Activity

In [Part 1, Making Invisible Developer Work Visible](/2026/01/21/Making-Invisible-Developer-Work-Visible.html), I introduced 
five purposes of engineering work: Build, Fix, Improve, Run, and Evolve. In this article, we'll follow three developers 
through two sprints. Their sprint tables account for 424 of their 480 hours, and show which purposes and activities 
consumed that time, and which parts of the system it supported.

But those sprint tables only show the work somebody thought to write down. Releasing a button and checking that it works 
are easy to record. The pull request review before the release, the daily scrum, and the steady stream of coordination activities 
usually aren't. Neither is the fact that a database migration for the engineering platform is really being done on behalf 
of the customer portal and the invoice calculation.

In this article, we'll take the second sprint and ask who the work was for. We'll come back to where the time went 
in [Part 3B](/2026/10/26/Part-3B-Understanding-Engineering-Capacity.html). Some of it traces cleanly to a single feature 
or service. Some of it is shared, and some of it never made it onto the board at all.

# Direct Consumption

| Person      | Task                         | Activity Pool | Consumption Object   | Activity Driver (Hours) | Classification       |
|-------------|------------------------------|---------------|----------------------|-------------------------|----------------------|
| Developer 1 | Release button to production | Build         | Customer Portal      | 6                       | Direct Consumption   |
| Developer 1 | Ensure button works          | Build         | Customer Portal      | 47                      | Direct Consumption   | 
| Developer 1 | PR Review                    | Fix           | Invoice Calculation  | 7                       | Indirect Consumption |
| Developer 1 | Coordination                 | Build         | Engineering Platform | 20                      | Overhead Consumption |
{: .table .table-zebra}

We can see each developer is working on different elements of the system, but you can see how confusion might arrise sitting
in the shoes of each developer. Why is one dev working on the Customer Portal, another on an Invoice Calculation, and the third
doing background Engineering Platform work? Are there hours being ideally spent? Well, it's really hard to tell just looking
at the timesheets.

# Total Consumption - Development Work

| Person      | Direct Consumption | Indirect Consumption | Overhead Consumption | Total | 
|-------------|--------------------|----------------------|----------------------|-------|
| Developer 1 | 53                 | 7                    | 20                   | 80    |
| Developer 2 | 67                 | 5                    | 8                    | 80    |
| Developer 3 | 0                  | 64                   | 16                   | 80    | 
{: .table .table-zebra}

Developer 3 looks a lot like "DevOps" here, and we can probably think of indirect and overhead consumptions as the invisible
developer work from the first section.

# Department Total Consumption

| Consumption Objects  | Direct Consumption | Indirect Consumption | Overhead Consumption | Total Consumption (Hours) |
|----------------------|--------------------|----------------------|----------------------|---------------------------|
| Customer Portal      | 53                 | 37                   | 0                    | 90                        | 
| Invoice Calculation  | 67                 | 39                   | 8                    | 114                       | 
| Engineering Platform | 0                  | 0                    | 36                   | 36                        | 
{: .table .table-zebra}

This department total consumption provides a more executive-style view. What did we accomplish this sprint? Well we added
a button to the Customer Portal, and the Invoice Calculation now works properly so we are now more accurately billing our
customers.

# Conclusion - Understanding Activity-Based Consumption

Here we've asked who the team's work was for. Half of the second sprint traces directly to the customer portal or the invoice 
calculation. The rest is the migration, plus reviews, meetings, and messages. Each one is small on its own, but they touch every developer 
and every consumption object, and they rarely show up on a Jira board.

The database migration shows why the classification matters. Measured against the engineering platform, Developer 3's 
sixty-four hours are direct consumption. Measured against the customer portal and the invoice calculation, the same 
hours become indirect consumption, split thirty-two and thirty-two. The work didn't change. The question we asked did. 
We can only count those hours once, so the tables above use the second view. And that even split is a choice we made, 
not something we discovered about how the work was done.

We now have a way to see what consumes engineering effort, and who that effort is for. In [Part 3B - Understanding Engineering Capacity](/2026/10/26/Part-3B-Understanding-Engineering-Capacity.html), 
we'll step back and look at where the team's capacity went across both sprints.