describe('MailTest', () => {
  it('Login', () => {
    const login = 'qa-test@arixess.com';
    const password ='catch123';

    cy.visit('https://159.89.29.216:8000/webmail');
    
    cy.get('[name=_user]').type(login);
    cy.get('[name=_pass]').type(password);
    cy.get('[type=submit]').click();

    cy.get('#rcmbtn107').wait(5000).click();

    cy.get('#cc-link').click();
    cy.get('#bcc-link').click();
    cy.get('#replyto-link').click();
    cy.get('#followupto-link').click();

    cy.get('#_to').type(login);
    cy.get('#_cc').type(login);
    cy.get('#_bcc').type(login);
    cy.get('#_replyto').type(login);
    cy.get('#_followupto').type(login);

    cy.get('#compose-subject').type('My test');
    cy.get('#composebody').type('My test');

    cy.get('#rcmbtn121').click();
    cy.get('#uploadformFrm > div:nth-child(2) > input[type=file]').attachFile('fox.jpeg');
    cy.get('#rcmbtn125').click();

    cy.get('#rcmbtn107').wait(5000).click();
    cy.get('#rcmliU2VudA').wait(5000).click();

    cy.get('.message:first-child').click();
    cy.get('#rcmbtn111').click();
    cy.get('#rcmliSU5CT1g').click();
    
    cy.get('.message:first-child').click();
    cy.get('#markmessagemenulink').click();
    cy.get('#rcmbtn124').click();

    cy.get('.message:first-child').should('have.class', 'unread');

    cy.get('#markmessagemenulink').click();
    cy.get('#rcmbtn123').click();
  });
});