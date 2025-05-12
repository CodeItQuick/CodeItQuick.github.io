
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

Log Exceptions with full context (stack traces, environment info, failing inputs for debugging)

## References
Fowler, Martin. Replace throw with notification. https://martinfowler.com/articles/replaceThrowWithNotification.html.  
Fowler, Martin. Notification. https://www.martinfowler.com/eaaDev/Notification.html.  
NN Group. https://www.nngroup.com/articles/error-message-guidelines/
https://en.wikipedia.org/wiki/Exception_handling_(programming)
Universal Principles of Design, Revised and Updated: 125 ways to enhance usability, influence perception, increase appeal...