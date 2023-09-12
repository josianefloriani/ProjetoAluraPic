const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type('lllll@lll.com');
        cy.get('[data-test="fullName"]').type('Lllll Lllll');
        cy.get('[data-test="registerUserName"]').type('lllllllll');
        cy.get('[data-test="registerPassword"]').type('LllllLllll');
    }

    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();
