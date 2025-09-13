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

```java
public class Hand {

    protected final List<Card> cards = new ArrayList<>();

    public Hand(List<Card> cards) {
        this.cards.addAll(cards);
    }

    // Command
    public void drawFrom(Shoe shoe) {
        cards.add(shoe.draw());
    }
    
    // Queries below
    // SNAPSHOT, not a live "View"
    public List<Card> cards() {
        return List.copyOf(cards);
    }
    
    boolean isBusted() {
        return value() > 21;
    }

}
```

## Command Query Responsibility Segregation (CQRS)

This is the pattern by Greg Young that is CQRS. It's the CQS concept but applied at the architecture layer. In hexagonal
the application code kind of morphs into its paradigms. It makes large use of concepts in eventing, specifically event-carried
state transfer, and event sourcing. This code, characterized by object stereotypes like controller, services, and repositories,
is a lot different looking code.

We can take that same code from before and turn it into a CQRS pattern below:

```java
public class HandCommandService {

    protected final HandRepository HandRepository;

    public HandService(HandRepository handRepository) {
        this.HandRepository = handRepository;
    }

    public void addCard(Shoe shoe) {
        HandRepository.add(shoe.draw());
    }
}
public class HandQueryService {

    protected final HandRepository HandRepository;

    public HandService(HandRepository handRepository) {
        this.HandRepository = handRepository;
    }
    
    public List<Card> cards() {
        return HandRepository.listCards();
    }
}
```

## Request/Response 

Request/response is more naturally a "functional concept". Where your methods are at least closer to pure functions. So when 
I present functional, I switch to a request/response model that is just naturally more succinct. I think request/response 
is significantly more intuitive, as evidenced by the shorter explanation.

# The OOP Way, Classes

A class in javascript is a fairly simple thing, and relatively easy to understand. I'll go over the basics of its declaration
and usages below:

```js
class FavouriteOOPThing {
    constructor(someInjectedField) {
        this.someInjectedField = someInjectedField;
    }
    commandOne(someShortLifetimeCommandParameter) {
        this.someInjectedField(someShortLifetimeCommandParameter + 2);
    }
    queryOne(someShortLifetimeQueryParameter) {
        return this.someInjectedField(someShortLifetimeQueryParameter);
    }
    commandTwo(someShortLifetimeCommandParameter) {
        this.someInjectedField(someShortLifetimeCommandParameter + 3);
    }
    queryTwo(someShortLifetimeQueryParameter) {
        return this.someInjectedField(someShortLifetimeQueryParameter);
    }
}
```

Here we have some fields on the class, aptly named in this case `this.someInjectedField`. They can be services that offer
their own ability to run commands/queries on them. CQS is fully implemented here. Both closures with some currying and 
classes have the idea of "injected thing". The purpose of injected thing is to run the lifetime of the greater class, whereas
the command and query parameters are short-lived instances that disappear after the method has been run. 

# But what are the issues of these classes?

Well, what really ties commandOne to commandTwo, and queryOne, to queryTwo? Often these two things aren't tied together
**AT ALL** and we have to inject all kinds of **this.someInjectedField**. What you quickly end up with is a class that is
much too large, takes on too many things, etc. So maybe the preferred class structure is closer to the below:

```js
class FavouriteOOPThing {
    constructor(someInjectedField) {
        this.someInjectedField = someInjectedField;
    }
    commandOne(someShortLifetimeCommandParameter) {
        this.someInjectedField(someShortLifetimeCommandParameter + 2);
    }
    queryOne(someShortLifetimeQueryParameter) {
        return this.someInjectedField(someShortLifetimeQueryParameter);
    }
}
```

# Enter Closures, the classes close friend in "functional-style" programming

Enter our close friend the closure, which can come in the exact same form as the class but look different under the hood.

```js
const FavouriteFunctionalThing = (someInjected) => (someShortLifetimeCommandParameter) => {
    let someInjectField = someInjected;
    return {
        commandOne(someShortLifetimeCommandParameter) {
            this.someInjectedField(someShortLifetimeCommandParameter + 2);
        },
        queryOne(someShortLifetimeQueryParameter) {
            return this.someInjectedField(someShortLifetimeQueryParameter);
        },
        commandTwo(someShortLifetimeCommandParameter) {
            this.someInjectedField(someShortLifetimeCommandParameter + 3);
        },
        queryTwo(someShortLifetimeQueryParameter) {
            return this.someInjectedField(someShortLifetimeQueryParameter);
        },
    }
}
```
They look pretty similar, don't they? And we can make the similar "improvement" we made to classes, to our closure, making
it a bit more simplified looking:

```js
const FavouriteFunctionalThing = (someInjected) => (someShortLifetimeCommandParameter) => {
    let someInjectField = someInjected;
    return this.someInjectedField(someShortLifetimeCommandParameter + 2);
}
```

But wait, did us and functional just become best friends? All-the-sudden our "overly verbose" javascript class has become
a very succinct FavouriteFunctionalThing. I've also seen this simplified even further into its own file, where the code
simply looks like this:

```js
let someInjectedField;
let init = (someInjected) => {
    someInjectedField = someInjected;
} 
const someMethod = (someShortLifetimeCommandParameter) => {
    return someInjectedField(someShortLifetimeCommandParameter + 2);
}
export { init, someMethod }
```

# Take Away on Closures vs Classes

Regardless of whether you prefer the class declaration, the closure declaration, or something in-between, you should understand
at its core both implementations. You will have to, over the course of your career, maintain code in both styles. Understanding
how they work under the hood, what the concerns are, and how to test them is where the real metal hits the pavement.