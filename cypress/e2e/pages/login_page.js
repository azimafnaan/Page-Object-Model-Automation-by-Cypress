export class LoginPage {


    username_textBox = '[name="username"]'
    password_textBox = '[name="password"]'
    login_button = '.oxd-button'

    enterUsername (userId) {
        cy.get(this.username_textBox).type(userId)
    }
    enterPassword (userPassword) {
        cy.get(this.password_textBox).type(userPassword)
    }
    clickLogin () {
        cy.get(this.login_button).click()
    }
}