
## The article

# From Manifesto to Method: Agile Values in XP Practices

I'm going to outline in this article how XP programming in a particular take and solution set to Agile Values and probably
principles as well. For the sake of brevity I'll not be outlining each principle, since with 12 values that would make an
extremely long article. At any rate, XP is heavy on how to write code, testing, and collaboration. Its also more heavy
than a lot of organizations on how to "plan" software development. The majority of organizations kind of shirk this value.
Finally, I outline the importance of the customer, which XP tends to only mention in passing through several of its sections.

## From Agile Values to XP Practice: Building Teams Around People, Not Processes
## Agile Value: **Individuals and interactions** over processes and tools

How do you interpret the agile value individuals and interactions over processes and tools? It could mean always keeping
the Jira tool editor open on your other window while you work to some, while others may cast off Jira as an evil software
from the makers of Atlassian. Well eXtreme Programming has a take on what "people and interactions" actually means, and I
believe its under the title "Managing". 

XP Outlines Managing Software Teams as:
```
### XP Topic: Managing
* Give the team an open work space
* Set a sustainable pace
* Stand up meetings each day
* Project Velocity is measured
* Move people around
* Fix XP when it breaks
```

A lot of these practices, are as the framework describes, very extreme. Storypoints I myself have never found fully useful,
but I can see if we can estimate work to sprint-worth increments, we can begin to guess when a particular project will be completed.
This has real-world usefulness in the software process. Despite all the dysfunction (which may already be there) from using
these practices. Setting a sustainable pace is another value that is easy to say, hard to implement. There is a very real
tendency to treat developers as cogs in a machine, and ignore the fact you need them long term as well as short term.

## Designing in XP: Why Refactoring and CRC Cards Trump Heavy Docs
## Agile Value: **Working Software** over comprehensive documentation

Agile came as a reaction to a reaction. Initially waterfall was overused in the development of software as the only method
to produce this software. Management reacted to these failing projects by introducing even more processes and procedures,
which programmers strongly disliked. It probably invited even more project failure at the time. Agile came about to course-correct
this reaction, and maybe its gone too far in the other direction in terms of planning. 

What does XP have to say about design?

```
### XP Topic: Designing
* Simplicity
* Choose a system metaphor
* Use CRC Cards for design sessions
* No functionality is added early
* Refactor whenever and wherever possible
```

XP, again, has some answers on how to properly design software. The use of CRC cards to quickly define classes or systems
within a software solution. I haven't tried choosing a system metaphor. I've found "do not preoptimize" is all in the eyes of
the beholder. I was told lately that writing tests as I learned game-dev is "premature optimization" but sitting through the lens
of a TDDer in webdev I couldn't disagree more. 

## Pair Programming, TDD, and Agile Values: Coding the XP Way

XP's very lengthy take on coding standards:

```
### XP Topic: Coding
* The customer is always available
* Code must be written to agreed standards
* Code the unit test first
* All production code is pair programmed
* Only one pair integrates code at a time
* Integrate often
* Set up a dedicated integration computer
* Use collective ownership
```

How should working software be produced? Well XP has more solutions, and is especially opinionated on coding and testing.
Coding should be done entirely in pairs, with code integrating often into the integration machine. TDD is an absolute must-have
in XP programming, and team or collective ownership is used on features. If there is a bug that arrises in production, then
the team failed or the system/process failed to catch the bug before it hit go-live.

## Testing as a First-Class Citizen: XP’s Approach to Agile Quality

The most opinionated take that XP has is on testing. Kent Beck, having founded XP, was also the founder of TDD. Therefore,
its of no surprised XP is heavily into test driven development. This practice is very hard to implement, and I find even
while TDD'ing on side project code 4 years after having "learned how to TDD" I still learn new tools and techniques while
TDD'ing. Its hard to see the big picture fully with a technique and workflow that is so focused on getting the current
code the programmer is writing to be correct. 

XP's highly opinionated take on testing:
```
### XP Topic: Testing
* All code must have unit tests
* All code must pass all unit tests before it can be released
* When a bug is found tests are created
* Acceptance tests are run often and the score is published
```


## Small Releases, Big Flexibility: How XP Turns Agile Change Into Action
## Agile Value: **Responding to change** over following a plan

Planning is one of the more informative takes XP has on "being agile". It perscribes user stories, release planning and
scheduling, and dividing projects into iterations. I have to say, that the majority of this section is more detailed and
thorough than all of my employers have been to date. It's a lofty enough goal I would bet organizations would put themselves
in the upper echeloens of this agile value just by completing the basics. With such a strong focus on responding to change,
the art of planning has gone out the window so to speak, for majority of workplaces. I stronger focus on what is important
in building software, and what should actually be worked on has to be the focus.

```
### XP Topic: Planning
* User Stories
* Release Planning creates a release schedule
* small releases
* Project divided into iterations
* Iteration Planning starts each iteration
```

Agile Value: **Customer collaboration** over contract negotiation

The final agile value, which really only comes into effect in passing mention in XP under each broad category is **customer
collaboration**. I think too many software platforms are written by coders going into a cave and then coming out 6 months
later with "a great solution" without having gotten any feedback from customers, product owners, or business people in general.
This is such a strong antipattern that agile has highlighted this as a primary value in producing great software.






# Notes


# Agile is a culture 
## 4 values
* **Individuals and interactions** over processes and tools
* **Working Software** over comprehensive documentation
* **Customer collaboration** over contract negotation
* **Responding to change** over following a plan
- You can have the right side of each value

## The principles of Agile
- Early and continuous delivery
- Deliver frequently, 2 weeks -> 2 months
- Changing requirements
- Business people work with developers daily
- Give developers environment and support they need
- Face-to-face conversation
- Working software is the primary measure of progress
- Sponsors, developers, and users can maintain a constant pace indefinitely
- Attention to technical excellence and good design
- Self organizing teams
- Regular intervals, the team retrospects

# Extreme Programming
## Planning
* User Stories
* Release Planning creates a release schedule
* small releases
* Project divided into iterations
* Iteration Planning starts each iteration

## Managing
* Give the team an open work space
* Set a sustainable pace
* stand up meetings each day
* Project Velocity is measured
* Move people around
* Fix XP when it breaks

## Designing
* Simplicity
* Choose a system metaphor
* Use CRC Cards for design sessions
* No functionality is added early
* Refactor whenever and wherever possible

## Coding
* The customer is always available
* Code must be written to agreed standards
* Code the unit test first
* All production code is pair programmed
* Only one pair integrates code at a time
* Integrate often
* Set up a dedicated integration computer
* Use collective ownership

## Testing
* All code must have unit tests
* All code must pass all unit tests before it can be released
* When a bug is found tests are created
* Acceptance tests are run often and the score is published