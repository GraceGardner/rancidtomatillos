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

  it.only('should handle missing data for single movie', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'movie-incomplete.json'})

    cy.visit('http://localhost:3000')
      .get('.card').first().click()
    // 
    // cy.get('.movie-tagline')
    //   .should('not.exist')

  })
  // "poster_path": null,
  // "backdrop_path": null,
  // "release_date": null,
  // "overview": "",
  // "genres": [],
  // "budget": 0,
  // "revenue": 0,
  // "runtime": 0,
  // "tagline": "",
  // "average_rating": null

  it('should show an error if movie is missing title', () => {

  })
})
