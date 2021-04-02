/// <reference types="cypress" />

describe("Favorites page", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit("/favorites");
  });

  it("DOM elements exists when user has 0 favorite items", () => {
    // All buttons exists
    cy.get("[data-testid=login-btn]").should("exist");
    cy.get("[data-testid=cart-btn]").should("exist");
    cy.get("[data-testid=search-btn]").should("exist");
    cy.get("[data-testid=favorites-btn]").should("exist");

    cy.get("[data-testid=logo]").should("exist");
    cy.get("[data-testid=no-favorites-text]").should("exist");
  });

  it("User adds 3 items to favorites and they exists in favorites-page", () => {
    cy.wait(1000);
    cy.get("[data-testid=search-btn]").click();
    cy.get("[data-testid=search-input]").type("douglas dakota{enter}");
    cy.url().should("include", "/search?q=douglas%20dakota");

    cy.get("[data-testid=favorite-btn]").each(($el, idx) => {
      if (idx > 3) {
        cy.wrap($el).click({ force: true });
      }
    });

    cy.visit("/favorites");

    // Sorting options exists now
    cy.get("[data-testid=lowest-price]").should("exist");
    cy.get("[data-testid=highest-price]").should("exist");
    cy.get("[data-testid=biggest-discount]").should("exist");
    cy.get("[data-testid=product]").should("have.length", 3);
  });
});
