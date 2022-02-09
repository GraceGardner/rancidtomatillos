describe('Onward details page', () => {

  beforeEach(() => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'movie.json'})

    cy.visit('http://localhost:3000')
      .get('.card').first().click()
  })

  it('should display the movie title', () => {
    cy.get('.movie-title')
      .contains('Onward')
  })

  it('should display the runtime', () => {
    cy.get('.runtime-container > p')
      .eq(1)
      .contains('102 minutes')
  })

  it('should display the rating', () => {
    cy.get('.rating-container > p')
      .eq(1)
      .contains('6.4')
  })

  it('should display two images', () => {
    cy.get('.image-container')
      .children('img')
      .should('have.length', 2)

    cy.get('.side-img')
      .and('be.visible')


    cy.get('.backdrop-img')
      .and('be.visible')
  })

  it('should display the movie details', () => {
    cy.get('.movie-details > p')
      .should('have.length', 4)
      .eq(0).contains('Animation, Family, Adventure, Comedy, Fantasy')
      .siblings('p').eq(0).contains('2020-02-29')
      .siblings('p').eq(1).contains('$200000000')
      .siblings('p').eq(2).contains('$103181419')
  })

  it('should display the movie description', () => {
    cy.get('.movie-overview')
      .contains('In a suburban fantasy world')
  })

  it('should have a home button', () => {
    cy.get('nav > button')
      .contains('Home')
  })
})
