describe('Onward details page', () => {

  beforeEach(() => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'movie.json'})

    cy.visit('http://localhost:3000')
      .get('.card').first().click()
  });

  it('should display the movie title', () => {
    cy.get('.movie-title')
      .should('have.text', 'Onward')
  });

  it('should display the runtime', () => {
    cy.get('.runtime-container > p')
      .eq(1)
      .should('have.text', '102 minutes')
  });

  it('should display the rating', () => {
    cy.get('.rating-container > p')
      .eq(1)
      .should('have.text', '6.4')
  });

  it('should display two images', () => {
    cy.get('.image-container')
      .children('img')
      .should('have.length', 2)

    cy.get('.side-img')
      .and('be.visible')


    cy.get('.backdrop-img')
      .and('be.visible')
  });

  it('should display the movie details', () => {
    cy.get('.movie-details > p')
      .should('have.length', 4)

    cy.get('.movie-details > p')
      .eq(0)
      .should('include.text', 'Animation, Family, Adventure, Comedy, Fantasy')

    cy.get('.movie-details > p')
      .eq(1)
      .should('have.text', 'Release Date: 02-29-2020')

    cy.get('.movie-details > p')
      .eq(2)
      .should('have.text', 'Budget: $ 200,000,000')

    cy.get('.movie-details > p')
      .eq(3)
      .should('have.text', 'Revenue: $ 103,181,419')
  });

  it('should display the movie description', () => {
    cy.get('.movie-overview')
      .should('have.text', 'In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.')
  });

  it('should have a back button', () => {
    cy.get('.back-button')
      .should('have.text', '« Back')
  });
});
