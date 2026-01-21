---
layout: post
name: Making the Invisible 60% of Development Work Visible
description: What is the developer iceberg of work and how do we tackle it
image: spartan_zombie.webp
time: "10m:00s"
tags: quality all
---
# Making the Invisible 60% of Development Work Visible

## Executive Summary

Development teams spend only 40% of their time on features and bug fixes—the other 60% goes to refactoring, testing, security, observability, and platform work that's invisible to stakeholders. This framework categorizes all development work into five buckets (**Build**, **Fix**, **Improve**, **Run**, **Evolve**), each optimizing for different outcomes: delivering value now vs. maintaining velocity vs. operational stability vs. architectural flexibility. Teams that over-index on **Build** accumulate technical debt and see velocity crash; teams that over-index on **Improve** or **Evolve** miss market windows. The recommended balance varies by context: startups need 60-70% **Build**, mature products need 25-35% **Build** with 40-50% split between **Improve** and **Run**. Use this framework to make invisible work visible, set explicit targets, and negotiate conscious tradeoffs instead of letting urgency dictate everything.

---

## The Problem

Teams often struggle to explain where their time goes. Stakeholders see only "features" and "bugs," but developers know that's maybe 40% of what they actually do. The other 60%—refactoring, observability, tech debt, platform work, security updates—becomes invisible, undervalued, or squeezed out.

Without a shared language for this work, teams experience:
- **Chronic under-investment** in maintenance, testing, and operational work
- **Velocity crashes** as tech debt compounds
- **Constant firefighting** instead of building
- **Inability to defend** time spent on "non-feature" work

This framework gives you language and prioritization criteria to make all development work visible, valued, and balanced.

---

## The Five Buckets of Work

<p align="center" width="100%">
    <img src="/assets/images/iceberg_buckets.jpg"  alt="Product Iceberg" height="512" width="512" />
</p>  

Every piece of development work fits into one of five categories, each optimizing for different outcomes:

### **Build** (Product Change)
Work that adds or changes functionality to deliver new value. Anything where the system does something new or differently on purpose.

**Optimizes for:** Delivering value NOW, competitive advantage, revenue growth

### **Fix** (Correctness & Support)
Work that restores intended behavior—bugs, incidents, regressions, support issues.

**Optimizes for:** Restoring trust and correctness, user satisfaction, system stability

### **Improve** (Quality & Maintainability)
Work that makes future change safer and faster without necessarily changing behavior—refactoring, testing, tech debt, code quality.

**Optimizes for:** Developer productivity and change safety, long-term velocity

### **Run** (Operations & Reliability)
Work that keeps the system healthy in production—observability, monitoring, CI/CD, security, compliance, incident response.

**Optimizes for:** Stability, uptime, and operational confidence

### **Evolve** (Platform & Architecture)
Work that changes the foundations—architecture changes, migrations, platform improvements, strategic technical direction.

**Optimizes for:** Long-term scalability, flexibility, and strategic alignment

---

## What Each Bucket Builds

Understanding what capabilities each type of work builds helps you make strategic decisions about where to invest time.

| Bucket      | Primary Capabilities It Builds                          | Secondary Capabilities It Improves                                          |
| ----------- | ------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Build**   | **Capability**, **Value delivery**, **Usability**       | Time-to-market, Customer satisfaction, Market fit                           |
| **Fix**     | **Correctness**, **Stability**, **Trust**               | Supportability, Safety, Confidence in releases                              |
| **Improve** | **Maintainability**, **Changeability**, **Testability** | Developer velocity, Readability, Consistency, Reduced defect rate over time |
| **Run**     | **Reliability**, **Observability**, **Operability**     | Recoverability, Performance under load, Cost control, Compliance readiness  |
| **Evolve**  | **Scalability**, **Extensibility**, **Adaptability**    | Portability, Architecture agility, Future-proofing, Strategic alignment     |

---

## Detailed Work Examples: What Goes Where?

Here's how common development tasks map to the five buckets, with priority guidance:

### Product Work
* **Features** → *Build* • Priority: *High* — New user-visible or business-visible capability (new screen/endpoint/workflow)
* **Enhancements** → *Build* • Priority: *High* — Improvements to existing features, UX refinements
* **Experimentation** → *Build* • Priority: *Medium* — A/B tests, prototypes, or small experiments to validate an idea quickly
* **Product Polish** → *Build* • Priority: *Medium* — UX tweaks, copy changes, accessibility improvements, "fit and finish"

### Fixing Things
* **Production Incident** → *Fix* • Priority: **Immediate** — Restore service fast (hotfix, rollback, mitigation)
* **Bugs** → *Fix/Improve* • Priority: *Higher* — Correctness issues (crashes, wrong results, regressions, edge cases)
* **Defect Prevention** → *Improve* • Priority: *High* — Hardening code paths that frequently fail to reduce future bugs/incidents

### Quality Work
* **Testing Work** → *Improve* • Priority: *High* — Add/improve unit/integration/e2e tests; reduce flakiness; target risky areas
* **QA Support** → *Fix/Improve* • Priority: *High* — Repro steps + test data to close a specific issue (Fix); lasting automation/process improvements (Improve)
* **Observability** → *Run* • Priority: *Higher* — Logs/metrics/traces/dashboards/alerts that make issues visible early and diagnosable

