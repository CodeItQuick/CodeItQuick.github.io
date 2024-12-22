---
layout: post
name: The Redesign - High-Stakes Developer Decision-Making
description: The decision to refactor, rewrite, or redesign code. 
image: refactoring_zombie_2.png
tags: theory all
---

# The Redesign - High-Stakes Developer Decision-Making
## Should We Redesign?
Every developer has faced it. The decision to refactor, rewrite, or redesign. As a new programmer, should I vault into 
the code base and change everything? As a seasoned pro, is it time to finally dive in and fix that inherited method? These 
are big decisions about when and how to redesign, rewrite, and refactor. We will cover when to finally reach for the secret 
weapon, the code redesign.

## What are your options: Refactor, Rewrite, Redesign
Refactoring has been around for a long time. It is the cheapest of the three alternatives. Refactoring is changing the 
code's internals without altering its behaviour. This article has an unusually narrow definition of refactoring. It is the
"clean-up" work done during the course of a pull request, or adding code to the codebase. Refactoring is the extra 5-10 minutes
taken after writing something the first time a bit messy to improve it. Refactoring involves making the code better as you go. 
It is the boy scout rule "leave it better than you found it.". The practice is best learned from Martin Fowler's Refactoring 
book. Looking for a better way to write code has a lot of value. 

The definition for rewriting is entirely different. A rewrite is starting a brand-new repository and putting all the old code
into that repository. Then getting rid of the old repository. Rewriting is often pitched as the be-all solution to our 
currently bad software. The classic example is a new developer in a new code base. He immediately declares it trash, to 
cast off any old developers and let him rewrite it from scratch. Other times, the code base may have outlived its useful 
life, and it's time for a rewrite. This change is often radical, and depending on the use case, can cause a lot of havoc 
for the user base. 

The definition of redesign is going back and fixing accumulated tech debt. This is the tech debt that has built up over months,
or years. It's not as simple as in the refactoring case, where you are doing 5-10 minutes of cleanup. Large structural changes
that take weeks are necessary, and generally these changes have to be OK'd by the person in product. It could or could not 
involve a change in behaviour. Why should we choose redesigning over the other options? 

## Alternative: Why can't we quickly refactor it instead?
The adage "You don't ask your manager to compile" applies here. We should write clean code on the first attempt. Before 
submitting the pull request, I make sure everything looks correct. This includes rewriting or redrafting sections. Making 
sure my abstractions are good and all the logic works. I include a comprehensive suite of tests so that I can make changes 
later if needed. This is when refactoring works the best, right after we've written the code. We realized there's duplication 
and need to remove it. 

This type of work is not what is inherent when large mistakes creep into the codebase. Large inadvertent changes take 
months to fix. Refactoring is no longer solving the challenges in code.

## Alternative: Why can't we just make a massive rewrite?
If the code base sucks, why not throw it out? The problem with this is there is a lot of inherent knowledge within that 
code base. Business decisions made in the past dictated the flow of the software. Users know how the current system behaves. 
Also, moving the data from the current system to the new system is non-trivial. Migration is going to be a painful process 
that we should not introduce. 

I have also seen rewrites go wrong. Years after moving to the next version of the software, it is still in tatters and 
unfinished. The current developers have no proof the code base will be better with a rewrite. The best way to learn from 
your mistakes is to dig in and correct them. It's not to try to forget they exist by writing a brand-new code base that 
will somehow be anemic of these decisions.

## The Choice: Am I ready to redesign?
There is a checklist of things that should happen in the developer's head as they consider a redesign. Do they see large 
problems in the code? Are the solutions to these problems obvious to them now, after years of practice? Are some of the 
problems non-obvious? What is actually wrong in those sections of the code? Are there sections that are obvious duplicates? 
How could good software design help?

Duplication is the truest form of code smell. The most important metric is how hard the codebase is to maintain. Is the 
team currently slowed down by the current legacy system.

## Redesign Goals: What does success look like?
The most important part of a redesign is defining success. The team must code new features faster. The clearest sign the 
codebase has improved is swaths of deleted code. We now get the same functionality with fewer lines of code. This increases 
the code's maintainability. The test suite is another important part of the codebase.

Improving the testing suite makes refactoring easier. The developer should go through an internal checklist: Does he 
understand the codebase's warts? How can he do more than move food around the plate? He has to convince other developers 
that the new design is better by giving clear reasons why.

## Selling it to the business
Business needs should flow from the reasons for the redesign. We will now be able to push more features. Developers can 
add more functionality faster. The company can provide better support to our customers. The websites features will finally
all work. These are valid sales pitches for the new redesign.

## The Final Decision: Redesign or Not?
There is a mental checklist for the final decision. Does this redesign delete code? Does the redesign make it easier to 
produce features? Does the redesign make the codebase easier and faster to work in? Yes to a few of these questions is 
enough to redesign the code. Taking into account three things: Your own experience level, the trust the team has in you,
and finally, the health of the codebase.