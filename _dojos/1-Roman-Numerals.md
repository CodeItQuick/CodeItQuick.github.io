---
name: Roman Numerals
description: Learn TDD/ensembling in a highly constrained environment
image: roman_numerals_kata_zombie.webp
tags: TDD ensembling beginner
url: https://github.com/swkBerlin/kata-bootstraps
layout: dojo
---

# Background


A kata is an exercise in karate that is practiced over and over again to get down a technique.
This is similar to the practice in software development, where a coding kata is meant to practice
particular techniques in code in a small sample problem. The gilded rose is a long since popularized
coding kata that involves refactoring. The idea behind it is to write a suite of tests, then refactor
the code to be readable and maintainable.

The specification for the kata is given below:
```
The Romans were a clever bunch. They conquered most of Europe and ruled it for 
hundreds of years. They invented concrete and straight roads and even bikinis. 
One thing they never discovered though was the number zero. This made writing 
and dating extensive histories of their exploits slightly more challenging, 
but the system of numbers they came up with is still in use today. For example 
the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters : I, V, X, L, C, D, M. (notice these 
letters have lots of straight lines and are hence easy to hack into stone 
tablets)

### Part I
The Kata says you should write a function to convert from normal numbers to 
Roman Numerals: eg

     1 --> I
     10 --> X
     7 --> VII
etc.

There is no need to be able to convert numbers larger than about 3000. (The 
Romans themselves didn’t tend to go any higher)

### Part II
Write a function to convert in the other direction, ie numeral to digit

Clues
* Can you make the code really beautiful and highly readable?
* Does it help to break out lots of small named functions from the main 
function, or is it better to keep it all in one function?  
* If you don’t know an algorithm to do this already, can you derive one 
using strict TDD?  
* Does the order you take the tests in affect the final design of your 
algorithm?  
* Would it be better to work out an algorithm first before starting with 
TDD?  
* If you do know an algorithm already, can you implement it using strict 
TDD?  
* Can you think of another algorithm?  
* What are the best data structures for storing all the numeral letters? 
(I, V, D, M etc)  
* Can you define the test cases in a csv file and use FIT, or generate 
test cases in xUnit?  
* What is the best way to verify your tests are correct?
```

# Learnings

This kata as meant as a guided introduction to TDD and its practices. Focus on how to introduce tests, following red-green-refactor.
Since the test order is largely self-determined (I, II, III, IV, etc.) the navigator/driver can focus more on the TDD flow and
less on the mechanics. Follow some of the TDD basics listed below:

## TDD Basics: Red Green Refactor
The TDD cycle is known as red-green-refactor. Red: write a failing test. Green: write the simplest thing that makes the test
pass (initially this is just a stub). Refactor: Reduce duplication while refactoring either test-code or production-code. No
behaviour changes allowed - in other words, the tests should continue to pass after this step.

## TDD Basics: Given/When/Then
The general format of writing a test is given, when, then. Give a certain setup, when I call a method/series of methods, then
I get some result. Often the given can get much too large, where test factories, builders, etc. can be used to reduce this. When
tends to be just a single method, and the assert should be a single assert ideally - sometimes we are testing properties, however,
where multiple asserts may be needed.

## TDD Basics: The Guidelines

These were brainstormed up quickly, not all apply directly to this kata (eg: 7 does not apply, as there are no dependencies):
* Minimize the number of asserts per test - Consider multiple tests if this occurs
* Avoid mid-test asserts, consider two separate tests instead
* Test suites should run in under 10 seconds
* Test first code tends to trend toward 100% test coverage, however 80% at the start is more than acceptable
* The test suite should be run every 5 minutes at the slowest
* No control statements in your tests
* Don't test what you don't own
* If too many tests fail at once you've gone too fast, backup and try again with more frequent smaller changes

# Goal of the Exercise

Learn the basics of TDD while converting roman numerals to the base-10 digit system.  