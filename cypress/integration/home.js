const isBuild = process.env.REACT_APP_IS_BUILD;

describe("Home", () => {
  it(`should render correctly ${isBuild ? "in build" : "in dev"}`, () => {
    cy.visit("http://localhost:3000");

    cy.get("p").should("contain", "Edit src/App.js and save to reload.");
    cy.get("a").should("contain", "Learn React");
  });
});
