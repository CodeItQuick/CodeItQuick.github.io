# Developing Better Technical Chops

"Develop better technical chops" sounds like one goal. It isn't. It's three: have better ideas, know enough to build them, 
and actually finish. I went looking for the third one and found out I don't have a problem with the other two.

The trigger was a good week. I wrote all the agile stories for a major feature and then wrote the code for it too, start 
to finish, on my own. Compared to the people around me, my technical chops are solid — better than solid. And in the same 
breath, I realized there are people out there building cooler things, faster, than I ever have. Not "faster than me at 
the same thing." Faster at a *better* thing.

I'm thinking of a specific kind of side project — the polished ones, live on the internet, with real users on them. Something 
with a clean frontend and a URL you can actually send someone, built by one person in what looks like less time than it 
takes me to get a console app half-working. Most of my side projects, by comparison, are janky console applications, built 
a different way each time, that nobody but me will ever run.

Take the cab delivery app. I built it as a console application while I was exploring backend development and testing — a 
domain with some genuinely interesting problems in it, and, not coincidentally, the vanilla answer to a set of design 
patterns I was studying at the time. I never had a plan for the overall system, just a plan for the parts of it that let 
me practice the patterns. And once I was in it, I kept chasing architectural perfection instead of the actual product. 
I'd spot a refactor I wanted to do, realize it was way bigger than it needed to be, and grind against it — when the 
existing architecture, not ideal, would have worked *fine*. It stalled. I told myself it was because I was never going 
to compete with Uber anyway, which was true, but not the actual reason it died.

Then there's the quiz app, which is a different kind of failure because it didn't die — it's still around, mutated into 
something else, and I'll come back to it. I started it because I thought AI would be good at generating quiz content, not 
because I wanted a quiz app to exist. Same root cause as the cab delivery app: I wasn't building toward a need, I was 
building toward a pattern.

Once I saw that, the fix seemed obvious: if the goal is to understand a pattern, go do a kata that exercises the pattern 
and stop dressing it up as a product. Save the product-shaped effort for something I actually want to exist. Except when 
I tried to flip it — forget the pattern, what do I actually want built badly enough to finish it — I came up empty. That's 
the real gap, and it's a worse one than not knowing a frontend framework.

Worth separating out one thing that's tangled up in the comparison but isn't actually part of it: audience. Some of what 
makes those polished side projects sting is that they have real users, and mine don't. But I don't want an audience. Building 
one — the posting, the promoting, the mini-celebrity version of being a developer — isn't a suppressed ambition of mine, 
it sounds more like a vice. What I actually want is for a project to have value: to fill a need, mine or someone else's, 
that the existing options don't. Traffic is one proxy for that. It isn't the only one, and it isn't the one I'm after.

So back to the quiz app, the one that mutated instead of dying. It's now a self-assessment tool: AI-generated quizzes 
meant to tell you where you actually stand on a given topic. The bones of it are built. The problem is the questions — 
they're rinky-dink, general-knowledge trivia dressed up as insight. "What's the difference between Kafka and RabbitMQ," 
six multiple-choice answers, one gets partial credit, one gets full credit. Technically correct, and it tells you nothing 
about you. What actually produces insight is a conversation like this one — a series of specific, adversarial follow-up 
questions that don't let you stay abstract. That's the model I should be building toward: not "test what you know," but 
"interrogate what you're actually doing and why," which is a much harder quiz to write and a much more useful one to take.

The cab delivery app was a side project, so it's tempting to file the pattern under "side projects, low stakes, who cares." 
It isn't just side projects. At work I built a PR reviewer and produced a pile of scripts — long, hard to load, impressive 
in the way a lot of unnecessary infrastructure is impressive. A coworker solved the same problem in a paragraph or two, 
dropped straight into a Claude PR bot. The actual problem was never "write a sophisticated reviewer," it was "get something 
running in our DevOps pipeline." I'd solved a more interesting problem instead of the one in front of me, and I recognized 
why on some level while I was doing it: I wanted the clever version, the one that looked like it took skill, not the hacky 
one-pager that "anyone could write."

I get two or three hours a week for any of this, which means I don't get to be wrong about direction very often before 
the hours run out. So the fix isn't more technical knowledge, and it isn't an audience. It's a question I now ask before 
I let myself get deep into anything, side project or otherwise: am I chasing what's shiny and technically fun, or am I 
solving the problem actually in front of me? Cab delivery, the PR reviewer, most of what's half-built on my machine right 
now — every one of them answers "shiny." The chops were never the problem. Knowing which question I'm answering is.
