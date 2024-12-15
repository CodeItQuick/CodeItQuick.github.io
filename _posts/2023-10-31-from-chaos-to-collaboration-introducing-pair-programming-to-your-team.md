---
layout: post
name: From Chaos to Collaboration - Introducing Pair Programming to Your Team
description: In my article on pair programming, I discussed how two developers work together, with one coding and the other reviewing.  
image: what_pairing_zombie.png
tags: agile all
---
# From Chaos to Collaboration - Introducing Pair Programming to Your Team
<p align="center" width="100%">
    <img src="/assets/images/zombie_shoulder_surfing.png"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

## Introducing Solo Development Chaos
Typical development is rather chaotic. Developers go off for one to two weeks at a time working on a ticket. They open
a pull request at the end of the process, get feedback, and then incorporate it. In the worst cases the feedback is so 
negative or their direction so wrong the entire pull request has to be scrapped. How do we stop checking our work at the
last possible moment? How do we increase communication among team members? Most importantly, how do we change our development
habits so that team members aren't constantly at each other's throats?

## Creating Collaboration
Developers working in a collaborative pair-program focused environment is entirely different. Friendships or strong coworking
relationships are born. Communication between developers becomes easy and flows naturally. Pull requests are still opened,
but continual feedback is given on the code throughout the process. By the time the final check happens only a few cursory
issues are found. This environment is ideal for opening up new ways of working, and is the place we all want to work at.

## How Pair Programming Works
<p align="center" width="100%">
    <img src="/assets/images/engineer_zombie.png"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

There are two roles while pairing, navigator and driver. The analogy follows from driving a car, where the driver operates
the vehicle and the navigator provides directions. The driver and navigator take turns, typically lasting 15 minutes at a 
time. This can be achieved by having a 5-minute timer for coding only, where it is stopped anytime general discussions happen.
The simpler method is to just have a 15-minute continuous timer. If there is any resistance, tend towards the latter solution.
Daily sessions typically last between one and three hours. Any lower than this and developers are running around solo too
much. If higher time-wise sessions are attempted, developer burnout can be a frequent problem.

Quite frequently the driver will have minor disagreements about the way the problem is being tackled. These type of 
objections, sometimes called "nits" in pull request reviews, should largely be kept internal until the full solution is 
flushed out. However, large objections about the general direction of the process have to be discussed. When this happens 
it's important to stop everything and decide as a pair what is the general solution to the problem.

## Introducing the Path to Collaboration
Introducing the practice can be quite difficult and met with a significant amount of resistance. Generally, frame the activity
as an experiment for different ways of working. Put a time limit on it, which should be at least two weeks. It takes
quite a while to completely figure out the forms of pair programming that will work for the team. Success in pair programming
does not mean the team will be pairing 100% of the time 8 hours a day. Often, pair programming success looks a lot different.
In my case, we pair 1-3 hours a day, and frequently there is no coding involved. We are frequently doing other practices that
would be more aptly dubbed "a daily meeting" than anything else.

## Team Roles, Tools, and Tech
There are online timers available, including at the website mobti.me. It is easiest and simplest, especially at the beginning,
to just use git source control to operate the swapping of roles. Have the driver commiting to a branch locally, then push 
to the remote. When the current navigator becomes driver he will then pull the branch down and begin coding and committing 
to his local machine. Turns are typically 15 minutes, so set the timer to that period. It is quite normal for at least one
discussion per turn about the general direction of the code. When giving directions as the navigator, start from the highest
abstract direction to the most specific possible. For example, very abstract directions are "open a pull request". Very specific
directions would be "Type the following: git commit -m 'first commit'". Everything in-between should be resorted too before
having to go with the latter direction.

## Stories of Big Wins
<p align="center" width="100%">
    <img src="/assets/images/reflection_zombie.png"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

When starting at my current organization, development was done entirely individually. The first two weeks we attempted to
work in ensemble programming, with 10 developers all contributing to the codebase at a single time. This attempt crashed and
burned for a variety of reasons. However, afterwards we set an ensemble meeting once every week-where developers got together
and worked on a section of the code. This latter solution was a huge success in beginning to build team unity.

After the abject failure of ensemble programming, we hired a couple developers and began pair programming. The pairing reduced
both the risk and length of onboarding new developers. Onboarding was measured in terms of weeks, and no longer months. Also,
with a developer readily available during the pairing who understood the codebase we got workable code immediately. Trust and
capability was quickly built within the team. The biggest shining point of pair programming is onboarding new developers.

Currently, we've shifted into a more lax version of pair programming culture. Daily I meet with another developer for one
to three hours. Our sessions range from purely reviewing code we've written up to that point, to making decisions about the
current direction of the code we want to write, and finally the traditional pair programming that is listed elsewhere in
this article.

# Start Your First Pairing Experiment

No matter whether you currently agree wholeheartedly with the practice, are considering trying it but are mostly on the fence,
or think the practice will never work for you, it is never too late to try that experiment. Be willing to let go of the notion
that success is pairing 8 hours a day 5 days a week. Sometimes, even slightly different ways of working can cause huge gains
in your development flow. 



