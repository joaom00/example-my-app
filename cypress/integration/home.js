describe("Home", () => {
  it("should render correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get("p").should("contain", "Edit src/App.js and save to reload.");
    cy.get("a").should("contain", "Learn React");
  });
});
