---
layout: post
name: Part 2 - Understanding the Value of Engineering Work
description: Understanding engineering work
image: iceberg_buckets.jpg
time: "6m:21s"
tags: developer-time all
series: developer-time
redirect_from:
  - /2026/10/27/Part-4-Understanding-Value-Of-Engineering-Work.html
  - /2026/10/26/Part-3-Understanding-Value-Of-Engineering-Work.html
---

<div class="w-full text-center">
    <h1>Part 2 - Understanding the Value of Engineering Work</h1>
    <p class="reading-time">Reading time: 6 minutes 21 seconds</p>
</div>

# From Purpose to Value

In [Part 1, Making Invisible Developer Work Visible](https://codeitquick.github.io/2026/01/21/Making-Invisible-Developer-Work-Visible.html), 
we introduced five different purposes of engineering work: Build, Fix, Improve, Run, and Evolve.

We now have a way to describe the work. But we haven't answered an important question: what value does that work actually 
produce? Consider a database migration. We can say that it's Evolve work, and we can see which systems benefit from it. 
That doesn't tell us why the migration was worth doing in the first place.

Maybe the existing database was approaching the end of support. Maybe the migration would improve performance. Maybe it 
would allow the organization to introduce new capabilities that weren't previously possible. Each of these represents a 
different reason for performing the same work. To understand engineering value, we need to look beyond what work is being 
performed and examine what the organization expects to gain from it.

# An Example Fictitious Company

We are working at a brand new startup. This company has just developed their MVP for the product, and like many startups, 
no one cared on the "release date". So we are facing several typical problems that a new company would face:
* No product-market fit - the product does not fit a customer need (ux/product/engineering problem) 
* No runway - we only have so many months to get customers (product/financing/engineering problem)
* No distribution channels for large numbers of sales (supply chain problem)
* Slow learning - the team builds the wrong thing, frequently (product/engineering problem)
* Unknown Pricing - we do not know how much to charge (product/accounting/sales/engineering problem)
* Premature Scaling - we build for scale prematurely (product/engineering problem)

# The Dimensions of Engineering Value

In the first section we classified the work type - Build, Fix, Improve, Run, Evolve. You can think of this as the supply-side
of the equation. From an engineering perspective, what types of work are we able to do? What about the demand-side of the equation?
Value-Based Software Engineering is a research program started by Barry Boehm in 2003. It has a few things to say about the demand side.
Well based on this research program, I broadly fit these into Value Perspective which is who is the stakeholder the work 
is for - Customers, Finance, Sales, Product Owner, etc. Then the value mechanism - protect existing sales, increase revenue/introduce 
new sales, reduce costs, or create more product options (think of this as product strategy). Finally, the expected benefit 
to the organization is the underlying **demand** for the work. The whole reason we are performing the action, and the more 
often we choose actions that benefit the organization as a whole, the more likely we are to succeed. Below are some examples 
of this model:

**Work Type x Value Perspective x Value Mechanism = Expected Benefit**

| Work | Work Type | Value Perspective | Value Mechanism | Expected Benefit | Startup Issue |
|------|-----------|-------------------|-----------------|------------------|---------------|
| Add an “invite a colleague” button to the customer portal | **Build** | Customer | Increase revenue | Pilot users can bring their teams into the product, giving the startup a chance to turn individual trials into paid team accounts. | Limited distribution |
| Fix the invoice calculation bug that blocks paid plans   | **Fix** | Sales | Increase revenue | Pilot customers can pay the prices they were quoted. The founder can see which quotes turn into actual purchases. | Uncertain pricing and blocked sales |
| Make the steps in the pilot signup flow configurable | **Improve** | Product | Reduce cost | The founder can try a shorter signup flow with the next group of pilot users without asking a developer to change the code each time. | Slow learning |
| Check the existing data import queue and retry failed imports before pilot sessions | **Run** | Customer | Protect existing value | Pilot customers can try the product with their own data during the session they set aside for it. | Pilot customers are dropping out before they get to use the product |
| Move off a database plan the provider is retiring and onto a cheaper managed plan sized for current usage | **Evolve** | Finance | Reduce cost | After the move, the startup spends less each month on hosting and burns through its cash more slowly. | Short runway and infrastructure sized for demand that hasn’t arrived |
{: .table .table-zebra}

# A Simplified Twelve-Month Plan

Ideally we want a plan that can be handed off to different teams/we'll say three developers. We want the general goals to 
be aligned, perhaps. Or at the very least we have to understand our domain-space. I also want the goal to be handed off in
it's entirety to the team for a 12 month period. Because that is really want is going to happen anyways, we need a team working
on the problem not just the CEO. In this case I have a training website for AI-Assisted Development. The site consists of 
three primary elements:

* Quizzes players can take that test their knowledge
* Lessons players can take that teach them something
* Metrics players can look at that measure their results

I can make a shortlist of possible features that may work:

* **Advent calendar** - a new challenge each day in December, to bring players back daily for one month
* **Daily challenge** - one challenge a day, the same for everyone, with a result players can share without spoiling the answer
* **Challenge a friend** - send today's challenge to a friend as a link and compare scores
* **Strengths card** - a shareable chart of a player's accuracy in each subject, like prompting, agents, or testing
* **Developer type** - a personality-style label from a player's answers, like "The Skeptical Reviewer"
* **Streaks and weekly recap** - a count of days played in a row, and a weekly summary of a player's best subject
* **Path certificate** - a badge for finishing a lesson path that players can add to their LinkedIn profile

I'm going to work from the general place that we want to developer an engineering-centric goal and a business-centric goal.
With no players besides myself on the website, building engagement would be the primary goal. The traffic element is a problem
for marketing really. So with that in mind I'm making three broad goals:

**Epic 1 (business): A daily challenge, the same for everyone**

Players come back each day to answer one shared challenge, and they share their result.
* A new challenge every day of the year, the same for every player
* A shareable result that doesn't spoil the answer
* Each challenge links to the lesson that teaches it
* Metrics: weekly returning players, shares per day, and lesson clicks from a challenge
* Stretch goal: challenge a friend, measured by friend challenges sent and played

The daily challenge isn't a fourth part of the site. It's a front door to the parts I already have:
* **Quizzes provide the content.** Each daily challenge is one question from the existing banks, put on a schedule.
* **Lessons provide the depth.** After answering, a "learn why" link opens the lesson that teaches the question.
* **Metrics measure the result.** Each answer records whether it was correct, and whether the player shared it or opened the lesson.

A player's path looks like this: daily challenge → share the result → "learn why" → lesson → that lesson's full quiz.
The daily challenge becomes the habit that brings people back, the quizzes become practice for players who want more,
and the lessons become the place the questions lead to. It's also why Epic 2 matters: every scheduled question is the
daily challenge for everyone on that day.

**Epic 2 (engineering): Every question can be trusted**

Every question is correct, clearly worded, and current, and the system proves it automatically.
* Each question links to the source that supports its answer
* Each question passes an automated wording check before it's scheduled
* Expired or flagged questions leave the schedule until someone reviews them
* Metrics: percent correct and flags for each question, bank health, and days of scheduled questions left

**Epic 3 (engineering): The site stays easy to change**

Any change, made by me or by an AI agent, can ship safely on the same day, at the end of the year just like at the start.
* Tests run on every change and finish in minutes
* A short architecture document describes how the site is built, agents read it before making changes, and every
  architectural change updates it
* Each architectural decision has a record of what was decided and why
* Metrics: time from change to deploy, test suite duration, and the number of changes that broke something

For both epics, the team decides what to build and in what order. Each piece of work names its Work Type, Value
Perspective, Value Mechanism, and Expected Benefit, so anyone can see why it exists.
