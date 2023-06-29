context("App Actions Tests", () => {
  // 6 tests below
  // it greets with 'hello'
  // the 'signup' button links correctly to diff page
  // it requrires email has error message if empty
  // ^same w password
  // it requires VALID email/pass
  // it navigates correctly to proj page when logged in






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
