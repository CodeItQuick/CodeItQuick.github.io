---
layout: post
name: Are You Splitting Stories, or Just Splitting Tasks?
description: Discussions of how to story split
image: splitting_stories_or_tasks.png
time: "6m:54s"
tags: quality all
---

# Introduction

The first article in this series was an "explain like I'm 5" explanation of story splitting. We are now going to attempt
a much more mature version of the same article. Instead of critiquing restaurant's, we will run through an authentication
example. The general task is to complete authentication for our e-commerce website. 

# Begin by Reframing Authentication with SPIDR

We are going to start with attempting SPIDR kind of blindly in our first attempt. We come up with the list of:

| SPIDR     | Story title                                           | Blocked by                  |
| --------- | ----------------------------------------------------- | --------------------------- |
| Spike     | Decide the minimum authentication approach            | Not blocked                 |
| Path      | Register with email and password                      | #1                          |
| Path      | Log in with email and password                        | #2                          |
| Path      | Log out of the application                            | #3                          |
| Path      | View a protected account page after logging in        | #3                          |
| Path      | Show useful errors for failed registration and login  | Partly blocked by #2 and #3 |
| Interface | Keep the browser UI in sync with authentication state | #3 and #4                   |
| Interface | Stay logged in across page refreshes                  | #7                          |
| Rule      | Prevent unauthenticated access to protected pages     | #5                          |
| Rule      | Reject invalid or expired sessions                    | #3 and #8                   |

Something is off here as well. A lot of the work is sequential. The part we missed is **thin vertical slices**.

# The SPIDR Fanout

The general SPIDR format is: setup a SPIKE to learn the general formatting, then go through the minimum skeleton path. After
we have the skeleton done, we can begin filling in the path with the Interface, Rules, and finally the Data.

<p align="center" width="100%">
    <img src="/assets/images/SPIDR_car_building.png"  alt="SPIDR Building A Car" height="512" width="512" />
</p>  

# Removing the blocking portions to have independent stories

| SPIDR     | Story title                                                    | Blocked by                                  |
| --------- | -------------------------------------------------------------- | ------------------------------------------- |
| Spike     | Decide the minimum authentication approach                     | Nothing                                     |
| Path      | Complete minimal register/login/logout flow                    | Decide the minimum authentication approach  |
| Path      | Handle failed registration attempts                            | Complete minimal register/login/logout flow |
| Path      | Handle failed login attempts                                   | Complete minimal register/login/logout flow |
| Interface | Keep browser authentication state correct after refresh        | Complete minimal register/login/logout flow |
| Rule      | Prevent unauthenticated access to protected pages              | Complete minimal register/login/logout flow |
| Rule      | Reject invalid or expired sessions                             | Complete minimal register/login/logout flow |
| Rule      | Store passwords securely                                       | Complete minimal register/login/logout flow |
| Rule      | Limit repeated failed login attempts                           | Complete minimal register/login/logout flow |
| Data      | Return the current authenticated user’s basic account identity | Complete minimal register/login/logout flow |

Now the only thing that usually blocks us is the first two stories. We need a minimal skeleton built, before we fill in
the abbreviated/niave parts.

# Further Improvements - Moving the Epic into Milestones

Adding milestones into our story can further help us detail out the stages, and make decisions about what to deliver first.
Is milestone 2 more important than milestone 1? We should be able to swap them. It also introduces the delivery aspect into
the story. At what point do we turn off the feature flags to allow for delivery of the story?

## Milestone 1: Internal demo / walking skeleton
| SPIDR | Story title                                                                 |
| ----- | --------------------------------------------------------------------------- |
| Spike | Decide the minimum authentication approach                                  |
| Path  | Complete minimal register/login/logout flow on a protected placeholder page |

Milestone Outcome  
> A user can register, log in, see that they are authenticated, view a protected placeholder page, and log out in a controlled/internal environment.

## Milestone 2: Minimum safe authentication release
| SPIDR     | Story title                                             |
| --------- | ------------------------------------------------------- |
| Rule      | Store passwords securely                                |
| Rule      | Prevent unauthenticated access to protected pages       |
| Rule      | Reject invalid or expired sessions                      |
| Path      | Handle failed registration attempts safely              |
| Path      | Handle failed login attempts safely                     |
| Interface | Keep browser authentication state correct after refresh |
| Rule      | Limit repeated failed login attempts                    |

Milestone Outcome  
> Users can safely register, log in, remain logged in during normal browser use, access protected pages, and receive safe error handling when authentication fails.

## Milestone 3: Account Recovery and Authentication Hardening
| SPIDR     | Story title                                                          |
| --------- | -------------------------------------------------------------------- |
| Path      | Reset a forgotten password                                           |
| Path      | Verify email before using account-only features                      |
| Rule      | Expire password reset links after a short period                     |
| Rule      | Prevent reuse of invalid or expired recovery links                   |
| Interface | Provide clear account recovery UI states                             |
| Rule      | Log important authentication events for audit/debugging              |
| Rule      | Notify users about sensitive account changes                         |
| Data      | Track account status such as active, locked, or pending verification |

Milestone Outcome  
> Users can recover access to their account, verify ownership of their email, and rely on stronger protections around sensitive authentication events.

## Further Article Ideas
* FAQ on SPIDR
* Details on how to apply SPIDR to a mature system rather than greenfield
* Details on once we have an epic setup, how to split stories/change the flow
* Common Failure Modes?
* How to integrate these stories into deployment schemes (Feature Flags, Continuous Delivery/Deployment, Internal Demos, etc.)
