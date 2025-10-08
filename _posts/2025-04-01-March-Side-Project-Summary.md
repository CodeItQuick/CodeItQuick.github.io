---
layout: post
name: March Side Project Summary
description:  AI Summaries of work completed on side projects
image: spartan_zombie.webp
time: "2m:24s"
tags: quality all
---
# Work in March 2025:

**Low Activity** - Only 8 commits in March, showing continued quiet period with focused work on a single C# project.  

## Cab Fleet Management System (Entire Month)  

All of March was dedicated to developing a C#/.NET application for managing a cab/taxi fleet:  

### Domain-Driven Design Implementation (Mid-March):  
* Built FleetRepository and CustomerListRepository classes  
* Implemented IFleetRepository interface with proper dependency injection  
* Created domain entities: Cab, CustomerList, Fleet  
* Used Entity Framework for data persistence  

### Refactoring and Clean Architecture (March 16-17):  
* **Polymorphism Implementation**: Refactored ApplicationHandler to use generic command handling pattern  
* **Command Handler Pattern**: Created ICommandHandler<T> interface for better modularity  
* **Introduced specific handlers**: IAddCabCommandHandler, IRemoveCabCommandHandler  
* **File Organization**: Split monolithic files into smaller, focused components  
* **Method Renaming**: Renamed Add to Save for clarity, added Remove method  
* **Test Organization**: Moved test methods from production code to separate test files  

### Bug Fixes and Production Code (March 17):  
* Fixed CabDto constructor to use correct parameters from Cab object instead of hardcoded values      
* Updated FleetOfCabs collection management   
* Fixed database context and change tracking issues    

### Console Application (Late March):  
* Built console app with system-level functionality for adding and removing cabs    
* Implemented menu system for single-user operation   
* Added private methods to ensure Fleet and Menu exist for the user  

### Work-in-Progress Iterations (Throughout):  
* Multiple "WIP" and "Working again" commits showing iterative development  
* Added GetById method to CustomerList class  
* Created DTOs (Data Transfer Objects) for entity mapping    

# Key Characteristics of March 2025:  
**C#/.NET Focus**: Complete shift from JavaScript/TypeScript work to C# development, showing polyglot capabilities.    
**Enterprise Patterns**: Heavy use of enterprise software patterns:    
* Repository pattern  
* Command handler pattern  
* Dependency injection  
* DTO pattern  
* Domain-driven design  

**Refactoring Emphasis**: Multiple commits focused on improving code architecture through polymorphism, separation of concerns, and clean code principles.    
**Continued Low Activity**: March maintained the pattern of reduced commit volume (8 commits) similar to April-June 2025, suggesting this period may have had reduced coding time or work spread across multiple private repositories.    
**Professional C# Development**: The work demonstrates strong understanding of C# best practices, Entity Framework, and enterprise application architecture - quite different from the JavaScript/TypeScript focus seen in later months (July-September).     