context('Basic Analysis', function() {
   specify('Demo Example', function() {
      cy.visit('/');
      cy.get(`a[href="/basic/results"]`).click();
      cy.get(`h3`).contains('DepChecker Example');
      cy.wait(20 * 1000);
      cy.get('tr').should('have.length', 18);
      cy.get('.css-1wa3ari-MetricTitle')
         .contains('Versions Behind')
         .should('exist');
   });
});
