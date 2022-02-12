describe('Errors on landing page', () => {

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
  });

  it('should not show a movie card if data is missing', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies-incomplete.json'})

    cy.visit('http://localhost:3000')

    cy.get('.all-movies')
      .children('.card-container')
      .should('have.length', 3)
  });
});

describe('Error handling for missing movie details', () => {
  it('should replace any missing movie details (other than title)', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'movie-incomplete.json'})
    cy.visit('http://localhost:3000')
      .get('.card').first().click()

    cy.get('.movie-tagline')
      .should('have.text', '')

    cy.get('.runtime')
      .should('have.text', 'unavailable')

    cy.get('.rating')
      .should('have.text', 'unavailable')

    cy.get('.side-img')
      .should('have.attr', 'src', 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg')

    cy.get('.backdrop-img')
      .should('have.attr', 'src', 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg')

    cy.get('.genre')
      .should('have.text', 'Genre: unavailable')

    cy.get('.release-date')
      .should('have.text', 'Release Date: unavailable')

    cy.get('.budget')
      .should('have.text', 'Budget: unavailable')

    cy.get('.revenue')
      .should('have.text', 'Revenue: unavailable')

    cy.get('.movie-overview')
      .should('have.text', 'description unavailable')
  });
});

describe('Error handling for for single movie page', () => {
  it('should show the error modal if a movie is missing a title', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'movie-no-title.json' })
    cy.visit('http://localhost:3000')
      .get('.card').first().click()

    cy.get('.error-modal > p')
      .should('include.text','Oh no! Looks like this was a rancid tomatillo.')
      .get('a')
      .should('include.text', 'Take me to the Rotten Tomatillos home page')
  });

  it('should show a 404 error if a url is entered with a movie id that doesnt exist', () => {
    cy.visit('http://localhost:3000/90000000')

    cy.get('.error-modal > p')
      .should('include.text','404')
      .get('a')
      .should('include.text', 'Take me to the Rotten Tomatillos home page')
  })
});
