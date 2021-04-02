/// <reference types="cypress" />

describe("Main page", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit("");
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
    cy.get("[data-testid=side-nav]").should("exist");
    cy.get("[data-testid=description-content]").should("exist");
  });

  it("Links on main page works", () => {
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
    cy.go("back");

    // Main content buttons
    cy.get("[data-testid=details-btn]").click();
    cy.url().should("include", "/products/");
    cy.go("back");

    cy.get("[data-testid=add-btn]").click();
    cy.get("[data-testid=popup]").should("exist").contains("Item added to cart!");

    // Checking if the URL is right
    cy.get("[data-testid=search-btn]").click();
    cy.get("[data-testid=search-input]").type("douglas dakota{enter}");
    cy.url().should("include", "/search?q=douglas%20dakota");
    cy.go("back");
  });

  it("Add item to cart", () => {
    cy.get("[data-testid=add-btn]").click();
    cy.get("[data-testid=cart-btn]").click();
    cy.url().should("include", "/cart/step-1");
    cy.get("[data-testid=item-row]").should("exist");
  });
});

describe("API Tests", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit("");
  });

  it("GET main product", () => {
    cy.request("http://localhost:5000/api/products/main-product").then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
    });
  });
});
