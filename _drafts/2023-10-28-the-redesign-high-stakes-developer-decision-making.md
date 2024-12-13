---
layout: post
name: Refactoring Goals
description: In my blog article on good refactoring, I emphasized improving code structure without altering functionality, focusing on goals like readability, complexity reduction, and maintainability. 
image: refactoring_zombie_2.png
tags: theory all
---

# The Redesign - High-Stakes Developer Decision-Making
## Should We Redesign?
Every developer has faced it. The decision to refactor, rewrite, or redesign. As a new programmer, should I vault into the
codebase and change everything? As a seasoned pro, is it time to finally dive in and fix that inherited method? These are 
big decisions of when and how to redesign, rewrite, and refactor. We will cover when to finally reach for the secret weapon,
the code redesign.

## What are your options: Refactor, Redesign, Rewrite

Refactoring has been around for a long time. It is the cheapest of the three alternatives. The definition of refactoring is
changing the internals of the code with no change in behaviour. Refactoring involves making the code slightly better as 
you go. It is the boyscout rule "leave it better than you found it". This practice is best learned from Martin Fowler's 
Refactoring book, as well as some other notable mentions in Joshua Kiervesky's Design Patterns, or other books that teach 
design concepts. Constantly looking for a slightly better way to write code has a lot of value.

Rewriting is often pitched as the be-all solution to our currently bad software. The classic example is a new developer is
introduced to a new codebase to him. He immediately declares it trash, to cast off any old developers, and let him rewrite
it from scratch. Other times, the codebase may have outlived its useful life, and it's time for a rewrite. This change is
often radical, and depending on the use case can cause a lot of havoc to the userbase.

The redesign is taking some old code and giving it the love it needs. It could or could not involve a change in behaviour. 
It's changing the overall structure of the code, refactoring old code that is rarely touched, and improving the overall 
maintainability of the codebase. Why should we choose redesigning over the other options? 

## Alternative: Why can't we quickly refactor it instead?

The adage "You don't ask your manager to compile" applies here. Essentially, we should write code the first attempt as cleanly
as possible. Before submitting the pull request, I make sure I've crossed all my tee's and dotted my i's. This includes
rewriting or redrafting sections that are incorrect, making sure my abstractions are good, and all the logic checks out.
That a comprehensive suite of tests is included so that I can make changes later easily if needed. This is when refactoring
works the best. Right after we've written the code, realized there's duplication, and need to eliminate this duplication.

This type of work is not what is inherent when large mistakes creep into the codebase. All of a sudden, it takes months to
fix the large decisions we made inadvertently. The time for refactoring is enough has already passed.

## Alternative: Why can't we just make a massive rewrite?

Well, if the codebase is trash why not just throw it out? The problem with this is there is a lot of inherent knowledge
within that codebase. Business decisions were made in the past that dictated the flow of the software. Users know how
the current system behaves. Also, moving the data from the current system to the new system is non-trivial. Migration is
going to be a painful process that maybe we should not introduce.

I have also seen rewrites go tragically wrong. Years after moving to the next version of the software it is still in tatters
and unfinished. The current developers really have no proof that just because they are writing a new system it will be 
inherently better. The best way to learn from your mistakes is to dig in and correct them. It's not to try to forget they
exist by writing a brand new codebase that will somehow be anemic of these decisions.

## The Choice: Am I ready to redesign?

There is a checklist of things that should happen in the developers head as they consider a redesign. Do they see large
problems in the codebase. Are the solutions to these problems obvious to them now, after years of practice. Are some of the
problems non-obvious? What is actually wrong in those sections of the code and how could they be solved. Are there sections
that are obvious duplicates of others, and how could this be eliminated by better code structure or design? Duplication is
the truest form of code smell. Most importantly, how hard is the current system to maintain. Is the team currently moving
slower than their competition simply because they are in a legacy system.

## Redesign Goals: What does success look like?

The most important part of a redesign is defining success. How do we know that now features will be churned out faster.
I think the clearest sign the codebase has improved is swaths of deleted code. We now get the same functionality with fewer
lines of code, which is inherently more maintainable. Other large changes could be adding better tests, more tests, fewer tests,
or just overall improvements that make changing the tests easier. The test suite is an integral part of being able to refactor,
so improvements in it will aid in the refactoring changes.

The checklist that should go through the developers head is does he really understand the codebases warts. How can he
differentiate between moving food around the plate versus a truly improved code structure. He has to convince other developers
that the new design is superior giving clear reasons why.

## Selling it to the business

If we've done our part on a clear goal for improvement to the codebase, the business need should logically follow. We will
now be able to push more features, add more functionality, or provide better support to our customers as a result of improved
developer experience. Developers can move more quickly in the codebase to further pile on features that our customers will
appreciate. The current features will now function correctly, function better, or provide more information than they did
previously. All of these are valid sales pitches for the new redesign.

## The Final Decision: Redesign or Not?

If you cannot answer yes to every question of, does this redesign delete code, does the redesign make it easier to produce
features, does the redesign make the codebase easier and faster to work in, then you are not ready for a rewrite. A final 
call has to be made. Taking into account your own experience level, the trust the team has in you to make good decisions,
and the overall health of the codebase.