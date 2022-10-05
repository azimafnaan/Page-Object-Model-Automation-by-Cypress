


it('Assertion Demo', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    cy.get('#checkBoxOption1').click()
        .should('be.checked')
        .and('have.value', 'option1')
})