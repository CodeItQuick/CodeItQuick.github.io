
# Validation
- Validate early, often, and gently
- clear and specific error messaging
- show success states too
- keep feedback immediate and contextual
- maintain UI consistency
- prevent submission if invalid, but allow drafts
- guide input with constraints
- preserve user input on validation errors
- match validation to field intent
- don't trust just the UI (UI validation assists users, backend validation enforces rules)

## Error Messages
Note: this section is under validation since we're talking about UX error messages
Summary:  Design effective error messages by ensuring they are highly visible, provide constructive communication, and respect user effort.
Visibility Guidelines
- display close to the errors source
- use noticeable, redundent, and accessible indicators (eg: border highlighting, iconography, red text)
- Design errors based on impact: Must deal with in modals, optional or "good to know" messages in conditional displays, toasts, etc.
- Avoid premature displaying errors, or unnecessary errors
  Communication Guidelines
- use human-readable language
- concisely and precisely describe the issue
- offer constructive advice
- take a positive tone and don't blame the user
  Efficiency Guidelines
- safeguard against likely mistakes: eg mentioning an attachment in an email but forgetting to attach it generates an error
- preserve the user's input
- reduce error-correction effort
- concisely educate on how the system works

Mitigate failure with novelty in dire situations


# Errors

Definition: An action or omission of action yielding an unintended result
Two basic types:
Slips: Errors of action or execution, and occur when an action is not what was intended. Dialing the wrong frequently dialed
phoned number, forgetting your place in a procedure due to a phone call. Slips are the result of automatic, unconscious processes, and result
from disruption or change of routine.

Mistakes: Errors of intention or errors of planning. A nurse misinterpreting an alarm and administering the wrong medicine.

Forgiveness in Design: Reduce frequency and severity of errors

Throw exceptions, not errors. Errors that are correctable (eg: entered in an email with too many characters) should be moved up
the validation/errors/exception callstack to validation.

Error Boundaries: A method in vue or react code that allows for catching errors and displaying them to the user, especially
if the error is a result of faulty frontend code.
Handling Errors:
- Specificity: Focus on identifying and handling various error types
- Graceful Degradation: Avoid sudden crashes and smoother user experience
- Logging: Incorporate comprehensive logging for future analysis

## Common Errors
# Wrong Login Credentials
- show generic error to avoid leaking info
- show password toggle
- offer password reset links and login help
- autofill password field from browser password managers

# Incomplete Form Submissions
- Highlight invalid/missing fields with realtime feedback
- use progress indicators for long forms
- Provide clear labels: eg. use "required" when needed

# Typing/Format Errors
- Input masks or dropdowns for credit card numbers, zip codes, etc.
- Auto-format where possible
- provide real-time validation

# Clicking disabled or hidden elements
- Clearly gray out disabled elements and give tooltips with reasons
- Use skeleton loaders or spinners for async content
- Don't hide buttons unnecessarily, disable instead

# Accidental Navigation or Form Abandonment
- show unsaved change prompts
- enable auto-saving
- Allow back or undo actions

# Tapping the wrong element
- Use large targets
- Add spacing
- Provide visual feedback

# Getting Lost or Confused
- provide clear next steps, progress indicators, breadcrumbs
- use consistent navigation patterns
- Include search bar and **helpful empty states**

# Poor Internet Connection
- cache if possible, provide loading indicators and retry options
- Graceful handling of exceptions like "check your connection and try again"

# Exceptions
if a failure is expected behavior, then you shouldn't be using exceptions
Use only for exceptional cases
fail fast, fail loud
don't swallow exceptions unintentionally
use hierarchies for custom exceptions
centralize global error handling (eg: spring @ControllerAdvice)
Standardized Error messages (HTTP 400/500)
400 -> Validation Error
404 -> Not Found
403 -> Permissions Error
409 -> Conflict Error
500 -> Unhandled/Server Error

## Common Exceptions
- Arithmetic Errors
- Null and undefined references
- File and IO errors
- Type and casting errors
- index and bounds errors
- recursion and memory
- network and http 

## Custom application exceptions
- User/Authentication Exceptions
* UserNotFoundException
* InvalidCredentialsException
* UserNotVerifiedException
* EmailAlreadyInUseException
* UsernameTakenException
* PasswordTooWeakException
* TwoFactorAuthFailedException
* UserSuspendedException
* SessionExpiredException
* AccountLockedException
* TokenExpiredException
* InvalidResetTokenException
* UnauthorizedActionException
* InsufficientPermissionsException

- Payments/Billing Exceptions
* PaymentDeclinedException
* CardExpiredException
* InsufficientFundsException
* DuplicateTransactionException
* InvalidPaymentMethodException
* CurrencyMismatchException
* RefundNotAllowedException
* InvoiceAlreadyPaidException
* ChargebackDetectedException
* SubscriptionExpiredException
* PlanUpgradeNotAllowedException
* TrialAlreadyUsedException
* TaxCalculationException
* BillingCycleMismatchException
- Scheduling/Time-based exceptions
* TimeSlotUnavailableException
* AppointmentConflictException
* EventOverlapException
* InvalidTimeRangeException
* RescheduleLimitExceededException
* RecurringEventConflictException
* TimezoneMismatchException
* LateCancellationException


