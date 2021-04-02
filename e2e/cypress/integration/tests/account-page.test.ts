/// <reference types="cypress" />

describe("Account page", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit("/login");

    const email = Cypress.env("email");
    const password = Cypress.env("password");

    cy.get("[data-testid=email-input]").type(email).blur();
    cy.get("[data-testid=password-input]").type(password).blur();

    cy.get("[data-testid=login-submit-btn]").click();
    cy.url().should("include", "/account");
  });

  it("DOM elements exists", () => {
    // All buttons exists
    cy.get("[data-testid=login-btn]").should("exist");
    cy.get("[data-testid=cart-btn]").should("exist");
    cy.get("[data-testid=search-btn]").should("exist");
    cy.get("[data-testid=favorites-btn]").should("exist");

    cy.get("[data-testid=logo]").should("exist");
  });

  it.only("Links on account page works", () => {
    cy.wait(1000);
    // Header navigation buttons
    cy.get("[data-testid=search-btn]").click();
    cy.get("[data-testid=search-input]").should("exist");

    cy.get("[data-testid=cart-btn]").click();
    cy.url().should("include", "/cart/step-1");
    cy.go("back");

    cy.get("[data-testid=favorites-btn]").click();
    cy.url().should("include", "/favorites");
    cy.go("back");
  });

  it("User is able to search product form this page", () => {
    // Checking if the URL is right
    cy.get("[data-testid=search-btn]").click();
    cy.get("[data-testid=search-input]").type("douglas dakota{enter}");
    cy.url().should("include", "/search?q=douglas%20dakota");
    cy.go("back");
  });
});
