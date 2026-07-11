---
layout: post
name: The Cost of Ignoring Invisible Development Work
description: What is the developer iceberg of work and how do we tackle it
image: iceberg_buckets.jpg
time: "9m:00s"
tags: quality all
---

<div class="w-full text-center">
    <h1>The Cost of Ignoring Invisible Development Work</h1>
    <h6>(Reading Time: 9 minutes 00 seconds)</h6>
</div>

# Introduction

Development teams rarely move out of the "build" mindset in later stages of development, or in crisis/migration situations.
The pain described in this article is frequent. Developers frequently fail to get important technical debt work prioritized,
which results in expensive migrations, technical debt paydown, or a difficult to change codebase later on. 

# The Problem

Developers often struggle to explain where their time goes to the product owners and business side of the equation. Business
stakeholders often see only "features" and "bugs", but developers know there's a lot more work involved. Furthermore, 
once the feature is built and fixed, there is still significantly more work to be done in terms of maintenance costs. What
are these other kinds of work we frequently forget about, and how can we clearly define them so they do get worked on?

# The Top of The Iceberg 
## Product Work & Fixing Things

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Product Work**    
* Features    
* Enhancements    
* Experimentation    
* Product Polish    

**Fixing Things**  
* Production Incident    
* Bugs    
* Defect Prevention    

</div>
<div class="iceberg-columns__text" markdown="1">

This is the obvious work that developers do. The feature that is shipped, the button enhancements, experimentation, and 
just overall product polish. Noone really debates the importance of this work, it's just that it's not the entire picture.
So while this work is extremely important, and perhaps we should even optimize for this type of work, it is not the entire
picture. 

</div>
</div>

# The Iceberg
## Business As Usual: Operations - Platform / Infrastructure Work, Architecture & System Evolution

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Platform / Infrastructure Work**
* DevEx / Tooling   
* CI / CD   
* Infrastructure Changes   
* Monitoring Operations   

**Architecture & System Evolution**
* Architecture Changes   
* Migrations   
* Integration Work   

</div>
<div class="iceberg-columns__text" markdown="1">

Once this work is in place and "complete" the tendency is to not iterate on it. But there is a hidden cost to never updating
pipelines, never changing database tables, or never making data migrations. The problem is eventually you will be bitten
by putting it off for so long. Circle-CI pipelines left to rot on an old version will eventually not work; node modules 
are eventually not supported anymore for Node v12, etc. Don't get stuck in a situation where a particular service is about
to be sunsetted and no longer offered; forcing an upgrade, or you lose the customer base.

</div>
</div>

## Table Stakes: Quality Work, Support & Collaboration, and Discovery & Planning Work

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Quality Work**  
* Testing Work  
* QA Support  
* Observability  

**Support & Collaboration**  
* Code Review  
* Debugging / Investigation  
* Documentation  
* Stakeholder Communication  

**Discovery / Planning Work**  
* Spikes / Research  
* Design  
* Backlog Grooming  

</div>
<div class="iceberg-columns__text" markdown="1">

Then there's the activities that are simply assumed to be necessary. The work has to be high quality; the software has to
work properly. So we build automated test suites, invest in our manual QA team, and verify everything that has shipped 
works in production, under load, for the largest of our customers. If the developers begin to sell this work as "extra"
it becomes a very real problem. Bake in the testing-time, stamping out bugs, and more as if it is "compile time". You don't
ask your boss whether you should compile the code or not; likewise, you shuoldn't have to ask permission to make certain
it's working correctly.

</div>
</div>


## The Never Addressed: Improve How it Works & Keeping Things Current

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Improve How It Works**
* Refactoring  
* Tech Debt  
* Performance Work  
* Reliability / Resilience  
* Security Work  
* Maintainability  

**Keeping Things Current**
* Dependency Upgrades  
* Compliance / Policy Work  

</div>
<div class="iceberg-columns__text" markdown="1">

Finally there is the true metaphorical bottom of the iceberg. The things we rarely have time for - large refactors or rewrites
of the system as it's use cases potentially change. Performance work to keep the solution generally scaling; making sure
the code base is easy to maintain, and not costly to make fixes or understand. As well as keeping the system up-to-date
in terms of dependency upgrades, compliance, policies, etc.

</div>
</div>

# The Five Buckets of Work
## What Each Bucket Builds

Understanding what capabilities each type of work builds helps you make strategic decisions about where to invest time.

| Bucket      | Primary Capabilities It Builds                          | 
| ----------- | ------------------------------------------------------- | 
| **Build**   | **Capability**, **Value delivery**, **Usability**       | 
| **Fix**     | **Correctness**, **Stability**, **Trust**               | 
| **Improve** | **Maintainability**, **Changeability**, **Testability** | 
| **Run**     | **Reliability**, **Observability**, **Operability**     | 
| **Evolve**  | **Scalability**, **Extensibility**, **Adaptability**    | 
{: .table .table-zebra .table-hover}

We tend to think in terms of only build/fix. It is an interesting observation that "fix" really goes along with every task
that is manageable. However, all of the activities under the iceberg have to be taken care of "eventually". Maybe they can
be put off for a year, five years, ten years, or even longer. However, eventually being on Python 2.7 will come to bite you,
even if it takes them 10+ years to sunset the language.

# Conclusion - The Iceberg
<p align="center" width="100%">
    <img src="/assets/images/iceberg_buckets.jpg"  alt="Product Iceberg" height="512" width="512" />
</p>  

The product iceberg, which is composed of the 5 kinds of work identified in this article, allows for us to succinctly understand
what kinds of work is available to be tackled. Since we have very limited time and budget in basically all development scenarios
(startups really are just an extra-extreme case), we have to decide what portions of development we cannot skimp on. We
also have to realize that a large amount of planning and design should go into all solutions we propose, and that 
not all developer time is deep-work coding activities.
