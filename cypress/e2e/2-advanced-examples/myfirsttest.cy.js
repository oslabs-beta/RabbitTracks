context('First test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080")
    })
    it('has an h1', () => {
        cy.get('h1').should('exist')
    })
})