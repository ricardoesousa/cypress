export class Usuario {

    validarCadastroDeNovoUsuario(msgSucesso) {
        cy.get('#notice').should('have.text', msgSucesso)
    }

    validarDadosDeUsuario(codigo, login, nome, email, idade) {
        cy.get('#codigo').should('have.text', codigo)
        cy.get('#login').should('have.text', login)
        cy.get('#full_name').should('have.text', nome)
        cy.get('#email').should('have.text', email)
        cy.get('#age').should('have.text', idade)
    }

    validarEdicaoDeUsuario(msgSucesso) {
        cy.get('#notice').should('have.text', msgSucesso)
    }

    voltar() {
        cy.get('.ls-btn-primary-danger').click();
    }

    validarNomeDeUsuario() {
        return cy.get('#full_name');
    }

    validarEmailDeUsuario(email) {
        cy.get('#email').should('have.text', email)
    }

 /*   pegarIdDeUsuario() {
        cy.get('#codigo').then(($cdg) => {
            const id = $cdg.text()
            return id
        })
        cy.get(id)
    }
*/

}