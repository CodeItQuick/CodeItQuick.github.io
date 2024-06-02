---
layout: post
name: Exploring Sql Performance Tuning - ChatGPT
description: Using chatgpt to get a better handle on sqlserver performance tuning
image: fast_zombie_graveyard.webp
tags: theory all
---

# Introduction
I used chatgpt for the first time to explore different topics within database structures. I asked it topics
such as how to build my own SQL/NoSQL database, who are the thought leaders in databases, and what books should 
I read on databases.

TLDR version;  
Maybe: Build a simple Database SQL Engine, the NoSql looks way too hard  
Get these resources:  
1. Transaction Processing: Concepts and Techniques. by Jim Gray, Andreas Reuter
2. Database Design and Relational Theory: Normal Forms and All That Jazz by CJ Date
3. Database Systems: The Complete Book by Hector Garcia Molina, Jeffrey Ullman, Jennifer Widom - Standford Professors book, for beginners
4. Pro SQL Server Internals (Second Edition)
5. SQL Server 2022 Query Performance Tuning by Grant Fritchey

## Build your own Database  

### SQL Project Ideas  
  
What are the different projects that are useful in building your own SQL database? Luckily, chatgpt comes to the rescue.
The projects can be summarized as:
1. Basic Parser
2. Query Execution Engine
3. Indexing System
4. Transaction Management
5. Optimization Techniques
6. Concurrency Control
7. Persistant Storage
8. User Authentication and Authorization
9. Error Handling and Logging
10. Distributed SQL Engine
    
### NoSQL Project Ideas  
  
1. Key-Value Store
2. Document Store
3. Column-Family Store
4. Graph Database
5. Time-Series Database
6. Distributed Database
7. In-Memory Database
8. Full-Text Search Engine
9. Document Versioning System
10. Blockchain-Based Database
11. Event Sourcing Database
12. Geospatial Database
13. Document Encryption and Security
14. NoSql Database with a REST API (boring, probably a miss from ChatGPT)

## Resources  

### Database Thought Leaders  

The thought leaders in TDD were pretty disappointing that chatGPT produced, so I would take this list with a grain of salt. However,
here is a list of thought leaders:
1. Michael Stonebraker: Turing Award Winner
2. Codd, Date, Darwen: Rational Model Pioneers
3. Jim Gray: Turing Award Winner, SQLServer dude
4. Don Chamberlin and Raymond F Boyce: Developed SQL
5. Joe Celko: SQL db expert
6. CJ Date: prolific author and database theorist
7. Jeff Dean: Distributed Systems at Google, db's like Bigtable
8. Michael R Blaha: Recognized expert
9. David DeWitt: Parallel db systems
10. Pat Helland: Distributed Systems and Databases
11. Hector Garcia-Molina: Stanford Professor, databases
12. Stonebraker, Abadi, DeWitt: The AMPLab Pioneers, Apache Spark, etc.

The books by these authors I managed to pull are:   
Transaction Processing: Concepts and Techniques. by Jim Gray, Andreas Reuter  
Database Design and Relational Theory: Normal Forms and All That Jazz by CJ Date  
Database Systems: The Complete Book by Hector Garcia Molina, Jeffrey Ullman, Jennifer Widom - Standford Professors book, for beginners  

### SQL Server Books

The books I picked up are:  

Pro SQL Server Internals (Second Edition)  
SQL Server 2022 Query Performance Tuning by Grant Fritchey  

TODO: Lookup NoSql Server authors and books

### Open Source Projects  
  
Some good resources include: SQLLite, there is even a (tutorial)[https://cstack.github.io/db_tutorial/] by the author of SQLLite.
H2 Database Engine is written in java and open source as well. MonetDb is another open source database management system.

