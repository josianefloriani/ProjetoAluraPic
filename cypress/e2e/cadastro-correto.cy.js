import Cadastro from '../support/pages/cadastro/pagina-cadstro'

describe('Teste na página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
  })

  it('Preenche os campos corretamente e cadastra de novo usuário', () => {
   
    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();

  })
})