describe('Login modal', () => {

it('should allow a user to login',() =>  {
    cy.intercept('post','https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      "user": {
        "id": 80,
        "name": "Ken",
        "email": "ken@turing.io"
      }
    })
    cy.visit('http://localhost:3000')
    .get('button')
    .should('have.text', 'LOGIN')
    .click()
    .get('input')
    .eq(0).type('ken@turing.io')
    .get('input')
    .eq(1).type('654321')
    .get('.sign-in-button')
    .click()
    .get('.user-greeting')
    .should('have.text', 'Hello, Ken!')
})

//   cy.intercept('post','https://rancid-tomatillos.herokuapp.com/api/v2/login', {
//     "user": {
//       "id": 80,
//       "name": "Ken",
//       "email": "ken@turing.io"
//     }
//   })
//   cy.vist('http://localhost:3000')
//   .get()

})
