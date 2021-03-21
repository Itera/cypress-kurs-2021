# Task 2
## Introduction
The goal for this task is to learn more about cypress custom commands and best practices for cypress and test automation. Custom commands are useful, both for writing reusable code and for manipulating the system we are testing. Consider our next requirement we want to create an automated test for

*I want to be able to quickly change the priority of an existing issue.*

The testcase for testing this requirement is not that complicated
1. Click on issue on board
2. Change priority

This testcase provides a new challenge however. It requires that we already have an issue to test on. 

**Option 1:** One possible solution is that we could pick an existing issue and test that on that, but then we have no controll over the issue and if it is suitable for our testcase. For example, we want the issue we use to start with a different priority than the one we will change into. 

**Option 2:** Another possible solution is to chain this new next testcase of the testcase from task 1, but this is bad practice for test automation. If we chose this solution our new testcase will break if the first testcase breaks. We want our tests to be short and independent. 

**Option 3:** We want to start our testcase by creating a new issue for our test, but what is the best way to do that? A possible solution is that we could copy paste the code from our first test in task 1, but that is bad programming practice. A better solution would be to put those steps into a function or a custom cypress command, but that is not what is considered best practice for cypress. 

**Option 4:** The testcase from task 1 tests that we can create an issue simulating a user, therefore we do not have to test that again. In that testcase, when we click on the create-new-issue-button a `createIssue()` function is called. That function creates an issue and sends it to the database. The best solution is to call the `createIssue()` function directly. You might ask, is that not cheating? The answer is no, reusing the features of the application is best practice for cypress. This is also one of the strengths of cypress. Cypress is running with the application and has access to all of it. What benefits do we get from this?
- Calling `createIssue()` directly will go faster than simulating user input. This means that we will have one slow test which creates an issue simulating user input. All other tests that need an issue will call the function directly and run faster.

## Task 2 A - creating a custom command
Even though **Option 4** is the best solution, for sake of simplicity, we will use **Option 3**. First, open the file `commands.js`, you will find it in the `support` folder. Add the following the boilerplate code
```javascript
Cypress.Commands.add('write the name of your custom command here', (arguments) => {
    // write your code here
})
```
the custom command can be called using 
```javascript
cy.nameOfCustomCommand(arguments)
```
Now it is your task to create the custom command. 

**TIP** You can copy paste the cypress commands we used in task 1. 
**TIP** Your custom command should at least take `name` and `priority` as input. 

## Task 2 B - the second testcase

Creata a new file `task2.js`. Using the custom command from task 2A create a new cypress test for the testcase 
1. Click on issue on board
2. Change priority