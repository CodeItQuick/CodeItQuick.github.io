---
layout: post
name: OOP The Great Debate - Classes vs Closures
description: A look at how functional closures differ from OOP classes 
image: learning_journal_zombie.webp
time: "5m:58s"
tags: code all
---

# OOP The Great Debate - Classes vs Closures

OOP is better than functional, or is functional better than OOP. Often OOP programmers have no knowledge of functional
(being a primarily OOP developer I'm guilty of this), while functional programmers often come from an OOP background and
got "fedup" with some of the problems that got attributed to OOP. I say the latter half of this sentence in this manner, 
because often we attribute our problems to the wrong thing. Oh my code sucks, what caused this? Its the general paradigm
OOP that's the issue, not my code. Often its your code, but sometimes it could be the paradigm you are working in.

# The prelude, definitions

I'm going to define CQS, CQRS, and request/response paradigms before discussing what is truly "OOP" code vs what is truly
"functional" code. Keep in mind this is just my take, as a primarily OOP developer.

## Command Query Separation (CQS)

Command query separation is necessary for "proper objected oriented" programming. It involves separation of commands (or the behaviour part)
from queries (or returning simple values that represent status of something within that class). So here I talk about CQS,
and separating out behaviour within the class, but then when I look at a request/response structure. If you implement request/response
in your classes it gets quite messy, as your methods are becoming somewhat more static. Anyhow, this isn't an article on CQS,
feel free to read up on the concept. Also, it's a more functionally focused article, so that's why I somewhat take the 
functional side of the argument. 

What I mean by very objected oriented code, is commands take care of all the state change, and queries return only value
objects. For example, the entity hand in a blackjack game:

```js
class Hand {

    Hand(cards) {
        this.cards.concat(cards);
    }

    // Command
    drawFrom(shoe) {
        cards.add(shoe.draw());
    }
    
    // Query
    cards() {
        return cards;
    }
}
```

## Command Query Responsibility Segregation (CQRS)

This is the pattern invented by Greg Young. It's the CQS concept but applied at the architecture layer. In hexagonal
the application code kind of morphs into its paradigms. It makes large use of concepts in eventing, specifically event-carried
state transfer, and event sourcing. This code, characterized by object stereotypes like controller, services, and repositories,
is a lot different looking code.

We can take that same code from before and turn it into a CQRS pattern below:

```js
class HandCommandService {

    HandService(handRepository) {
        this.HandRepository = handRepository;
    }

    addCard(shoe) {
        HandRepository.add(shoe.draw());
    }
}
class HandQueryService {

    HandService(handRepository) {
        this.HandRepository = handRepository;
    }
    
    cards() {
        return HandRepository.listCards();
    }
}
```

## Request/Response 

Request/response is more naturally a "functional concept". Where your methods are at least closer to pure functions. So when 
I present functional, I switch to a request/response model that is just naturally more succinct. I think request/response 
is significantly more intuitive, as evidenced by the shorter explanation.

```js
class Hand {

    Hand(cards) {
        this.cards.addAll(cards);
    }

    drawFrom(shoe) {
        this.cards.add(shoe.draw());
        return this.cards;
    }
}
```

# The OOP Way, Classes

A class in javascript is a fairly simple thing, and relatively easy to understand. I'll go over the basics of its declaration
and usages below:

```js
class Hand {
    constructor(cards) {
        this.cards = cards;
    }
    drawFrom(shoe) {
        this.cards.push(shoe.draw());
    }
    cards() {
        return this.cards;
    }
    isBusted() {
        return value() > 21;
    }

    value() {
        let handValue = cards
            .map(card => card.rankValue())
            .reduce((acc, curr) => acc + curr, 0);

        // does the hand contain at least 1 Ace?
        const hasAce = cards
            .any(card => card.rank() == Rank.ACE);

        // if the total hand value <= 11, then count the Ace as 11 by adding 10
        if (hasAce && handValue <= 11) {
            handValue += 10;
        }

        return handValue;
    }
}
```

This works fine for the domain-modeled case, and is probably the preferred paradigm. However, if we are in more CQRS-style
code, then the code can be decidedly more disconnected, and a new possible pattern can emerge. The problem with a lot of code
like the below, is there can be a real disconnect between the methods. Where there's really no reason for all these methods
to be on the same class.

```js
class HandService {
    HandService(handRepository) {
        this.HandRepository = handRepository;
    }

    addCard(shoe) {
        this.HandRepository.push(shoe.draw());
    }
    
    cards() {
        return this.HandRepository.listCards();
    }
    
    handValues() {
        return this.HandRepository.handValues();
    }
}
```

# Enter Closures

Enter our close friend the closure, which can come in the exact same form as the class but look different under the hood.

```js
const HandService = (handRepository) => () => {
    let repository = handRepository;
    return {
        addCard(shoe) {
            repository.push(shoe.draw());
        },
        cards() {
            repository.listCards();
        },
        handValues() {
            repository.handValues();
        }
    }
}
```

They look pretty similar, don't they? We can decompose these functions into single functions within a file, which cleans
things up a bit:

```js
let repository;

export const init = (handRepository) => repository = handRepository;

export const addCard = (shoe) => repository.push(shoe.draw());
export const cards = () => repository.listCards();
export const handValues = () => repository.handValues();
```

# Take Away on Closures vs Classes

Regardless of whether you prefer the class declaration, the closure declaration, or something in-between, you should understand
at its core both implementations. You will have to, over the course of your career, maintain code in both styles. Understanding
how they work under the hood, what the concerns are, and how to test them is where the real metal hits the pavement.