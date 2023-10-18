import "cypress-real-events";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:7007')

    cy.get(':nth-child(1) > td').realHover();
    cy.get(':nth-child(2) > td').realHover();
    cy.get(':nth-child(3) > td').realHover();
    cy.get(':nth-child(4) > td').realHover();
    cy.get(':nth-child(5) > td').realHover();

  })
})