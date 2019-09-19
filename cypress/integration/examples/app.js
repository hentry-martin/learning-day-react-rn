describe('App e2e test', () => {
  it('sample test', () => {
    cy.visit('http://localhost:9030/iframe.html?path=/story/app--variation-1');

    cy.get('[data-e2e="username"] input')
      .type('foo')
      .should('have.value', 'foo');
    cy.get('[data-e2e="password"] input')
      .type('bar')
      .should('have.value', 'bar');
  });
});
