/// <reference types="cypress" />

describe("Login page", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit("http://localhost:3000/login");
  });

  it("DOM elements exists", () => {
    // All buttons exists
    cy.get("[data-testid=login-btn]").should("exist");
    cy.get("[data-testid=cart-btn]").should("exist");
    cy.get("[data-testid=search-btn]").should("exist");
    cy.get("[data-testid=favorites-btn]").should("exist");
    cy.get("[data-testid=login-submit-btn]").should("exist");
    cy.get("[data-testid=sign-up-link]").should("exist");

    // Initialy password is invisible
    cy.get("[data-testid=show-password-btn]").should("exist");
    // Switch password visibility
    cy.get("[data-testid=show-password-btn]").click();
    cy.get("[data-testid=hide-password-btn]").should("exist");

    cy.get("[data-testid=sign-up-link]").should("exist");

    // Inputs
    cy.get("[data-testid=email-input]").should("exist");
    cy.get("[data-testid=password-input]").should("exist");

    cy.get("[data-testid=logo]").should("exist");
  });

  it("Links on login page works", () => {
    // Header navigation buttons
    cy.get("[data-testid=search-btn]").click();
    cy.get("[data-testid=search-input]").should("exist");

    cy.get("[data-testid=cart-btn]").click();
    cy.url().should("include", "/cart/step-1");
    cy.go("back");

    cy.get("[data-testid=favorites-btn]").click();
    cy.url().should("include", "/favorites");
    cy.go("back");

    cy.get("[data-testid=login-btn]").click();
    cy.url().should("include", "/login");

    cy.get("[data-testid=sign-up-link]").click();
    cy.url().should("include", "/register");
    cy.go("back");
  });

  it.only("Invalid email text", () => {
    cy.get("[data-testid=email-input]").type("testkdsada");
    cy.get("[data-testid=password-input]").focus();
    cy.get("[data-testid=input-error]").contains("Invalid email");
  });
});
