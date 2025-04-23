---
layout: post
name: About The Agile Manifesto Delivery Speed
description: A controversial take - how slower is better  
image: story_splitting_zombies.png
tags: time-to-market all
---

My team has arguing, for months, probably almost a year, on how slower is better for delivery speed. More importantly, how
to keep our "safety net" intact. At first we found the arguments un-substantiated, then we chalked it up to the "scrum-way"
of doing things. Of course, not necessarily taking responsibility for a slower delivery speed. But time to market is important,
and the agile manifesto is actually very explicit on this topic directly in the 12 principles:

```
Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
```
- Agile Manifesto

# The Trade-Offs: Fast Delivery Speed

# The Work Environment

I experience "fast delivery" in more solo or near-solo startup type environments. I think that's why I necessarily recoil
against the preference to the "faster" delivery speeds. These are easily achievable, if we lower our standard of works vs
does not work. If more bugs are acceptable, worse code is fine, and tests are not needed we can "get to market" infinitely
fast. If the code doesn't need to work at all, I can get the feature out instantly.

# Startups

Unfortunately it doesn't work like that. For startups, you're just hoping whatever you release that someone gives a damn
enough they are willing to pay you money for the solution. That we have indeed created value. When building software for
an individual business they began to care way more about it working, and a lot less how early they got the feature. It was
more important we hit 0 bugs than they saw what we were building and got feedback through that.

# Corporate

In the corporate environments I've experienced "working" was significantly more important than "we got the feature out".
Maybe part of the issue is there's often money attached to getting the feature out. Really the money should be attached to
the value this piece of software brings the business. Easier said than done. At any rate, the agile manifesto itself is
more-or-less targeted at big businesses previous need in the 90s to have long-drawn-out processes that added "predictability".

# Too far in the time-to-market 

But have we gone too far in the other direction with 2-week iterations? The answer is categorically yes. Establishing a safety
net is important. Full regression testing of the website is also important, to know what bugs are in the website and whether
we should accept them and move on or fix them immediately. The problem with constant production of almost-working software
is that you can never keep your head above water. It feels like your constantly drowning in bad code, half working features,
and an endless backlog of critical bugs. Things in this regard are very binary. Your developers keep up with the demands
of coding and don't ship bugs to production at a rate that is easily manageable. Or it's the exact opposite, the focus is on
speed rather than quality, more bugs are shipped to production than the rate they can be managed, and your stuck in critical
bug land, with a fast time to market, yet mostly unworking software.

# Feedback Loops

I guess it's a lot easier to argue that feedback loops are a lot faster in the 2-week release cycle. However, what is 
the actual feedback? The software is broken, there's bugs, go fix it, etc. This is the kind of feedback that erodes the
users confidence in your abilities as a software developer. So yeah, we find out earlier if they want the feature at all
but what's the penalty of this? That the software doesn't work, or only mostly works, and they question whether they should
find another product or use our feature at all. This type of behaviour is perfect for fast-moving startups, who are mostly
building junk. Established businesses however, or solo internal projects for established businesses, not so much. They 
have a better idea of knowing what they want, and just need it working.

# Quality Tradeoff 

Not that there isn't an argument to produce working software at all. The quote above specifies "deliver working software 
frequently". But there seems to be a tradeoff here. If we adjust our quality bar down, and our working bar down, and accept
more bugs in production with the caveat "we'll fix them later" then we will hit the shorter cadence. Go too far and production
is never fixed, the code is always crap, and we just look for "but we can fix the process". Except there's no guarentees
this new approach is superior to the slower process.

# Time to Market

We've settled on our feedback loop is to the development branch. Delivery of the "feature" is only 100% working in production.
Well when quality is the focus rather than time-to-market you go faster overall. All the sudden you're not instantly delivering
a non-working feature. The slow delivery process can make use of CICD just as easy as the fast delivery process. The difference
is you make time for manual regressions, acceptance tests, and proper unit testing. The problem is all of these decisions have
a cost, and the cost is time to market. If you cut all of them out the chances everything "just works" is very low, but if you
leave all the net in then you're looking at a longer release cycle.

It's pretty easy to argue this point: the easiest way to deliver faster is to deliver broken features and then fix them
in future sprints. So think of at the sprint level: deliver feature, bug fix, bug fix, bug fix, bug fix, deliver feature.
But when is the value of the feature actually delivered? Not until the last bug fix, hopefully. Depending on how poorly 
this feature is built we may never hit that last bug fix. Depending on how much we squashed the timeline, or made the demands
unreasonable we won't be able to get back to working once this feature gets out. 

# You're fundamentally adjusting your starting point

If you operate under the philosophy of time-to-market is king and we'll run with no safety net and a fast time to recover,
then you'll deliver buggier software faster. You may hit the customer needs quicker, and discover the customer does or doesn't
like what your producing. There's no real long-drawn-out marketing process that is going to de-risk this anyways. So deliver
fast to market, find out if its even worth building, and then patch your jerry-rigged code afterwards as best you can. Shoring
up your weaknesses involves having engineers on call, fixing whatever bug you just deployed, and hoping your largest customers
don't drop you when you invariably release critical bugs every so often. But hey, at least there is a customer.

If you operate under the philosophy it better darn well work, then we're going to maximize the safety net and not really
need a time to recover. You'll take longer to hit customer needs, so maybe add some marketing or "educated guessing" to be
more likely to build the "right thing". Everything that's produced works directly in production, so you're never digging yourself
out of a hole, so to speak. The code is flexible and built well, you figure out where its OK to take shortcuts and where it
isn't. Your customers have come to depend on your software, they assume whatever they are using works and it's them making the
mistakes. So turnover of customers is less rare. However, acquisition because you just turned out a brand new feature that adds
massive value, well this is less likely.