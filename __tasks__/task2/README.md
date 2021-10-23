# Task 2
## Introduction
The goal for this task is to learn more about Cypress custom commands and best practices for Cypress and test automation. Custom commands are useful, both for writing reusable code and for manipulating the system we are testing. For example, we want to create an automated test for the requirement:

*As a developer, I want to be able to quickly change the priority of an existing issue.*

The test case for testing this requirement is not very complicated
1. Click on issue on board
2. Change priority

However, this new test case provides us with a new challenge. It requires that we already have an issue to test on. 

**Option 1:** One possible solution is that we pick an existing issue and test on that. But the downside is that we have no control over the issue and if it is suitable for our test case. For example, we want the issue we use to start with a different priority than the one we will change into. 

**Option 2:** Another possible solution is to chain this new test case to the one from Task 1, but this is bad practice for test automation. If we choose this solution, our new test case might potentially break if the first test case was modified. We want our tests to be short and independent. 
* Take a look at [Cypress' best practices](https://docs.cypress.io/guides/references/best-practices/#Having-tests-rely-on-the-state-of-previous-tests)

**Option 3:** We want to start our test case by creating a new issue for our test, but what is the best way to do that? A possible solution is that we copy-paste the code from our first test in task 1, but that is a bad programming practice. A better solution would be to put those steps into a function or a custom Cypress command, but that's not considered best practice for Cypress either. 

**Option 4:** The test case from task 1 entail that we can create an issue, therefore we do not have to test that part again. In the previous test case, when we click on the create-new-issue-button a `createIssue()` function is called. That function creates an issue and sends it to the database. The best solution is to call the `createIssue()` function directly. You might ask, is that not cheating? The answer is no, reusing the features of the application is best practice for Cypress. This is also one of the strengths of cypress. Cypress is running with the application and has access to all of it. What benefits do we get from this?
- Calling `createIssue()` directly will go faster than simulating user input. This means that we have one slow test from Task 1 which creates an issue simulating user input. All other tests that relies on an issue being created will call the function directly and thereby run faster.

## Task 2 A - Creating A Custom Command
Even though **Option 4** is the best solution, for sake of simplicity and learning, we will use **Option 3**. If you want to to read more about this choice, see the remarks at the bottom of this readme. First, open the file `commands.js`, you will find it in the `support` folder. Add the following the code
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

**Hint** You can copy paste the cypress commands we used in task 1.

**Hint** Your custom command should at least take `name` and `priority` as input. 

**Hint** How to use the `priority` parameter in the selector? You can make use of [javascript Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Lets say we want to chose the priority Lowest, then the selector will be `'[data-testid="select-option:Lowest"]'`. Parameterizing this using template literals will look like this `` `[data-testid="select-option:${priority}"]` ``.

## Task 2 B - The Second Test Case

Create a a new file `task2.js`. Using the custom command from task 2A create a new Cypress test for the test case 
1. Click on issue on board
2. Change priority

## Remark: Why option 3 is used instead of the better option 4

When making this course, one of the goals was to make it as easy as possible to do the installation and setup. Therefore, we setup up the tasks so that you will run the tests against a live webpage [https://jira-clone.mad.itera.no/project/board](https://jira-clone.mad.itera.no/project/board). By doing this the only thing you have to install are node and cypress. You do not have to install the jira clone application. 

But, choosing this approach has some drawbacks. Since we are running the cypress tests against a live webpage, we are not actually running cypress with the application after all. Therefore, we do not have access to the application and unfortunately we are not able to adhere to the best practices of cypress. Another option is to call the API instead of using the application directly, but this has other problems. Cypress is not really meant to run against a live webpage and authenticating correctly towards the API from the cypress is outside the scope of this introductory cypress course. 

In the future I will consider redoing some parts of the course. The first part will be to rewrite jira-clone so that it is simple to install. Then the course can be changed so that cypress is run with the application. 