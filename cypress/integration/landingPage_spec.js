describe('Rancid Tomatillos landing page', () => {

  it('should show a landing page with a nav bar, title, and a card for each movie with that movies details', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json'})
    cy.visit('http://localhost:3000');

    cy.get('nav')
      .find('h1')
      .should('have.text', 'Rancid Tomatillos')

    cy.get('.all-movies')
      .find('.card-container')
      .should('have.length', 16)

    cy.get('.card-container:first')
      .find('.title')
      .should('have.text', 'Money Plane')

    cy.get('.card-container:first')
      .find('.rating')
      .should('have.text', '6.6')

    cy.get('.card-container:first')
      .find('.card-image')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });
});
