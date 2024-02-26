/// <reference types="Cypress" />

describe("2nd test", () => {
  it("Validation", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get(".products").as("productLocator");
    //todo:iterate over products
    cy.get("@productLocator")
      .find(".product")
      .each((element, index, list) => {
        const textVag = element.find("h4.product-name").text();

        if (textVag.includes("Cashews")) {
          // element.find('button').click()
          cy.wrap(element).find("button").click();
        }
      });
    cy.get(".cart-icon > img").click()
    cy.contains('PROCEED TO CHECKOUT').click()
    // cy.get('button').click()
    cy.contains('Place Order').click()



  });
});
