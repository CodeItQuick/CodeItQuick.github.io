---
layout: post
name: TDD The Basics
description: Describes the TDD cycle, and a number of tips on how to improve your test code. The given/when/then format structures tests by setting up conditions, executing actions, and asserting results.
image: simple_zombie.webp
tags: theory all
---

## Red Green Refactor
The TDD cycle is known as red-green-refactor. Red: write a failing test. Green: write the simplest thing that makes the test
pass (initially this is just a stub). Refactor: Reduce duplication while refactoring either test-code or production-code. No
behaviour changes allowed - in other words, the tests should continue to pass after this step.

## ZOMBIES
A simple acronym for knowing how to test a variety of use cases within a system under test. The Acronym Stands for:
Z - Zero items within the user case
One - One items within the user case
Many - many items within the user case
B - Boundaries in the use case
I - Interfaces in the use case, construct any interfaces? Never fully understood this one
E - Exceptions in the use case
S - This one doesn't really mean anything, but rounds out the acronym

## Given/When/Then
The general format of writing a test is given, when, then. Give a certain setup, when I call a method/series of methods, then 
I get some result. Often the given can get much too large, where test factories, builders, etc. can be used to reduce this. When
tends to be just a single method, and the assert should be a single assert ideally - sometimes we are testing properties, however,
where multiple asserts may be needed.
