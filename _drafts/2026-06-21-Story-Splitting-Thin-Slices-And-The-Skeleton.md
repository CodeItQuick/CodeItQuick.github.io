---
layout: post
name: Story Splitting Thin Slices And The Skeleton
description: How thin vertical slices and skeleton-first thinking fix story splitting
image: story_splitting_practical_look_zombies.png
time: "5m:00s"
tags: quality all
---

The most common story splitting mistake isn't writing stories that are too large — it's writing stories that are parallel 
instead of iterative. You end up with Register, Login, Logout, Error Handling, and Session Persistence as five separate 
stories, each blocked by the previous one, each delivering nothing alone. That's not a backlog. That's a construction plan.

The fix is two ideas working together: **thin vertical slices** and the **skeleton-first path**. A thin vertical slice cuts 
through every layer of the system — UI, logic, data — and delivers something that works end-to-end, even if it works badly. 
The skeleton-first path means your first story is that minimum end-to-end cut: not perfect, not complete, but traversable. 
Everything after is filling in the skeleton.

SPIDR gives you the shape of the fanout. You start with a spike — just enough research to know what you're building. Then 
you write one path story that is the skeleton: the minimum end-to-end flow that proves the whole vertical stack is connected. 
For authentication, that skeleton is more minimal than most teams expect. It's a login button and a logout button, wired 
to a backend that issues a session, with one authenticated endpoint and one unauthenticated endpoint — enough to prove 
that both authentication and authorization are working. No username/password form. No registration. No error handling. 
Just the proof. Every story after that — credential input, registration, error messages, session persistence — is independent 
work layered onto a system that already runs.

| SPIDR     | Story title                                                    | Blocked by                                  |
| --------- | -------------------------------------------------------------- | ------------------------------------------- |
| Spike     | Decide the minimum authentication approach                     | Nothing                                     |
| Path      | Complete minimal login/logout flow                             | Decide the minimum authentication approach  |
| Path      | Handle failed registration attempts                            | Complete minimal login/logout flow          |
| Path      | Handle failed login attempts                                   | Complete minimal login/logout flow          |
| Interface | Keep browser authentication state correct after refresh        | Complete minimal login/logout flow          |
| Rule      | Prevent unauthenticated access to protected pages              | Complete minimal login/logout flow          |
| Rule      | Reject invalid or expired sessions                             | Complete minimal login/logout flow          |
| Rule      | Store passwords securely                                       | Complete minimal login/logout flow          |
| Rule      | Limit repeated failed login attempts                           | Complete minimal login/logout flow          |
| Data      | Return the current authenticated user's basic account identity | Complete minimal login/logout flow          |

Look at the "Blocked by" column. Only two stories are truly sequential — the spike, and the skeleton path that follows it. 
Every story after that is blocked by the skeleton, not by each other. That means once the skeleton ships, the team can 
pull from the remaining stories in any order. One developer hardens session rejection while another adds the registration 
form. The work fans out. That's the difference between a construction plan and a backlog.

This is what [Tim Ottinger's "sooner, not faster"](http://butunclebob.com/ArticleS.TimOttinger.SoonerNotFaster) actually 
means in practice. You aren't delivering the full authentication system faster — you're delivering a working slice of it 
sooner, so the team can learn, the product owner can see something real, and the remaining stories can move in parallel. 
The skeleton isn't a shortcut. It's the thing that makes every story after it possible.

<p align="center" width="100%">
    <img src="/assets/images/sooner-not-faster-picture.png" alt="Sooner Not Faster" height="512" width="512" />
</p>

The picture makes the point visually. Building a wheel delivers nothing. Building two wheels delivers nothing. But a 
skateboard — crude, incomplete, embarrassing next to a car — gets someone from A to B. Each iteration after that is a 
better solution to the same problem, not a new component bolted onto an incomplete one. The skeleton login flow is the 
skateboard. Everything else is the upgrade path.