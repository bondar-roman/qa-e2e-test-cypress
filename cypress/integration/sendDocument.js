describe('SendDocumentTest', () => {
  it('SendDocument', () => {
    cy.visit('https://dev.2sign.online/');
    cy.get('[name=recipientName]').type('test');
    cy.get('[name=recipientEmail]').type('qa-test@arixess.com');
    cy.get('[name=senderName]').type('test2');
    cy.get('[name=senderEmail]').type('bondarroman1999@gmail.com');

    cy.get('[type=file]').attachFile('test.pdf');

    cy.get('.MuiButton-containedSecondary').click();

    cy.wait(10000);

    const dataTransfer = new DataTransfer;

      cy.get('#root > main > div > div.DocumentConstructor_configurator__1x07s > div.DocumentConstructor_header__19nn4 > div > div > div > div:nth-child(2) > div.DraggableButton_btnWrap__1zzqX')
        .trigger('dragstart', { dataTransfer });
  
      cy.get('.DocumentConstructor_configuratorBody__DT38i')
        .trigger('drop', { dataTransfer });
  
      cy.get('#root > main > div > div.DocumentConstructor_configurator__1x07s > div.DocumentConstructor_header__19nn4 > div > div > div > div:nth-child(2) > div.DraggableButton_btnWrap__1zzqX')
        .trigger('dragend');

    cy.get('.MuiButton-containedSecondary').click();
    cy.get('.MuiButton-containedSecondary').click();

    cy.wait(10000)

    cy.get('.Success_linkWrap__XwWNx a').should('have.attr', 'href')
  });
});