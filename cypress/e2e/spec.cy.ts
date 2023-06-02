describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[type="text"]').type('azerty');
    cy.get('[type="number"]').type('5');
    cy.get('textarea').click();
    cy.get('button').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('add Note', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:5173');
    cy.get('[type="text"]').type('azerty');
    cy.get('[type="number"]').type('5');
    cy.get('textarea').click();
    cy.get('button').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('delete Note', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:5173');
    cy.get('[type="text"]').type('azerty');
    cy.get('[type="number"]').type('5');
    cy.get('textarea').click();
    cy.get('button').click();
    cy.get('div > :nth-child(6)').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('modify Note', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:5173');
    cy.get('[type="text"]').type('azerty');
    cy.get('[type="number"]').type('5');
    cy.get('textarea').click();
    cy.get('button').click();
    cy.get('div > :nth-child(5)').click();
    cy.get('div > textarea').click();
    cy.get('div > :nth-child(4)').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('modify Note but cancelled', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:5173');
    cy.get('[type="text"]').type('azerty');
    cy.get('[type="number"]').type('5');
    cy.get('textarea').click();
    cy.get('button').click();
    cy.get('div > :nth-child(5)').click();
    cy.get('div > textarea').click();
    cy.get('div > :nth-child(5)').click();
    /* ==== End Cypress Studio ==== */
  });
})