/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve fazer o pré-cadastro', () => {

        let emailFk = faker.internet.email()
        let firstNameFk = faker.name.firstName()
        let lastNameFk = faker.name.lastName()

        cy.get('#reg_email').type(emailFk)
        cy.get('#reg_password').type('teste@teste!')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(firstNameFk)
        cy.get('#account_last_name').type(lastNameFk)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
        
    })
});