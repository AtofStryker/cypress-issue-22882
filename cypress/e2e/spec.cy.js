describe("empty spec", () => {
  it("opens the google test document", () => {
    cy.visit("/");
    cy.get("#identifierId").type(Cypress.env("GOOGLE_USERNAME"));
    cy.get("#identifierNext").click();
  });

  it("also does not work in cy.origin", () => {
    cy.origin("https://google.com", () => {
      cy.visit("https://docs.google.com");
      cy.get("#identifierId").type(Cypress.env("GOOGLE_USERNAME"));
      cy.get("#identifierNext").click();
    });
  });
});
