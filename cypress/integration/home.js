describe("Home", () => {
  const isBuild = Cypress.env("is_build");
  it(`should render correctly ${isBuild ? "in build" : "in dev"}`, () => {
    cy.visit("http://localhost:3000");

    cy.get("p").should("contain", "Edit src/App.js and save to reload.");
    cy.get("a").should("contain", "Learn React");
  });
});
