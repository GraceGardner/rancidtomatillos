describe('Error modal on landing page', () => {

  it('should handle 500 errors', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })

    cy.visit('http://localhost:3000')

    cy.get('.error-modal > p')
      .should('include.text','500')
      .should('include.text','Please reload the page and try again!')
  })

  it('should handle 404 errors', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    })

    cy.visit('http://localhost:3000')

    cy.get('.error-modal > p')
      .should('include.text','404')
      .should('include.text','Please reload the page and try again!')
  })

  it('should not show a movie card if data is missing', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies-incomplete.json'})

    cy.visit('http://localhost:3000')

    cy.get('.all-movies')
      .children('.card-container')
      .should('have.length', 3)
  })

  it('should handle missing data for single movie ', () => {

  })

  it('should show an error if movie is missing title', () => {
    
  })
})
