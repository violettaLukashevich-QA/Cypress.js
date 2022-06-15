
describe("Testing https://www.ilovepdf.com", function () {

    it("Log in is successfull", function () {
        cy.visit("https://www.ilovepdf.com/login");
        cy.get("#loginEmail").type("djudemcg@mumbama.com");
        cy.get("#inputPasswordAuth").type("ABC123!");
        cy.get("#loginBtn").click();
         })
})
