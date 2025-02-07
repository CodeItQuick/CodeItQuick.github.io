---
layout: post
name: What Separates a 10x Codebase from an Ordinary One?
description: 10x Developers are a Myth. Unlike 10x Codebases.
image: robot_zombie_big_idea.png
tags: quality all
---

# What Separates a 10x Codebase from an Ordinary One? (Reading Time: 6 minutes)

# The Myth of the 10x Developer vs. The Reality of the 10x Codebase

<p align="center" width="100%">
    <img src="/assets/images/mythic-zombie-and-graveyard.webp"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

Attributing the speed of a developer to that developer alone is a myth. Put a very fast developer into a slow codebase, 
and they’ll code slow. The only time these two factors meet is a fast developer in a codebase and an environment they can 
excel in. The biggest form factor available to coders is the codebase they work in. Having a codebase that is well 
maintained and easy to make changes is a worthwhile pursuit. It allows for everyone working in it to work faster despite 
their current ability level.

What kind of elements in a codebase cause a developer to slow down? If I have to edit behaviour in four places before it 
is “live” to the customer is one obvious case. The inverse of this is also true. Clumsy abstractions make it difficult 
to get features out. DevOps is another major factor to the speed a developer works in. So what defines a codebase to be 
10x versus 0.1x besides the nebulous and controversial “clean code”.

# The Core Traits of a 10x Codebase

<p align="center" width="100%">
    <img src="/assets/images/prestine-technically-advanced-graveyard.webp"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

## Readability & Simplicity: The Foundation of a Scalable Codebase

The mark of an exceptional coder is that the code is easy to understand. Often people expect the opposite. A smarter coders 
code is so exceptional no one else can understand it. The mark of “genius” is actually “extreme simplicity” not “overt complexity”.

Readers also understand the original intention of the code. Clear, descriptive names for variables, functions, and classes 
aide coding intention. Readability includes consistent naming patterns that match domain logic. The expert programmer 
prefers explicit over implicit logic. The expert coder makes it obvious what the code models assumptions are.

Expert coders also understand the need for abstraction or DRY concepts. They understand code duplication is necessary in 
this process. Sticking to single responsibility principle while offering library functions.

## Maintainability: Code That Can Evolve Without Breaking

Maintainable code is easy to debug and find errors. Proper error handling involves clear meaningful error messages. 
Structured logging and monitoring allows for regular tracking of errors within production. Unit and integration tests to 
catch error edge cases before reaching production. Acceptance tests ensure the code is workable before every release.

Maintainable code requires modularity and a separation of concerns. Loose coupling between concerns within these modules, 
and high cohesion within the classes. Predictable and consistent design patterns enable easier extension of the functionality.

What does developing faster actually look like? Code that can change when presented with a new idea is the mark of a very 
good codebase. These codebases enable  consistent and dependable addition of features. It’s not enough to push a new feature 
that works 85% of the time. The reality is even a 15% “not working” is a significant bug to the end user, especially given 
enough traffic.

Battling bugs is a failure state a codebase can exist in. High defect rates result in necessary rework on each feature 
produced. Large interruptions to planned work can occur due to the discovery of existing bugs. Constant firefighting within 
a codebase can hinder or halt progress. Leaving this state is necessary for true progress within the codebase.

## Developer Experience: A Codebase Engineers Love Working With

Developer experience can be a tough sell to the business. New language features and framework features are often targeted 
at developer productivity. The new features in the language itself allow for simpler expression of ideas.  Framework 
developments can improve factors including website performance. Its a “free upgrade” given you can upgrade to the newer 
version of the tooling.

## Automation & Tooling: Reducing Manual Effort

Developer’s control over their IDE and tools can result in huge productivity gains. Understanding refactoring shortcuts 
speed up developers and increase maintainability. Tests ensure that the code works to the new requirements. Introducing 
automation lowers the manual effort in maintaining the code. This general flow  speeds up the team overall.

## Performance & Scalability: Code That Grows With the Business

Codebases have to be fast and scalable once sales have begun. Its important that despite the data size of the customers 
it doesn’t affect their experience. Large customers or users cannot bring the application to a halt. The codebase also 
has to be able to handle a given amount of traffic. If the website is unreachable during peak times it will not sustain its user-base.

# The Pitfalls of an Ordinary (or 0.1x) Codebase

<p align="center" width="100%">
    <img src="/assets/images/dystopian-graveyard-disrepair.webp"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

## The “Ship Fast, Fix Later” Mentality

Quick fixes within a codebase can be some of the most guilty solutions of poor abstractions. It is faster to get the feature 
out than make the code maintainable in the process. It is possible to get the feature out, and then later clean things 
up later. The "duct-tape" programmer is great for prototyping new ideas. This programmer can find new markets and new 
products. This same programmer is weak at creating codebases that are easy to maintain and grow.

## Over-Engineering & Unnecessary Abstractions

A more maintainable solution will often look “over-engineered”. The problem with over-engineering is in the beginning. 
Premature optimization can run rampant. Often we don’t understand the problem enough early on. Good abstractions are 
created by duplicate functions.

## Poor Documentation & Tribal Knowledge

Poor documentation and tribal knowledge being necessary is a code smell. It shows the existing codebase, variable names, 
and class names do not describe the intent. Tests can act as a double re-assurance that the original intention is correct.

# How to Turn an Ordinary Codebase Into a 10x Codebase

## Start With Small, Incremental Improvements

Refactoring as we go is a key to keeping a codebase in at least as good a state as the current developers will allow. 
Improving the ability of the developers to produce readable, testable code. Improve the naming in the codebase. Create 
proper abstractions with smaller functions. Remove any dead code. Add meaningful error messages. Improve the logging of 
errors. These are all low-hanging fruit of improving a codebase. Gradual addition of code can create these improvements.

## Invest in Developer Productivity

Teach developers new ways of collaborative working. Introduce concepts such as pair programming, and ensembling. This 
improves communication is the real benefit of these changes. Automate the repetitive tasks involved, especially around tasks 
necessary to deploy. Developers must optimize their local development environment. Improve knowledge sharing and 
documentation through pair programming, ADRS, public documentation around APIs. Reduce the amount of tribal knowledge 
necessary to work in the codebase.

## Make Code Quality a Team-Wide Priority

Realizing the benefit of quality code has to be a high priority. Testing is often a focal point that allows developers 
to rally around automation. The more automated testing the quicker the team can release. Review all code at least once. 
Establish "definitions of done" and work to automate the quality checks.

## Conclusion: The Competitive Advantage of a 10x Codebase

The advantage of a 10x codebase is it aides developers in creating solutions. Do not let your competitors win this battle. 