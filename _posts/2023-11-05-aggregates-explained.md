---
name: Aggregates Explained
description: Learn about my current understanding of aggregates
image: zombie_download_5.png
---

# Aggregates Explained

## What are they? The Theory

An aggregates primary definition is that it has an id. It is used to grab information from the database, and controls
the flow in and out of the database through what is effectively a view.

## What are they? The Implementation

The aggregate is implemented as the following: 

```text
public sealed class ExpenseReportAggregate
{
    [Key]
    private int Id { get; set; }

    private List<Expenses>? Expenses { get; set; }

    public List<Expense>? RetrieveExpenseList()
    {
        return Expenses?
            .Select(x => new Expense(x.ExpenseType, x.Amount))
            .ToList();
    }
}
```
The expenses should likely be privately set, as the setter should not be accessed externally. The aggregate is accessed through
the general Command/Query paradigm. The Repository layer takes these aggregates and either saves them or shows them in 
a view. This implementation for a view of the last expense report looks like the following:

```text
public class ExistingExpensesRepository
{
    private readonly ExpensesContext expensesContext;

    public ExistingExpensesRepository()
    {
        var DbPath = Path.Join(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "blogging.db");
        var dbContextOptions = new DbContextOptionsBuilder()
            .UseSqlite($"Data Source={DbPath}")
            .Options;
        expensesContext = new ExpensesContext(dbContextOptions);
    }

    public ExpenseReportAggregate? GetLastExpenseReport()
    {
        return expensesContext.ExpenseReportAggregates.ToList().LastOrDefault();
    }
}
```

The service is represented by the following code, which primarily just retrieves the aggregate from the repository layer,
does any domain work necessary, and then outputs it to the adapter(s).

```text
public class ExpensesService
{
    private ExistingExpensesRepository expenseRepository;
    private readonly DateProvider dateProvider;

    // Used By Production Code, One Smoke Test
    public ExpensesService(DateProvider? dateProvider) {
        this.dateProvider = dateProvider ?? new RealDateProvider();
        expenseRepository = new ExistingExpensesRepository();
    }

    public ExpenseReport RetrieveExpenseReport() {
        var expensesReportAggregate = expenseRepository.GetLastExpenseReport();

        ExpenseReport expenseReport = new ExpenseReport(
            expensesReportAggregate?.RetrieveExpenseList() ?? new List<Expense>(),
            this.dateProvider);
        
        return expenseReport;
    }
}
```
Here the view expenses grabs the data from the repository in the form of an aggregate. It then takes this aggregate, constructs
the domain, does some calculations, and outputs a view. 

The domain for the aggregate is, for example, calculating total expenses by doing the following:
```text
public class ExpenseReport
{
    private List<Expense> expenses;

    public ExpenseReport(List<Expense> expenses) {
        this.expenses = expenses;
    }
    
    public int CalculateTotalExpenses() {
        int total = 0;
        foreach (Expense expense in expenses) {
            total += expense.Amount();
        }
        return total;
    }
}
```

I'm not convinced the repository layer is needed, as most of the work is done by the aggregate. I also don't like how I 
constructed the domain.


[Take me to the blog]({% link blog_list.md %})
