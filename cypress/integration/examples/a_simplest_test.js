describe('Simple example with tokodistributor mobile web', () => {
    it('Klik akun navigate ke url account -> Login -> Input email & passwd text', () => {
      cy.visit('https://m.tokodistributor.com/')
      
      cy.contains('Akun').click()    

      cy.contains('Login / Register').click({ force: true})      

      cy.get('.input-username')
        .type('<your_username>')
        .should('not.be.empty')
      
      cy.get('.input-pass')
        .type('<your_password>')
        .should('not.be.empty')
      
      cy.get('.btn-enter').click()

      cy.url().should('include', '/account')

    })
  })