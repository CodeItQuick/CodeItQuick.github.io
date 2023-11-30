---
name: My Journey Through TDD
description: Writing down a brief take on XP practices I believe in
image: green_purple_zombie_resized.jpg
---

# The Dark Ages - Lets get down to debugging

For the first 5 years of my development career I didn't test anything. 0 Testing. I think this is due to **no testing culture where I worked**.
Then one day I went to a PEI Devs Meetup, and met JB Rainserberger (a well-known author in agile coaching, unit testing and in the ways of TDD).
He presented a lot of ideas that very much challenged my ways of thinking. I'm not supposed to EVER use a debugger? That's an anti pattern?
Frankly I was shocked at this proposal of working in a different manner, maybe even a little offended even.

I think in this stage a number of the common misconceptions and myths prevented me from even getting started on unit testing:
1. Testing takes too long and isn't worth it at all
2. I can only test simple coding examples
3. How do I know how to write all my tests before I write all my production code?

# Beginnings    

One of the big issues with TDD and unit testing in general is the "learning curve". Honestly, after reading my story if there's one take-away you
get its **you need to have a coach if you're going to learn more about testing, otherwise you are wasting your time**. My testing journey wouldn't 
have started if I hadn't met characters like JB Rainserberger, and my now-coach in this story, JitterTed/Ted Young.

The book club began, and probably my biggest takeaway from our first set of books (including TDD By Example, Refactoring Legacy Code, OOP books, DDD,
and hexagonal architecture), was that tests should be:

1. Fast (< 10 ms, <150ms if database integration is involved)  
2. Isolated
3. Concise.

## Testing takes too long, its not worth it

**Have you ever heard the expression testing takes too long? Well, in this phase, that was my issue** For the first three months of my unit 
testing journey I mostly... actually entirely... didn't write any tests exclusively at all. I worked on making my code more readable, and 
trying to form it in a manner where writing a test around the code was _possible_. Finally the day came,
where I decided to write a test. Just one short week later I had written my first test. I thought to myself, "What a complete failure that was".
Unpreterbed, I continued to attempt to TDD/unit test for years later. I think even at this stage, if you asked me, I would probably say some
form of "I do TDD", or at the minimum, "Yes, I can test".

## TDD==UNIT TESTING==TEST COVERAGE

Essentially all of my testing attempts were on side projects, with a very limited amount at work. If it takes a coder one week
to write a single test, there's no way he can really productively test at work. Totally out of reach of his current skillset. In this phase, I very
much thought **TDD==Unit Testing==more test coverage**. The more tests I write the better, and once I achieve 100% test coverage I will have officially
become a TDDer. This phase lasted about the first year for me when I finally was at the point I could write tests in production code. This is without "more modern" 
practices like pairing, mobbing, etc. that vastly speed-up the learning process. I also thought at the time **every single thing needs a unit test. Test
all the things**

This period is probably also the start of my "advanced beginner" stage. If I equated it to bowling, I could bowl in the high 90s, and cannot even
fathom it being possible to score over 250 in a single game. Sure, I'm better than the average "tester", but I am far from someone that codes
on high speed trading applications, and the other areas of the world that have intensive testing. Some of the rules I think I developed due to
my own misunderstandings were:

1. E2E/Acceptance tests should never be written. I will incurr horrible maintenance costs, and massive time wasting will occur
2. Mocking is similarly an evil that should be extinguished from this earth - wait do I still think this
3. The better I TDD the higher my test coverage
4. Testing is a lot easier to do after the implementation is finished
5. Testing is very time intensive. I'm going to need extra time on all my tasks to be able to test things. Its my managers fault.

By the virtue of having a coach though, who had walked this path before, there are some anti-patterns people describe to me that I've never
even experienced. Probably because my coach refused to do some things that he knew would lead me down the "wrong road" so to speak. Afterall,
I was being taught clasically TDD without realizing there are disagreements even within the testing community. Some of these common complaints
include:

1. Mocking is very verbose and am I even testing anything with these unit tests?
2. I just delete the tests afterwards because they have no value in themselves
3. All the tests end up broken and I don't use them
4. E2E and integration testing is better than unit testing, because unit testing simply doesn't work

# Year Two - A Buildup of some knowledge  

Within the second year I started my journey of learning through "more modern" patterns, eg: a learning ensemble. Jitterted has run for the
last 2-3 years, I honestly am not sure at this point its been so long, a learning ensemble where 3-5 of us developers get together and TDD 
a blackjack game, code named "blackjack ensemble blue". Not to be confused with the orange version, that was on Thursday for a while and we
did slightly more database testing. Through this period I mostly attempted to get tests around databases and APIs.

