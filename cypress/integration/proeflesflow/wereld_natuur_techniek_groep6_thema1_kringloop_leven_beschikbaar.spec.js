describe('Wereld Natuur en Techniek Groep 6 Thema 1 Kringloop van het leven is beschikbaar', () => {
    beforeEach(() => {
        //cy.visit('​www.duckduckgo.com')
        cy.visit('http://studio.blink.nl')
      })

    it('Gebruiker met proeflesaacount logt in', () => {
        cy.get('[type="email"]')
        cy.type('franka.buurmeijer@gmail.com')
        cy.get('[type="password"]')
        cy.type('Blink123')
        cy.click('.button_primary')
    
        expect(cy.title(Home - Studio)).to.equal(true)
    })
  })
  