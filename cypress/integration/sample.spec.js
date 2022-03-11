describe("Testing headings", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Heading should say Home", () => {
    cy.get("#heading").contains("Home");
  });
  it("Heading should say Atoms", () => {
    cy.get("#atoms").click();
    cy.get("#heading").contains("Atoms");
  });
  it("Heading should say Molecules", () => {
    cy.get("#molecules").click();
    cy.get("#heading").contains("Molecules");
  });
  it("Heading should say Organisms", () => {
    cy.get("#organisms").click();
    cy.get("#heading").contains("Organisms");
  });
  it("Heading should say Templates", () => {
    cy.get("#templates").click();
    cy.get("#heading").contains("Templates");
  });
});
