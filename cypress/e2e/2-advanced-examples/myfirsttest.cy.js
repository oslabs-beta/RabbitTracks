context('Contain test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080")
    })
    it('contains text', () => {
        cy.get('#welcome-statement').should('contain.text', 'Track. Reprocess.')
    })
})