/// <reference types="cypress" />

context('Login', () => {

    it('Deve fazer login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno1@ebac.com')
        cy.get('#password').type('54321')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it.only('Deve mostrar mensagem de erro quando usuário inválido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno@ebac.com')
        cy.get('#password').type('54321')
        cy.get('.woocommerce-form > .button').click()
    })

    it('Deve mostrar mensagem de erro quando senha inválida', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno1@ebac.com')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
    })
})
