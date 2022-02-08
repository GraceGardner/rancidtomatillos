describe('Money Plane details page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('.card').first().click()
  })

  it('should display the movie title', () => {
    cy.get('.movie-title')
      .contains('Money Plane')
  })

})
