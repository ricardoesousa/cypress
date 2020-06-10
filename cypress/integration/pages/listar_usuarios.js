export class ListaDeUsuarios {
    
    validarPaginaUsuarios() {
        cy.get('#titulo').should('have.text','Usuários')
    }

    criarNovoUsuario() {
        cy.get('#btn-new').click()
    }
    
    mostrarUsuario(id){
        cy.get('#btn-show_' + id).click()
    }

    editarUsuario(id) {
        cy.get('#btn-edit_' + id).click()
    } 

    excluirUsuario(id) {
        cy.get('#btn-delete_' + id).click()
    }
}