# Task 1

The goal of this task is to learn the basics of Cypress and to create our first automated test. 

This is the test case you are going to automate: 
1. Go to url [https://jira-clone.mad.itera.no/project/board](https://jira-clone.mad.itera.no/project/board).
2. Create a new issue by simulating user clicks and inputs. 

Visit the website and have a look around to get familiar. Try to write the above test case on paper in order to get familiar with the actual steps before you start to program it. That is, write down which buttons you need to click and what inputs you need to do. Then you will know all the steps you need to implement for the first test.

## Task 1 A - The First Test

Open the folder containing the folder where you installed Cypress in your favorite IDE. We recommend [Visual Studios Code](https://code.visualstudio.com/Download). In the Cypress folder, there is an integration folder, create a new folder in there (e.g. 'Itera course'). In your new folder create a new file `task1.js`.

![folder structure](https://i.imgur.com/CegodAy.png)

The first thing we want to add to `task1.js` is
```
/// <reference types="Cypress" />
```
this will turn on [Intelligent Code Completion](https://docs.cypress.io/guides/tooling/ide-integration/#Intelligent-Code-Completion) for cypress.

Next, add the following code
```javascript
describe('jira clone', () => {
    it('should be able to create a new issue', () => {
      // Here you will write the test

  })
})
```

In Cypress, we use `describe` in order to describe a test-suite which groups several test-cases that tests the same component. Each test-case is described with an `it`, where each `it` is one test case. Notice that we’re using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) here, this is the common way of writing Cypress tests and the most readable.  
 - You can also use `context` (identical to `describe`) and `specify` (identical to `it`). Choose whatever terminology that works the best for you!

The first thing you want to do is to make Cypress [visit](https://docs.cypress.io/api/commands/visit/#Syntax) the webpage we are going to test, for that you will need the following command:
```javascript
cy.visit('https://jira-clone.mad.itera.no/project/board');
```

All cypress commands are accessible from `cy.`

Now it's a good time to see if you are able to run your test. Open the Cypress test runner 

![cypress test runner](https://i.imgur.com/yDl6qEo.png)

You should be able to see your new file `task1.js` in the runner. Clicking it will open a browser, you should see something like this after a while:

![cypress in browser](https://i.imgur.com/opktO9q.png)
Keep this browser open. Each time you save `task1.js`, Cypress will automatically rerun the test and you can look at the result.

Next we want to make Cypress [click](https://docs.cypress.io/api/commands/click/) the button for creating a new issue.

![create new issue button](https://i.imgur.com/5EzzLBA.png)

But how do we target the element that we want to click? Cypress has a neat command called [`.get()`](https://docs.cypress.io/api/commands/get/) (Buckle up, you're gonna use this one quite often!)

Here is the Cypress command we will use:
```javascript
cy.get('We-need-to-write-a-selector-here!').click();
```
`cy.get()` will get a html-element from the page based on the selector, and `.click()` will click on that element, but we need to provide a selector to 'find' the correct element. 

## Selectors
Given the following example:
```html
<p className="myClass" id="myId" style="color:red">Some paragraph text</p>
```
There are many ways to select this \<p> element.
- `cy.get('p')` will select all `p` elements.
	- This is not that useful when we want to find a specific one. 
	
- `cy.get('.myClass')` will select all elements that has the class `myClass`. The notation `.` before `myClass` is used to tell Cypress we are looking for a class. 
	- Again, this is not that useful when we want to find one element, because many elements on a webpage could have the same class. 
	
- `cy.get('#myId')` will select the element with id myId, `#` is used to tell Cypress we are looking for an ID. Using id is often a good way to select elements when we want a single element because IDs should be unique. 
	- Note that for [https://jira-clone.mad.itera.no/project/board](https://jira-clone.mad.itera.no/project/board) IDs are not unique so they are not that helpful. 
	
- We can also select elements based on any attribute the element has. The syntax for this is `cy.get('[nameOfAttribute="valueOfAttribute"]')` 
	- For example `cy.get('[style="color:red"]')`. You will need to use this selector a lot during this course. 
	
- `cy.contains('Some paragraph text')` selects all the elements that contains the text `'Some paragraph text'`. 
	- Selecting elements based on text is often not good because texts change often. In most modern systems, text are not part of the code and change independently of the code. You do not want your tests to break because some text editor wrote new texts. 

If you want to learn more about selectors, see the [Cypress documentation](https://docs.cypress.io/api/commands/get.html#Arguments).

Now, back to selecting the create-new-issue-button. In your browser, you can right-click on the button and select `Inspect`. This will let you look at the html of the webpage and let you look for good selectors. 

![inspect mode](https://i.imgur.com/IXpGWSS.png)

Many elements on this webpage has the custom attribute `data-testid` (look inside the red box!), they have been created specifically to be unique and to let us select elements. 
```javascript
cy.get('[data-testid="icon:plus"]').click();
```
Now is a good time to check that Cypress is able to click the button which should open this window:
![create issue window](https://i.imgur.com/KmWDY8O.png)
The only mandatory field is the description. Your task now will be to:
1. Find a suitable selector for the description and type in some name for your new issue.

3. Find a suitable selector for the "Create issue"-button and click it. 

**Hint!** You can use the `.type('some text');` function to type something into the input field. 

For the last step in our first test case we want to verify that an issue has been created and added to the board. For that you can use the following command
```javascript
cy.contains('theNameYouChoseForYourIssue').should('be.visible');
```
The [`should()`](https://docs.cypress.io/api/commands/should/) command will make this an assertion. Notice that this reads like a sentence which is nice. Here it is okay to use [`contain()`](https://docs.cypress.io/api/commands/contains/), because we as writers of the test control the text.
* Note that the word `be` was used in the assertion. Cypress allows for everal chainable getters which does nothing except allowing you to write clear, english sentences.
	* `to`, `be`, `been`, `is`, `that`, `which`, `and`, `has`, `have`, `with`, `at`, `of`, `same` are all chainable getters!
* [Some good examples of how .should() is used](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Writing-Assertions)
* [List of assertions you can use](https://docs.cypress.io/guides/references/assertions/#TDD-Assertions)

## Task 1 B - Practicing Selectors
In this subtask you will practice more with selectors. You will extend the test case from 1A so that the issue you create will have more than just default values. Find suitable selectors and change the following values
- Description (you do not have to use any custom formatting unless you really want to)
- Issue type 
- Reporter
- Assignee
- Priority

**Hint!** For all the dropdowns, click first on the dropdown and then on the element. 