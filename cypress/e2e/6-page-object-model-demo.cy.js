
/// <reference types="cypress" />

it("Page object model test", () => {
    // cy.visit("https://iphone-bd.web.app/login")
    // cy.get(':nth-child(1) > .MuiInput-root > #standard-basic').type('bappa@gmail.com')
    // cy.get(':nth-child(2) > .MuiInput-root > #standard-basic').type('bappa12345')
    // cy.get('.MuiButton-contained').click()

    cy.visit("https://thakurgaon-hospital.web.app/login",{timeout:2000})

    cy.get('#gridCheck1',).check()
    cy.get('#inputEmail3').type('bappa@gmail.com')
    cy.get('#inputPassword3').type('BAppa12345')
    cy.get('form > .btn').click()

    // cy.visit('https://thakurgaon-hospital.web.app/home')

  });
