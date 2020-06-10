describe('My First Test', function () {
    it('Visits the kitchen sink', function() {
        //Arrange
        cy.visit('https://agapito-server.herokuapp.com')
        //Act
        cy.get('#users').click()
        //Assert
        cy.get('#titulo').should('have.text','Usuários')
    })
})