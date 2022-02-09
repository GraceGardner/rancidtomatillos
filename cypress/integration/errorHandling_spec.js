describe('Error modal on landing page', () => {

  it('should handle 100 errors', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 100,
      body: { fixture: 'movies.json' }
    })

    cy.visit('http://localhost:3000')
  })
})
