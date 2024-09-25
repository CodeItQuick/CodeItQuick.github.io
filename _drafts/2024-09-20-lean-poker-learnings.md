---
layout: post
name: Lean Poker Learnings
description: After taking a "code retreat" style lean poker, I reflect on the experience 
image: zombie-poker-playing-moonlight-lean-poker.webp
tags: agile all
---

# Lean Poker Learnings (First Draft)

- Marc noted that "the code is crap" but it doesn't matter, because (my interjection) I believe we can refactor it easily thanks to tests
- We would often go down a messy code route to try to get features out the door, and then be forced to refactor later to add a feature/actually progress as a result
- Other groups kept a higher code quality continually (or at least it appeared so)
- I also let go of some good coding practices fairly early (eg: pair programming, TDD at times, testing at times).
- Pair Programming: I was fine with each of us doing a day as we did this time, although I think we would have been more fresh if we swapped places. Not sure if it was a comfort thing on Marc's part.
- TDD: Dropping TDD for test after I think is just laziness/falling into bad habits on my part
- Testing: When we were really in trouble (losing by a lot) I think dropping our testing had lower risk, as our bought was broken anyways
- Testing: When we were winning, testing and deploying seemed very risky! What if we start losing afterall
- I somewhat wonder if this is just perceived risk/based on anything other than emotions.
- Skipping out on testing seemed like a non-option to me
- Skipping out on code quality was frequently done, in favour of developing our strategy. Maybe in error?
- The parsing/dealing with JObject was non-trivial and easily took 1-2 hours to complete, oof

# Further Thoughts
With regards to:  

- Testing: When we were really in trouble (losing by a lot) I think dropping our testing had lower risk, as our bot was broken anyways
- Testing: When we were winning, testing and deploying seemed very risky! What if we start losing afterall

I think this is the result of "everythings on fire" syndrome vs "everythings fine". When things are going
well people get comfortable in different ways, prehaps by being more cautious in deployments. When things are going
poorly all the sudden best practices get thrown out the window because we're losing money darn it! kind of thinking.
