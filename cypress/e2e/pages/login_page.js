export class LoginPage{
    // login(){

    // }



    //todo: 1st way

    // cy.visit("https://thakurgaon-hospital.web.app/login",{timeout:2000})

    // cy.get('#gridCheck1',).check()
    // cy.get('#inputEmail3').type('bappa@gmail.com')
    // cy.get('#inputPassword3').type('BAppa12345')
    // cy.get('form > .btn').click()




    // clickCheckbox(){
    //     cy.get('#gridCheck1',).check()
    // }

    // enterEmail(){
    //     cy.get('#inputEmail3').type('bappa@gmail.com')
    // }
    // enterPassword(){
    //     cy.get('#inputPassword3').type('BAppa12345')
    // }
    // clickSigning(){
    //     cy.get('form > .btn').click()
    // }


    //todo:2nd way


    // clickCheckbox(){
    //     cy.get('#gridCheck1',).check()
    // }

    // enterEmail(email){
    //     cy.get('#inputEmail3').type(email)
    // }
    // enterPassword(password){
    //     cy.get('#inputPassword3').type(password)
    // }
    // clickSigning(){
    //     cy.get('form > .btn').click()
    // }

    //todo:3rd way
     //create variable for object locators

     //class variables
     inputEmail='#inputEmail3';
     inputPassword='#inputPassword3';
     formButton='form > .btn';

    clickCheckbox(){
        cy.get('#gridCheck1',).check()
    }

    enterEmail(email){
        cy.get(this.inputEmail).type(email)
    }
    enterPassword(password){
        cy.get(this.inputPassword).type(password)
    }
    clickSigning(){
        cy.get('form > .btn').click()
    }
}