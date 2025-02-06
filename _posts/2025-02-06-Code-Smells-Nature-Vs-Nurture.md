---
layout: post
name: Code Smells Nature vs Nurture
description:  What causes your worst code?
image: spartan_zombie.webp
tags: quality all
---

# Introduction

Bad code is that codebase that keeps you up at night. As in you get support calls to fix the code. Bad code is full of 
god classes, and extra long methods. There is no concept of single responsibility principles. This article refers to bad 
code as that code which is "obviously bad". Meaning a junior developer to senior developer will want it rewritten. How 
does this code come into existence?

# The Nature Argument

## "I'm a bad developer with good habits" - Kent Beck

This quote by Beck says that coders are the cumulation of their good habits. Good developers understand bad habits, as 
well as good habits. Bad habits include failing frequent compiling, testing, or linting.

Good habits are the positive aspects of these three activities. Making use of the full power of the editor. Creating 
descriptive yet concise names within the code, and reducing duplication.

## Poor Early Architecture Choices, Over-engineering, Improper Optimization

Avoiding the "we need this later" syndrome is easier said than done. The pass the salt XKCD comic immediately comes to 
mind. Pass the salt, and do not generalize until it becomes  obvious. The same is true about architectural decisions. 
Reach for the smallest architecture that still solves the problem. Avoid the bloated solution, and seek the "KISS" 
(keep it simple stupid) solution.

## Poor understanding of knowledge-base

It takes a seasoned developer to understand the needs of a business problem. These habits take time to form. Proper 
understanding takes years to form. Developers must have both the breadth and depth of knowledge necessary. Do not skip 
discovery and analysis of the problem. Understanding the correct question to ask the user is important. The right 
question is as important as the answer.

# The Nurture Argument

## Tight Deadlines and Time Pressures

When software projects become large messes, blame is the first to rear its ugly head. Is the bad code the result of 
continued pressure from management? Have the requirements for the project shifted too many times? Is the code such a 
mess developers cannot add features? Is there no time for testing so the software is never operational?

The answers to these questions have to be  "no". I have only seen soft deadlines implemented in high performance 
situations. Where coders understand their abilities, and can produce solutions in timely fashions. Ever-increasing 
deadlines are not the answer for shoddy craftmanship.

## Lack of Collaboration

Developers going into their cave to then exit one day with the golden solution is an anti-pattern. Good development 
requires continual collaboration. Some of the solutions are frequent meetings, Standups, or Scrum Methodology. Golden-bullet 
solutions like "if only we weren't remote" are not a one size fits all answer. Good communication can exist in remote or 
in-person teams. It can exist in diverse or not-diverse teams.

# Why it matters?

In the past coders gave all the credit to the nurture argument. This is blame-shifting onto other people. Developers 
need to take more ownership of their habits. Through deliberate practice we can improve our craftmanship.