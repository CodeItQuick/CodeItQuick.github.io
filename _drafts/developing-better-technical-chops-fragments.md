# Developing Better Technical Chops

I developed all of the agile stories as well as code for a major feature. It made me realize although I have relatively strong "technical chops" in comparison to my current peers, that the ceiling certainly is the limit. It also made me realize there are definitely people out there building cooler shit faster. And I'm not quite realizing the shortcuts to make, how to build it more quickly, etc.

---

Someone built a TypeScript website similar to LeetCode. I probably could not build such a thing, and he drove traffic to the website — another thing I'm not capable of. So not only did he build something cooler, he probably did it faster than me, finished it, and it looks physically (from a UX perspective) way cooler than anything I do. In comparison, most of my projects are janky console applications built in a variety of ways. Maybe it's because I tend to over-focus on backend, and don't put enough focus on frontend and product design?

---

A cab delivery application, built as a console app while I was exploring backend development and testing. The architecture was highly incomplete — I think both the overall idea and the architecture itself lacked an overall plan and understanding of the system. It eventually stalled out. I got frustrated that it would never amount to anything (I'm not about to compete with Uber), the architecture was clearly subpar, etc.

---

I picked cab delivery specifically because there are some neat problems within the domain space, and mainly because it's the vanilla answer to some design patterns I was exploring at the time.

---

Another project was a quiz application, started because I thought AI would be particularly good at expanding on the subject. It morphed into a self-assessment tool for learning about development. Probably another example of chasing the ideal pattern/architecture rather than wanting a specific product to exist.

---

Rather than building something that fits a current need I have, I look at these projects as "I want to understand X pattern, how do I explore the easiest version of that." For that goal, I should be doing mini katas that explore the pattern, rather than attempting to build a product I don't actually want and that doesn't fit a need.

---

That's itself a gap — I don't have a project I want that badly. The self-assessment tool would be cool: use AI to figure out where I am on a variety of dimensions, then track progress over time. Pluralsight has similar tooling for how well someone knows a language like JavaScript. I kind of want that, but free, and "better" than what they built — except I don't actually have a unique spin on their tests or quizzes.

---

The traffic he drove made his work matter more than mine — he had an active audience where none of my stuff has that. But I have no desire to build my own audience. Mini-celebrity-hood in tech isn't a pipe dream of mine; it sounds more like a vice than anything else. I don't need code with traffic — I want my projects to actually have value, not to be seen.

---

Value to me or to other people means it fills a clear need that existing products on the market don't. Maybe what I'm missing is buildup to what I make — for the self-assessment tool, I never did any marketing or product development in the sense of looking at what's currently out there, who my competitors are, and thinking about how I could uniquely add to the space.

---

The real gaps: frontend frameworks, not knowing my own tooling well, and severe time limitations. I don't have a ton of time to make something happen, and I'm never modest enough to build something that will DEFINITELY get off the ground. I inevitably dream too large, and then when I realize the dream will never happen, I quit early — before it has a chance to grow.

---

The shortcut TypeHero (the LeetCode-style TS site) took, that I probably would have avoided because it felt "bad" or "not the right way": how they check the TypeScript is correct. There's no running it in the cloud or executing it to see if it passes tests — which is both dangerous (executing arbitrary code) and technically challenging. They took some shortcut to make it work instead of solving the hard version of the problem.

---

At work I definitely prefer "the right way" over the "mama bear" / short-and-easy solution. This is probably a shortcoming — the "correct way" is often extremely technically challenging and may lack enough practicality that I can't actually accomplish it.

---

Building a PR reviewer, I made a ton of scripts — very lengthy, hard to load. Someone else came up with a short script, maybe 1-2 paragraphs, easy to drop into a Claude PR bot. I was solving the wrong problem, dovetailing into the interesting solution rather than the problem at hand.

---

Ego wanting to have built something clever. I prefer the impressive, well-thought-out script over something hacky that "anyone could do" and doesn't "look cool." The actual practical problem was getting the script to run in our DevOps pipeline — not a complicated script.

---

Weekends, maybe 2-3 hours a week tops. Probably never 5+. And I'm spending that limited time on the wrong topics/goals.

---

If I had to pick one thing for the next month of weekends: a more automated self-assessment tool, similar to the AI-quiz website I've been building. The major meat and bones are already built out — the problem is the quizzes themselves are too rinky-dink, and the questions are too general/basic.

---

The "Are you a senior developer?" style quiz plays on your emotions quite a bit, but it's not very practical — it asks technically challenging questions where a casual quiz-taker just doesn't want to think that hard. The insights I'm getting through this grilling session are more what I actually want: what are my side projects missing, what do my side projects focus on, etc. Better questions than what I'm currently asking. Right now I might ask "tell me the difference between Kafka and RabbitMQ" with six multiple-choice answers, one partial credit, one full credit — technically "the right answer" for that question, but not actually insight.

---

The AI-interviewer direction is real, but too large a scope creep. More realistic: improve the existing questions with this conversation in mind — make them more relevant and less "challenging trivia," more insightful about the topics I prefer to work on and the general direction I want to go in.

---

"Develop better technical chops" turns out to be a bundle, not one thing: develop better technical *ideas*, be able to *complete* the project, and have the technical knowledge to build something *meaningful*. Three sub-components hiding under one phrase.

---

The real bottleneck is ideas and completion, not raw technical knowledge. It's pretty rare I hit a technical challenge I can't overcome. It's more that I choose the wrong path or the wrong focus for a challenge, and run off in the wrong direction.

---

There's no tell in the moment. It only becomes obvious way later, after I've already sunk hours into it — never a recognizable turn I could catch myself at in real time.

---

With the cab delivery codebase, I constantly chased architectural perfection rather than the actual product design or what I was building. Some of the refactors I wanted to do were considerably too major — the existing architecture would have worked "fine," maybe not ideal, but the change to the new architecture was too much work, and it ultimately stalled as a result.

---

The rule: Am I chasing what's shiny and fun, or technically challenging — or am I solving the problem at hand?
