/// <reference types="cypress" />

const token = "ewqeqweqw.rwqrwqrqwrwqwqr.rwqrqwrqw";

describe("Basic Unauthenticated Desktop Tests", () => {
  before(() => {
    cy.then(() => {
      window.localStorage.setItem("__auth__token", token);
    });
  });

  beforeEach(() => {
    // bootrsapping external things
    cy.viewport(1280, 720);
    cy.visit("https://codedamn.com");
  });
});
