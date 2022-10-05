


it('Assertion Demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')

    expect(true).to.be.true

    let name = 'cypress';
    expect(name).to.be.equal('cypress')
    expect(name).to.be.a('string')

    assert.equal(4, 4, 'NOT EQUAL')
})