/// <reference types="cypress" />

describe('jira clone', () => {
  it('should change priority of issue', () => {
    const name = 'new issue';
    const startingPriority = 'Highest';
    const newPriority = 'Lowest';

    cy.createIssue(name, startingPriority);

    cy.contains(name).click();

    cy.get('[data-testid="select:priority"]').click();
    cy.get(`[data-testid="select-option:${newPriority}"]`).click();
  })
})