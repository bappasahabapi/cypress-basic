/// <reference types="Cypress" />

describe.skip('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
    })
    it("Does not do much!", () => {
      expect(true).to.equal(true);
    });
    it("passes", () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    });
  })

describe.skip("search, type, select product", () => {
 
  it("example-1",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca');
    cy.wait(2000)

    //assertion
    // cy.get('.products').should('have.length',1)
    // cy.get('.product').should('have.length',4) // failed for invisible elements
    cy.get('.product:visible').should('have.length',4) 
  })
});
describe.only("Pass types of Assertions", () => {
 
  it.only("Assertions",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca');
    cy.wait(2000)
    //assertion
    cy.get('.product').should('have.length',5) 
    cy.get('.product:visible').should('have.length',4) 

    //parent child chaining
    cy.get('.products').find('.product').should('have.length',4)

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()


  })
});

