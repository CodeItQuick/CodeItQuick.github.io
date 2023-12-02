---
name: My Journey Through TDD
description: Writing down a brief take on XP practices I believe in
image: green_purple_zombie_resized.jpg
---

# Beginner Phase

![Beginner Phase](/assets/images/confidence_vs_tdd_skill_level.png)  

## The Dark Ages (0 -> 5 Years)

For the first 5 years of my development career I didn't test anything. 0 Testing. I think this is due to **no testing culture where I worked**.
Then one day I went to a PEI Devs Meetup, and met JB Rainserberger (a well-known author in agile coaching, unit testing and in the ways of TDD).
He presented a lot of ideas that very much challenged my ways of thinking. I'm not supposed to EVER use a debugger? That's an anti pattern?
Frankly I was shocked at this proposal of working in a different manner, maybe even a little offended even.

I think in this stage a number of the common misconceptions and myths prevented me from even getting started on unit testing:
1. Testing takes too long and isn't worth it at all
2. I can only test simple coding examples
3. How do I know how to write all my tests before I write all my production code?
   
**Meanwhile at work:**  
Thank god I'm the only developer on staff.

## Beginnings (5 -> 5.5 Years)

![Beginner Phase](/assets/images/confidence_vs_tdd_skill_level.png)

One of the big issues with TDD and unit testing in general is the "learning curve". Honestly, after reading my story if there's one take-away you
get its **you need to have a coach if you're going to learn more about testing, otherwise you are wasting your time**. My testing journey wouldn't 
have started if I hadn't met characters like JB Rainsberger, and my now-coach in this story, JitterTed/Ted Young. I was also in a book club
with JB Rainsberger for years as well.

The book club began, and probably my biggest takeaway from our first set of books (including TDD By Example, Refactoring Legacy Code, OOP books, DDD,
and hexagonal architecture), was that tests should be:

1. Fast (< 10 ms, <150ms if database integration is involved)  
2. Isolated
3. Concise.

**Meanwhile at work:**  
The sky is falling, we have no customers, and whoever looks at this codebase would be horrified. Also what is up with this one terrible take on debugging
that just came out of nowhere. Did he misunderstand something?

# Advanced Beginner (5.5 -> 6 Years)

![Beginner Phase](/assets/images/confidence_vs_tdd_skill_level.png)
## Testing takes too long, it's not worth it

**Have you ever heard the expression testing takes too long? Well, in this phase, that was my issue** For the first three months of my unit 
testing journey I mostly... actually entirely... didn't write any tests exclusively at all. I worked on making my code more readable, and 
trying to form it in a manner where writing a test around the code was _possible_. Finally the day came,
where I decided to write a test. Just one short week later I had written my first test. I thought to myself, "What a complete failure that was".
Unperturbed, I continued to attempt to TDD/unit test for years later. I think even at this stage, if you asked me, I would probably say some
form of "I do TDD", or at the minimum, "Yes, I can test".

**Meanwhile at work:**  
No change - the sky is still falling. At least the horrified faces of my colleagues at my code has diminished. Testing only on side projects because
I'm just not there yet.

## TDD==UNIT TESTING==TEST COVERAGE 

All of my testing attempts were on side projects, with a very limited amount at work. If I wrote tests at work I probably would be immediately fired
for not churning out half a feature in 2 days. In this phase, I very much thought **TDD==Unit Testing==more test coverage**. The more tests I write 
the better, and once I achieve 100% test coverage I will have officially become a TDDer. This phase lasted about the first year for me when I finally 
was at the point I could write tests in production code. This is without "more modern" practices like pairing, ensembling (more on this later), etc. 
that vastly speed-up the learning process. I also thought at the time **every single thing needs a unit test. Test all the things**

This period is probably also the start of my "advanced beginner" stage. If I equated it to bowling, I could bowl in the high 90s, and cannot even
fathom it being possible to score over 250 in a single game. Sure, I'm better than the average "tester", but I am far from someone that codes
on high speed trading applications and the other areas of the world that have intensive testing. Some of the rules I think I developed due to
my own misunderstandings were:

