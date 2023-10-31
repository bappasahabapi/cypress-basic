
import { LoginPage } from "./pages/login_page";

const loginPageObj = new LoginPage()

it("Page object model loginPage", () => {
 

    cy.visit("https://thakurgaon-hospital.web.app/login",{timeout:2000})

    //todo: 1st way
    // cy.get('#gridCheck1',).check()
    // cy.get('#inputEmail3').type('bappa@gmail.com')
    // cy.get('#inputPassword3').type('BAppa12345')
    // cy.get('form > .btn').click()

    //todo:2nd way

    // loginPageObj.clickCheckbox()
    // loginPageObj.enterEmail('bappa@gmail.com')
    // loginPageObj.enterPassword('BAppa12345')
    // loginPageObj.clickSigning()

    //todo:3nd way

    loginPageObj.clickCheckbox()
    loginPageObj.enterEmail('bappa@gmail.com')
    loginPageObj.enterPassword('BAppa12345')
    loginPageObj.clickSigning()

 


    cy.visit("https://thakurgaon-hospital.web.app/")






  });
