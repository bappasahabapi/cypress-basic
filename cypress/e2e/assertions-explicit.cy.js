//todo: Explicit Assertion[expect(),assert()]

it("Assertions Explicit", () => {
    cy.visit("https://example.cypress.io")
  
    cy.contains('get').click()
  
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.visible')
        .and('be.enabled')

    expect(true).to.be.true
    // expect(true).to.be.false

    assert.equal(4,'4','not equal')
    // assert.strictEqual(4,'4','not equal')
  
  
  });