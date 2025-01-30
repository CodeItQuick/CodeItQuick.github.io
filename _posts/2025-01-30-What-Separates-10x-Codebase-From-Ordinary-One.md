---
layout: post
name: What Separates a 10x Codebase from an Ordinary One?
description: 10x Developers are a Myth. Unlike 10x Codebases.
image: robot_zombie_big_idea.png
tags: quality all
---

# What Separates a 10x Codebase from an Ordinary One?

## Introduction: The Myth of the 10x Developer vs. The Reality of the 10x Codebase

Attributing the speed of a developer to that developer alone is a myth. Put a very fast developer
into a slow codebase, and he'll code quite slowly. Really the only time these two factors meet is
a fast developer in a codebase and an environment he can excel in. The biggest form factor available
to coders is the codebase they work in. Having a codebase that is well maintained and easy to make
changes in allows for everyone working in it to work faster despite their current ability level.
What kind of elements in a codebase cause a developer to slow down? If I have to edit behaviour in four
places before it is truly "live" to the customer is one obvious case. The inverse of this is also true,
if clumsy abstractions are made throughout the code its difficult to leverage existing code to more quickly
get the feature out. Devops is another major factor to the speed a developer works in. So what defines
a codebase to be 10x versus 0.1x besides just the nebulous and controversial "clean code".

# The Core Traits of a 10x Codebase
## Readability & Simplicity: The Foundation of a Scalable Codebase

The mark of an exceptional coder is that all coders of lesser skill can quickly and easily understand his
code. They also understand the original intention of coding something a particular way. Often people intuitively
expect the opposite. A smarter coders code is so exceptional noone else can understand it. Fortunately the 
mark of "genuis" is actually "extreme simplicity" not "overt complexity".

## Maintainability: Code That Can Evolve Without Breaking

What does developing faster actually look like? Code that can be changed quickly when presented with a 
new idea is the mark of a very good codebase. Also being able to consistently and dependably add features that
work is another mark. It's not enough to push a new feature that works 85% of the time. The reality is even
a 15% "not working" is a significant bug to the end user, especially given enough traffic.

## Developer Experience: A Codebase Engineers Love Working With

Developer experience can be a tough sell to the business or marketing portion of the organization. However,
new language features and framework features are often targetted at developer productivity. The new features
in the language itself typically allow for simpler expression of ideas that increase developer productivity
and maintainability. Framework developments can improve a number of factors including website performance, that
are just inherent in the upgrade. Its basically a "free upgrade" given you can easily upgrade to the newer
version of the tooling.

## Automation & Tooling: Reducing Manual Effort

Developer's control over their IDE and tools can result in huge productivity gains. Understanding refactoring
shortcuts to quickly move code around helps in increasing maintainabilty as the code is written. Tests ensure
that the code that is written now works to the new requirements, and that we haven't caused any side effects
that break existing code. The more automation we introduce the lower the manual effort in maintaining the code
and the quicker the team can move overall.

## Performance & Scalability: Code That Grows With the Business

Codebases have to be performant and scalable once sales have begun. Its important that despite the size of
the customers or organizations usage of the solution it doesn't affect their overall experience. This is easier
said than done, as increasing data needs can vastly change how the application has to be laid out. Data storage
can also be very expensive to maintain, and deciding how much data should reasonable be maintained at a certain
cost is a valuable exercise for an organization.

# The Pitfalls of an Ordinary (or 0.1x) Codebase
## The "Ship Fast, Fix Later" Mentality

Quick fixes within a codebase can be some of the most guilty solutions of poor abstractions. Adding a method
in a manner that allows to get the feature out quickly is often counter to re-crafting the codebase so that
it is maintainable. The answer to these problems can be somewhere in the middle - do the quick solution now, then
refactor to a better understanding of the problem set later.
## Over-Engineering & Unnecessary Abstractions

A more maintainable solution will often look "over engineered". The problem with over-engineering is really in the
beginning, where premature optimization could run rampent. Often we don't understand the problem enough initially 
to make arbitrary abstractions without first creating the duplication. 
## Poor Documentation & Tribal Knowledge

Poor documentation and tribal knowledge being necessary is a code smell that shows the existing codebase, variable names,
and class names do not adaquately desribe the intent of why something is coded in a particular manner. Tests can
act as a double re-assurance that the original intention of the code met the requirements at the time of building.
If both the code itself and the tests match how you expect it to be behave we can at least assume to our previous
current knowledge the code is written "correctly".
# How to Turn an Ordinary Codebase Into a 10x Codebase

## Start With Small, Incremental Improvements

Refactoring as we go is a key to keeping a codebase in at least as good a state as the current developers 
will allow. Improving the ability of the developers to produce readable, testable code will at least get
the codebase to a point where its maintainability is on an upward trend due to the new code introduced into
it. 
## Invest in Developer Productivity

Teach developers new ways of working that help them in working in a more collaborative environment. Introducing
concepts such as pair programming, and ensembling can give alternate ways of working that allow for better
communication within the team. This better communication is the real benefit of these changes, as developers
will now confront issues within the code more headon, earlier, faster, and respond more quickly.

## Make Code Quality a Team-Wide Priority

Realizing the benefit of high quality code, and how it is related to producing code more quickly has to be
a high priority to be in a better spot within codebases. Testing is often a focal point that allow developers
to rally around automation that improves the overall quality of the codebase. The more automated testing the
quicker the team can release high quality code that solves the problems the current customers have.

# Conclusion: The Competitive Advantage of a 10x Codebase

The competitive advantage of a 10x codebase is that it leverages its agility to better aide developers in
creating new and workable solutions faster for the customers. The competitive aspect of business means that
if your team cannot get their current solutions to a good maintainable state through craftmanship, then other
companies might. If your competitors reach maintainable code before you they will be more agile, more able to
accommodate changes, and better able to serve customer needs that request the use of your product. 
