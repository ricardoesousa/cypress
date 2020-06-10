export class CriarNovoUsuario {
    
    preencherCadastro(login,nome,email,idade) {
        cy.get('#user_login').type(login)
        cy.get('#user_full_name').type(nome)
        cy.get('#user_email').type(email)
        cy.get('#user_age').type(idade)
    }

    salvarCadastro() {
        cy.get('#btn-save').click()
        }
    
}