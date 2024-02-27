/// <reference types="Cypress" />

describe("Handling Alerts", () => {
  it("Should handle child window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //todo: check boxes
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    //todo: window:alert
    cy.on('window:alert',(str)=>{
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    //todo: window:confirm
    cy.on('window:confirm',(str)=>{
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    
  });
});

describe("Handling Child Windows", () => {
  it("Should handle child window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //todo: openting in same or different tab
    cy.get("#opentab").invoke("removeAttr", "target").click();
    // cy.get("#opentab").click();

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});
