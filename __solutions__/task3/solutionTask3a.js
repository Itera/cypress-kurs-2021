Cypress.Commands.add('createIssue', (name, priority) => {
  cy.visit('https://jira-clone.mad.itera.no/project/board');

  // click create button issue
  cy.get('[data-testid="icon:plus"]').click();

  // input short summary
  cy.get('[name="title"]').type(name);

  // select priority
  cy.get('[data-testid="select:priority"]').click();
  cy.get(`[data-testid="select-option:${priority}"]`).click();

  // click submit button
  cy.get('[type="submit"]').click();
  })

Cypress.Commands.add('deleteIssue', (name) => {
  cy.visit('https://jira-clone.mad.itera.no/project/board');

  // click on issue
  cy.contains(name).click();

  // click delete button
  cy.get('[data-testid="icon:trash"]').click();

  // confirm delete
  cy.contains('Delete issue').click();
})

Cypress.Commands.add('createComment', (issueName, commentText) => {
  cy.visit('https://jira-clone.mad.itera.no/project/board');

  // click on issue
  cy.contains(issueName).click();

  // type text
  cy.contains('Add a comment').type(commentText);

  // click save
  cy.contains('Save').click();
})

Cypress.Commands.add('deleteComment', (issueName, commentText) => {
  cy.visit('https://jira-clone.mad.itera.no/project/board');

  // click on issue
  cy.contains(issueName).click();

  // click delete
  cy.contains(commentText).parent().contains('Delete').click();

  // confirm delete
  cy.contains('Delete comment').click();
})

Cypress.Commands.add('editComment', (issueName, commentText, newText) => {
  cy.visit('https://jira-clone.mad.itera.no/project/board');

  // click on issue
  cy.contains(issueName).click();

  // click edit
  cy.contains(commentText).parent().contains('Edit').click();

  // type new text
  cy.contains(commentText).clear().type(newText);

  // click save
  cy.contains('Save').click();
})
