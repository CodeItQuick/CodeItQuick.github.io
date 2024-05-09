---
name: Story Splitting
description: A thought experiment turns into thin vertical slices
image: green_purple_zombie_resized.jpg
tags: agile theory all
---

# Story Splitting

The concept of story splitting is simple enough. Your engineering manager wants you to go "faster"; really what he's asking
for is more story points per sprint. The way to achieve this isn't actually to "code faster", since we're limited in how
fast we code by a multitude of things. The real answer is to give your manager more insight into what you're doing at any
given point in time. This is achieved by taking your current work and splitting it into more bite-sized chunks that are
easily digestible. Yum. But how do you accomplish this?

After trying to split stories for about a year and a half seriously now, and very much failing. I had a kind of "AHA!" or
Eureka! moment. What if I actually just treated every story given to me as an "epic"? Really, the tasks/stories given to me
are just functionality we need added to the website, in one way or another. They typically last 1->6 months (in the worst cases).
So in the extreme cases they actually _are_ epics lasting 6 months, and in the short-case they are still not what's thought of as
"thin vertical slices".

So after my big aha, I put the task I'm given at the "design" phase, and then start splitting off stories on what I'm pull
requesting into the codebase. The other big "aha!" moment immediately after this - just because I PR something into the 
codebase doesn't mean the actual _behaviour_ of the codebase has to change. Really I've just made a stepwise change 
that improves something, adds a feature, or the ability to add a feature. My current task is to get rid of some large methods
on an even larger class. I start making each move of a large method a PR, and thus it is also a story on my board. Whether
its separating domain logic from database logic, or figuring out where that gnarly utility method _actually_ belongs and moving 
it, they are all stories.

The jury is still out on my story-splitting experiment. I plan on creating new stories for the next week, until either the
sprint retrospective on Wednesday, or my Engineering Manager 1-on-1 on Thursday. I want to see how it pans out - is this 
actually a useful exercise? Or a total waste of time and purely a thought experiment? I don't really know, but hopefully 
I remember to update this blog when I find out.
  
[Take me to the blog]({% link blog_list.md %})
