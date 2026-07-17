# Every Company Grows Its Own Agile

Every company I've worked at claimed to be agile. Only one of them actually was — and it wasn't because the team believed 
harder in the principles. It was because leadership let the process bend.

At previous jobs, I would have told you I always worked in an agile environment. That was mostly not true. The "agile" I 
experienced there was really only embraced by me — whenever the team as a whole interpreted something differently than I 
thought agile should work, the team won, every time. Which points at something obvious in hindsight: you are the sum of 
your parts. If most of the team is jaded by the process, or just doesn't fundamentally understand the principles behind 
it, you're not actually agile. You're a cargo cult with standups.

Cargo-culting agile has a particular shape. You story point everything, you run planning poker, you hand developers a 
variety of tasks, and — come hell or high water — they ship "on time." Except there's a ton of caveats hiding behind 
that word "shipped." Maybe it shipped on a branch, not to production. Maybe it shipped and no one ever tested it. The 
company feels stale, the features start to feel unimportant, and the whole team quietly agrees to call this "crap on time" 
shipping. Once that kind of checkbox-checking sets in, it's a plague that's hard to escape — communication breaks down, 
and once it breaks down, it's hard to get back.

What's different at my current company isn't that everyone suddenly bought into agile's principles harder. It's that 
leadership gave the team room to deviate. We're allowed to make reasonable edits to how we work, provided they make sense 
and don't stray too far from accepted practice — and the retrospective is where that happens. None of what follows was 
designed on purpose. It drifted into place, one retro at a time. One of the advantages of keeping the same team together 
for a while is that everyone discovers what ways of working people actually like and dislike, and the retro becomes the 
mechanism for customizing agile to fit the team in front of you — rather than the team agile was written for.

## Standups

Take daily standups. The generic advice is that they happen every day, same time, same format, no exceptions. We run two 
a week, plus one backend-only meeting. From a pure development standpoint, that's not ideal — developers still need to 
know daily where things stand. But from the stakeholder side, it's the better trade: the PO doesn't have time to sit in 
a standup every day, and honestly only needs a couple of updates a week, not a daily one. What's supposed to fill the gap 
is developers just messaging each other more — has the PR been reviewed yet, is communication flowing between the people 
who need to be working closely together. And it turns out that's more of a feature than a bug. A daily standup creates 
its own failure mode: developers who only communicate during the meeting, instead of raising blockers the moment they 
actually happen.

## Who writes the stories

On our team, product owners write the epics and the requirements on them. Developers write the majority of the stories 
underneath. POs revise those stories after the fact, once the technical shape of the work is clearer.

This isn't a gap in PO competence — POs understand the why and the what, and they own the acceptance criteria. What they 
lack is the technical context to write the details of an epic. So a PO brings an idea to the developer team, and it's on 
the developers to turn that into a "detailed" plan to execute on. The plan itself isn't even the most valuable part. The 
valuable part is the byproduct: figuring out the general scope, finding ways to go sooner instead of faster, and surfacing 
other ways to deliver the same value earlier.

## Milestones

We also work in milestones — another idea I haven't seen named in agile anywhere. Milestones let us segment value: after 
each one, we decide whether to stop there, or keep building to iron out the details further.

In practice, we've never actually stopped at a milestone and concluded that was enough value. What milestones really do 
is tell us when to demo a feature to the broader group — a checkpoint for showing progress, not a genuine exit ramp. And 
that turns out to be the right call, not a shortcoming: stakeholders don't expect us to stop early, they want everything 
delivered that the customer asked for. But showing progress early tends to make the customer happy sooner, even while the 
rest of the scope is still in flight.

## The north star, not the source of truth

None of this means agile doesn't matter. It means treating it as a starting point instead of a finishing goal. You try 
things, see what works for your team in your context, and keep what works. Assuming generic agile advice applies in all 
situations is the real failure mode — it's the classic silver-bullet problem, the belief that one thing will solve every 
problem everywhere. Agile is a set of principles that gives you a rough sense of good versus bad. It doesn't tell you 
exactly what to do in your situation. The consultant's "it depends" is closer to correct than we usually give it credit 
for. The goal isn't to blindly follow the rules. It's to figure out how to break them well.

## What we don't touch: retros

Not everything gets bent. Retrospectives happen every sprint, without fail — no matter how good or bad things are going. 
A retro isn't only a vent session, a place to dump negativity when something's on fire. When nothing much is going on and 
everyone's in a decent mood, we still run one. The format stays roughly the same, but the tone shifts to celebration — 
more thanks get shared, someone mentions a customer being happy about a recent feature, people say something positive 
about the company or the way the team's working, or just look back on how far things have come.

This is also where the drift comes from. None of the changes above were designed on purpose — they surfaced in a retro, 
one at a time. Keeping the same team together for a while means everyone discovers what ways of working people actually 
like and dislike, and the retro is the mechanism for customizing agile to fit the team in front of you, rather than the 
team agile was originally written for.

## The guardrail is you

The room to deviate isn't unlimited. One of the more extreme asks I remember was a developer on another team wanting to 
change the kanban board. I didn't agree, and said so — the board still did the two things it actually needs to do: show 
where the work is, and show what the blockers are. Redesigning it would have disadvantaged a lot of people to uphold one 
person's opinion.

I could only see his outside behavior, not the reasoning behind it, and my best guess was that he was mostly recoiling at 
being told what to do — a very human reaction. But I recognize it because I've been that developer. Years ago, in school, 
someone was explaining how a webpage talks to a server, mostly wrong. I jumped in and said the browser mostly talks to 
the API over HTTP, not sockets. I was corrected, in public, by someone who actually knew what he was talking about — 
sockets are just a layer underneath HTTP, and he was technically right. I didn't reply. I still didn't fully agree in the 
moment, but I didn't want a heated, public debate where I ended up on the wrong side of it.

That instinct — to step back instead of digging in — is the same instinct the retro depends on. The process can only bend 
as much as the people running it are willing to be wrong. Every company grows its own agile. What decides whether that 
agile is any good is whether the people shaping it can tell the difference between a real improvement and just not wanting 
to be told what to do.
