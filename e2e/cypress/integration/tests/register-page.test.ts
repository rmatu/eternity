describe("Main page", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit("/register");
  });

  it("DOM elements exists", () => {
    // All buttons exists
    cy.get("[data-testid=login-btn]").should("exist");
    cy.get("[data-testid=cart-btn]").should("exist");
    cy.get("[data-testid=search-btn]").should("exist");
    cy.get("[data-testid=favorites-btn]").should("exist");
    cy.get("[data-testid=add-btn]").should("exist");
    cy.get("[data-testid=details-btn]").should("exist");

    cy.get("[data-testid=logo]").should("exist");
  });
});
