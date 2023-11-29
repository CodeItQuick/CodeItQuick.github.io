---
name: XP In Practice Thoughts
description: Writing down a brief take on XP practices I believe in
image: green_purple_zombie_resized.jpg
---

I initially discovered TDD through the book "TDD By Example" by Kent Beck, taught through a book club put on by Jitter Ted. I eventually,
over years I guess, came to the conclusion that good unit tests have three primary factors:  

1. Fast (< 10 ms, <150ms if database integration is involved)  
2. Isolated
3. Concise.

For the first three months of my unit testing journey I mostly... actually entirely... didn't write any tests exclusively at all. I worked
on making my code more readable, and trying to form it in a manner where writing a test around the code was _possible_. Finally the day came,
where I decided to write a test. Just one short week later I had written my first test. I thought to myself, "What a complete failure that was".
Unpreterbed, I continued to attempt to TDD/unit test for years later. I think even at this stage, if you asked me, I would probably say some
form of "I do TDD", or at the minimum, "Yes, I can test".

Essentially all of my testing attempts were on side projects, with a very limited amount at work. Essentially, if it takes a coder one week
to write a single test, there's no way he can really productively test at work. Totally out of reach of his current skillset. It was about
one year for me when I finally was at the point I could write tests in production code. This is without "more modern" practices like pairing, 
mobbing, etc. that likely vastly speed-up the learning process.

Within the second year I started my journey of learning through "more modern" patterns, eg: a learning ensemble. Jitterted has run for the
last couple years a learning ensemble where 3-5 of us developers get together and TDD a blackjack game, code named "blackjack ensemble blue".
Not to be confused with the orange version, that was on Thursday for a while and we did slightly more database testing. Through this period I
mostly attempted to get tests around databases and APIs.

Learning to test the database has taken a lot of work, and I would say I've only just begun now testing the API more thoroughly. Deciding between
hand-rolled fake databases, in memory databases, sqllite databases, and I honestly have never tried a full database on purely unit tests.
The main requirement above, for "fast" tests, as defined by the whole suite should be under 1s to run, is very hard to do. Mostly keeping
to .NET/C# in-memory options, wrapping the C#/NET database libraries in mocked dbsets, or sqllite in memory databases has gotten me to a
place where I am mostly happy with this testing.

Refactoring codebases that do not already have tests is significantly harder than testing code that has never seen tests before. Usually,
the code writer did not have test writing in mind when they built the production code. Luckily at work, my fellow coders have relatively
clean untested code. Experienced developers tend to produce code that is a bit more readable, a tad more maintainable, and more modulithic
like. This helps greatly.

A lot of coders I find would say refactoring is more difficult with tests. I think for them this is probably largerly true. What the tests
add in my case is as I refactor I know the code continues to work as I bring it through the various changes in structure. For un-tested code,
a coder can just YOLO a giant change through and break everything. They really don't initially understand, or even throughout the lifetime of
the refactor until the end, the extent to which they have changed the underlying behaviour of the code. Getting it to behave the same way
again is very difficult, and in-sets the "fear of change", especially in critical pieces of codebases.

What I've run into a lot in forum questions, work settings, and overall well-meaning managers is the tendency to improve testing through
a prespective means. This means initiatives like setting a given "code coverage" for a codebase. I think this is similar to trying to lose 
weight by ONLY setting a weigh loss target, and measuring your weight. Sure, its extreme, but its basically the same. People will try to
lose weight by drinking way less water, not consuming carbohydrates, or other similarly unhealthy activities. What you are actually looking for
is a change in the what - your weight - through the "how". What activities reduce someones weight? Well this is fairly well known, exercise,
and healthy eating. Significantly easier said than done, as someone who has been overweight for years now.

Honorable mention to test-commit-revert here. Its essentially writing tests, and if they fail you revert all the code since the last commit.
Practicing/Trying this a couple times will get you more familiar in taking smaller steps. This is a practice I attempted 2-3 years into my 
TDD journey that very much gave me good feedback and an excellent thought experiment in general. It's not really meant as a way to work, and
I'd highly advise against doing that. However, for getting used to the rythmn of what TDD looks like when you have to fly solo, this was
helpful.

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


