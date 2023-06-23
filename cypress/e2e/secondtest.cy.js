context("Second test", () => {
  //   it("types into a email field", () => {
  //     cy.visit("/");
  //     cy.get("#email").type("test@test.com");
  //     cy.wait(5000).then(() => console.log("yo boy!"));
  //     console.log("hey hey");
  //     // cy.log("Cypress log used");
  //   });
  it("shows input class", () => {
    cy.visit("/signup");
    cy.get(".MuiBox-root.css-binzgt").should("exist");
  });
  it('should not have same class other place', () => {
    cy.visit('/signup')
    cy.get('h1').eq(0).should('not.have.class', '.MuiBox-root.css-binzgt')
  })
});
