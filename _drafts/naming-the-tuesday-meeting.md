# Naming the Tuesday Meeting

My team has a meeting every Tuesday, and I want to figure out the purpose and, importantly, the name of the meeting. We already have backlog grooming and sprint planning. This new one keeps getting invoked because "we should split the story" — but splitting a story in practice turns into a long design-type discussion: understanding HOW we're going to attempt to build the feature. So the backend developers meet once a week to go over the current plan, our shared understanding of the design ahead of time, before any of that gets formalized into tickets.

---

This is probably in tension with agile generally — XP in particular discourages upfront planning and wants you to just go out and code the thing. But in practice, "just start coding" doesn't work when the story is big enough that splitting it requires knowing the shape of the solution first.

---

It's backend developers only — too technical/detailed for anyone else to make sense of being in that meeting.

---

It doesn't cleanly fit in either existing meeting, except maybe for the sliver of "this story is too many points, let's split it now" that's supposed to happen during grooming. Except that discussion, done properly, takes hours — way more than grooming has room for.

---

We also use the session to go over what we're each working on, and anything we're stuck on. But that might actually belong to a separate meeting — it's a different kind of conversation than the design/splitting one.

---

What we're really doing in this meeting: iterating on the agile plan itself. Understanding what's being built, figuring out how we should build it, and then dividing up the work — to keep everyone on the backend team fed, and to limit blockers in the plan.

---

Standups only happen twice a week, which may mean coordination work that's supposed to happen there just... doesn't happen at all. The gap is being partially absorbed by this Tuesday meeting, whether or not that was the intent.

---

No candidate names have come up yet, jokingly or otherwise.

---

The purpose and the name are going to have to co-evolve: understanding the purpose more precisely will produce a more accurate name, and pinning down a more accurate name will force the purpose into sharper definition. Neither comes first.

---

Candidate names on the table: "design meeting," "technical refinement," "story splitting meeting." "Spike" doesn't fit — that's a different shape of activity.

---

The team tries to do agile as much as possible — adhering to a philosophy is generally better than not. But there's a real danger in being too dogmatic about it. So: do I care whether this meeting is "agile-approved"? Only kind of.

---

What actually happens in the room: we pull up the existing design in the Jira tickets and propose a way to tackle the problem. Sometimes that's architectural — "we should make this part of the system look like this other part of the system." Other times it's arithmetic on story points — "we said this is 8 points, that's too many, how do we split it into at most two 5-pointers" — plus a second question layered on top: are there any splits that let multiple people work on the pieces in parallel?

---

So the meeting is really doing two different jobs at once, back to back, on the same ticket: shape the design, then shape the org chart of who codes what and when. Splitting for size and splitting for parallelism aren't the same operation, but they happen in the same breath.

---

Open question, genuinely unresolved: does the desire to parallelize ever bend the design itself — picking a shape for the system because it lets two people work at once, rather than because it's the best shape? Not sure. Worth watching for next time it happens in the room.

---

Right now the meeting is just called "pairing" on the calendar — which isn't a good name for it either. Nobody is actually pairing on code in this meeting.

---

"Story splitting" undersells it — naming it that would be lying about its actual intent, since the splitting is a downstream consequence, not the main activity.

---

It's closer to a design meeting: the design is the thing that informs how stories get split, how they're structured, how many points they end up being.

---

It's also technical refinement in a real sense — developers getting into the weeds together on the current outstanding issues with the design: caveats, what happens if we deploy this, the stuff that's too detailed and too risky to leave unexamined until someone hits it in code.

---

Staff-engineering vocabulary offers "tech spec meeting" or "architecture review" — but both of those sound like they operate a level higher than what actually happens here. This isn't reviewing a finished spec against a standard; it's still forming the spec.

---

Initial story point estimates get set in this meeting too, not before it. The number of stories, their scope, and the general design are all inputs that feed the points — so the estimate can't really exist before the design conversation happens.

---

It's a working session, not a review — it produces something concrete: broken-down Jira tickets that let the work actually get distributed across the backend team. The output isn't a document, it's the backlog itself, reshaped.

---

"Story design meeting" is the closest fit of the candidates so far. Current best (if ugly) name: "technical story design meeting" — deliberately a bit too long, because the honest description really is a code-design question fused with the Jira mechanics, and it's not an agile ceremony in the usual sense, not really planning either.

---

Purpose, stated plainly: the meeting exists to turn a not-yet-understood piece of design into distributable, appropriately-sized work, for backend developers only, because the conversation needs shared technical context nobody else on the team has. It does three things in sequence — work out how the feature should actually be built (including caveats and deployment risk), use that understanding to split oversized stories into right-sized ones (sometimes explicitly chasing parallelizability, not just size), and turn that into updated Jira tickets and initial point estimates. It's a working session, not a review — the backlog itself is the artifact it produces. It exists because grooming and sprint planning have no room for design-level discussion, and twice-a-week standups don't fully cover the coordination gap either.