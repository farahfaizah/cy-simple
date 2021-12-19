describe('Simple example for qa test', () => {
    it('Klik akun navigate ke url account -> Login -> Input email & passwd text', () => {
        cy.visit('https://evermos.com/')

        cy.contains('Masuk').click({ force: true})

        cy.url().should('include', '/login')

        //get phone number textfield component
        cy.get('[style="margin-bottom:30px;"] > .inputText__inner > .inputText__input')
            .type('081223334444')

        //get password textfield component
        cy.get('[style="margin-bottom:15px;"] > .inputText__inner > .inputText__input')
            .type('password')

        cy.get('.btn').click()

        cy.url().should('include', '/catalog')

    })
  })