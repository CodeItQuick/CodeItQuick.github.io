---
layout: post
name: Part 2 - Understanding the Value of Engineering Work
description: Understanding engineering work
image: iceberg_buckets.jpg
time: "4m:53s"
tags: developer-time all
series: developer-time
redirect_from:
  - /2026/10/27/Part-4-Understanding-Value-Of-Engineering-Work.html
  - /2026/10/26/Part-3-Understanding-Value-Of-Engineering-Work.html
---

<div class="w-full text-center">
    <h1>Part 2 - Understanding the Value of Engineering Work</h1>
    <p class="reading-time">Reading time: 4 minutes 53 seconds</p>
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
* No product-market fit - the product does not fit a customer need (engineering problem)
* No runway - we only have so many months to get customers (financing/engineering problem)
* No distribution channels for large numbers of sales (supply chain problem)
* Slow learning - the team builds the wrong thing, frequently (engineering problem)
* Unknown Pricing - we do not know how much to charge (accounting/sales/engineering problem)
* Premature Scaling - we build for scale prematurely (engineering problem)

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

| Work                                                             | Work Type   | Value Perspective | Value Mechanism        | Expected Benefit                                                    |
|------------------------------------------------------------------|-------------|-------------------|------------------------|---------------------------------------------------------------------|
| Add a self-serve plan upgrade                                    | **Build**   | Customer          | Increase revenue       | Customers buy a higher plan without a sales call                    |
| Delete personal data at the legal limit                          | **Fix**     | Regulator         | Protect existing value | We pass the privacy audit and avoid a fine                          |
| Parallelize the test suite                                       | **Improve** | Engineering       | Reduce cost            | The suite runs in 5 minutes, not 40, so a change ships the same day |
| Renew the shipping carrier's API certificates before they expire | **Run**     | Partner           | Protect existing value | Orders keep reaching the carrier, so the carrier keeps our volume |
| Put the email sender behind a standard provider interface        | **Evolve**  | Business          | Create options         | The business can switch email vendors when prices change            |
{: .table .table-zebra}

# Relating Value to a Practical Example

I am going to introduce a practical example at this point. Three developers, one working on a new button on the customer portal,
a second working on a fix to the invoices, and a third performing DevOps work to upgrade the database. Fitting what these three
developers are doing into our value framework or "why are we working on this?" we get the following:

| Developer   | Work                                                       | Work Type   | Value Perspective | Value Mechanism  | Expected Benefit                                                                          | Company Problem                 |
|-------------|------------------------------------------------------------|-------------|-------------------|------------------|-------------------------------------------------------------------------------------------|---------------------------------|
| Developer 1 | Add an "invite a colleague" button to the customer portal  | **Build**   | Customer          | Increase revenue | Each early user can bring in their team, and we count how many do                         | No distribution, slow learning  |
| Developer 2 | Fix the invoice calculation bug that blocks paid plans     | **Fix**     | Business          | Increase revenue | Pilot customers can pay at two trial price points, so we learn what they will pay         | Unknown pricing, no runway      |
| Developer 3 | Migrate the database to a cheaper managed service          | **Evolve**  | Business          | Reduce cost      | Hosting costs drop, so the same cash lasts more months                                    | No runway, premature scaling    |
{: .table .table-zebra}

So although it may be unclear "Why these projects" exist to the developer's working on them, we can now start to formulate
a plan on how to position the company better in accordance with the market.