describe('rancid tomatillos landing page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should have title in nav bar', () => {
    cy.get('nav')
      .contains('Rancid Tomatillos')
  })

  it('should not have a home button in the the nav bar', () => {
    cy.get('nav > button')
      .should('not.exist')
  })

  it('should have 40 movie cards', () => {
    cy.get('.all-movies')
      .find('.card-container')
      .should('have.length', 40)
  })

  it('should have a container with movie cards, with an image, title and rating', () => {
    cy.get('.all-movies')
      .children('.card-container')
      .children('.title')
      .siblings('.rating')
      .siblings('.card')
      .children('.card-image')
  })
})
