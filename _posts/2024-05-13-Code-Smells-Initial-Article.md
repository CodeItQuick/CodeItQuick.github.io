---
layout: post
name: Refactoring, Code Smells, and Kata's Initial Thoughts
description: The article highlights the importance of ingraining Martin Fowler's refactorings and consciously applying Joshua Kerievsky's refactoring patterns. It uses examples from "Roman Numerals," "Gilded Rose," and "Fantasy Battle" to illustrate these refactoring techniques.
image: smelly_zombie_graveyard.webp
tags: theory all
---

# Refactoring to Patterns  

The Martin Fowler's refactorings will have to be so ingrained they are automatic in my head.  
The Jushua Kerievsky's refactorings can be a conscious decision to refactor to I think.  

## Roman Numerals - TDD Introduction
TODO (Make Interactive Workshop):
1. Create a Presentation/Slide Show that explains the below
2. Have a guideline or something that allows for easy implementation of below (Step-by-step instructions? Test cases pre developed? Reference Material?)
3. Solve the problem using (1) and (2)
### Code Smell Sheet:
1. Switch Statement
2. Long Method
3. Large Class
4. Conditional Complexity

### Martin Fowler's Refactoring:   
- First Set
  1. Extract Variable
  2. Inline Variable
  3. Rename Variable
  4. Split Phase
- Organizing Data
  1. Replace Derived Variable with Query

### Joshua Kerievsky's Refactoring To Patterns:  
- Conditional Complexity
  1. Replace Conditional Logic with Strategy (129)
  2. Move Embellishment to Decorator (144)
  3. Replace State-Altering Conditionals with State (166)
  4. Introduce Null Object (301)
- Switch Statements
  1. Replace Conditional Dispatcher with Command (pg 191)
  2. Move Accumulation to Visitor (pg 320)

## Gilded Rose - Refactoring Conditionals  

### Martin Fowler's Refactoring:
- First Set
    1. Extract Function
    2. Inline Function
    3. Extract Variable
    4. Inline Variable
    5. Encapsulate Variable
    6. Rename Variable
    7. Split Phase  

### Joshua Kerievsky's Refactoring To Patterns:  

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
### Martin Fowler's Refactoring:
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
  
