describe('rancid tomatillos landing page', () => {

  beforeEach(() => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json'})

    cy.visit('http://localhost:3000');
  })

  it('should have title in nav bar', () => {
    cy.get('nav')
      .find('h1')
      .should('include.text', 'Rancid Tomatillos')
  })

  it('should have a container with 16 movie cards', () => {
    cy.get('.all-movies')
      .find('.card-container')
      .should('have.length', 16)
  })

  it('should have a movie card for each movie with an image, title and rating', () => {
    cy.get('.card-container:first')
      .find('.title')
      .should('have.text', 'Money Plane')

    cy.get('.card-container:first')
      .find('.rating')
      .should('have.text', '6.6')

    cy.get('.card-container:first')
      .find('.card-image')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })
})
