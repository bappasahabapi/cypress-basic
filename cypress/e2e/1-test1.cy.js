/// <reference types="cypress" />

it('Google Search', ()=>{
    cy.visit('https://google.com')

    cy
    // .get('#APjFqb')
    // .type('bappa saha bapi')
    // cy.contains('Google Search').click()
    
    .get('#APjFqb',{timeout:2000})
    .type('https://bappa-saha.web.app {Enter}')

    cy.contains('Bappa Saha').click()

})