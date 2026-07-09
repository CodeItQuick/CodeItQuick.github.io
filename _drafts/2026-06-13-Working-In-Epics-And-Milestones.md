

# Further Improvements - Moving the Epic into Milestones

Adding milestones into our story can further help us detail out the stages, and make decisions about what to deliver first.
Is milestone 2 more important than milestone 1? We should be able to swap them. It also introduces the delivery aspect into
the story. At what point do we turn off the feature flags to allow for delivery of the story?

## Milestone 1: Internal demo / walking skeleton
| SPIDR | Story title                                                                 |
| ----- | --------------------------------------------------------------------------- |
| Spike | Decide the minimum authentication approach                                  |
| Path  | Complete minimal register/login/logout flow on a protected placeholder page |
{: .table .table-zebra .table-hover}

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
{: .table .table-zebra .table-hover}

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
{: .table .table-zebra .table-hover}

Milestone Outcome
> Users can recover access to their account, verify ownership of their email, and rely on stronger protections around sensitive authentication events.

## Further Article Ideas
* FAQ on SPIDR
* Details on how to apply SPIDR to a mature system rather than greenfield
* Details on once we have an epic setup, how to split stories/change the flow
* Common Failure Modes?
* How to integrate these stories into deployment schemes (Feature Flags, Continuous Delivery/Deployment, Internal Demos, etc.)
