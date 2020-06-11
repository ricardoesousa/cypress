import { MenuLateral } from "./pages/menu_lateral"
import { ListaDeUsuarios } from "./pages/lista_de_usuarios"
const url = Cypress.config("baseUrl")
const menuLateral = new MenuLateral ()
const listaDeUsuarios = new ListaDeUsuarios ()

describe('Acessar a página de Usuários com sucesso', function () {
    it('Dado eu tenha acessado a aplicação', function() {
        cy.visit(url)
    })

    it('Ao clicar na opção "Usuários" no menu Lateral', function() {
        menuLateral.acessarUsuarios()
        listaDeUsuarios.validarPaginaUsuarios()
    })

    it('Eu devo acessar a página e ver o título "Usuários" na parte superior', function() {
        listaDeUsuarios.validarPaginaUsuarios()
    })
})