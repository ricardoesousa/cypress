import { MenuLateral } from "./pages/menu_lateral"
import { ListaDeUsuarios } from "./pages/listar_usuarios"
import { CriarNovoUsuario } from "./pages/criar_novo_usuario"
import { MostrarUsuario } from "./pages/mostrar_usuario"
import { EditarUsuario } from "./pages/editar_usuario"

const menuLateral = new MenuLateral ()
const listaDeUsuarios = new ListaDeUsuarios ()
const criarNovoUsuario = new CriarNovoUsuario ()
const mostrarUsuario = new MostrarUsuario ()
const editarUsuario = new EditarUsuario ()

const url = Cypress.config("baseUrl")
const login = 'ricardo'
const id = '995'
const nome = 'Ricardo Sousa'
const email = 'roes@gft.com'
const idade = '30'
const msgNovoUsuario = 'Usuário foi criado com sucesso.'
const msgEdicaoDeUsuario = 'Usuário foi atualizado com sucesso.'


describe('Teste de CRUD', function () {
    it('Criar um usuário', function() {
        cy.visit(url)
        menuLateral.acessarUsuarios()
        listaDeUsuarios.criarNovoUsuario()
        criarNovoUsuario.preencherCadastro(login,nome,email,idade)
        criarNovoUsuario.salvarCadastro()
        mostrarUsuario.validarCadastroDeNovoUsuario(msgNovoUsuario)
    })

    it('Mostrar um usuário', function() {
        cy.visit(url)
        menuLateral.acessarUsuarios()
        listaDeUsuarios.mostrarUsuario(id)
        mostrarUsuario.validarDadosDeUsuario(id,login,nome,email,idade) 
    })

    it('Editar um usuário', function() {
        cy.visit(url)
        menuLateral.acessarUsuarios()
        listaDeUsuarios.editarUsuario(id)
        editarUsuario.preencherCadastro(login,nome,email,idade)
        editarUsuario.salvarCadastro()
        mostrarUsuario.validarEdicaoDeUsuario(msgEdicaoDeUsuario)
    })

    it('Excluir um usuário', function() {
        cy.visit(url)
        menuLateral.acessarUsuarios()
        listaDeUsuarios.excluirUsuario(id)
    })
})