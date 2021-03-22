/// <reference types="cypress" />

describe('jira clone', () => {
  it('should be able to create a new issue', () => {
    const nameOfIssue='My first issue';

    //cy.visit('http://automationpractice.com');
    cy.visit('https://jira-clone.mad.itera.no/project/board');

    // click create button issue
    cy.get('[data-testid="icon:plus"]').click();

    // input short summary
    cy.get('[name="title"]').type(nameOfIssue);

    // input short description
    cy.get('.ql-editor').type('I love cypress!');

    // select issue type 
    cy.get('[data-testid="select:type"]').click();
    cy.get('[data-testid="select-option:Bug"]').click();

    // select reporter
    cy.get('[data-testid="select:reporterId"]').click();
    cy.get('[data-testid="select-option:Pickle Rick"]').click();

    // select assignee
    cy.get('[data-testid="select:userIds"]').click();
    cy.get('[data-testid="select-option:Baby Yoda"]').click();

    // select priority
    cy.get('[data-testid="select:priority"]').click();
    cy.get('[data-testid="select-option:Highest"]').click();

    // click submit button
    cy.get('[type="submit"]').click();

    // verify that issue has been created
    cy.contains(nameOfIssue).should('be.visible');
  })
})