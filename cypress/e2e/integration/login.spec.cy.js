/// <reference types="cypress" />

context('Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    //afterEach(() => {
    //    cy.screenshot()
    //})

    it('Deve fazer login', () => {

        cy.get('#username').type('aluno1@ebac.com')
        cy.get('#password').type('54321')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve mostrar mensagem de erro quando usuário inválido', () => {

        cy.get('#username').type('aluno@ebac.com')
        cy.get('#password').type('54321')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    })

    it('Deve mostrar mensagem de erro quando senha inválida', () => {
        cy.get('#username').type('aluno1@ebac.com')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail aluno1@ebac.com está incorreta')
    })
})
