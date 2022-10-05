
import { LoginPage } from './pages/login_page'

const loginPage = new LoginPage()


it('Page Object Model', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

    // cy.get('[name="username"]').type('Admin')
    // cy.get('[name="password"]').type('admin123')
    // cy.get('.oxd-button').click()
})