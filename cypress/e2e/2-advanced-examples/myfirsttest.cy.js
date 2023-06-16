context('Contain test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080")
    })
    it('has an h1', () => {
        cy.get('#welcome-statement').should('contain.text', 'Track. Reprocess.')
    })
})