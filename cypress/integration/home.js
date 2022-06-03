describe("Home", () => {
  it(`should render correctly`, () => {
    cy.visit(`${Cypress.env("BASE_URL")}`);

    cy.get("p").should("contain", "Edit src/App.js and save to reload.");
    cy.get("a").should("contain", "Learn React");
    cy.get("p").should("contain", "Testando esse paragrafo");
  });
});