During this time I began to be able to TDD in this most extreme of scenarios. With 5 other people intently watching to make sure I don't break
the laws of TDD, I carefully learned how to write my tests first. I learned how to take small steps, carefully with tests, I was able to
refactor and rewrite code so that it was never actually broken at any stage. In a greenfield project, I could indeed do TDD, assuming I was in
an ensemble. However, in untested work code where I was on my own, that was simply not possible. I could still write my tests afterwards.

# Plateauing briefly

This phase marks the next 2-3 years of my journey. After being in the ensemble for a couple years now, I was able to start projects and begin
testing on my own. I had started to refactor legacy code, a book I had read about the practice probably 2 years previously. Two years ago, I figured
I could do this practice; however, that was not actually the case back then.

Honorable mention to test-commit-revert here. Its essentially writing tests, and if they fail you revert all the code since
the last commit. Practicing/Trying this a couple times will get you more familiar in taking smaller steps. It's not really meant as a way to work, and
I'd highly advise against doing that. However, for getting used to the rythmn of what TDD looks like when you have to fly solo, this was
helpful.

# Untested Code - or the "Oh No My Colleagues" phase

About 3.5->4 years in I started working at a new place where testing had been ingrained for 10 years previously. I think my plateau'ing stopped
at this phase, mostly due to my colleagues having a different take on many subjects within testing. Many of the rules I had previously established
got changed or completely re-written as my ideals were challenged with theirs. These rules were:

1. E2E/Acceptance tests definitely have a place in their part of the testing pyramid. I get requirements, and assurance my software works. Just be careful how many I write.
2. OHHH that's why mocks are bad. These tests are very verbose and hard to read. However, mocking can be a good first-step in a legacy codebase
   that is very gnarly to test. Still, avoid them if you can
4. To get better at TDD I need to get better at the **techniques** involved. HOW do I test this, and make the tests faster, and concise, while avoiding any interdependence among them.
5. Significantly easier to write the tests while I code. However, if the codebase is gnarly, I'm going to be writing them after.
6. Testing is very time intensive - I'm pretty sure I get my tasks done a lot faster than ever, and my tests are included in these pushes.
   If there is a time cost, its not very big.

Refactoring codebases that do not already have tests is significantly harder than testing code that has never seen tests before. Usually,
the code writer did not have test writing in mind when they built the production code. Luckily at work, my fellow coders have relatively
clean untested code. Experienced developers tend to produce code that is a bit more readable, a tad more maintainable, and more modulithic
like. This helps greatly.

Learning to test the database has taken a lot of work, and I would say I've only just begun now testing the API more thoroughly. Deciding between
hand-rolled fake databases, in memory databases, sqllite databases, and I honestly have never tried a full database on purely unit tests.
The main requirement above, for "fast" tests, as defined by the whole suite should be under 1s to run, is very hard to do. Mostly keeping
to .NET/C# in-memory options, wrapping the C#/NET database libraries in mocked dbsets, or sqllite in memory databases has gotten me to a
place where I am mostly happy with this testing.

A lot of coders I find would say refactoring is more difficult with tests. I think for them this is probably largerly true. What the tests
add in my case is as I refactor I know the code continues to work as I bring it through the various changes in structure. For un-tested code,
a coder can just YOLO a giant change through and break everything. They really don't initially understand, or even throughout the lifetime of
the refactor until the end, the extent to which they have changed the underlying behaviour of the code. Getting it to behave the same way
again is very difficult, and in-sets the "fear of change", especially in critical pieces of codebases.

## Acceptance Testing

I always cringe a bit when I hear about acceptance testing. I immediately build this image in my head, of an environment where people are 
trying to write as many end to end tests as possible at once. Think 100s or even 1000s of acceptance tests on a single website. The tests are
breaking, they are continually breaking, developers aren't paying attention, things get thrown over the fence. My brain is already racing
as such a thought.

I guess my day-to-day reality of acceptance tests is very different from this. We recognize the acceptance tests as the time intensive
never-ending time sync they are. So we don't write a ton of them, think under 50, frequently in the 30 range, for each codebase. We do our
best to condense these tests, and we stick to the "testing pyramid". Basically only a few acceptance tests to iron out the requirements in
our head and make sure the application is working on a day-to-day basis. All the complex logic and refactoring abilities are covered by
unit tests. The acceptance tests take hours to run, while the unit tests take milliseconds.


