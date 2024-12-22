When reading the "Rewriting is often pitched ..." paragraph, my brain was still thinking you were talking about refactoring. 
You didn't define rewriting, so I thought we were still talking about the previous topic (refactoring) but with more depth. 
I'd define refactoring to prevent people from misreading.

Your definition of redesign is super weak. It sounds like you define it as "Refactoring old code and improving the maintainability." 
and "It could or could not involve a change in behaviour." But that's just refactoring + the option to change behavior. 
Is that what redesign means? The explanation for redesign also lacks depth compared to the refactoring and rewrite paragraphs.

"We realized there’s duplication and need to remove it." DRY has a bad reputation, rightfully so. I think this sentence 
is prescribing DRY, so that'll turn readers off. Later you write "Duplication is the truest form of code smell." which 
gives off the same vibe of 'we don't care about tradeoffs; DRY dogma is supreme'.

"This type of work is not what is inherent when large mistakes creep into the codebase." Please go into more detail! I 
want you to paint a picture in my mind of what this looks like. Without that picture, you don't really answer the question 
of the headline: "Why can’t we quickly refactor it instead?"

"[Data m]igration is going to be a painful process that we should not introduce." Why? Data migration is fine. It's 
painful, but I don't think migration is something we should avoid... Or am I misunderstanding your point?

"I have also seen rewrites go wrong." This is the perfect place to drop a real world example.

Another thing you could add to the "Why can’t we just make a massive rewrite?" section is that you need to maintain both 
systems at the same time. The new system won't replace the old system immediately; the new system won't be developed in an instant.

Another thing you could add is that the rewrite is gonna have the same problems. You kind of mention that "a brand-new code
base that will somehow be anemic of these decisions", but I think you should make this point more clearly (because that 
sentence is focused on communicating something else IMO).

"The Choice: Am I ready to redesign?" When reading this headline, the answer is "no" because I don't know what a redesign 
is yet. (See my earlier comment about the definition being unclear.)

"Duplication is the truest form of code smell. The most important metric is how hard the codebase is to maintain. Is the 
team currently slowed down by the current legacy system." I don't know what this is talking about. Isn't duplication usually 
easy to solve with a refactor? Why is this in the redesign section?

The organization of sentences and paragraphs in the "Redesign Goals: What does success look like?" section is confusing.

"The most important part of a redesign is defining success." This is a good point. It's something I haven't thought about. 
More examples would be helpful, because from the sound of your article, it sounds like there is only one reason (more 
features faster). But I can think of other reasons, like reducing server costs (e.g. with better performance) and 
reducing bug rates.

"How can he do more than move food around the plate?" Is this a Canadian expression? I don't know this figure of speech.

"Business needs should flow from the reasons for the redesign." I think this is backwards. Business needs should drive 
the redesign.

"Yes to a few of these questions is enough to rewrite the code." Did you mean redesign?
Overall, I think the article is too terse. You should elaborate on your points. Provide examples and alternative ways of 
thinking about the points.