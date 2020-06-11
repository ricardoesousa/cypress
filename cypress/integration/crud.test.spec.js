import { MenuLateral } from "./pages/menu_lateral"
import { ListaDeUsuarios } from "./pages/lista_de_usuarios"
import { CriacaoDeUsuario } from "./pages/criacao_de_usuario"
import { Usuario } from "./pages/usuario"
import { EdicaoDeUsuario } from "./pages/edicao_de_usuario"

const menuLateral = new MenuLateral ()
const listaDeUsuarios = new ListaDeUsuarios ()
const criacaoDeUsuario = new CriacaoDeUsuario ()
const usuario = new Usuario ()
const edicaoDeUsuario = new EdicaoDeUsuario ()

var url = Cypress.config("baseUrl")
var id = '1092'
var login = 'ricardo'
var nome = 'Ricardo Sousa'
var email = 'roes@gft.com'
var idade = '30'
var msgNovoUsuario = 'Usuário foi criado com sucesso.'
var msgEdicaoDeUsuario = 'Usuário foi atualizado com sucesso.'



describe('Teste de CRUD', function () {

    beforeEach(() => {        
        cy.visit(url)
      })

    after(() => {        
      })

    it('Criar um usuário', function() {

        
        menuLateral.acessarUsuarios()
        listaDeUsuarios.criarNovoUsuario()
        criacaoDeUsuario.preencherCadastro(login,nome,email,idade)
        criacaoDeUsuario.salvarCadastro()
        usuario.validarCadastroDeNovoUsuario(msgNovoUsuario)
    })

    
    it('Mostrar um usuário', function() {
        menuLateral.acessarUsuarios()
        listaDeUsuarios.mostrarUsuario(id)
        usuario.validarDadosDeUsuario(id,login,nome,email,idade) //verificar qual é a melhor forma de validação
        usuario.validarEmailDeUsuario(email)                     //verificar qual é a melhor forma de validação
        usuario.validarNomeDeUsuario().should('have.text',nome)  //verificar qual é a melhor forma de validação
        usuario.voltar()
    })

    it('Editar um usuário', function() {
        menuLateral.acessarUsuarios()
        listaDeUsuarios.editarUsuario(id)
        edicaoDeUsuario.preencherCadastro(login,nome,email,idade)
        edicaoDeUsuario.salvarCadastro()
        usuario.validarEdicaoDeUsuario(msgEdicaoDeUsuario)
        usuario.voltar()
    })

    it('Excluir um usuário', function() {
        menuLateral.acessarUsuarios()
        listaDeUsuarios.excluirUsuario(id)
    })



})