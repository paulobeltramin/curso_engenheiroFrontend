/// <reference types="cypress" />

describe("testes para o componente de edição do contato", () => {
  beforeEach("testes para a inserção de contatos", () => {
    cy.visit("https://agenda-contatos-react.vercel.app//");
  });

  it("devera chamar a função de edição do contato e salvar edição do mesmo", () => {
    cy.get(".edit").first().click();
    cy.screenshot("chamando editar função contato");
    cy.get(".alterar").click();
    cy.screenshot("Salvando o contato");
  });
});
