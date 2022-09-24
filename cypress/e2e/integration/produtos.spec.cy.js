/// <reference types="cypress" />

describe('Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .first()
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {

        let qtd = 3

        cy.get('[class="product-block grid"]')
            .eq(3)
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',qtd)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    });

});