1. Acceptance Tests:  E2E/Acceptance tests should never be written. I will incurr horrible maintenance costs, and massive time wasting will occur
2. Mocking: Mocking is similarly an evil that should be extinguished from this earth - wait do I still think this
3. Output of TDD: The better I TDD the higher my test coverage
4. Mechanics of TDD; Testing is a lot easier to do after the implementation is finished
5. Time invested in TDD: Testing is very time intensive. I'm going to need extra time on all my tasks to be able to test things. It's my managers fault. 

By the virtue of having a coach though, who had walked this path before, there are some anti-patterns people describe to me that I've never
even experienced. Probably because my coach refused to do some things that he knew would lead me down the "wrong road" so to speak. Afterall,
I was being taught clasically TDD without realizing there are disagreements even within the testing community. Some of these common complaints
include:

1. Mocking is very verbose and am I even testing anything with these unit tests?
2. I just delete the tests afterwards because they have no value in themselves
3. All the tests end up broken and I don't use them
4. E2E and integration testing is better than unit testing, because unit testing simply doesn't work

**Meanwhile at work:**  

Who the heck wants to work with this guy? He has strong, probably incorrect opinions. At least he produces OK code, and 
a few tests along the way, while taking ages to push code.

# The Ego Drop to Competence

![Beginner Phase](/assets/images/confidence_vs_tdd_skill_level.png)
## A Buildup of some knowledge (6 -> 8.5 Years)

The big hurdle that got me from "advanced beginner", or as more succinctly put "mount stupid", was the introduction of better collaboration.
Ensembling weekly I developed the skills to be able to TDD in the "correct" settings. This means code that
is brand new, has only seen TDD, and is only allowed to be TDD'd on. Forget your large untested production project, in the most pristine settings
I could now TDD. The same can be achieved in pairing arrangements, or, much later in time, through 3-4 person Dojo's run be even the grumpiest of developers.

Within the second year I started my journey of learning through "more modern" patterns, eg: a learning ensemble. Jitterted has run for the
last 2-3 years, A learning ensemble where 3-5 of us developers get together and TDD a blackjack game, code named "blackjack ensemble blue". 
Not to be confused with the orange version, that was on Thursday for a while and we did slightly more database testing. Through this period 
I mostly attempted to get tests around databases and APIs.

During this time I began to be able to TDD in this most extreme of scenarios. With 5 other people intently watching to make sure I don't break
the laws of TDD, I carefully learned how to write my tests first. I learned how to take small steps, carefully with tests, I was able to
refactor and rewrite code so that it was never actually broken at any stage. In a greenfield project, I could indeed do TDD, assuming I was in
an ensemble. The best I could do on work projects was to write tests after-the-fact. I did not have the ability to bring a codebase without tests
into the TDD realm.

The year's 7.5->8.5 in terms of testing I plateaued; learning less than the other time periods on the same topic.

**Meanwhile at work:**  
Well, the opinions are still strong, just slightly less offensive. At least he produces OK code, and a few tests along the way, and they no 
longer take weeks.

# Developing Proficiency

![Beginner Phase](/assets/images/confidence_vs_tdd_skill_level.png)
## "Oh No My Colleagues" phase (8.5 -> 10 Years)

About 3.5->4 years in I started working at a new place where testing had been ingrained for 10 years previously. I think my plateau'ing stopped
at this phase, mostly due to my colleagues having a different take on many subjects within testing. Many of the rules I had previously established
got changed or completely re-written as my ideals were challenged with theirs. These rules were:

1. Acceptance Tests: E2E/Acceptance tests definitely have a place in their part of the testing pyramid. I get requirements, and assurance my software works. Just be careful how many I write.
2. Mocking: OHHH that's why mocks are bad. These tests are very verbose and hard to read. However, mocking can be a good first-step in a legacy codebase
   that is very gnarly to test. Still, avoid them if you can
3. Output of TDD: To get better at TDD I need to get better at the **techniques** involved. HOW do I test this, and make the tests faster, and concise, while avoiding any interdependence among them.
4. Mechanics of TDD: Significantly easier to write the tests while I code. However, if the codebase is gnarly, I'm going to be writing them after.
5. Time Invested in TDD: Testing is very time intensive - I'm pretty sure I get my tasks done a lot faster than ever, and my tests are included in these pushes.
   If there is a time cost, its not very big.

**Meanwhile at work:**  
Coworkers for the most part are friends or very good terms with each other. We joke, write code, and get a lot of work done. There are also 
clearly a group of customers using our software.
