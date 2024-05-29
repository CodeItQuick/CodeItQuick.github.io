---
layout: post
name: My Journey Through TDD
description: Writing down a brief take on XP practices I believe in
image: zombie_download_3.png
tags: theory all
---

# Beginner Phase (0 -> 5 Years)

For the first 5 years of my development career I didn't test anything. Then one day I went to a local devs Meetup, and met JB Rainserberger 
(a well-known author in agile coaching, unit testing and in the ways of TDD). He presented a lot of ideas that very much challenged my ways of
thinking).
   
# Learning Phase (5 -> 6 Years)
   
**Learning the mechanics of TDD was challenging, so I decided to seek the help of a coach.** I joined two book clubs, JitterTeds, and JB Rainsbergers. Ted began reviewing my
code and I finally got some feedback on code quality. At this point the learning began. It took at least half an hour to write a single test, 
with most tests taking hours to write. I worked on getting more test coverage on side projects, and only worked on testing on side projects as it was too 
much time investment for work code.

My first main takeaway was tests need to be:

1. Fast (< 10 ms, <150ms if database integration is involved)  
2. Isolated
3. Concise.
   
I think this is where I was on the variety of testing topics:

1. Acceptance Tests/BDD: No acceptances written as I was currently learning unit tests
3. Output of TDD: Higher test coverage is better
4. Mechanics of TDD; I could write tests 30 minutes->hours
5. Time invested in TDD: I was only working on unit testing on side projects

# Intermediate Phase (6 -> 8.5 Years)

During this period, I was able to unit test faster, with most tests being made in seconds to minutes. I could now TDD in new projects that 
hadn't been developed yet. I started attending a learning ensemble every week. There I learned the mechanics of how to write my tests first,
how to refactor code with unit tests, and how to design tests to be concise. I did plateau during this phase as my learning sources had not
changed in long enough.

# Collaboration Phase (8.5 -> 10 Years)

Here, I had new colleagues to challenge my ideas. They had informed opinions on testing, and we disagreed on several topics. Where I am at on a variety 
of testing topics:

1. Acceptance Tests/BDD: E2E/Acceptance tests have a place in their part of the testing pyramid. I get requirements, and assurance my software works. Just be careful how many I write.
2. Output of TDD: To get better at TDD I need to get better at the **techniques** involved. HOW do I test this, and make the tests faster, and concise, while avoiding any interdependence among them.
3. Mechanics of TDD: Significantly easier to write the tests while I code. However, if the codebase is gnarly, I'm going to be writing them after.
4. Time Invested in TDD: I only write unit tests if it makes sense from a time and cost perspective. 80-90% of the time I write unit tests, the other 10-20% of the time
it's not worth the investment.
