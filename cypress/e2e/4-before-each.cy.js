
import { LoginPage } from "./pages/login_page";

const loginPageObj = new LoginPage();

beforeEach(function(){
    cy.visit("https://thakurgaon-hospital.web.app/login");
})

describe("Login with valid credential", () => {

    //todo: for remove duplication
    // beforeEach(function(){
    //     cy.visit("https://thakurgaon-hospital.web.app/login");
    // })

  it("Login test 1", () => {

    loginPageObj.clickCheckbox();
    loginPageObj.enterEmail("bappa@gmail.com");
    loginPageObj.enterPassword("BAppa12345");
    loginPageObj.clickSigning();

    cy.visit("https://thakurgaon-hospital.web.app/");
  });

  it("Login test 2", () => {

    loginPageObj.clickCheckbox();
    loginPageObj.enterEmail("bappa@gmail.com");
    loginPageObj.enterPassword("BAppa12345");
    loginPageObj.clickSigning();

  });
 
});

it("Login fail case for invalid credential", () => {

    loginPageObj.clickCheckbox();
    loginPageObj.enterEmail("bappa@gmail.com");
    loginPageObj.enterPassword("BAppa1234");
    loginPageObj.clickSigning();

  });
