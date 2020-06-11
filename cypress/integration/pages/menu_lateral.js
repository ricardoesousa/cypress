export class MenuLateral {

    acessarUsuarios() {
        cy.get('#users').click()
    }

    acessarUsuarios2() {
        cy.get('#user01').click()
    }

}
