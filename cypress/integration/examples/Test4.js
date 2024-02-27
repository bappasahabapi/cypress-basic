/// <reference types="Cypress" />

describe("Handling Alerts", () => {
  it("Should handle child window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //todo: check boxes
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();

    //todo: window:alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    //todo: window:confirm
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
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


// todo: handling same row siblings.
//to grab the text() methoud we have t use function as it is jquery object instead of cypress method
describe("Handling web tables", function () {
  it("tables", function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("26");
          });
      }
    });
  });
});


//todo: mouse hover events
describe("mouse hover",()=>{
    // cy.get('#mousehover').invoke('show')
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    // cy.contains('Top').click({force:true}) //alternate to handle invisible elements
    cy.url().should('include','top')
})
