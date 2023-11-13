


describe("Read and Write Files", () => {

//   it("Read files using fixture method", () => {
//     cy.fixture('example.json')
//     .then((data)=>{
//         cy.log(data);
//         cy.log(data.name);
//     })

//   });


  // using alias
  before(function(){
    cy.fixture('bappa.json').as('test_data')
  })

  it("Read files using fixture method", function() {
    cy.fixture('bappa.json')
    .then((data)=>{
        cy.log(data);
        cy.log(data.name);
    })
    cy.log(this.test_data.name)

  });
 

});
