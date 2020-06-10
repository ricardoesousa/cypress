export class EditarUsuario {
    
    preencherCadastro(login,nome,email,idade) {
        cy.get('#user_login').clear().type(login)
        cy.get('#user_full_name').clear().type(nome)
        cy.get('#user_email').clear().type(email)
        cy.get('#user_age').clear().type(idade)
    }

    salvarCadastro() {
        cy.get('#btn-save').click()
        }
    
}