### "Improve How It Works"
* **Refactoring** → *Improve* • Priority: *Medium* — Restructure code to be clearer/safer without changing behavior
* **Tech Debt** → *Improve* • Priority: *Medium* — Remove shortcuts that slow future work or increase risk
* **Performance Work** → *Improve/Run* • Priority: *High* — Latency/build speed/memory/query tuning
* **Reliability / Resilience** → *Run* • Priority: *Higher* — Timeouts, retries, idempotency, graceful degradation, circuit breakers
* **Security Work** → *Run/Fix* • Priority: **Highest** — Vulnerability fixes, authz/authn improvements, security upgrades
* **Maintainability** → *Improve* • Priority: *High* — Simplify design, improve modularity, reduce duplication, clearer interfaces

### Platform / Infrastructure Work
* **DevEx / Tooling** → *Improve* • Priority: *Medium* — Faster local setup, scripts, linting/formatting, generators, internal CLIs
* **CI / CD** → *Run* • Priority: *Higher* — Build/deploy automation, release process, environment parity
* **Infrastructure Changes** → *Evolve* • Priority: *High* — Cloud resources, networking, scaling, cost optimization
* **Monitoring Operations** → *Run* • Priority: *Higher* — On-call runbooks, SLOs/SLIs, incident playbooks, alert tuning

### Architecture & System Evolution
* **Architecture Changes** → *Evolve* • Priority: *High* — New services/modules, boundary changes, domain modeling shifts
* **Migrations** → *Evolve* • Priority: *Higher* — DB schema/data moves, API versioning, framework upgrades
* **Integration Work** → *Build/Fix* • Priority: *Higher* — Third-party APIs, identity providers, payments, webhooks

### Keeping Things Current
* **Dependency Upgrades** → *Run/Evolve* • Priority: *High* — Library/runtime/OS/container upgrades
* **Compliance / Policy Work** → *Run* • Priority: **Highest** — Data retention, privacy requirements, audit logs, access reviews

### Support & Collaboration
* **Code Review** → *Improve* • Priority: *High* — Catch issues early, improve consistency, spread knowledge
* **Debugging / Investigation** → *Fix* • Priority: *Higher* — Root cause analysis, "why is this slow/flaky?"
* **Documentation** → *Improve/Run* • Priority: *Medium* — Dev docs/onboarding/ADRs (Improve) and operational runbooks (Run)
* **Stakeholder Communication** → *Build* • Priority: *High* — Estimates, tradeoffs, scope alignment, release notes

### Discovery / Planning Work
* **Spikes / Research** → *Build/Evolve* • Priority: *Medium* — Time-boxed exploration to reduce uncertainty
* **Design** → *Build/Evolve* • Priority: *High* — Specs/RFCs/diagrams/test plans to align implementation
* **Backlog Grooming** → *Build* • Priority: *Medium* — Break epics into tickets, define acceptance criteria, clarify "done"

---

## The Tradeoffs

Each bucket optimizes for different outcomes, creating natural tensions:

* **Build**: Delivers value NOW
* **Fix**: Restores trust and correctness
* **Improve**: Makes future changes faster and safer
* **Run**: Keeps the lights on
* **Evolve**: Positions you for future scale/flexibility

### Tradeoff Comparison Table

| Comparison | Too Much of First | Too Much of Second |
|------------|-------------------|-------------------|
| **Build vs. Fix** | Users lose trust as bugs pile up; production incidents increase; support burden grows; team reputation suffers | Always reacting, never delivering new value; competitive disadvantage; revenue/growth stalls |
| **Build vs. Improve** | Tech debt accumulates; velocity crashes later; code becomes fragile and hard to change; simple changes take longer | Over-engineering; perfect code nobody uses; lost market opportunities; feature delivery stalls |
| **Build vs. Run** | Production becomes unreliable; outages increase; can't diagnose issues; no operational confidence | System stays stable but feature-starved; competitors ship faster; business value stagnates |
| **Build vs. Evolve** | Features pile up on weak foundations; system becomes unmaintainable; architectural collapse; rewrites loom | Grand architecture plans while missing market windows; over-designed platforms no one needs yet |
| **Fix vs. Improve** | Keep fixing same kinds of bugs; never address root causes; team exhausted from constant firefighting | Users suffer from known issues while team polishes internal quality; perception of ignoring customers |
| **Fix vs. Run** | Patch symptoms without improving observability; incidents hard to diagnose; repeated failures | Strong monitoring but bugs pile up; can see problems clearly but users still hit them |
| **Fix vs. Evolve** | Band-aid fixes on architectural problems; technical debt from quick patches; structural issues remain | Redesigning foundations while production burns; users blocked by bugs during long migrations |
| **Improve vs. Run** | Beautiful, testable code that crashes in production or can't be diagnosed when it fails | System stays up but becomes increasingly hard to change; tech debt makes even simple changes risky |
| **Improve vs. Evolve** | Locally optimal but globally constrained; clean code trapped in wrong architecture | New architecture with messy implementation; grand vision but poor execution quality |
| **Run vs. Evolve** | Stable but architecturally locked in; can't scale or adapt; "keeping the lights on" with no path forward | Bold architectural changes destabilize production; operational excellence sacrificed for future vision |

## Recommended Balance by Context

<p align="center" width="100%">
    <img src="/assets/images/garden_stages_cropped.gif"  alt="Product Garden" height="512" width="512" />
</p>  

| Context | Build | Fix | Improve | Run | Evolve |
|---------|-------|-----|---------|-----|--------|
| **Startup/Early Product** | 60-70% | 15-20% | 5-10% | 5-10% | 0-5% |
| **Growth Phase** | 40-50% | 15-20% | 15-20% | 10-15% | 5-10% |
| **Mature Product** | 25-35% | 10-15% | 20-30% | 20-25% | 10-15% |
| **Crisis/Incident Mode** | 5-10% | 30-40% | 5-10% | 40-50% | 0% |
| **Major Migration** | 20-30% | 10-15% | 15-20% | 15-20% | 30-40% | 
