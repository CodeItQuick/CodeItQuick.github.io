---
name: Learnings Non-Tdd Project
description: Retro - Sprint Rating Tool
image: video_game_zombies_2_instasize.jpg
tags: agile all
---

# The Project

I decided to make a retrospective rating tool. During sprint retrospectives it may be helpful to get a gut check from everyone on
how the sprint went, so I made a tool that allows for this in the form of three types of emoji's. There's a positive emoji, a crying
emoji, and a poop emoji. I decided I'd make this in the form of a prototype, so made all my technology stack choices and development
choices in terms of speed. These constraints included:

## Constraints  
1. Use Javascript, because its faster dang it!
2. Deploy on Netlify, because I need a backend, also its fast, no devops, etc
3. Use Vite + React due to familiarity and Vite is cool again/now
4. No testing - its "faster"
5. No formal architecture - its faster!

However these choices had some predictable yet unfortunate side effects. No formal architecture and no testing combined ended up having
a lot of the logic bleed to my frontend. The result is an application that is going to be hard to maintain, and is expensive to develop.
My time writing the code was mostly spent on adding one feature and then patching all the bugs that small change would make. The code is
also not very testable, and if I were to be honest, I'd throw out the codebase if there's any need for more development on it.

But alas, it is a prototype, so I guess we'll call this one a success!
