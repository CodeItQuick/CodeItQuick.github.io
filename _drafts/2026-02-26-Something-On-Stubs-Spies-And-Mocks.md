# Stop Over-Mocking: When Integration Tests Beat Fakes Every Time

Mock-heavy test suites feel productive right up until they don’t.

Most teams hit a point where:

- a “small refactor” breaks dozens of tests
- tests read like a transcript of internal method calls
- changing *how* you build something breaks tests even when the user-visible behavior is identical

That’s usually not because mocks are “bad”. It’s because the tests are asserting **implementation details** instead of **behavior**.

A theme that shows up again and again in influential testing guidance (notably *xUnit Test Patterns* and *Growing Object-Oriented Software, Guided by Tests*) is this:

- Use test doubles to **create seams** and **control hard-to-reach conditions**.
- Use integration tests to **buy confidence in real wiring and semantics**.
- Avoid tests that “prove” your code made a particular set of calls, unless that collaboration is the *behavior you care about*.

This post is a practical primer on the common test double types—spies, stubs, fakes, and mocks—and when a well-chosen integration test is a better default.

---

# A Brief Primer on Spies, stubs, Fakes, and Mocks

A useful umbrella term is **test double** (from *xUnit Test Patterns*): anything you stand in for the “real” collaborator in order to test.

Two axes matter more than the labels:

1. **What does the double do?**
   - Return canned data?
   - Behave like a simplified implementation?
   - Record what happened?

2. **What does the test assert?**
   - **State-based** assertions: “given inputs X, the resulting state/output is Y”.
   - **Interaction-based** assertions: “the SUT sent message M to collaborator C”.

One more small warning: many teams use the word “mock” to mean “any double”. In this article, I’ll use the stricter, more specific terminology popularized by *xUnit Test Patterns*.

To keep things concrete, I’ll reuse this running example:

- `CheckoutService` is the system under test (SUT).
- It depends on:
  - `IPaymentGateway` (external boundary)
  - `IInventory` (checks/reserves stock)
  - `INotifications` (emails, SMS, etc.)
  - `ICheckoutRepository` (persistence)

---

## What are spies?

A **spy** is a test double that **records what it was asked to do**, so the test can assert on it later.

Typical spy behavior:

- it stores inputs (arguments) it received
- it may count calls
- it might keep an “outbox” list like `SentEmails`

Spies are most helpful when the *outcome you care about* is “a message was sent” (a side-effect), but you don’t want to use the real world (real SMTP, real message bus) in the test.

### When spies are a good fit

- You want to verify a meaningful side effect, such as:
  - “an order confirmation notification was requested”
  - “an audit event was written”
- You can express the assertion at a **high level** (e.g., inspect the captured message), rather than a long list of low-level call assertions.

### Spy pitfall: asserting choreography

The pain starts when the spy assertions don’t reflect business behavior. For example:

- asserting the exact order of calls
- asserting intermediate calls that are an implementation choice (e.g., “it called `FormatSubject()` before `Send()`”)

That’s the road to brittle tests: refactors break tests even when behavior is unchanged.

### A simple mental model

Prefer spies that capture **domain-relevant artifacts**:

- capture a `NotificationRequested` message, not “method call #3 had argument ‘foo’”.

---

## What are stubs?

A **stub** is a test double that provides **canned answers** so the SUT can run.

The defining characteristic is: you generally **don’t assert on the stub**. You use it to control inputs and conditions.

### When stubs are a good fit

- Controlling non-determinism:
  - a `Clock` that always returns a known timestamp
  - a random number generator that returns a predictable value
- Forcing hard-to-trigger paths:
  - payment gateway returns “declined”
  - inventory reports “out of stock”
  - a dependency throws a timeout exception

### Stub pitfall: “mega-stubs”

A stub that grows a big decision tree (“if called with X return A, if called with Y return B…”) is often a sign that:

- your collaborator interface is too low-level/chatty, or
- you’re trying to test too much behavior at once

