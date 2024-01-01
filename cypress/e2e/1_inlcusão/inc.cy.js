/// <reference types="cypress" />

describe("teste do formulario de inclusão de contatos", () => {
  beforeEach("testes para a inserção de contatos", () => {
    cy.visit("https://agenda-contatos-react.vercel.app//");
  });
  it("devera incluir um contato corretamente", () => {
    cy.get(".sc-iAEyYk").click();
    cy.get(".adicionar").click().type("paulo sergio");
    cy.get(".adicionar").click().type("paulo@gmail.com");
    cy.get(".adicionar").click().type("43 99999999");
    cy.get(".adicionar").click();
    cy.screenshot("Adicionando contato");
  });
});
