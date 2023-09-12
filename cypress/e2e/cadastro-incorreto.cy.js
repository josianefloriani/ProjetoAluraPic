describe('Teste na página de cadastro', () => {
    it('Cadastro de novo usuário de forma incorreta', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.contains('button', 'Register').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
        
    })
  })