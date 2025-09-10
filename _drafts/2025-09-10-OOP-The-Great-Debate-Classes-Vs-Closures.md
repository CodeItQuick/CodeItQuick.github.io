# OOP The Great Debate - Classes vs Closures

OOP is better than functional, or is functional better than OOP. Often OOP programmers have no knowledge of functional
(being a primarily OOP developer I'm guilty of this), while functional programmers often come from an OOP background and
got "fedup" with some of the problems that got attributed to OOP. I say the latter half of this sentence in this manner, 
because often we attribute our problems to the wrong thing. Oh my code sucks, what caused this? Its the general paradigm
OOP that's the issue, not my code. Often its your code, but sometimes it could be the paradigm you are working in.

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
their own ability to run commands/queries on them. CQS (Command Query Separation) is necessary for "proper OOP", so there are
no getters and setters. Behaviour is what hides behind command/query, where get/set are just simple Data Transfer Objects (DTOs)
that do not transform the data. Both closures with some currying and classes have the idea of "injected thing". The purpose
of injected thing is to run the lifetime of the greater class, whereas the command and query parameters are short-lived 
instances that disappear after the method has been run. Repositories feed Services that then feed Controllers, at times, or
in domain code you're thinking about collaboration between different domain classes. We happily take all the similar commands,
and group them onto the class, and then clump this behaviour into a single file. This allows us to better sort the code, 
making it more maintainable.

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
They look pretty similar don't they? And we can make the similar "improvement" we made to classes, to our closure, making
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