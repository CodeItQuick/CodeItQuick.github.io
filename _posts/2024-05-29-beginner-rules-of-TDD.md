---
layout: post
name: Beginner Rules of Testing
description: Gathering my thoughts on rules to give beginners
image: zombie_in_a_graveyard_3_instasize.jpg
tags: theory all
---

# Caveat of the Rules Of Testing

I know, I know, you're certain there are actually no rules! This is true, there actually are no rules to testing, and
a matter of fact most things in life. However, to the beginner they want a simple perspective rule to follow to help them
avoid the typical mistakes of a beginner. If you aren't sure if you are a beginner, you probably aren't. In all other cases
you are a beginner.  

Also, what is beginner to you might not be beginner to me. Everyone has different skill levels at many things. We both
don't know most things, and are both beginners at heart.  

# The Rules

Here are the rules I can brainstorm up quickly:  
1. Only one assert per test  
2. Follow ZOMBIES acronym when at the lowest layer of testing/directly against the class  
3. If your tests are complicated, your production code is complicated  
4. Tests must be fast! Eliminate all slow tests from your primary test suite  
5. Test coverage must be adequate! Above 80% is a reasonable goal  
6. Refactor your tests just like you refactor your code  
7. More tests make refactoring easier not more difficult  
8. Run the tests frequently; every 5 minutes is probably too slow.  
9. The vast majority of production code is not clean enough to test drive, until you get really skilled  
10. No control statements in your tests  
11. Avoid mocking frameworks. 
12. Stick to handwritten fakes, stubs, spies, etc.  
13. Your test suite should mirror the test pyramid - only a few e2e, some integration, many unit tests  
14. Pull out business logic from application logic, it makes it easier to test  
15. On every change run all the tests in your "fast" suite. Check for those nasty side effects!  
16. UX is very difficult to test. Try to pull out the business logic. Try to keep it as declarative as you can. 
17. There are many flavours to legacy code. Some of it will be easy to add tests (and is testable), others not so much.  
18. Static methods are hard to test  
19. Don't test what you don't own

# The Definitions 

A few simple definitions as well:  
TDD: You write the tests before the production code. You write code in terms of the customer rather than the consumer of the information.  
Legacy Code: Code that has no tests  
Legacy Systems: Code that is old and needs some more attention  
Mocks: Both a mocking framework and kinds of stubs, fakes, and spies. An easy way to add confusion to what you are using to test  
Fakes: Mimics the behaviour of the real thing  
Stubs: Hard-coded values  
Spies: Gives you an indication of the parameter that was passed to the function  
Encapsulation: Fields should be private, avoid most static methods. Think command/query not get/set with methods  
Property Bags/DTOs: Think getters/setters that clump like things together, and these objects have no inherent behaviour  
Fast Tests: Entire suite runs in seconds at the slowest, usually under 1 second for the entire suite

