context("App Actions Tests", () => {
  //   it("links to projects page correctly", () => {
  //     cy.visit("/");
  //     cy.findAllByText("Don't have an account? Sign Up").last().click();
  //     cy.url().should("include", "signup");
  //   });
  it("links to projects page correctly", () => {
    cy.visit("/");
    cy.get("#email").type("test0824@test.com");
    cy.get("#password").type("test");
    cy.findByText("Sign In").click();
    cy.url().should("include", "userprojects");
    cy.findByText("Logout").click({ force: true });
    cy.url().should("eq", "http://localhost:8080/");
  });
  it("lets you type in input field", () => {
    cy.visit("/signup");
    cy.get("input")
      .first()
      .should("have.attr", "id", "firstName")
      .type("Bob")
      .should("have.value", "Bob");
  });
  it("lets you clear input field", () => {
    cy.visit("/signup");
    cy.get("#lastName")
      .type("Test Name")
      .should("have.value", "Test Name")
      .clear()
      .should("have.value", "");
  });
});
