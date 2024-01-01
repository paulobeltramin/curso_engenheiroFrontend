/// <reference types="cypress" />

describe("testes do componente de remoção de contato", () => {
  beforeEach("testes para a inserção de contatos", () => {
    cy.visit("https://agenda-contatos-react.vercel.app//");
  });

  it("devera remover o contato corretamente", () => {
    cy.get(".delete").first().click();
    cy.screenshot('Removendo contato')
  });
});
