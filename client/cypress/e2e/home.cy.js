describe("Home Page E2E Test", () => {
  it("should show the Home Page title", () => {
    cy.visit("/");
    cy.contains("Home Page").should("be.visible");
  });
});
