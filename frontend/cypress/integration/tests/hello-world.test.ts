/// <reference types="cypress" />

describe("Basic Unauthenticated Desktop Tests", () => {
  beforeEach(() => {
    // bootrsapping external things
    cy.viewport(1280, 720);
    cy.visit("https://codedamn.com");
  });

  it("The webpage loads, at least", () => {});

  it("Login page looks good", () => {
    cy.contains("Sign In").click();

    cy.contains("Login with your credentials").should("exist");
    cy.contains("Go with Google").should("exist");
    cy.contains("Go with Facebook").should("exist");
    cy.contains("Forgot password?").should("exist");
    cy.contains("Register an account").should("exist");
  });

  it("Login page links work", () => {
    cy.visit("https://codedamn.com");

    cy.contains("Sign In").click();
    cy.contains("Forgot password?").click();

    cy.url().then((value) => {
      cy.log("The current real URL is: ", value);
    });

    cy.url().should("include", "/password-reset");
    cy.go("back");
  });

  it("Login should display correct error", () => {
    cy.contains("Sign In").click();
    cy.contains("Unable to authorize").should("not.exist");

    cy.get("[data-testid=username]").type("admin");
    cy.get("[data-testid=password]").type("admin");

    cy.get("[data-testid=login]").click();

    cy.contains("Unable to authorize").should("exist");
  });

  it.only("Login should work fine", () => {
    cy.contains("Sign In").click();

    cy.get("[data-testid=username]").type("iosdev");
    cy.get("[data-testid=password]").type("iosdev2");

    cy.get("[data-testid=login]").click();
  });
});