## Safe Exception Handling Principle
- Failure, or "organized panic": The routine fixes the object's state by re-establishing the invariant (this is the "organized" part), and then fails (panics), triggering an exception in its caller (so that the abnormal event is not ignored).
- Retry: The routine tries the algorithm again, usually after changing some values so that the next attempt will have a better chance to succeed.

Note: In particular, simply ignoring an exception is not permitted

# Logging

TRACE: Very detailed debugging info, usually off in production.
DEBUG: Debugging information for developers.
INFO: General application flow and state changes (e.g., "User logged in").
WARN: Unexpected situations that don't halt the program (e.g., retry attempts).
ERROR: Failures that need attention but allow the application to continue.
FATAL: Critical issues causing a shutdown or severe malfunction.

TRACE Examples:
* Method Entry and Exit
* Loop Iterations and Internal Processing Steps
* Internal Component Communication
* Detailed Cache Behaviour
* Configuration and Startup Diagnostics
* HTTP Request/Response Bodies **USEFUL**
* ORM/Query Execution Details **USEFUL**
* Thread or coroutine activity
Notes: Disabled by default, only enabled in dev, staging, or temp production

When is TRACE log level appropriate?
* When you need extremely detailed, step-by-step logging
* Much more verbose logging than DEBUG
* Deep Diagnostics, performance execution, often at the method, loop, or internal event level
* Use TRACE when you want to see **everything** your app is doing, internally, at a surgical level of detail.

DEBUG Examples
* Business Logic Steps
* Input Validation Results
* Configuration Values and Flags
* External System Interactions (High-Level) **USEFUL**
* Dependency Behaviour (interactions with caches, databases, search indexes) **MAYBE**
* Decision-Making Branches
* Non-critical Metrics and Counters
* Thread or Task Start/Stop **MAYBE**
* Cleanup and Resource Handling
Notes: Enabled in Dev and QA. Enabled selectively in production. Avoid logging excessive or sensitive data

When is DEBUG appropriate?
* Detailed information about the internal workings of your application
* Information useful for developers diagnosing issues
* Not needed in production logs
* Use when you need to follow the **how** and **why** of your code's behaviour

INFO Examples
* Major Application Events **USEFUL**
* User Actions and State Changes
* System Milestones or Workflow Progress
* External System Calls (Summary Only) **MAYBE**
* Configuration or Initialization Logs **USEFUL**
* Feature Flag and Environment Information **USEFUL**
* Periodic Or Summary Reporting 
Notes: Enabled in production. Ideal for auditing, monitoring, and normal operation tracking. Avoid using for DEBUG or TRACE levels.

When is INFO appropriate?
* Important, high level events that are part of normal, expected operation
* not errors, not detailed debugging either
* Affirms the system is working as expected

WARN Examples
* Recoverable Errors
* Deprecated Features
* Configuration Issues
* Resource Limitations
* Potential Security Risks (eg: bad login 5 times)
* Permissions and Access Issues
* External System Slowness **USEFUL**
* Missing Data or Unexpected State
* System Maintenance or Temporary Unavailability
* Time-based Warnings
* Recoverable Errors or Retry Scenarios
* Temporary Performance Degradation or Fallback
* Using Defaults when configuration is missing

When is WARN appropriate?
* You want to flag potential issues without blocking functionality
* For things that require investigation but are not urgent or critical
* Useful for tracking non-fatal system behaviour that could affect the user experience or future stability
* Can be applicable to specific domains like performance tuning, or security auditing

ERROR Examples
* Failed External API Call without Fallback
* Data Persistence Failure
* Uncaught Exceptions
* Critical Business Logic Failures
* Retry Limit Exceeded
* Message Queue Processing Failure
* System Resource Exhaustion
* Invariant Assertion Failures
* Security-Related Failures

When to use ERROR?
* Something failed and the system should respond eg: alerting or retry
* The failure is unexpected or violates assumptions
* You need to investigate, fix, or escalate the issue

Include in the structured log:
* Timestamps
* Request ID / Correlation ID (Used to trace request flows)
* User ID and Session Info
* Service/Method Name
* Environment
* Request data/body with PII removed
* Important internal database keys or external data source keys
* The stack trace if applicable
* Git SHA at startup or in log entries

Centralize and Aggregate Logs with a consistent formatting

Log the start and end of major operations
```
[INFO] Started data sync: source=db, target=cache
[INFO] Finished data sync: duration=1482 ms
```

Review Logs Regularly

Log Exceptions with full context (stack traces, environment info, failing inputs for debugging)

## References
Fowler, Martin. Replace throw with notification. https://martinfowler.com/articles/replaceThrowWithNotification.html.  
Fowler, Martin. Notification. https://www.martinfowler.com/eaaDev/Notification.html.  
NN Group. https://www.nngroup.com/articles/error-message-guidelines/
https://en.wikipedia.org/wiki/Exception_handling_(programming)
Universal Principles of Design, Revised and Updated: 125 ways to enhance usability, influence perception, increase appeal...