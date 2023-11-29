---
name: What I get out of pairing?
description: Why pair? What learnings do I get?
image: video_game_zombies_2_instasize.jpg
---

## Agile - Scrum, The Parking Lot, and how to do tickets/stories

Lately I've been taking a story, which could be of the form: "As an accounting user, I can calculate my expenses from the department manager expense reports".

*Story Splitting*  
This story can quickly be scoped down, to "As an accounting user, I can view department managers expense reports".

*Generating Tickets In-Flight*  
We may further subdivide this story into implementation details. I still haven't worked out the how and why of this. Essentially it could be:

1. Create the view screen in the MVC app for the accounting user
2. Create the view screen in the Blazor app for the accounting user
3. Create the view screen in the Console app for the accounting user
4. Write the service layer + testing code for calculation of the manager's expense reports
5. Write Acceptance tests for the feature

*Scrum & The Parking Lot*  
Each of these tasks, if they are mapped to a PR, should be their own ticket on the sprint board. Then management can track as the PR flows through
the system. As needed, the developer can bring up issues in the "parking lot items" of the scrum meeting for review and clairification.

*PR Reviews*  
No nit-picking around. Only significant findings in a PR should be detailed: Items like deceptive naming, bugs in the code, very unreadable code, 
very unmanageable code, and missing requirements. Avoid trying to build quality into the PR after-the-fact. No trivial variable renames, etc.

*Definition of Done or Acceptance*  
Once the ticket is deemed "complete" by the developer, it passes into QA where they do testing, find any bugs, and then a decision is made on whether 
to fix these bugs and how many before release to prod/the next software release.

*Definition around deployment*  
Deployment is done to a dev environment repeatedly as the stories in implementation details are closed. Once the ticket is deemed finished, we move the ticket
into the testing environment. Once there is a critical mass of changes, the new site version will be released to production.

## Pair Programming
DEFINITELY NOT MANDATED. This is not subliminal messaging - you do as much or as little as you're comfortable with. I pair approximately 2-3 hours per day
maximum, to a maximum of 15 hours a week. Benefits include: One of the pair can take a vacation (the remaining pair can finish the task), information silos 
are gone, you learn way faster (pickup other good habits of coders on your team), code is more readable (the pair has to agree its readable), and you are effectively
getting the PR reviewed/building quality into the process while writing the PR.

## Mob Programming
So far I've only done this in terms of a learning-environment. Take pairing to the extreme, you learn from multiple developers at once, you get more context
about the codebase as you go, and you get group discussions on how to do the work/how things should be structured. For learning, spreading best practices, and reaching
group consensus this is the best of everything. I haven't done this in a manner to produce code, as I think the minimum of 4 devs needed to practice it isn't worth
the productivity losses.
