---
layout: post
name: TDD Code Smells And Anti-Patterns
description: Discussing the many code smells and anti-patterns that prevent TDD  
image: story_splitting_zombies.png
tags: TDD all
---

# The Smells and Anti-Patterns

## Verbosity

The very common case where you write some test code, and realize that the test is significantly too long. An example
code snippet is shown below:
```csharp
    [Test]
    public void RepositoryCanAttackNewCharactersAndAtOneHitPointDiesAttackRollModifiedByOne()
    { 
        var dbContextOptions = new DbContextOptionsBuilder<EvercraftDbContext>()
            .UseInMemoryDatabase("CanGainLevelsAttackRollModifiedByOne").Options;
        var evercraftDbContext = new EvercraftDbContext(dbContextOptions);
        var homeRepository = new HomeRepository(
            evercraftDbContext);
        homeRepository.CreateCharacter("can attack character");
        homeRepository.CreateCharacter("Gained Experience Character");
        homeRepository.SetModifier(2, 14, "Constitution");
        homeRepository.AttackCharacter(1, 11);
        homeRepository.AttackCharacter(1, 11);
        homeRepository.AttackCharacter(1, 11);
        homeRepository.AttackCharacter(1, 11);
        
        homeRepository.AttackCharacter(1, 11);

        Assert.That(evercraftDbContext.DnDCharacters.Count(), Is.EqualTo(1));
        
        homeRepository.CreateCharacter("can attack character");
        homeRepository.AttackCharacter(3, 11);
        homeRepository.AttackCharacter(3, 11);
        
        homeRepository.AttackCharacter(3, 11);

        Assert.That(evercraftDbContext.DnDCharacters.Count(), Is.EqualTo(1));
    }
```

Why is this bad? It's very hard to discern what this code is actually doing. In this test cases situation its mostly
due to all the setup code necessary to test the single when condition.

Another classic code smell. The method is much too long in the production code. Its hard to figure out what this code
is actually _trying_ to do.

```csharp
public void AttackCharacter(int attackedCharacterId, int randomDieRoll)
{
var attackedCharacter = _applicationDbContext.DnDCharacters.Find(attackedCharacterId);

        if (attackedCharacter is not { } character ) return;
        var effectiveArmor = randomDieRoll - ModifierTable[(int) character.DexterityModifier];
        if (character.Armor >= effectiveArmor) return;

        // weaker enemies get hit harder, stronger enemies only get hit for 1 damage
        var coreDamage = (int) character.StrengthModifier > 10 ? 1: 
            1 - ModifierTable[(int) character.StrengthModifier];
        // highest level characters experience level gets added to the damage
        var characterExperiencePoints = _applicationDbContext
            .DnDCharacters.OrderBy(x => x.ExperiencePoints).Last().ExperiencePoints;
        var damageAmt = randomDieRoll == 20 ? 2 * coreDamage + characterExperiencePoints / 1000 :
            coreDamage + characterExperiencePoints / 1000;

        var characterDied = character.HitPoints <= damageAmt;
        if (characterDied)
        {
            _applicationDbContext.DnDCharacters.Remove(attackedCharacter);
            _applicationDbContext.SaveChanges();
            var dnDCharacters = _applicationDbContext.DnDCharacters.ToList();
            dnDCharacters.ForEach(x => { 
                x.ExperiencePoints += 1000;
                var constitutionModifier = (int) x.ConstitutionModifier < 12 
                    ? 0 
                    : ModifierTable[(int) x.ConstitutionModifier];
                x.HitPoints += 5 + constitutionModifier;
            });
            _applicationDbContext.SaveChanges();
            return;
        }
        
        attackedCharacter.HitPoints -= damageAmt;
        _applicationDbContext.DnDCharacters.Update(attackedCharacter);
        _applicationDbContext.SaveChanges();
    }
```

## Techniques to reduce verbosity:  
### Object-Mother Pattern

The object-mother pattern is a popular method to reduce the verbosity in tests by abstracting creating a "default"
object.

```csharp
    // Need to add example from my code here
```


### Test Data Builders  

Test data builders are another popular pattern to reduce the verbosity in tests by configuring objects through the
builder design pattern.

```csharp
    // Need to add example from my code here
```

## Performance
Tests are not divided into the necessary suites of unit, integration, e2e (note legacy code adoption should probably be e2e -> unit -> integration, while greenfield can be unit -> integration/e2e)  
Test suites take minutes to hours to run for "unit" test suite (makes TDD impossible)  
Mocks/Stubs/Doubles/etc. are not utilized appropriately to make test suite faster  
Database Layer -> Fakes/Mocks/Stubs not used  
API Layer -> Fakes/Mocks/Stubs not used  
UI Layer -> Fakes/Mocks/Stubs not used (this one seems debatable? - UI layer is famously difficult to TDD/unit test)  
There is no domain layer extracted from the codebase  

## Software Design
CQS (Command Query Segregation) is not properly followed if following OOP  
Pure functions are not used if Functional Approach is taken  
Dependency Injection is not used  
Classes and Objects are incorrectly coupled  
Tests do not test the production code  
Empty Asserts  
Hidden Dependencies are common  
Interfaces/Types are not correctly used  

## Architecture
Hexagonal/Ports-and-adapters pattern is not used  
No presence of a domain layer  
Software behavior leaks into the database layer/UI/where it doesn't "belong"  
Poor encapsulation/Coupling/Cohesion  
Poor modularity  
Poor boundaries between domain concepts (Value Objects, Entities, Aggregates, Bounded Context)  
State not handled correctly  

## Developer Knowledge/Lack of Knowledge in Testing
When to use Spies/Mocking/Stubbing/Fakes/Doubles/etc.  
Techniques to speed up the tests  
Refactoring Techniques  
Take many smaller steps  
Red/Green/Refactor  

## XP Practices Used
I would use the definition of the rules provided at: http://www.extremeprogramming.org/rules.html  

# The TDD Tool Belt
1. Red/Green/Refactor  
2. Mocking -> Fakes, Spies, Test Doubles, Crash Test Dummies, Mocks  
3. Dependency Injection  
4. To write production code, you must write a test first  
5. Pair Programming/Ensembling  
6. Continuous Integration  
7. Fast Test Suites  
8. Concise Test Declarations  
9. BDD Test Naming  
10. OOP Principles  
11. Testable Architectures  
12. Understanding Refactorings  