At that point the double is drifting toward a fake, or the test should be split.

---

## What are fakes?

A **fake** is a test double with a **working implementation**, but one that’s simplified and not suitable for production.

Classic examples:

- an in-memory repository instead of a real database
- an in-memory message bus instead of Kafka/RabbitMQ
- a fake payment gateway that applies a simple rule set

Fakes can be a sweet spot because they support **state-based assertions** with less mocking ceremony.

### When fakes are a good fit

- You want “integration-ish” confidence without dragging in infrastructure.
- You want tests that read like behavior:
  - “after checkout, the order is persisted and a confirmation is queued”

### Fake pitfall: semantic drift

The big risk is divergence from the real dependency’s behavior.

For example, an in-memory repository that doesn’t enforce:

- uniqueness constraints
- transaction boundaries
- case sensitivity / collation
- nullability

…can allow tests to pass while production fails.

A pragmatic guideline from long-lived codebases is:

- Use fakes for speed and clarity.
- Add a small number of **integration tests** (or contract-style checks) to ensure your assumptions match the real thing.

---

## What are mocks?

A **mock** is a test double where you set **expectations in advance** about how it should be called, and the test fails if those expectations aren’t met.

In many mocking frameworks, the difference looks like:

- Stub: “when you call `Charge`, return Declined”
- Mock: “expect `Charge` to be called once with amount = 100; otherwise fail”

This style aligns strongly with the “interaction testing” emphasis in *Growing Object-Oriented Software, Guided by Tests*: describing and shaping collaborations between objects.

### When mocks are a good fit

- The collaboration *is* the behavior you care about.
  - Example: you must ensure you don’t charge a credit card twice.
- You’re mocking a **stable boundary**.
  - External gateways, message buses, 3rd party APIs.

### Mock pitfall: coupling to internals

Mocking becomes painful when you mock your own internals:

- mocking concrete classes
- mocking domain entities/value objects
- mocking “helper” objects that exist only because the code is awkward

Those tests tend to encode the current structure of the code. Refactor the structure, and the tests explode.

A practical rule of thumb:

- Mock at the edges (things you don’t control, or that are slow/non-deterministic).
- Prefer state-based or higher-level integration tests for the middle of your domain.

---

## What are integration tests?

An **integration test** exercises multiple real components working together.

The phrase is broad, so it helps to be explicit about *what is being integrated*. A useful spectrum is:

1. **In-process integration**: real production objects wired together in-memory, with only “edge” dependencies doubled.
2. **Infrastructure integration**: real DB/filesystem/ORM/migrations.
3. **End-to-end**: real HTTP boundary, real process boundaries, often with real auth and a real runtime hosting model.

### Why integration tests often beat over-mocking

Integration tests tend to:

- assert behavior through real paths (less overspecification)
- survive refactors better (because they don’t care about internal message choreography)
- catch issues mocks can’t:
  - dependency injection wiring
  - misconfigured serialization
  - ORM mapping mistakes
  - schema constraints
  - incorrect SQL

### The trade-offs

Integration tests can be:

- slower
- harder to set up/tear down
- flaky if they rely on timing/network/shared state

So the goal isn’t “integration tests everywhere”. It’s “integration tests where reality matters most”.

---

# Taking a step back - Moving from everything is a hammer

Once you learn mocks, the temptation is to use them for everything. That’s normal: they’re powerful and they create the feeling of control.

But a consistent thread in mature testing approaches is optimizing for two things:

- **fast feedback** (tests you can run constantly)
- **high confidence** (tests that fail when behavior truly regresses)

Over-mocking often gives you speed but not confidence. Integration-only often gives you confidence but not speed.

A healthier default is:

- Use fast unit tests for logic that’s naturally isolated.
- Use integration tests for wiring and real semantics.
- Use doubles strategically at the edges.

---

## When is integration testing superior to mocking? Are both techniques commonly done?

