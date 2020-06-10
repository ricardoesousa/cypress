export class Usuarios {
    
    validarPaginaUsuarios() {
        cy.get('#titulo').should('have.text','Usuários')
    }
}