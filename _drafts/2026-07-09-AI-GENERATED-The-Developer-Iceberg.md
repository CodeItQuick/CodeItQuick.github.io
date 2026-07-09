---
layout: post
name: The Developer Iceberg
description: What is the developer iceberg of work and how do we tackle it
tags: quality all
---

Every developer has had this conversation. A stakeholder asks what you've been working on, and you start to answer, and 
you can already see their eyes glaze over. Because what you've actually been doing — untangling a flaky test, patching a 
dependency with a CVE nobody outside the team will ever hear about, adding the three log lines that will save someone two 
hours during the next incident — doesn't translate. To the business, there are only two kinds of work: features and bugs. 
You shipped a feature, or you fixed a bug. Everything else is invisible.

Invisible, that is, until it isn't. The SSL certificate nobody thought to put on a calendar expires on a Saturday, and the 
whole site goes dark. The logging that was never added means the on-call engineer spends four hours guessing at a root 
cause instead of reading it off a dashboard in four minutes. The refactor that got deprioritized twice means a "quick fix" 
now takes a sprint, because nobody can find the one place that needs to change without breaking three others. None of 
this shows up as a line item until the day it becomes the only line item that matters.

And when that day comes, the product manager asks the only question they have a framework for: why did this take so long? 
It's a fair question, asked in good faith, and it's almost impossible to answer well. "We fixed an outage" makes sense to 
them. "We spent two days paying down the interest on a decision made eight months ago" does not, because nobody ever gave 
them a vocabulary for interest, or decisions, or the eight months in between. They aren't wrong to ask. They just haven't 
been given the categories that would make the answer legible — so every answer sounds like an excuse instead of an explanation.

Picture an iceberg. Above the waterline, where everyone can see it, sits the work that gets a name without any effort: 
**Build** — new capability, new value, the thing that shows up in a release note. Everything else sits below the surface, 
doing the work that keeps the visible tip from sinking. **Fix** restores what's broken. **Improve** makes future changes 
cheaper and safer. **Run** keeps the thing alive day to day — reliability, observability, the boring plumbing nobody notices 
until it fails. **Evolve** is the slower work of keeping the whole shape of the system able to take on tomorrow's load, 
tomorrow's scale, tomorrow's requirements. Four buckets, submerged, doing most of the actual mass of the work — and the 
business only ever sees the one bucket sticking out of the water.

Each bucket is building something, even if it never ships as a feature. **Build** buys you capability and usability — 
time-to-market, customer satisfaction, the stuff that shows up on a roadmap slide. **Fix** buys you correctness and trust 
— every incident you resolve cleanly is a small deposit into "we can be confident in this team's releases." **Improve** 
buys you maintainability and testability, and it pays out later as developer velocity: the codebase that was worth 
restructuring six months ago is the one where today's feature takes three days instead of three weeks. **Run** buys you 
reliability and observability — recoverability when things do break, performance under real load, costs that don't quietly 
balloon. **Evolve** buys you scalability and adaptability, the unglamorous work of making sure the system's shape can still 
take on next year's requirements instead of collapsing under them. None of these show up in a release note. All of them 
show up eventually, one way or another, in whether the release notes keep coming.

None of this was ever really invisible. It just never had a name. The five buckets don't change what the work is — the 
on-call engineer was always going to add those log lines, the certificate was always going to need renewing — they just 
give the person asking "why did this take so long" a category to point at instead of a shrug. That's the whole use of the 
framework: not to justify the work after the fact, but to let both sides of that conversation see the same iceberg from 
the start.