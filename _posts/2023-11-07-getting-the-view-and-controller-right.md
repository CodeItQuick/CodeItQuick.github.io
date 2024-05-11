---
layout: post
name: Adapter Layer Explained
description: Learn about my current understanding of the adapter layer
image: zombie_in_graveyard_one_instasize.jpg
tags: theory DDD all
---

# Adapter Layer Explained

## What is the adapter layer

Essentially it's the combination of controller/view, and it grabs data from the service and domain layer. What can exist
in the adapter layer of hexagonal is very interesting. You can have an entire web application, mobile app, email functionality,
etc. For this reason I've heard of hexagonal as "horizontal" as opposed to "vertical" scaling.

It took a bit of time, but I eventually got to this in the ultra simple expense report kata hexagonal architecture:

```text
public class HomeController
{
    // Constructor etc. omitted for brevity
    
    public ActionResult<ExpenseView> Index()
    {
        ExpenseReport expenseReport = _expenseService.RetrieveExpenseReport();
        var expenseView = new ExpenseView() 
        {
            MealExpenses = expenseReport.CalculateMealExpenses(),
            ExpenseDate = expenseReport.RetrieveDate(),
            TotalExpenses = expenseReport.CalculateTotalExpenses(),
            IndividualExpenses = expenseReport.CalculateIndividualExpenses(),
        };
        return View(expenseView);
    }
}
```

The view is just as simple. I initially though I should inject the ExpenseReport domain calculations into the view, then
realized this is actually an antipattern. At the boundaries of a system you want to serialize data and pass that serialized
data, so property bags, getters/setters, or DTOs are the better abstraction. The code is as follows:


```text
public class ExpenseView
{
    public int MealExpenses { get; set; }
    public int TotalExpenses { get; set; }
    public DateTimeOffset ExpenseDate { get; set; }
    public List<String>? IndividualExpenses { get; set; }
}
```

Interestingly, this leaves *all* of the display of the data to the frontend, which I quite like. Before I had injected in
text to the data, but I (again) think this is an antipattern. It's better from a testing perspective to just pass data,
and have the frontend concerned with how to display that in a human-friendly form.


[Take me to the blog]({% link blog_list.md %})
