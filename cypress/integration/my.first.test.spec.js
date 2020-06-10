import { MenuLateral } from "./pages/menuLateral"
import { Usuarios } from "./pages/usuarios"

var menuLateral = new MenuLateral ()
var usuarios = new Usuarios ()

describe('Acessar a página de Usuários com sucesso', function () {
    it('Dado eu tenha acessado a aplicação', function() {
        cy.visit('https://agapito-server.herokuapp.com')
    })

    it('Ao clicar na opção "Usuários" no menu Lateral', function() {
        menuLateral.clicarUsuarios()
        usuarios.validarPaginaUsuarios()
    })

    it('Eu devo acessar a página e ver o título "Usuários" na parte superior', function() {
        usuarios.validarPaginaUsuarios()
    })
})

describe('Acessar a página de Usuários com sucesso2', function () {
    it('Dado eu tenha acessado a aplicação', function() {
        cy.visit('https://agapito-server.herokuapp.com')
    })

    it('Ao clicar na opção "Usuários" no menu Lateral', function() {
        menuLateral.clicarUsuarios()
        usuarios.validarPaginaUsuarios()
    })

    it('Eu devo acessar a página e ver o título "Usuários" na parte superior', function() {
        usuarios.validarPaginaUsuarios()
    })
})