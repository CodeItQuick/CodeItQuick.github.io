---
name: XP In Practice Thoughts
description: Writing down a brief take on XP practices I believe in
image: green_purple_zombie_resized.jpg
---

# Table Of Contents
1. Unit Testing & TDD
2. Acceptance Testing
3. Agile - Scrum, The Parking Lot, and how to do tickets/stories
4. Pair Programming
5. Mob Programming
6. Staff Vs Architect/Platforming

## Unit Testing

Unit tests should be: 1. Fast (< 10 ms, <150ms if database integration is involved) 2. Isolated 3. Concise. Practices
such as TDD are best done in pairing/mobbing environments initially as its a very hard practice to achieve from a discipline
point of view. After a sufficient amount of time (think years, not months, especially not weeks) you may be able to TDD on greenfield
projects. 

TDD'ing on brownfield projects takes even longer amounts of time, involves refactoring legacy code (code without tests),
and a number of techniques that are non-obvious to the user. Often legacy code is not very testable to begin with (as tests were not in
the programmers mind when writing the code). The primary problem in learning TDD is the ability to take small steps when coding.

A frequent practice to try to get more tests into the codebase is setting a mandatory "code coverage". Although this may be good or bad,
I'm not sure, the key in my mind is offering activities like pair programming, mobbing, and small coding dojo's to spread the knowledge
of how to TDD. I often see a knowledge gap in the how, more than the why should I do it, or in straight up discipline to do it. Although
discipline in coding is an ongoing problem.

Honorable mention to test-commit-revert here. Its essentially writing tests, and if they fail you revert all the code since the last commit.
Practicing/Trying this a couple times will get you more familiar in taking smaller steps.

Major advantages of TDD are the tests get written along with the code, there are fewer (but still there are some) bugs within the code,
and there is now a much greater ability to refactor. Large and safe refactors are possible within the codebase without strictly adheering to
automated refactoring to accomplish the same thing.

## Acceptance Testing

I always cringe a bit when I hear about acceptance testing. I think if Unit testing is done properly, these are not needed. All the same, they
have a side benefit of flushing out the requirements of a software system. Probably worth it, extremely time intensive, be careful how much
you invest into them.

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
Deployment is done to a dev branch repeatedly as the stories in implementation details are closed. Once the ticket is deemed finished, we move the ticket
into the testing environment.

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

## Staff vs Architect
"Architects", and specifically non-coding architects I had bad experiences with in the past. I found they tried to specify way too much implementation details of the ticket, 
and since code review was their only function they nitpicked way too much in PR reviews. Staff engineers and platforming engineering do code reviews, maybe some pair programming,
and help get the application to test/production with minimal downtime and risk.
