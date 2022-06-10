
describe("Testing www.notino.co.uk", function () {

    it("'One Gucci product is displayed on the page", function () {
        cy.visit("www.notino.co.uk");
        cy.get("div[data-cypress=mainMenu-Fragrance]").click();
        cy.contains('Gucci').its('length').should('eq', 1);
         })
})
