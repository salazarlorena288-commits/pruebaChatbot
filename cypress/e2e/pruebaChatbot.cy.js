describe("Interaccion conChatbot", () => {
  it("Interacciones", () => {
    cy.visit("https://gemini.google.com/app");
    cy.wait(3000);

    //Visualiza logo
    cy.get(".logo").should("be.visible");

    //Interactuar con herraientas de chatbot, cambio de estilo
    cy.get(".side-nav-menu-button > .mdc-icon-button > .mat-icon").click();
    cy.get(".mat-mdc-menu-trigger > .mat-mdc-list-item").click();
    cy.get('[data-test-id="desktop-theme-menu-button"]').click();
    cy.get(".mat-mdc-menu-item-highlighted").click();
    cy.get(
      ":nth-child(2) > .mat-mdc-menu-item-text > .menu-item-title-with-trailing-component > span"
    ).click();
    cy.get(".cdk-overlay-backdrop").click();

    //Envio de mensaje y validacion de respuesta
    cy.get(".text-input-field_textarea-wrapper").click().type("hola");
    cy.get(".send-button-container > .mdc-icon-button > .mat-icon").click();
    cy.get(".response-container-content").should("exist");

    //Validar que existe respuesta de chatbot
    cy.get(".avatar").should("exist");
    cy.get(".text-input-field_textarea-wrapper").should("be.visible");
    cy.get(".ql-editor > p").type("Ask Gemini");

    cy.get(".text-input-field_textarea-wrapper")
      .click()
      .clear()
      .type("¿Cuantos años vive un caballo en estado salvaje?");
    cy.get(".send-button-container > .mdc-icon-button > .mat-icon").click();

    cy.get(".side-nav-menu-button > .mdc-icon-button > .mat-icon").click();
  });
});
