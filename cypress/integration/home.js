describe("Home", () => {
  it(`should render correctly`, () => {
    cy.visit(`${Cypress.env("baseUrl")}`);

    cy.get("p").should("contain", "Edit src/App.js and save to reloaddddd.");
    cy.get("a").should("contain", "Learn React");
    cy.get("p").should("contain", "Testando esse paragrafo");
  });
});
