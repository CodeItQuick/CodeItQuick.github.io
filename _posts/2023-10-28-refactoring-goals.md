---
layout: post
name: Refactoring Goals
description: In my blog article on good refactoring, I emphasized improving code structure without altering functionality, focusing on goals like readability, complexity reduction, and maintainability. I advised keeping changes small, using automated tests, and refactoring regularly, with clear objectives like simplifying logic, removing duplication, and optimizing performance.
image: refactoring_zombie_2.png
tags: theory all
---
# Refactoring Goals

## Should I even attempt the refactor?

Having been at my current place for 18 months, I've started taking on larger refactoring goals. Initially I don't think its very wise
to massively refactor a lot of the code. First, figure out the people, the code, what the organization does well/poorly, etc. Early on 
(like within the first 6 months->1 year) in a suitably large codebase you just haven't been exposed to all the methods they've attempted
in various parts of the codebase. You don't know their knowledge, and they don't know yours. 

Running in like the hero we sometimes in our head think we are, and rewriting the codebase is probably ill-advised. Think about it from 
your coworkers point of view, the new guy thinks he's a genius and trying to "fix" our "mistakes". Sure, its natural to want to "prove 
yourself", and I often find myself in this urge. However, it very much should be avoided. Take on tasks you think you can handle, 
trust/confidence in your abilities is something you build slowly.

So I played it somewhat safe (I'm sure certain people would disagree with this assertion however), discussing changes I thought could 
be made over months, until one day, it was the day. I was given the opportunity to refactor some of the code to be "my way" - or 
not really "my way", but an improvement over the current implementation. A clearly better implementation at that.

## When to refactor?

Here is my un-vetted list of good reasons to be given a large task to refactor in our codebase solution:
1. God Class: This class is much too large. Reducing the lines of your largest class by 1/2 or 2/3 has obvious value - now you aren't dealing with as much clutter.
2. Feature Envy: These methods or classes clearly don't belong here. Organizing the code better has value in that simplifications can later happen.
3. Develop the business/domain layer: A more rich domain allows code that is more maintainable, easier to reason about, and frankly you can just move faster.

In these bigger refactors the goal is to make the code maintainable, and be able to push features out easier in the future. We want main
functions of what we do to be easier to understand, easier to extend, and most importantly easier to add something that will ultimately
make the company more money. What do you make at work? money. So yes - the ideal place for these refactors is somewhere major that you may
touch often, or may be a critical function in your application. 

## Should we refactor it all?

There is bad code everywhere, in every organization, no matter how hard you try. Don't try to change it all to be perfect, just get the core 
of it correct. Avoid reworking or refactoring code that is on the fringes of your application and "just works" regardless. The core parts
of the website when obvious restructuring is needed, tackle those. Those areas have high impact on what you're doing and trying to achieve. 
Remember - we're out here to make more money.

## How can new theory help?

Reading Kent Beck's new book on "Tidy First", he has made me realize I do a bunch of mini-refactors in the course of every pull request.
These involve activities like making empty lines more logical, inlineing poorly-cohesive methods, extracting methods that are too much to read
at once, etc. I've included the list from his book released just a couple weeks ago below (Also highly encourage anyone to read the book): 

1. Guard Clauses
2. Remove Dead Code
3. Make Duplication Obvious
4. Reading Order
5. Cohesion Order
6. Explaining variables
7. Explaining constants

You'll notice none of the above is a particularly-large refactor. In fact, all but a couple can be done _without automated refactoring tools_.
These refactorings are very much my bread and butter. When given a feature, or improving old code, these are the ones I lean on all the time.
Larger concerns, like moving methods to where they belong, reducing class sizes, or improving the business layer maybe should be done in their
own task after much consternation on the applicability. I'm unsure honestly even on that.

Beck also introduces the timeline refactoring should happen, binning them into: never, later, after, first. The tidying first refactors are certainly
an example of "first" in my mind. For the code that you are concerned with, make as many tidying refactors as you can. The three methods I mentioned
above that, where we are fundamentally changing large portions of the code into a single area, these are the refactors for the other three bins -
anywhere from never doing them, to tidying right after we are done the feature.

## What to do during downtime

Sometimes when we are given tasks they may stall - either we need an answer from the client, we don't technically know how to do something and want
to bring it to the group of developers in the parking lot items, or for a variety of other caveats. During this downtime its good to add more tests, 
these are after-all the things we tend to skimp on when going gets tough, and we need to ship the feature. Making sure the current code works and is
functioning is a good use of downtime that pays off later - and saves us from skipping the work (likely unnecessarily). This downpayment we're making
into the codebase also allows us to do the large (and very fun) refactors later with confidence - we know the code works the same because the tests say so.

## Parting Words - Humbling Experiences

I will leave you with an aha! I had while getting a god class under control. I was inside a method, being given the obvious task to "improve it". The 
method suggested it should use generics and polymorphism. The obvious improvement was to make the generics work, use some polymorphism,
and poof! these three methods disappear at once! 

Well, in theory that sounds magical. In practice the guy before me knew all this, attempted to make the code better, and couldn't do it. I am truley 
no better than those who go before me - and I think its a trap to think that way. After time boxing my efforts for about an hour I realized I had gone down
the wrong path. I reverted all my proposed changes, and thought, what unique knowledge do I have that could improve this series of methods. I've read a lot
about domain driven design, separating business logic from application logic, and then it hit me. This method has business concerns intermingled with
application logic. I separated them, and although the fancy generics I could have gotten into never did emerge for me, I did succeed in teasing out
some important business logic. We can now move this to our domain area of our onion architecture, and continue our journey to a better more maintainable
codebase.

[Take me to the blog]({% link blog_list.md %})
