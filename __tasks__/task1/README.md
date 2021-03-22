# Task 1

The goal of this task is to learn the basics of cypress and to create our first automated test. 

This is the testcase you are going to automate: 
1. Go to url [https://jira-clone.mad.itera.no/project/board](https://jira-clone.mad.itera.no/project/board).
2. Create a new issue by simluating user clicks and inputs. 

Try to complete this testcase yourself to get familar before you start to program it. 

## Task 1 A - the first test

Open the folder containing the folder where you installed cypress in your favorite IDE. We recomend [Visual Studios Code](https://code.visualstudio.com/Download). In the cypress folder, there is an integration folder, in that folder create a new folder. In your new folder create a new file `task1.js`.

![folder structure](https://i.imgur.com/CegodAy.png)

The first thing we want to add to `task1.js` is
```
/// <reference types="Cypress" />
```
this will turn on Intelligent Code Completion for cypress.

Next, add the following boilerplate code 
```javascript
describe('jira clone', () => {
    it('should be able to create a new issue', () => {
      // Here you will write the test

  })
})
```

In Cypress, we use `describe` in order to describe a test-suite which groups several test-cases that tests the same component. Each test-case is described with an `it`, where each `it` is one test case. Notice that we’re using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) here, this is the common way of writing Cypress tests and the most readable.  

The first thing you want to do is to make cypress visit the webpage we are going to test, for that you will need the following command
```javascript
cy.visit('https://jira-clone.mad.itera.no/project/board');
```
All cypress commands are accesible from `cy. `. 

Now is a good time to see if you are able to run your test. Open the cypress test runner 

![cypress test runner](https://i.imgur.com/yDl6qEo.png)

you should be able to see your new file `task1.js` in the test runner. Clicking it will open a browser, you should see something like this

![cypress in browser](https://i.imgur.com/opktO9q.png)
Keep this browser open. Each time you save `task.js`, cypress will automatically rerun the test and you can look at the result.

Next we want to make cypress click the button for creating a new issue

![create new issue button](https://i.imgur.com/5EzzLBA.png)

Here is the cypress command we will use
```javascript
cy.get('here we need to write a selector').click();
```
`cy.get()` will get a html-element from the page and `.click()` will click on that element, but we need to provide a selector to get the correct element. 

## Selectors
Given the following example
```html
<p className="myClass" id="myId" style="color:red">Some paragraph text</p>
```
there are many ways to select this element.
- `cy.get('p')` will select all `p` elements, this is not that usefull when we want to find one element. 
- `cy.get('.myClass')` will select all elements with the class `myClass`, `.` is used to tell cypress we are looking for a class. Again, this is not that usefull when we want to find one element, because many elements on a webpage could have the same class. 
- `cy.get('#myId')` will select the element with id myId, `#` is used to tell cypress we are looking for an id. Using id is often a good way to select elements when we want a single element beause ids should be unique. Note that for [https://jira-clone.mad.itera.no/project/board](https://jira-clone.mad.itera.no/project/board) ids are not unique so they are not that helpfull. 
- We can also select elements based on any attribute the element has. The syntax for this is `cy.get('[nameOfAttribute="valueOfAttribute"]')` for example `cy.get('[style="color:red"]')`. You will need to use this selector alot in this course. 
- `cy.contains('Some paragraph text')` selects all the elements that contains the text `'Some paragraph text'`. Selecting elements based on text is often not good because texts change often and in most modern systems text are not part of code and change independetly of the code. You do not want your tests to break because some text editor wrote new texts. 

If you want to learn more about selectors, see the [cypress documentation](https://docs.cypress.io/api/commands/get.html#Arguments).

Now, back to selecting the create-new-issue-button. In your browser, you can right-click on the button and select `inspect`. This will let you look at the html of the webpage and let you look for good selectors. 

![inspect mode](https://i.imgur.com/IXpGWSS.png)

Many elements on this webpage has the custom attribute `data-testid`, they have been created specifically to be unique and to let us select elements. 
```javascript
cy.get('[data-testid="icon:plus"]').click();
```

Now is a good time to check that cypress is able to click the button. That will open this window
![create issue window](https://i.imgur.com/KmWDY8O.png)
the only mandatory field is the description. Your task will now be to 
1. Find a suitable selector for the description and type in some name for your new issue.
2. Find a suitable selector for the "Create issue"-button and click it. 

**TIP** you can use the `.type('some text');` function to type something into the input field. 

For the last step in our first testcase we want to verify that an issue has been created and added to the board. For that you can use the following command
```javascript
cy.contains('theNameYouChoseForYourIssue').should('be.visible');
```
The `should()` command will make this an assertion. Notice that this reads like a sentence which is nice. Here it is okey to use `contain()`, because we as writers of the test controll the text.

## Task 1 B - practising selectors
In this subtask you will practice more with selectors. You will extend the testcase from 1A so that the issue you create will have more than just default values. Find suitable selectors and change the following values
- description (you do not have to use any custom formating unless you really want to)
- issue type 
- reporter
- assignee
- priority

**TIP** For all the dropdowns, click first on the dropdown and then on the element. 