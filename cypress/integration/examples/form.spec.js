describe('sprint challenge tests', () => {

    
    beforeEach(() => {
        cy.visit('http://localhost:3001/Pizza')
    })

    it('Test that you can text in an input', ( () => {
        cy.get('input[name="name"]')
        .should('have.value', '')
        .type('Benaiah')
    }))

    it('Test that you can select multiple checkboxes', () => {
        cy.get('input[type="checkbox"]')
        .click({multiple: true})
        
    })

    it('Submit Button Works', () => {
        cy.get('input[name="name"]')
        .type('Benaiah')
        cy.get('select')
        .select('1')
        cy.get('#submitBtn')
        .click()

    })
  
})