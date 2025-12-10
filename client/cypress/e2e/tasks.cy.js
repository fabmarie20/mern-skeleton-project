describe("Pastel Planner Tasks Page", () => {
  it("loads the Tasks page successfully", () => {
    cy.visit("http://localhost:5173/tasks"); 

    // Page title
    cy.contains("Pastel Planner Tasks").should("be.visible");

    // Verify at least one task appears
    cy.contains("COMP229 – Project 3 Task").should("be.visible");
    cy.contains("status: todo").should("be.visible");
  });
});
