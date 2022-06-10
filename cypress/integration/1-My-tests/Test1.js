
describe("Testing www.notino.co.uk", function () {

    it("The search of 'perfume' gives the correct result", function () {
        cy.visit("www.notino.co.uk");
        cy.get("input[type=search]").type("perfume").type("{enter}");
        cy.get("h1 > strong").should("have.text", "perfume");
       
    })
})
