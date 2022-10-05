///<reference types="cypress"/>


it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('youtube{Enter}')

    // cy.contains('Google Search').click()
    cy.contains('YouTube - Home')
})