# Task 3

## Introduction

In this task you are going to learn how to best structure multiple tests and some new trick for how to write reusable code. So first lets look at what one good automated test looks like

1. Set up inital state that is required for the test
2. Execute test
3. Verify result
4. Clean up state

The purpose of step 1. and 4. is to make our tests independent of each other.

In this task you are going to write multiple testcases for testing comments on issues. First go to [https://jira-clone.mad.itera.no/project/board](https://jira-clone.mad.itera.no/project/board) and create a comment on a issue to get familiar with the issue. Here are what you are going to test: 

- Creating comment
- Editing comment
- Deleting comment

These all have in common that we need an excisting issue, the two last ones also requires an excisting comment. To help us set up state and clean up, we are going to use cypress hooks. 

## Hooks

The are the four most common hooks

- Before - will run one time at the beginning of a test suite
- BeforeEach - will run once each time before each test in a test suite
- AfterEach - will run once each time after each test in a test suite
- After - will run one time after all tests in a test suite has been run

A test suite is a collection of tests. Using hooks will look like this

```javascript
describe('Hooks', () => {
  before(() => {
    // runs once before all tests in the block
  })

  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
  })

  it('test 1', () => {
      // test 1
  })

  it('test 2', () => {
      // test 2
  })
})
```

The above code will run like this

1. before
2. beforeEach
3. test 1
4. afterEach
5. beforeEach
6. test 2
7. afterEach
8. after

You will not not need the `before` and `after` hooks, but you will use `beforeEach` and `afterEach`. It is best to put state setup and teardown in `beforeEach` and `afterEach` this will ensure all tests are independent. Therefore `beforeEach` and `afterEach` are much more used than `before` and `after`. An example where it might be usefull to use `before` and `after` is if you want to log in once before all your tests, run all the tests and then log out. But, there might be usecases where you will want to log in and out between each testcase as well. If you want you can read more about hooks and structuring of tests in the [cypress documentation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks).

## Task 3 A

Create a new file `task3.js` and copy the following code

```javascript
/// <reference types="cypress" />

describe('jira clone', () => {
  beforeEach(() => {
    // create issue
  })

  afterEach(() => {
    // delete issue
  })

  it('should be able to create comment', () => {
    // create comment
  })

  it('should be able to delete comment', () => {
    // create comment 
    // delete comment
  })  

  it('should be able to edit comment', () => {
    // create comment
    // edit comment 
  })
})
```

We already have a custom command for creating issues. You should create custom commands for the following actions

- delete issue
- create comment
- delete comment
- edit comment

**TIP** For simplicity use clicks and inputs in all your custom commands. Earlier we recomended not to use `cy.contains('some text')` as a selector, but we it will be difficult to find another selector so feel free to use it. 

**Selecting the correct comment?** how do we make sure that we select correct comment? It is possible to chain selectors. We can use `cy.contains('yourCommentText')` to find your comment. The edit and delete buttons are sibling of that element. We can use `.parent()` to select parent element. Then we can use `cy.contains('delete/edit')` to select the button. The chain will look like this
```javascript
cy.contains('yourCommentText').parent().cy.contains('delete/edit').click();
```

**Clearing comment text before typing** you can chain `.clear()` to clear a text field before using `.type('new comment text')`. The chain will look like this
```javascript
.clear().type('new comment text');
```

## Task 3 B

Use all your new custom commands to put together the three tests in your `task3.js` file. 