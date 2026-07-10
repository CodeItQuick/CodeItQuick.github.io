# What Splitting a Story Actually Requires

"Split the story" is one of the most common pieces of agile advice — and one of the most misleading. It implies the hard 
part is decomposition: take a big thing, cut it into smaller things. In practice, splitting a story requires knowing how 
you're going to build it first. That's a design conversation, and my team had been having it for months before we noticed 
it deserved its own name.

My team runs this meeting every Tuesday. Just the backend developers — the conversation gets too technical and detailed 
for anyone else on the team to follow, and there'd be no point subjecting them to it. We already have backlog grooming 
and sprint planning, and in theory "split this story" is supposed to happen inside one of those. In practice, doing it 
properly takes hours, and neither meeting has that kind of room. So the discussion migrated to its own slot, informally, 
without anyone deciding it should exist.

What actually happens in the room: we pull up the existing design in the Jira tickets and propose a way to tackle the 
problem. Sometimes that's architectural — "we should make this part of the system look like this other part of the system." 
Other times it's arithmetic on story points: we said this is 8 points, that's too many, so how do we split it into at 
most two 5-pointers? And layered on top of that is a second question — are there splits that let multiple people work on 
the pieces in parallel, rather than one person working through the ticket start to finish?

Those are two different jobs, even though they happen back to back on the same ticket: shape the design, then divide the 
resulting work among a team that's already fixed. Splitting for size and splitting for parallelism aren't the same operation 
— one asks "is this small enough to build," the other asks "can two people on this team build it at once" — but because 
they happen in the same breath, it's easy to treat them as one activity. Whether the second question ever quietly bends 
the first — whether we've picked a worse architecture because it happened to split nicely — is something I'm honestly not 
sure about. It's worth watching for.

This sits a little uneasily next to agile orthodoxy. XP in particular tells you not to plan ahead — just go build the thing, 
let the design emerge from the code. But "just start coding" assumes the story is already small enough to attack directly, 
and that's precisely what's in question. You can't split a story you don't understand, and you can't understand it without 
something that looks a lot like design. My team tries to work in an agile way as much as it can — that's generally the 
right default — but treating "no upfront planning" as an absolute rule, rather than a useful bias, produces exactly this 
kind of gap: a necessary conversation with nowhere sanctioned to happen.

With no sanctioned home, the meeting didn't get a real name either — on the calendar it's just called "pairing," which is 
its own problem. But once the actual job became clear, most of the obvious names turned out to be wrong for it:

- **Story splitting meeting.** Undersells it — splitting is a downstream consequence, not the main activity. Naming it   
    this would misrepresent what actually happens.
- **Spike.** Doesn't fit; a spike is throwaway investigation, not the thing that produces the actual tickets we build from.
- **Tech spec meeting / architecture review.** Both sound like they operate a level higher than this does — reviewing a  
    finished spec against a standard, rather than still forming the spec.
- **Design meeting.** Closer. The design is exactly what informs how the stories get split, structured, and pointed. But  
    on its own it undersells the amount of Jira mechanics involved.
- **Technical refinement.** Also closer — developers getting into the weeds on caveats, deployment risk, the stuff too   
    detailed and risky to leave until someone hits it in code. But refinement usually implies existing tickets are being   
    polished, not created.

Put "design" and "refinement" together and you get closer to the truth: the meeting works out how a feature should be 
built, uses that to split oversized stories into right-sized, appropriately-parallel ones, and turns the result into 
updated Jira tickets and point estimates. It's a working session, not a review — the artifact isn't a document, it's the 
backlog itself, reshaped. The closest name is **story design meeting**. If I wanted to be maximally honest rather than 
maximally clean, I'd call it a *technical story design meeting* — a little too long, on purpose, because the thing it 
names really is a code-design question fused to Jira mechanics, and pretending otherwise is how it ended up called 
"pairing" in the first place.