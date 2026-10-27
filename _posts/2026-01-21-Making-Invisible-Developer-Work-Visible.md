---
layout: post
name: Part 1 - Making Invisible Developer Work Visible
description: Accurately describe developer work
image: iceberg_buckets.jpg
time: "4m:04s"
tags: developer-time all
series: developer-time
featured: true
---

<div class="w-full text-center">
    <h1>Part 1 - Making Invisible Developer Work Visible</h1>
    <h6>(Reading Time: 4 minutes 4 seconds)</h6>
</div>

# Introduction: Engineering Work Beyond Features and Bugs

Building features and fixing bugs are easy to recognize as development work. However, engineers spend time on other activities
that are often not realized. Items like keeping systems running, improving how they work, and adapting them to changing requirements
also consume engineering capacity. Without describing these responsibilities, we have a harder time discussing them with
the rest of the business.

# The Problem

Before we decide how to optimize our work, how to prioritize it, or what to work on, we need a common understanding of 
what the work is and what we are actually doing. Have you ever been given the difficult task: "What would you say... you do here" (Bob Slydell while interviewing Tom Smykowski in office space).
Just because every activity is visible does not mean every activity should be done. Have you ever wondered as a developer
why we are working on certain things? Well this article series will describe the different kinds of work within the development cycle. 
Finally, developers can have a discussion with the part of the business we affectionately call "the business" on where our time should be spent.

# The Five Types of Engineering Work
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
{: .table .table-zebra}

<p align="center" width="100%">
    <img src="/assets/images/a_clean_high_resolution_technical_illustration_di_1.png" alt="Build, Fix, Improve, Run, and Evolve as gears in one engine" width="768" />
</p>

## Each Bucket in Detail

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
* Security Fixes

</div>
<div class="iceberg-columns__text" markdown="1">

This is the obvious work that developers do. The feature that is shipped, the button enhancements, experimentation, and 
just overall product polish. All of these are important aspects of engineering and development, but they do not account
for the full range of engineering responsibilities.

</div>
</div>

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Improve How It Works**
* Refactoring
* Tech Debt Remediation
* Performance Optimization
* Reliability Improvements
* Maintainability Improvements

</div>
<div class="iceberg-columns__text" markdown="1">

Improve is work that makes an existing system easier, safer, or more efficient to operate and change. Sometimes that's a refactoring
of a critical system. Sometimes it's performance improvements to allow for deployments to a larger number of devices. Other
times we are seeking better security, or improved reliability. The important distinction is that we are improving an existing
capability, rather than primarily introducing a new one.

</div>
</div>

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

**Run: Keep the existing system working**
* Monitoring   
* Incident Readiness
* Operational Maintenance   
* Backup And Recovery 

**Evolve: Adapting to Change**
* Runtime Migration   
* Dependency Upgrades
* Architecture Modernization
* Infrastructure Transitions
* Major Integration Changes
* Regulatory / Compliance Changes

</div>
<div class="iceberg-columns__text" markdown="1">
Run is the work required to keep existing systems operating. That includes monitoring, backup and recovery, and maintaining 
the infrastructure we depend on. Evolve is different: it's about adapting those systems when their surroundings or requirements 
change.

This includes everything from migrating unsupported dependencies to adapting existing systems to changing regulatory requirements.
Systems don't exist in isolation. They have dependencies, customers who rely on them, and partners who depend on their infrastructure. 
Vendors retire services, dependencies lose support, and infrastructure requirements change.

Sometimes we defer these changes for years because we judge that they aren't worth addressing yet. Evolve is the work of 
adapting an existing system when those constraints change, at the right time, for the right reasons.

</div>
</div>

# The Work Behind the Work

<div class="iceberg-columns" markdown="1">
<div class="iceberg-columns__list" markdown="1">

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

The five buckets describe what we're trying to accomplish. But they don't necessarily describe how we accomplish it. 
Whether we're building something new, fixing something broken, or modernizing an existing system, the work involves many 
of the same activities.  

Consider updating a dependency in your node packages. The primary purpose may be to evolve, upgrading from Angular 10 
to Angular 22, but completing it could involve researching how to perform these upgrades, in addition to: coding, testing,
code review, deployment, and coordination. The migration is one piece of engineering work, supported by several different 
activities.

</div>
</div>


# The Engineering Iceberg

## Why Some Work is More Visible
Building a feature produces something stakeholders can see. Fixing a production issue restores something that was broken. 
But improving maintainability, preparing for a migration, or keeping operational systems healthy may receive less attention 
because the benefits aren't always immediately obvious.

<p align="center" width="100%">
    <img src="/assets/images/a_detailed_cinematic_editorial_illustration_of_a_t_3_batch_2.png" alt="Build and Fix in the spotlight while Run, Improve, and Evolve work backstage" width="768" />
</p>

Visibility also depends on who the work is for. Some work traces directly to a single feature or service, like shipping a 
button for the customer portal. That's a direct cost. Some work is shared, like a database migration that supports several 
systems at once. That's an indirect cost. And some work, like meetings and direct messages, supports everything 
without belonging to anything in particular. That's overhead. The further work sits from a single feature, the further 
below the waterline it tends to sink.

## The Stakeholder Visibility of Work

The iceberg represents how visible different kinds of engineering work may be to stakeholders. It does not represent
their relative cost, frequency, or importance.

<p align="center" width="100%">
    <img src="/assets/images/wide_cinematic_infographic_style_illustration_of_4.png" alt="Iceberg of visible and less visible work" width="768" />
</p>

Note: The waterline represents stakeholder attention

# Conclusion - The Iceberg

Build, Fix, Improve, Run, and Evolve give us five ways to describe what engineering teams are trying to accomplish. But 
knowing the work exists doesn't tell us how much time it consumes, whether it's worth doing, or what we should prioritize. 
Those are separate questions, and they start with making the work visible.
