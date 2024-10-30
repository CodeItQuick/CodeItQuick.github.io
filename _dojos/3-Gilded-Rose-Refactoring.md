---
name: Gilded Rose Refactoring Kata
description: This refactoring kata can help you to learn about refactoring messy code.
image: roses_battle_zombies.webp
tags: refactoring legacy
url: https://github.com/swkBerlin/kata-bootstraps
layout: dojo
---

# Background
<p align="center" width="100%">
    <img src="/assets/images/roses_battle_zombies.webp"  alt="Zombie Lasting Friendship" height="512" width="512" />
</p>

A kata is an exercise in karate that is practiced over and over again to get down a technique.
This is similar to the practice in software development, where a coding kata is meant to practice
particular techniques in code in a small sample problem. The gilded rose is a long since popularized
coding kata that involves refactoring. The idea behind it is to write a suite of tests, then refactor
the code to be readable and maintainable.

The specification for the kata is given below:
```
======================================
Gilded Rose Requirements Specification
======================================

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime 
location in a prominent city ran by a friendly innkeeper named Allison. We also 
buy and sell only the finest goods. Unfortunately, our goods are constantly 
degrading in quality as they approach their sell by date. We have a system in 
place that updates our inventory for us. It was developed by a no-nonsense type 
named Leeroy, who has moved on to new adventures. Your task is to add the new 
feature to our system so that we can begin selling a new category of items. 
First an introduction to our system:

	- All items have a SellIn value which denotes the number of days we have  
	  to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

	- Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
	- "Sulfuras", being a legendary item, never has to be sold or decreases  
	  in Quality
	- "Backstage passes", like aged brie, increases in Quality as its SellIn  
	  value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there 
	are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update  
 to our system:

	- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code  
as long as everything still works correctly. However, do not alter the Item   
class or Items property as those belong to the goblin in the corner who will  
insta-rage and one-shot you as he doesn't believe in shared code ownership  
(you can make the UpdateQuality method and Items property static if you like,  
we'll cover for you).

Just for clarification, an item can never have its Quality increase above 50,  
however "Sulfuras" is a legendary item and as such its Quality is 80 and it  
never alters.
```

# Learnings

I had some interesting learnings from this kata. To list them briefly, they included:
1. I wrote 140 tests to completely cover the code to my satisfaction. A printout of the coverage is given below:
```bash
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |       96 |     100 |     100 |                   
 gilded-rose.ts |     100 |       96 |     100 |     100 | 24                
----------------|---------|----------|---------|---------|-------------------
```
2. That's a lot of coverage; way more than I would have predicted is necessary
3. The actual code deviated from the requirements a number of times
4. The code likely relies in part on the valid items being fed into the function
5. Sulfuras is just a pass through, and the code should read `if (name === 'Sulfuras') return;`
6. The fact the code is so difficult to read it made it necessary to write way more tests than if it were more plainly described
7. I could probably delete some of my tests after the exercise was done
8. There are a number of bugs in the code that should be fixed to bring it into alignment with the requirements document

# Testing Philosophy
1. The loop is kind of immaterial to the testing. We only have to test the if statements, not the loop. So no need to increment multiple days.
2. All the testing can be covered with a theory since there are three inputs and one output to this function
3. It's very easy to get into a situation where you have changed the behaviour in an unknowable way and have to back out the change
4. Know your shortcuts. I was using multiple cursors a lot in order to get this solved in less than an hour or two

# The code deviated from the requirements

Lines like the following in my final code (that has the same behaviour as the original) really point out differences
in behaviour from the requirements. For example, the requirement:

`The Quality of an item is never negative`

Well, for generic items one of my tests shows this to be false. The following tests return a negative "finalQuality".

```
    { itemName: 'Generic Item', itemSellIn: 0, itemQuality: -1, finalQuality: -1 }, 
    { itemName: 'Generic Item', itemSellIn: -1, itemQuality: -1, finalQuality: -1 }, 
    { itemName: 'Generic Item', itemSellIn: 2, itemQuality: -2, finalQuality: -2 }, 
    { itemName: 'Generic Item', itemSellIn: -2, itemQuality: -2, finalQuality: -2 },  
```

Another example, I'm not sure its clear aged brie actually increases in quality twice as fast after the sellin date.
There's other behaviour in here that is non-obvious from the requirements, like if the quality is 50 or greater, then
reduce the sellin and don't change the quality value. Aged brie has particularly strange behaviour right around the 50 value.
At 49, it won't hit the early return, the quality gets incremented to 50, and then isn't doubled. I guess on the next
decrement of sellin, the quality will be 50 and hit the pass-through (thus not changing in quality over the next iteration).
Good luck communicating that in details in a requirement document.

```ts
  private CalculateAgedBrie(i: number) {
    if (this.items[i].quality >= 50) {
      this.items[i].sellIn = this.items[i].sellIn - 1;
      return;
    }

    this.items[i].quality = this.items[i].quality + 1
    this.items[i].sellIn = this.items[i].sellIn - 1;
    if (this.items[i].sellIn < 0 && this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1
    }
  }
```

# Sulfuras is just a pass-through

For an item with essentially no logic, I covered it with 25 tests, which is a great deal of testing. I think
this is necessary because I cannot just simply look at the code and realize immediately it really needs only a few
tests maximum to cover the behaviour. The exercise makes me wonder how often I was covering code with tests just
to be "safe". There are likely more cases of this in the suite. It follows, that for a large codebase that is legacy code,
you may have to initially write way more tests than are necessary until the production code is brought back under
control and some of these tests can be deleted.

# An Improvement to my solution

The following code snippet changes the multiple ifs to a single lookup to find the correct method, and then
dispatches that method. The ItemType function has similar dispatching logic to determine the right value to
use for the key of "CalculateQuality". Still feels like there's some mess here, but I cannot be bothered to
fix it right now.

```ts
const item = this.items[i];

const CalculateQuality = {
  'Generic': this.CalculateGenericItem,
  'Conjured': this.CalculateConjured,
  'Brie': this.CalculateAgedBrie,
  'Backstage': this.CalculatePasses,
}

const key = GildedRose.itemType(item.name);
CalculateQuality[key]?.(i, item);
```

# Threefold Goal of the Exercise

The exercise is more-or-less design to get the developer to (1) write enough tests to stabilize the code (2) add a
feature (3) fix the bugs. Initially I thought there has to be a necessary order for these activities, but in reality
I think this couldn't be farther from the truth. Often in development scenarios the code isn't under control, and we have
to adhere to customer requests while at the same time (hopefully) writing a comprehensive test suite and fixing any bugs
that are critical to its operation.

