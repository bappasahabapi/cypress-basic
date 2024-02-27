/// <reference types="Cypress" />

//todo : Final code
describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    //Parent child chaining
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("sf");
      });

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });

    //assert if logo text is correctly displayed
    cy.get(".brand").should("have.text", "GREENKART");

    //this is to print in logs
    cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });
    //const logo=cy.get('.brand')
    //cy.log(cy.get('.brand').text())
    // cy.log(logo.text())

    //fixture
  });
  
});

//todo --------------------- final code ends

describe.skip("01-template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
  it("passes", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });
});

describe.skip("02-search, type, select product", () => {
  it("example-1", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    //assertion
    // cy.get('.products').should('have.length',1)
    // cy.get('.product').should('have.length',4) // failed for invisible elements
    cy.get(".product:visible").should("have.length", 4);
  });
});

describe.skip("03-Pass types of Assertions", () => {
  it("Assertions", () => {
    cy.log("........... log anything for debugging....");
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //assertion
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);

    //parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);

    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

    //iterate over products
    cy.get(".products")
      .find(".product")
      .each((element, index, list) => {
        const textVag = element.find("h4.product-name").text();

        if (textVag.includes("Cashews")) {
          // element.find('button').click()
          cy.wrap(element).find("button").click();
        }
      });

    cy.get(".brand").then(function (logoElement) {
      cy.log("Name is:", logoElement.text());
    });
  });
});

describe.skip("04-Optimize code", () => {
  it.only("Assertions", () => {
    cy.log("........... log anything for debugging....");
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //todo:assertion using should keyword
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);

    //todo:parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);

    //todo: make produts to alias
    // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    cy.get(".products").as("productLocator");

    // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();

    //todo:iterate over products
    cy.get(".products")
      .find(".product")
      .each((element, index, list) => {
        const textVag = element.find("h4.product-name").text();

        if (textVag.includes("Cashews")) {
          // element.find('button').click()
          cy.wrap(element).find("button").click();
        }
      });

    //todo:handle text() manually use .then( functioin(){})
    cy.get(".brand").then(function (logoElement) {
      cy.log("Name is:", logoElement.text());
    });

    //todo: if logo text is correctly displayed

    cy.get(".brand").should("have.text", "GREENKART");
    // cy.get('.brand').should('have.text',toUpper(greenkart))
    cy.get(".brand").should("have.text", "greenkart"); // error
  });
});
