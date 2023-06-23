const navbarText = Cypress.env("navbarText");

context("Home Page Render Test", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });
  //   it("contains text", () => {
  //     cy.get("#welcome-statement").should(
  //       "contain.text",
  //       "Track. Reprocess. Repeat."
  //     );
  //   });
  //   it("renders a div within a div", () => {
  //     cy.get("div").eq(0).find("div").should("exist");
  //   });
  //   it("renders main with the correct elements", () => {
  //     cy.get("#root").within(() => {
  //       cy.get("main").should("exist");
  //     });
  //   });
  it("correctly renders website link", () => {
    cy.findByText(navbarText).should("exist");
  });
});
