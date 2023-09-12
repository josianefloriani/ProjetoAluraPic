describe('Teste na página de login', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
  })
    it('Faz o login corretamente ', () => {
          cy.login('carowl', '12345678');
    })
  })