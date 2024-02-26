// describe('template spec', () => {
//     it('passes', () => {
//       cy.visit('https://example.cypress.io')
//     })
//   })

  describe('My First Test', () => {
    it.skip('Does not do much!', () => {
      expect(true).to.equal(true)
    });
    it('passes', () => {
              cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
            })
  })