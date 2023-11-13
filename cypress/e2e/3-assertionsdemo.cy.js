//todo: implicit Assertions [should(),and]


it.skip("Assertions Demo", () => {
  cy.visit("https://example.cypress.io")

  cy.contains('get').click()

  cy.get('#query-btn')
      .should('contain','Button')

      .should('have.class','query-btn')
      // .should('have.text','')
      // .should('have.html','')
      
      // .should('be.visible')
      // .should('be.disabled')
      // .should('be.enabled')

});



it("Assertions Demo1", () => {
  cy.visit("https://example.cypress.io")

  cy.contains('get').click()

  cy.get('#query-btn')
      .should('contain','Button')
      .and('have.class','query-btn')
      .and('be.visible')
      .and('be.enabled')


});
