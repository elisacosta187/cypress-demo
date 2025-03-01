describe('Inventory Tests', () => {
    const baseUrl = 'https://www.saucedemo.com';
  
    beforeEach(() => {
      // Log in first
      cy.visit(baseUrl);
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory');
    });
  
    it('should add an item to the cart and update the cart count', () => {
      cy.get('.inventory_item button').first().click();
      cy.get('.shopping_cart_badge').should('have.text', '1');
    });
  
    it('should remove an item from the cart and update the cart count', () => {
      // Add an item
      cy.get('.inventory_item button').first().click();
      cy.get('.shopping_cart_badge').should('have.text', '1');
      // Remove it
      cy.get('.inventory_item button').first().click();
      cy.get('.shopping_cart_badge').should('not.exist');
    });
  });
  