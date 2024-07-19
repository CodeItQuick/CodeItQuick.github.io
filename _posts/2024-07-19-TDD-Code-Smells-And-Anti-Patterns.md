---
layout: post
name: TDD Code Smells And Anti-Patterns
description: Discussing the many code smells and anti-patterns that prevent TDD  
image: story_splitting_zombies.png
tags: TDD all
---

# The Smells and Anti-Patterns

## Verbosity
Very verbose and lengthy test cases that are hard to quickly (within 15 seconds) discern what they are doing
Very verbose and length methods in production code, that are hard to quickly (within 15 seconds) discern what they are doing
Techniques to reduce verbosity:
No Object-Mother Patterns are used
No Test Data Builders are used
Functions are too large (see verbosity), < 10 lines, 10-25 lines, 25-100 lines, 100 lines + could be the buckets
Functions are too complex (cyclo-complexity higher than 10)

## Performance
Tests are not divided into the necessary suites of unit, integration, e2e (note legacy code adoption should probably be e2e -> unit -> integration, while greenfield can be unit -> integration/e2e)
Test suites take minutes to hours to run for "unit" test suite (makes TDD impossible)
Mocks/Stubs/Doubles/etc. are not utilized appropriately to make test suite faster
Database Layer -> Fakes/Mocks/Stubs not used
API Layer -> Fakes/Mocks/Stubs not used
UI Layer -> Fakes/Mocks/Stubs not used (this one seems debatable? - UI layer is famously difficult to TDD/unit test)
There is no domain layer extracted from the codebase

## Software Design
CQS (Command Query Segregation) is not properly followed if following OOP
Pure functions are not used if Functional Approach is taken
Dependency Injection is not used
Classes and Objects are incorrectly coupled
Tests do not test the production code
Empty Asserts
Hidden Dependencies are common
Interfaces/Types are not correctly used

## Architecture
Hexagonal/Ports-and-adapters pattern is not used
No presence of a domain layer
Software behavior leaks into the database layer/UI/where it doesn't "belong"
Poor encapsulation/Coupling/Cohesion
Poor modularity
Poor boundaries between domain concepts (Value Objects, Entities, Aggregates, Bounded Context)
State not handled correctly

## Developer Knowledge/Lack of Knowledge in Testing
When to use Spies/Mocking/Stubbing/Fakes/Doubles/etc.
Techniques to speed up the tests
Refactoring Techniques
Take many smaller steps
Red/Green/Refactor

## XP Practices Used
I would use the definition of the rules provided at: http://www.extremeprogramming.org/rules.html

# The TDD Tool Belt
1. Red/Green/Refactor
2. Mocking -> Fakes, Spies, Test Doubles, Crash Test Dummies, Mocks
3. Dependency Injection
4. To write production code, you must write a test first
5. Pair Programming/Ensembling
6. Continuous Integration
7. Fast Test Suites
8. Concise Test Declarations
9. BDD Test Naming
10. OOP Principles
11. Testable Architectures
12. Understanding Refactorings
