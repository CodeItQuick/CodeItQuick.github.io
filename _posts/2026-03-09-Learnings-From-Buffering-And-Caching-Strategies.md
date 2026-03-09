---
layout: post
name: Learnings From Buffering And Caching Strategies
description: What is the developer iceberg of work and how do we tackle it
image: spartan_zombie.webp
time: "2m:48s"
tags: design technical all
---

# Learnings From Buffering And Caching Strategies

I made a deep dive of buffering and caching strategies here: https://github.com/CodeItQuick/cacheing-strategies/blob/main/NAVIGATION_TIPS.md

I'm going to summarize my findings here for caching vs buffering.

## When to use caching strategies vs buffering?

Caching is an attempt to temporarily save-off information that will be commonly used. Calculating Fibonacci is a great 
caching example as we probably want to save off Fib(1) Fib(2) Fib(3), and the lower fibonacci's as we calculate them. 
They never change, and take a long time to calculate. Caching saves us time on repeated calls for the same information, 
and can greatly reduce production load on systems that have a lot of data in common.

Buffering is effectively batching in some manner information to reduce latency. The most common example in the codebase 
is a log-writer. Where we probably do not want to send off every message of the log one at a time, due to network latency 
effects. Waiting for several messages to build up before sending the entire packet makes a ton more sense. The wording 
by AI is "smooth a speed mismatch between producer and consumer", and I'm not totally sure this is true.

## What are the different general caching strategies?

Broadly, they can fit into three categories:

**Population Strategies:** How data gets into the cache and stays consistent  
**Eviction Policies:** How data leaves the cache when it's full.  
**Cache Types By Location:** Where the cache lives in the system  

Of the three, the last one, cache types by location, is probably the most intuitive. Population strategies are commonly 
memoization (eg: used in react on the frontend with hooks such as useMemo), TTL (used to browse webpages on a lazy-load 
basis), refresh-ahead (eager-loading of a cached instance), read-through (on every read, on a miss it gets entered in 
cache), and write-through. Event-driven systems are also "easier" to cache, as the mechanism for update is a push one. 
Meaning a lot of caching questions can be answered with "Can we make this event-driven?".

Eviction strategies involve least recently used, most recently used, etc. They are also more intuitive, and answer the 
question of what to do once our cache has filled. Population is more concerned with the full lifecycle, whereas eviction 
policies of who pays the price when an entry has to leave the cache. In that way, population is more complicated than 
eviction.

Buffering fits into three categories, by flush trigger, structure, or write behaviour. Flush triggers are how the buffer 
gets emptied on write, structure is the shape of the memory allocated (linear, ring, etc. You may have to pick a "weird" 
one if memory is severly limited). Write behaviour determines how writing the buffer out makes a difference to the consumer. 
Do we care more that the message gets there as fast as possible (pick Write-back Buffer), or do we want a true source of 
truth (Journaling Buffer).

## The Most Useful Topic: TTL vs Refresh Ahead

TTL and refresh-ahead caching strategies are very common. It's also easy to think you're implementing TTL, when in actual 
fact refresh ahead is being used. TTL means time to live, and we query only when needing the information is necessary. 
So with a 5 second TTL, the information is at most 5 seconds stale given someone is looking at it.

Refresh-ahead involves constantly being aware of what the state of the *thing* is. So if I want alerts on the score of a 
hockey game, I might set a refresh-ahead of 1 minute. At most my alert will be a minute late when a goal is scored, which 
is probably acceptable. However, if my application for the hockey game was instead when I look at the score on a webpage, 
I get immediate feedback, I'd use a TTL strategy of 5 seconds.

The two opposing strategies could result in the same number of calls. I'd get 60 calls (three 20  minute periods) of hockey 
scores with the refresh-ahead strategy. I have to look at the hockey game steadily for a period of 60 * 5 seconds = 300 
seconds, or 5 minutes to have the same number of TTL caching calls.