Both are common on effective teams. The trick is picking the right tool for the risk.

Integration testing is usually superior when the main failure modes are about **configuration and real behavior**, not algorithmic logic.

Common cases where integration tests win:

- ORM mappings, migrations, and schema constraints (the famous “it worked with a mocked repository” trap)
- serialization/deserialization (JSON naming, null handling, versioning)
- dependency injection wiring (missing registrations, wrong lifetimes)
- authorization rules that rely on multiple layers
- multi-step workflows with real transactional semantics

Integration tests are also a practical on-ramp for legacy code. As *Working Effectively with Legacy Code* points out, sometimes you can’t easily isolate a unit yet. A higher-level test can provide a safety net while you refactor toward better seams.

The usual modern compromise aligns with the “test pyramid” idea:

- many fast unit tests
- some integration tests
- a small number of end-to-end smoke tests

---

## Stubs and spies are too simple and constricting!

If you feel forced to write complicated stubs and ultra-detailed spy assertions, it’s often not a testing problem—it’s a design signal.

It can indicate that:

- the collaborator interface is too low-level (“chatty”)
- the SUT is coordinating too many steps
- you’re leaking implementation details across boundaries

A popular fix (especially in GOOS-style design) is to raise the level of abstraction at the boundary.

For example, instead of a test needing to assert:

- `SendEmail(to, subject, body)` called once
- plus separate calls for CC, attachments, formatting, templates…

…introduce a boundary like:

- `RequestOrderConfirmation(orderId)`

Now your spy can record a single, meaningful message. Your tests become smaller, clearer, and less brittle.

---

## Should we ever use fakes?

Yes. Used carefully, fakes are one of the most productive tools you can add to a test suite.

Great uses of fakes:

- in-memory repositories for domain tests
- an in-memory outbox for emails/notifications
- a fake message bus to capture published events

Guidelines to keep fakes from becoming a maintenance burden:

- Keep them tiny and purpose-built.
- Model only the semantics you rely on.
- If divergence would be costly, back the fake with a few integration/contract checks against the real dependency.

If a fake grows into a mini reimplementation (a “second system”), it’s often time to replace it with either:

- real infrastructure in tests (integration), or
- a narrower seam so the fake stays small.

---

## Why can mocking be so painful?

Mocking hurts most when a test describes *how the code is currently arranged* instead of *what must be true*.

Common sources of pain (classic “test smells”):

- **Overspecified tests**: many interaction assertions that aren’t business requirements.
- **Brittle tests**: refactors break them even though behavior didn’t change.
- **Deep stubs / chained mocks**: `a.getB().getC().doThing()` style, which often indicates poor object boundaries.
- **Mocking your own domain**: if you’re mocking your own model objects, you’re often testing the mocking framework, not your code.
- **High collaborator count**: if one unit test needs 6–10 mocks, the unit might not be a unit.

A practical way out is to move “up” one level:

- replace several mocks with a single integration test of the real collaborators
- or introduce a higher-level boundary and mock/stub only that

---

## Can't I just use integration tests everywhere?

Not if you care about iteration speed.

One of the core insights in *TDD by Example* is the value of a tight feedback loop: tests that run fast enough that you’re willing to run them constantly.

Integration tests can absolutely be part of that loop, but usually only when they’re:

- deterministic (no real network calls, controlled time)
- isolated (clean database state per test, no shared queues)
- fast enough (or limited in count)

A pragmatic “portfolio” that works well in practice:

- **Unit tests** for pure domain logic and edge cases.
- **Integration tests** for boundaries where real semantics matter (DB, serialization, wiring).
- **A few end-to-end tests** as smoke tests to catch system-level gaps.

If you’re currently over-mocking, a good first move is simple:

- pick one area where mocks are especially brittle
- replace a cluster of unit tests with 1–3 integration tests that assert behavior end-to-end (within a bounded scope)

You’ll usually get fewer tests, higher signal, and a suite that tolerates refactoring much better.
