---
layout: post
name: From Chaos to Collaboration - Introducing Pair Programming
description: In my article on pair programming, I discussed how two developers work together, with one coding and the other reviewing.  
image: what_pairing_zombie.png
tags: agile all
---
# From Chaos to Collaboration - Introducing Pair Programming
<p align="center" width="100%">
    <img src="/assets/images/zombie_shoulder_surfing.png"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

## Introducing Solo Development Chaos
Typical development is rather chaotic. Developers go off for one to two weeks at a time working on a ticket. They open a 
pull request at the end of the process, get feedback, and then incorporate it. Then the worst can happen. The team scraps 
the pull request if the direction is wrong. How do we stop checking our work at the last possible moment? How do we increase 
communication among team members? How do we change our development habits so that team members aren’t at each other’s throats?

## Creating Collaboration
Developers working in a collaborative pair-programming focused environment are different. Friendships or strong co-working 
relationships are born. Communication between developers becomes easy. The team gives continual feedback on the code 
throughout the process. By the time the team performs the final check, they find only a few cursory issues. This environment 
is ideal for opening up new ways of working, and is the place we all want to work in.

## How Pair Programming Works
<p align="center" width="100%">
    <img src="/assets/images/engineer_zombie.png"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

There are two roles while pairing: a navigator and a driver. The analogy follows from driving a car. The driver operates 
the vehicle and the navigator provides directions. The driver and navigator take turns, lasting 15 minutes at a time. You 
can achieve this by setting a 5-minute timer for coding only. The pair stops the timer anytime general discussions happen. 
The simpler method is to have a 15-minute continuous timer. If there is any resistance, tend towards the latter solution. 
Daily sessions last between one and three hours. Any lower than this and developers are running around solo too much. 
Attempting longer sessions can cause developer burnout.

The driver will have minor disagreements about the way the problem is being tackled. These types of objections are sometimes 
called “nits” in pull request reviews. The navigator and driver should continue writing code. The pair must discuss large 
objections about the general direction of the code. The driver must stop coding. Then the pair decides on the general 
solution before continuing.

## Introducing the Path to Collaboration
Introducing the practice can be quite difficult. The pair programming promoter could encounter considerable resistance. 
Generally, frame the activity as an experiment for different ways of working. Put a time limit on it, which should be at 
least two weeks. It takes quite a while to completely figure out the forms of pair programming that will work for the 
team. Success in pair programming does not mean the team will be pairing 100% of the time, 8 hours a day. Often, pair 
programming success looks a lot different. In my case, we pair 1-3 hours a day, and there is often no coding involved. We 
meet to discuss code we wrote or make decisions on code direction.

## Team Roles, Tools, and Tech
There are online timers available, including at the website mobti.me. It is easiest to use git source control to operate 
the swapping of roles. Have the driver commit locally to a branch, then push to the remote. Then the turn changes and the 
driver becomes the navigator. The new driver will then pull the branch down and begin coding and committing to his local 
machine. Turns are 15 minutes, so set the timer to that period. It is quite normal for at least one discussion per turn 
about the general direction of the code. Give proper code directions as the navigator. Start from the highest abstract 
direction to the most specific possible. For example, very abstract directions are “open a pull request.”. Very specific 
directions would be “Type the following: git commit -m ‘first commit’”. Try to avoid "type this" directions if possible.

## Stories of Big Wins
<p align="center" width="100%">
    <img src="/assets/images/reflection_zombie.png"  alt="Zombie Leaping Over Chasm" height="512" width="512" />
</p>  

When starting at my current organization, developers worked in silos. The first two weeks we attempted to work in ensemble 
programming. Ten developers all contributing to the code base at a single time. This attempt crashed and burned for a variety 
of reasons. Afterwards, we set an ensemble meeting once every week. Developers got together and worked on a section of the 
code. This latter solution was a huge success in beginning to build team unity.

After the abject failure of ensemble programming. We hired a couple of developers and began pair programming. The pairing 
reduced both the risk and length of on-boarding new developers. We measured on-boarding in weeks instead of months. We got 
workable code immediately because a knowledgeable developer is helping. The team built trust and capability. The biggest 
shining point of pair programming is on-boarding new developers.

Currently, we’ve shifted into a more lax version of pair programming culture. Daily, I meet with another developer for one 
to three hours. Our sessions include: reviewing code we’ve written up to that point. Making decisions about the current 
direction of the code we want to write. Finally, the team also practices traditional pair programming.

# Start Your First Pairing Experiment

You may internally disagree with the practice. It is never too late to try that experiment. Be willing to let go of the 
notion that success is pairing 8 hours a day, 5 days a week. The development team trying different ways of working is 
transformational.



