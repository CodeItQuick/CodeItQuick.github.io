---
layout: post
name: Beginner Heuristics of Testing
description: The article discusses the idea that while there are no strict guidelines to testing, especially for beginners, having a set of principles can help avoid common mistakes. 
image: beginner_guidelines_zombie_graveyard.webp
tags: theory all
---

# Caveat of the Heuristics Of Testing

I know, I know, you're certain there are actually no guidelines! This is true, there actually are no guidelines to testing, and
a matter of fact most things in life. However, to the beginner they want a simple perspective guideline to follow to help them
avoid the typical mistakes of a beginner. If you aren't sure if you are a beginner, you probably aren't. In all other cases
you are a beginner.  

Also, what is beginner to you might not be beginner to me. Everyone has different skill levels at many things. We both
don't know most things, and are both beginners at heart.  

# What is the definition of a heuristic?

The definition for heuristic is given by:

```text
    Proceeding to a solution by trial and error or by rules that are only loosely defined.
```

# The Guidelines

Here are the guidelines I can brainstorm up quickly:  
1. Minimize the number of asserts per test  
2. Avoid mid-test asserts, consider two separate tests instead  
3. Test suites should run in under 10 seconds    
4. Test first code tends to trend toward 100% test coverage, however 80% at the start is more than acceptable  
5. The test suite should be run every 5 minutes at the slowest    
6. No control statements in your tests  
7. Don't test what you don't own
8. If too many tests fail at once you've gone too fast, backup and try again with more frequent smaller changes

# The Rules of TDD

There are really only two rules of TDD:

1. To write production code a failing test must be written first 
2. Only write the simplest thing that will make the current test pass
4. Static methods are hard to test
