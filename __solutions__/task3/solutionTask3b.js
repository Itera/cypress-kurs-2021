/// <reference types="cypress" />

describe('jira clone', () => {
    const name = 'hooks issue';
    const comment = 'Cypress is great!';
  
    beforeEach(() => {
      cy.createIssue(name, 'Highest')
    })
  
    afterEach(() => {
      cy.deleteIssue(name);
    })
  
    it('should be able to create comment', () => {
      cy.createComment(name, comment);
      cy.contains(comment).should('be.visible');
    })
  
    it('should be able to edit comment', () => {
      const newComment = 'New comment';
  
      cy.createComment(name, comment);
      cy.contains(comment).should('be.visible');
      
      cy.editComment(name, comment, newComment);
      cy.contains(newComment).should('be.visible');
      cy.contains(comment).should('not.be.visible');
    })
  
    it('should be able to delete comment', () => {
      cy.createComment(name, comment);
      cy.contains(comment).should('be.visible');
  
      cy.deleteComment(name, comment);
      cy.contains(comment).should('not.be.visible');
    })  
  })