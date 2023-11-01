import { LoginPage } from "./pages/login_page";

const loginPageObj = new LoginPage();

describe("All login test cases", () => {
  it.only("Login test 1", () => {
    cy.visit("https://thakurgaon-hospital.web.app/login");

    loginPageObj.clickCheckbox();
    loginPageObj.enterEmail("bappa@gmail.com");
    loginPageObj.enterPassword("BAppa12345");
    loginPageObj.clickSigning();

    cy.visit("https://thakurgaon-hospital.web.app/");
  });
  it.skip("Login test 2", () => {
    cy.visit("https://thakurgaon-hospital.web.app/login");

    loginPageObj.clickCheckbox();
    loginPageObj.enterEmail("bappa@gmail.com");
    loginPageObj.enterPassword("BAppa12345");
    loginPageObj.clickSigning();

    // cy.visit("https://thakurgaon-hospital.web.app/");
  });
  it.only("Login test 3 should failed", () => {
    cy.visit("https://thakurgaon-hospital.web.app/login");

    loginPageObj.clickCheckbox();
    loginPageObj.enterEmail("bappa@gmail.com");
    loginPageObj.enterPassword("BAppa1234");
    loginPageObj.clickSigning();
  });

});
