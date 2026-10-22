---
layout: post
name: Part 1 - Making Invisible Developer Work Visible
description: Eliminate, automate, and delegate work to reclaim developer coding time.
image: iceberg_buckets.jpg
time: "3m:40s"
tags: developer-time all
featured: true
---

<div class="w-full text-center">
    <h1>Part 1 - Making Invisible Developer Work Visible</h1>
    <h6>(Reading Time: 3 minutes 40 seconds)</h6>
</div>

# Introduction: Engineering Work Beyond Features and Bugs

Building features and fixing bugs are easy to recognize as development work. However, engineers spend time on other activities
that are often not realized. Items like keeping systems running, improving how they work, and adapting them to changing requirements
also consumes engineering capacity. Without describing these responsibilities, we have a harder time discussing them with
the rest of the business.

# The Problem

Before we decide how to optimize our work, how to prioritize it, or what to work on, we need a common understanding of 
what the work is and what we are actually doing. Have you ever been given the difficult task: "What would you say... you do here" (Bob Slydell while interviewing Tom Smykowski in office space).
Just because every activity is visible does not mean every activity should be done. Have you ever wondered as a developer
why we are working on certaings, why do I spend so much time on testing, etc? Well this article series will answer those questions.
Finally, developers can have a discussion with the part of the business we affectionately call "the business" on where our
time should be spent.

# The Five Types of Engineering Work

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Build: Product Work**    
* Features    
* Enhancements    
* Experimentation    
* Product Polish    

**Fix: Restore Expected Behaviour**  
* Production Incident    
* Bugs    
* Defect Prevention    

</div>
<div class="iceberg-columns__text" markdown="1">

This is the obvious work that developers do. The feature that is shipped, the button enhancements, experimentation, and 
just overall product polish. All of these are important aspects of engineering and development, but they do not account
for the full range of engineering responsibilities.

</div>
</div>

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Run: Keep the existing system working**
* Monitoring   
* Incident Readiness
* Operational Maintenance   
* Backup And Recovery 

**Evolve: Adapt the system to changing constraints**
* Runtime Migration   
* Architecture Modernization
* Infrastructure Transitions
* Major Integration Changes

</div>
<div class="iceberg-columns__text" markdown="1">

Systems aren't an indepenent, isolated instance of a service. They have dependencies like everything else. Customers who
depend on them working, partners who rely on that infrastructure, and any other manner you reach an end consumer. Vendors
will retire services, dependencies lose support, and infrastructure requirements change. Sometimes (and frequently we do)
defer these changes for years. Judging during this time that they "aren't worth it". Evolve is the work of adapting an existing
system when those constraints change, at the right time, for the right reasons.

</div>
</div>

# The Work Behind the Work

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

* Testing Work  
* Coding  
* Testing
* Reviewing
* Research
* Designing
* Debugging
* Planning
* Communicating
* Documenting

</div>
<div class="iceberg-columns__text" markdown="1">

Consider updating a dependency in your node packages. The primary purpose may be to evolve, upgrading from Angular 10 
to Angular 22, but completing it could involve researching how to perform these upgrades, in addition to: coding, testing,
code review, deployment, and coordination. The upgrade is one piece of engineering work (which we mentioned in the previous section)
support by several activities (detailed in this section).

</div>
</div>


## The Engineering Iceberg

The iceberg represents how visible different kinds of engineering work may be to stakeholders. It does not represent
their relative cost, frequency, or importance.

<p align="center" width="100%">
    <img src="/assets/images/iceberg_buckets.jpg"  alt="Product Iceberg" height="512" width="512" />
</p>  

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Improve How It Works**
* Refactoring  
* Tech Debt  
* Performance Optimization  
* Reliability / Resilience  
* Security Fixes 
* Maintainability  

**Keeping Things Current**
* Dependency Upgrades  
* Compliance / Policy Work  

</div>
<div class="iceberg-columns__text" markdown="1">

Improve is work that makes an existing system easier, safer, or more efficient to operate and change. Sometimes that's a refactoring
of a critical system. Sometimes it performance improvements to allow for deployments to a larger number of devices. Other
times we are seeking better security, or improved reliability. The important distinction is that we are improving an existing
capability, rather than primarily introducing a new one.

</div>
</div>

# The Five Buckets of Work
## What Each Bucket Builds

These categories describe the primary purpose of engineering work, not rigid boundaries. A migration might improve performance,
reliability, maintainability all at the same time. The goal isn't to classify every activity perfectly; it's to make the work easier
to discuss.

| Bucket      | Primary Purpose                         | Example            |
| ----------- |-----------------------------------------|--------------------|
| **Build**   | Create or enhance a capability          | Add a feature      |
| **Fix**     | Restore expected behavior               | Resolve a defect   |
| **Improve** | Improve existing system characteristics | Reduce build time  |
| **Run**     | Keep systems operating                  | Monitor Production |
| **Evolve**  | Adapt to changing constraints           | Migrate Runtimes   |
{: .table .table-zebra .table-hover}

# Conclusion - The Iceberg

Build, Fix, Improve, Run, and Evolve give us five ways to describe what engineering teams are trying to accomplish. But 
knowing the work exists doesn't tell us how much time it consumes, whether it's worth doing, or what we should prioritize. 
Those are separate questions, and they start with making the work visible.
