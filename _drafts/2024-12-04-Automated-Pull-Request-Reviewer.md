---
layout: post
name: Automated Pull Request Reviewer
description: Outlining vision of providing feedback to pull requests  
image: robot_zombie_big_idea.png
tags: quality all
---

# What is the automated pull request reviewer primarily focused on?

First we have to define what it's not focused on. Mainly, we do not want to overlap with already readily available
tools for reviewing code. This includes linters, jetbrains code warnings, errors, syntax errors, etc. Other tools can
catch these bugs. The main things to focus on for this app are the following:

1. Readability of the code
2. Bad Code Abstractions
3. Relative complexity of the methods
4. Code Smells

## 1. Readability of the code

Similar to the hemingway app where a "readability" score is given as "Grade 9" or similar, we want an overall score for
how readable the code that was just generated is. I think the main facet of this is the clarity of variable names, function names,
etc. This can be done either through rules, or by using AI to give more subjective feedback.

The five levels of code readability:
1. Does Bare Minimum
2. Idiomatic
3. Tactical Use of Typing
4. Does not mix levels of abstraction
5. Speaks language of the business

The five facets of comprehensibility (in writing, i.e. readability):

1. ECONOMY: Only provide information relevant to your intent
2. ORDER: Reveal information in a progressive, logical way (i.e. control flow)
3. STRUCTURE: ... just go read Eats Shoots and Leaves
4. EMPHASIS: Ensure the most critical information isn't lost among supporting details
5. SIZE: Use the time and space you need

Three main variables for readability in english:
* words per sentence
* average grade level of words
* characters per word

See: https://en.wikipedia.org/wiki/Readability for a starting list of readability formulas

## 2. Bad Code Abstractions

Does this abstraction simply "move food around the plate" or is it a useful abstraction that hides what doesn't matter
while still exposing what does matter? How do we determine this? This would be another example of functionality that we'd
have some rules-based items to check along with using AI for more subjective feedback.

## 3. Relative Complexity of the methods

For now this would just be a comparison of the cyclo-complexity of the methods in comparison to the rest of the codebase.
This may be the easiest to implement depending on the availability of libraries that would already do the "math" for us.

## 4. Code Smells

Identifying code smells similar to above could be done through a rules-based process or AI-based process, depending.
