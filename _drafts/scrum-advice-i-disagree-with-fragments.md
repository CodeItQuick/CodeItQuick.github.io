# Scrum Advice I Disagree With

Generic agile / scrum advice that's too general — a lot of the standard playbook doesn't hold up when you actually try to apply it to a real team.

---

"A burndown chart tells you if the sprint is on track" — we don't actually run burndown charts, so I can't vouch for them directly. But there's a pattern I do trust: the longer the timeline you try to predict, the more the deadline slips, and the further out you miss the goal. Any tool that promises to tell you "on track" is making a longer-range prediction than it has any business making.

---

We haven't tried shorter sprints to test this, but the pattern holds within what we do have: predicting one sprint out is roughly reliable, predicting three sprints out is not — what actually happens diverges from the plan a lot more the further out you look. Confidence in a forecast should decay with distance, and most agile tooling doesn't model that decay at all — it just gives you a single number ("on track" / "not on track") regardless of how far out you're looking.

---

"If a task isn't done by sprint end, it goes back to the backlog" — in practice this isn't what happens. It just carries over into the next sprint, and that's fine. I've never believed in the hard-stop version of this rule, where an unfinished task must be ripped out at the sprint boundary no matter what. Adherence to that rule doesn't produce more discipline, it produces overtime and burnout — people cramming to hit an arbitrary line instead of just finishing the thing properly.

---

"Retrospectives should always end with concrete action items" — nothing wrong with having action items, but it's not always necessary. Sometimes the value of a retro is just that you talked about something: surfaced a difference of opinion, got a negative or positive experience out in the open. That's the whole value, and it doesn't need to convert into a task.

I think the insistence on always having an action item is often the Scrum Master / agile delivery manager justifying their own position — "look at all the improvements we drove" — when there doesn't need to be that direct a correlation between the meeting happening and a visible output existing.

(General suspicion, not something I've directly witnessed — but the incentive is there.)

---

"The daily standup should take no more than 15 minutes" — just wrong as a hard rule. Sometimes the "parking lot" discussion after standup is where the real conversation happens, because standup is the one guaranteed meeting where the whole team is already in the room. Capping it at 15 minutes optimizes for the ritual instead of for the thing the ritual exists to enable. In practice it's not unbounded either — the whole thing, standup plus parking lot, generally stays under 30 minutes. It's not that time boxing is bad, it's that 15 is an arbitrary number that doesn't fit what the meeting is actually for.

---

"The Scrum Master should not also be a developer on the team" — I'd go further: I think Scrum Master as a dedicated position is dumb and shouldn't exist. I could never tell what they were actually doing besides "running the meeting," whatever that means. You don't need one full-time employee whose job is to enforce meeting decorum — that duty can just get distributed across the team.

I haven't worked with a ton of Scrum Masters, but every one so far: I couldn't tell what they did outside our meetings, and inside the meetings they added little if any value. So yes — "running a meeting" is a fair description of what I actually saw, not just a cheap shot.

Contrast that with the agile delivery manager role, which I do think earns its keep. It can feel very project-managery and that's mildly annoying, but there's real background work happening there — analyzing the team, tracking delivery timelines, the stuff that actually needs someone paying attention to it between meetings. The difference isn't "process roles are useless," it's that Scrum Master specifically seems to be a role without a job description, and ADM is a role with one.

---

"Estimation should be done as a team, using planning poker" — doesn't need to be that complicated. The developers who'd actually work on the feature just agree on a point value. You don't need QA, or mobile devs, or anyone unfamiliar with the relevant code weighing in on how long something takes — that adds confusion, not signal, to figuring out relative size. Estimation accuracy comes from proximity to the work, not from headcount in the room.

Story points themselves make sense to me — it's specifically the "whole team estimates everything" part that doesn't. Getting a PO to put a number on work they'll predictably underestimate, or getting QA to size something they don't understand why is taking so long — that's not collaboration, it's diluting the estimate with people who have no basis for it. Widening the circle of who votes doesn't make the number more legitimate, it makes it less.

---

Surprised how few of the first 40 generic scrum/agile items I actually disagreed with. Worth checking whether that holds — maybe I mostly follow the guides and this whole piece is really about a handful of specific sore points, not a wholesale rejection of the framework.

---

Ran a second batch of 60 more generic agile/scrum lines (41-100) to stress-test the theory. Only disagreed with 2 of them. Some of those didn't even feel like "real" agile advice, more like something a generator made up to fill a quota. Conclusion: I mostly agree with the generic agile advice. The actual article isn't "agile is wrong," it's a short, specific list of things that are wrong — and that's a more honest and more interesting piece than a wholesale takedown would have been.

---

"A sprint should never have its scope changed once started" — never is too strong. Emergencies happen: something breaks and needs fixing immediately, or the business needs a course change immediately. The rule should be about resisting scope creep, not pretending a sprint is a sealed container no matter what happens in the outside world.

"The sprint goal should be a single sentence" — too rigid as an absolute. "Should normally be a single sentence" is the honest version of this rule. Same objection both times, really: these are good defaults stated as hard laws, and the "never / always" framing is what's wrong, not the underlying advice.
