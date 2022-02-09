describe('Money Plane details page', () => {

  beforeEach(() => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'movie.json'})

    cy.visit('http://localhost:3000')
      .get('.card').first().click()
  })

  it('should display the movie title', () => {
    cy.get('.movie-title')
      .contains('Money Plane')
  })

  it('should display the runtime', () => {
    cy.get('.runtime-container > p')
      .eq(1)
      .contains('82 minutes')
  })

  it('should display the rating', () => {
    cy.get('.rating-container > p')
      .eq(1)
      .contains('6.6')
  })

  it('should display the movie details', () => {
    cy.get('.movie-details > p')
      .should('have.length', 4)
      .eq(0)
      .contains('Action')
      .siblings('p').eq(0).contains('2020-09-29')
      .siblings('p').eq(1).contains()
  })
})
