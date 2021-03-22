/// <reference types="cypress" />

describe('jira clone', () => {
  it('should be able to create a new issue', () => {
    const nameOfIssue='My first issue';

    cy.visit('https://jira-clone.mad.itera.no/project/board');

    // click create button issue
    cy.get('[data-testid="icon:plus"]').click();

    // input short summary
    cy.get('[name="title"]').type(nameOfIssue);

    // click submit button
    cy.get('[type="submit"]').click();

    // verify that issue has been created
    cy.contains(nameOfIssue).should('be.visible');
  })
})