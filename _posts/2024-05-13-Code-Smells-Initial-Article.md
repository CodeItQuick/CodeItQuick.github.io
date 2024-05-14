---
layout: post
name: Refactoring, Code Smells, and Kata's Initial Thoughts
description: Gathering my thinking around code smells
image: zombie_in_a_graveyard_3_instasize.jpg
tags: smells
---

## Roman Numerals - TDD Introduction
Martin Fowler's Refactoring:   
- First Set
  1. Extract Variable
  2. Inline Variable
  3. Rename Variable
  4. Split Phase
- Organizing Data
  1. Replace Derived Variable with Query

## Gilded Rose - Refactoring Conditionals
Martin Fowler's Refactoring:
- First Set
    1. Extract Function
    2. Inline Function
    3. Extract Variable
    4. Inline Variable
    5. Encapsulate Variable
    6. Rename Variable
    7. Split Phase
Joshua Kerievsky's Refactoring To Patterns:
- Long Method  
  1. Composed Method (pg. 123)
  2. Move Accumulation to Collecting Pattern (pg 313)
  3. Replace Conditional Dispatcher with Command (pg 191)
  4. Move Accumulation to Visitor (320)
  5. Replace Conditional Logic with Strategy (129)
- Conditional Complexity
  1. Replace Conditional Logic with Strategy (129)
  2. Move Embellishment to Decorator (144)
  3. Replace State-Altering Conditionals with State (166)
  4. Introduce Null Object (301)
- Switch Statements
  1. Replace Conditional Dispatcher with Command (pg 191)
  2. Move Accumulation to Visitor (pg 320)

## Fantasy Battle - Encapsulation: Law of Demeter
Martin Fowler's Refactoring:
- Moving Features  
  1. Move Function  
  2. Move Field  
  3. Move Statements Into Function 
  4. Slide Statements Into Function
  5. Slide Statements
  6. Replace Inline Code with Function Call
- Encapsulation 
  1. Encapsulate Record
  2. Encapsulate Collection
  3. Replace Primitive with Object
  4. Replace Temp with Query
  5. Combine Functions into Class
  6. Extract Class
  7. Inline Class
  8. Hide Delegate
  9. Remove Middle Man
  10. Extract Function
  11. Substitute Algorithm
  

# List of refactorings
## First Set
- Extract Function
- Inline Function
- Extract Variable
- Inline Variable
- Change Function Declaration
- Encapsulate Variable
- Rename Variable
- Introduce Parameter Object
- Combine Functions into Class
- Combine Functions into Transform
- Split Phase
## Encapsulation
- Encapsulate Record
- Encapsulate Collection
- Replace Primitive with Object
- Replace Temp with Query
- Extract Class
- Inline Class
- Hide Delegate
- Remove Middle Man
- Substitute Algorithm
## Moving Features
- Move Function
- Move Field
- Move Statements Into Function
- Replace Inline Code with Function Call
- Slide Statements
- Split Loop
- Replace Loop with Pipeline
- Remove Dead Code
## Organizing Data
- Split Variable
- Rename Field
- Replace Derived Variable with Query
- Change Reference to Value
- Change Value to Reference
## Simplifying Conditional Logic
- Decompose Conditional
- Consolidate Conditional Expression
- Replace Nested Conditional with Guard Clauses
- Replace Conditional with Polymorphism
- Introduce Special Case
- Introduce Assertion
## Refactoring APIs
- Separate Query with Modifier
- Parameterize Function
- Remove Flag Argument
- Preserve Whole Object
- Replace Parameter with Query
- Replace Query with Parameter
- Remove Setting Method
- Replace Constructor with Factory Function
- Replace Function with Command
- Replace Command with Function
# Dealing with Inheritance
- Pull Up Method
- Pull Up Field
- Pull Up Constructor Body
- Push Down Method
- Push Down Field
- Replace Type Code with Subclasses
- Remove Subclass
- Extract Superclass
- Collapse Hierarchy
- Replace Subclass with Delegate
- Replace Superclass with Delegate
