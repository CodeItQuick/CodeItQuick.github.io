---
layout: post
name: My Journey Through TDD
description: In the first five years of my development career, I didn't test anything. Over the next 2.5 years, I improved my testing speed and techniques, plateauing due to stagnant learning sources.
image: zombie_journey_through_tdd.webp
time: 2 minutes 41 seconds
tags: theory all
---

# TDD Journey 
<h6>(Reading Time: 2 minutes 41 seconds)</h6>

<p align="center" width="100%">
    <img src="/assets/images/zombie_beginner.png"  alt="Beginner Zombie First Form" height="512" width="512" />
</p>  

# Beginner Phase (0 -> 5 Years)

For the first 5 years of my development career I didn't test anything. Then one day I was introduced to the concept at a
local developer meetup. The introduction to TDD had a strong effect on me as I could tell the presenter was a very strong
coder who had learned some "more advanced" ways of working.

I think this stage is characterized for me by:

* Unaware it exists
* Closed off from opinions in TDD
* Actively argue against it existing/being able to be done
* Thinking it cannot be applied everywhere
* Thinking it's an inferior way of coding
* Thinking the people who TDD are dogmatic zealots who must do it everywhere
   
# Learning Phase (5 -> 6 Years)

<p align="center" width="100%">
    <img src="/assets/images/zombie_beginner_two.png"  alt="Beginner Zombie Second Form" height="512" width="512" />
</p>  

**Learning the mechanics of TDD was challenging, so I decided to seek the help of a coach.** I joined two book clubs. 
I began having my code reviewed and I finally got some feedback on code quality. At this point the learning began. It 
took at least half an hour to write a single test, with most tests taking hours to write. I worked on getting more test 
coverage on side projects, and only worked on testing on side projects as it was too much time investment for work code.
   
I think this is where I was on the variety of testing topics:

* Acceptance Tests/BDD: No acceptances written as I was currently learning unit tests
* Output of TDD: Higher test coverage is better
* Mechanics of TDD; I could write tests 30 minutes->hours
* Time invested in TDD: I was only working on unit testing on side projects

A big characteristic of the beginner phase is I didn't believe yet that testing was worth it from a time perspective.

# Intermediate Phase (6 -> 8.5 Years)

During this period, I was able to unit test faster, with most tests being made in seconds to minutes. I could now TDD in 
new projects that hadn't been developed yet. I started attending a learning ensemble every week. There I learned the 
mechanics of how to write my tests first, how to refactor code with unit tests, and how to design tests to be concise. 
I did plateau during this phase as my learning sources had not changed in long enough.

At the intermediate stage I started to see good arguments for testing, and thought it had its place in special circumstances.

# Collaboration Phase (8.5 -> 11 Years)

<p align="center" width="100%">
    <img src="/assets/images/final_form_zombie.png"  alt="Zombie in the final form" height="512" width="512" />
</p>  

Here, I had new colleagues to challenge my ideas. They had informed opinions on testing, and we disagreed on several topics. 
Where I am at on a variety  of testing topics:

1. Acceptance Tests/BDD: E2E/Acceptance tests have a place in their part of the testing pyramid. I get requirements, and assurance my software works. Just be careful how many I write.
2. Output of TDD: To get better at TDD I need to get better at the **techniques** involved. HOW do I test this, and make the tests faster, and concise, while avoiding any interdependence among them.
3. Mechanics of TDD: Significantly easier to write the tests while I code. However, if the codebase is gnarly, I'm going to be writing them after.
4. Time Invested in TDD: I vastly prefer to write tests in all scenarios, and the question is whether to TDD the tests or not.

At the collaboration stage the team heavily tested, and I began to believe the time investment was well worth it in the medium to long run.
I actively dislike not adding tests since I think short-term payoff is little to none.




