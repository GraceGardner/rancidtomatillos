describe('Login user flow', () => {

  it('should allow a user to login and then update and view movie ratings',() =>  {
    cy.intercept('post','https://rancid-tomatillos.herokuapp.com/api/v2/login',
    {
      "user": {
        "id": 80,
        "name": "Ken",
        "email": "ken@turing.io"
      }
    })

    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'movie.json'})

    cy.visit('http://localhost:3000')
      .get('button')
      .should('have.text', 'LOGIN')
      .click()

    cy.get('input')
      .eq(0).type('ken@turing.io')
      .get('input')
      .eq(1).type('654321')
      .get('.sign-in-button')
      .click()

    cy.get('.user-greeting')
      .should('have.text', 'Hello, Ken!')

    cy.get('.card').first().click()
      .get('.user-rating-container')
      .get('.star')
      .eq(5)
      .click()

    cy.get('.star')
      .eq(5)
      .find('svg')
      .should('have.attr', 'data-prefix', 'fas')

    cy.get('.star')
      .eq(6)
      .find('svg')
      .should('have.attr', 'data-prefix', 'far')

    cy.get('.back-button').click()
      .get('.card').first().click()

    cy.get('.star')
      .eq(5)
      .find('svg')
      .should('have.attr', 'data-prefix', 'fas')

    cy.get('.star')
      .eq(6)
      .find('svg')
      .should('have.attr', 'data-prefix', 'far')

    cy.get('.logout-button')
      .should('have.text', "LOGOUT")
      .click()
      .get('.login-button')
      .should('have.text', 'LOGIN')
  })

  it('should give errors for incorrect or missing user login inputs', () => {
    cy.visit('http://localhost:3000')
      .get('.login-button')
      .click()
      .get('input')
      .eq(0).type('ken@turin.io')
      .get('input')
      .eq(1).type('654321')
      .get('.sign-in-button')
      .click()
      .get('.error-message-login')
      .should('have.text', 'Username or password is incorrect')

    cy.get('.sign-in-button').click()
      .get('.error-message-login')
      .should('have.text', 'You are missing a required parameter of email')

    cy.get('input')
      .eq(0).type('ken@turin.io')
      .get('.sign-in-button').click()
      .get('.error-message-login')
      .should('have.text', 'You are missing a required parameter of password')

    cy.get('.close-button').click()
  });
});
