---
name: Thoughts On Say Do Ratio
description: Organization my thoughts on the Say Do Ratio
image: video_game_zombies_2_instasize.jpg
tags: agile 
---

# Why track a Say/Do Ratio? What's the point?

The say do ratio is used to prevent spillover from stories/tasks in a single sprint. Its a ratio that
is meant to drive splitting stories or working in smaller incremental values.

# DEFINITIONS
User Story: A single chunk of work that is scoped down to the minimum possible increment that STILL has meaning to the user.
Example: If you are clicking a button and that triggers 10 microservices in the backend, the smallest unit of work is the button click
and whatever behaviour changes in reference to the user afterwards (Perhaps an email gets sent).

Technical Task: A single chunk of work divided from a user story that still delivers an incremental piece of value that still has meaning to a developer.
Example: If you are clicking a button and that triggers 10 microservices that are all in separate repositories, the incremental value unit will be at
least as big as 10 pull requests into each microservice (assuming these are separated).

Say/Do Ratio: A ratio made in an effort to size down or further split a unit of work - this could either be a User Story or a Technical Task. Story points
are supposed to be used to get the units. These should be "committed" status stories only in the numerator, and I believe all stories are the denominator.

Examples - User Stories:
Sprint Results 01/01/2024 (2 week increment):  
* User Story 1 (13 points): Spills Over  
* User Story 2 (8 points): Completed  
* User Story 3 (5 points): Completed  
Say Do Ratio: (5 points + 8 points) / (5 + 8 + 13) points = 50%  

Examples - Technical Tasks:  
Sprint Results 01/01/2024 (2 week increment):  
* User Story 1 (8 points): Spills Over  
* User Story 2 (5 points): Completed  
* User Story 3 (3 points): Completed  
Say Do Ratio: (5 points + 3 points) / (5 points + 3 points + 8 points) = 50%  

Observations:
1. User Stories are larger than technical tasks essentially by definition.
2. The largest technical task would be exactly equal to the user story.
3. User Stories are significantly harder to scope down without paying down technical debt in advance.
4. Technical Tasks almost always have further divisions that may not be useful, but can be made.
5. User Stories will have a single unit of work that is the minimum acceptable by product/sales,
   and it will be extremely difficult to scope down after that point.
6. User stories have direct value to the customer
7. Technical tasks are only value to the customer if treated in their groupings (user stories)
