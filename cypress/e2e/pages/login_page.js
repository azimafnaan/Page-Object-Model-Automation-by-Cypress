export class LoginPage {

    enterUsername (userId) {
        cy.get('[name="username"]').type(userId)
    }
    enterPassword (userPassword) {
        cy.get('[name="password"]').type(userPassword)
    }
    clickLogin () {
        cy.get('.oxd-button').click()
    }
}