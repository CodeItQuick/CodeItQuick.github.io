# From Manifesto to Method: Agile Values in XP Practices

I'm going to outline in this article how XP programming applies to agile. For the sake of brevity I'll not be outlining 
each principle, since with 12 values that would make a long article. At any rate, XP is heavy on how to write code, testing, 
and collaboration. Its also more heavy than a lot of organizations on how to "plan" software development. The majority of 
organizations kind of shirk this value.

Finally, I outline the importance of the customer, which XP tends to only mention in passing through several of its sections.

## From Agile Values to XP Practice: Building Teams Around People, Not Processes

#### Agile Value: Individuals and interactions over processes and tools

How do you interpret the agile value individuals and interactions over processes and tools? It could mean always keeping 
the Jira tool editor open. Well, eXtreme Programming has a take on what "people and interactions" actually means, and 
its under the title "Managing".

XP Outlines Managing Software Teams as:
```
### XP Topic: Managing
* Give the team an open work space
* Set a sustainable pace
* Stand up meetings each day
* Project Velocity
* Move people around
* Fix XP when it breaks
```

A lot of these practices, as the framework describes, are very extreme. I have found minimal use from "storypoints". I can
see estimating a sprint of work is possible. Then the team can estimate when a project is completed. This has real-world 
usefulness in the software process. Despite all the dysfunction (which may already be there) from using these practices. 
Setting a sustainable pace is another value that is easy to say, hard to implement. There is a very real tendency to treat 
developers as cogs in a machine, and ignore the fact you need them long term as well as short term.

## Designing in XP: Why Refactoring and CRC Cards Trump Heavy Docs

#### Agile Value: Working Software over comprehensive documentation

Agile came as a reaction to a reaction. Waterfall was overused in the development of software as the only method to produce 
this software. Management reacted to these failing projects by introducing even more processes and procedures. Programmers 
disliked this change. It invited even more project failure at the time. Agile came about to course-correct this reaction. 
Yet, the course correct is too far in the anti-planning direction.

What does XP have to say about design?

```
### XP Topic: Designing
* Simplicity
* Choose a system metaphor
* Use CRC Cards for design sessions
* No functionality added early
* Refactor whenever and wherever possible
```

XP, again, has some answers on how to design software. The use of CRC cards to define classes or systems within a software 
solution. I haven't tried choosing a system metaphor. I've found "do not preoptimize" is all in the eyes of the beholder. 
Lately I learned that writing tests as I learned game-dev is "premature optimization". As a TDDer in webdev I couldn't 
disagree more.

## Pair Programming, TDD, and Agile Values: Coding the XP Way
#### Agile Value: Working Software over comprehensive documentation
XP's very lengthy take on coding standards:

```
### XP Topic: Coding
* The customer is always available
* Code written to agreed standards
* Code the unit test first
* All production code is pair programmed
* Only one pair integrates code at a time
* Integrate often
* Set up a dedicated integration computer
* Use collective ownership
```

How should working software be produced? Well XP has more solutions, and is especially opinionated on coding and testing. 
Coding should be done entirely in pairs. Code is integrated often into the integration machine. TDD is an absolute must-have
in XP programming, and team or collective ownership on features. If there is a bug that arises in production, then the team
failed or the system/process failed to catch the bug before it hit go-live.

## Testing as a First-Class Citizen: XP’s Approach to Agile Quality

#### Agile Value: Working Software over comprehensive documentation

The most opinionated take that XP has is on testing. Kent Beck, having founded XP, was also the founder of TDD. Its of no 
surprised XP is into test driven development. This practice is very hard to implement. I have been able to TDD for 4-5 
years now. However, I still learn new tools and techniques while coding in this manner. Its hard to see the big picture 
with this technique and workflow. It is so focused on getting the current code the programmer is writing to be correct.

XP's opinionated take on testing:
```

### XP Topic: Testing
* All code must have unit tests
* All code must pass all unit tests 
* When a bug is found tests are created
* Acceptance tests are run often and the score is published
```

## Small Releases, Big Flexibility: How XP Turns Agile Change Into Action

#### Agile Value: Responding to change over following a plan

Planning is one of the more informative takes XP has on "being agile". It prescribes user stories, release planning and 
scheduling, and dividing projects into iterations. I have to say, that the majority of this section is more detailed and 
thorough than of my employers have been to date. It's a lofty enough goal. Most organizations don't do the basics of this 
planning . With such a strong focus on responding to change, the art of planning has gone out the window so to speak, for 
majority of workplaces. A stronger focus on what has to be worked on is needed.

```
### XP Topic: Planning
* User Stories
* Release Planning creates a release schedule
* small releases
* Project divided into iterations
* Iteration Planning starts each iteration
```

## Agile Value: Customer collaboration over contract negotiation

The final agile value, which only comes into effect in passing mention in XP under each broad category is 
**customer collaboration**. Too many software platforms are written by coders going into a cave. The coder appears 6 months 
later with "a great solution". However, the coder hasn't gotten any feedback. Feedback from customers, product owners, or 
business people in general is necessary for good software. This is such a strong antipattern that agile has highlighted 
this as a primary value in producing great software.