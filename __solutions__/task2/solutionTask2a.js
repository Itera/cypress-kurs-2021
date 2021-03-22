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