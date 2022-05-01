describe("Nrail", () => {
  it("it should add item to cart", () => {
    cy.visit("/");

    cy.wait(2000);
    cy.get(
      ":nth-child(1) > .card > .card-body > .mb-3 > .add-to-cart-buttons > .product-quantity-btns > .incrementCountBtn"
    ).click();
    cy.wait(2000);

    cy.get(":nth-child(1) > .card > .card-body > .btn-primary").click();
    cy.wait(2000);

    cy.get(
      ":nth-child(1) > .card > .card-body > .mb-3 > .add-to-cart-buttons > .product-quantity-btns > .incrementCountBtn"
    ).click();
    cy.wait(2000);

    cy.get(
      ":nth-child(1) > .card > .card-body > .mb-3 > .add-to-cart-buttons > .product-quantity-btns > .incrementCountBtn"
    ).click();
    cy.wait(2000);

    cy.get(
      ":nth-child(1) > .card > .card-body > .mb-3 > .add-to-cart-buttons > .product-quantity-btns"
    ).click();
    cy.wait(2000);

    cy.get(
      ":nth-child(1) > .card > .card-body > .mb-3 > .add-to-cart-buttons > .product-quantity-btns"
    ).click();
    cy.wait(2000);

    cy.get(":nth-child(1) > .card > .card-body > .btn-primary").click();
    cy.get(":nth-child(2) > .card > .card-body > .btn-primary").click();
    cy.get(":nth-child(3) > .card > .card-body > .btn-primary").click();
    cy.get(":nth-child(2) > .card > .card-body > .btn-primary").click();

    cy.wait(2000);
    cy.get('[data-testid="add-to-cart"]').click();
    cy.wait(2000);
    cy.get(".backToHomeBtn").click();
  });
});
