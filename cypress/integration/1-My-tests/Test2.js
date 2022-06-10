
describe("Testing www.notino.co.uk", function () {

    it("The invalid login credentials give an error message", function () {
        cy.visit("www.notino.co.uk");
        cy.get("._1EI6NskO4Sq-ZriU1BEjSJ").click();
        cy.get("#login-name").type("qa@gmail.com");
        cy.get("#login-pwd").type("123");
        cy.get("#submitLogin").click();
        cy.get(".message.error-message").should("have.text", "The email or password you entered is incorrect.");
       
    })
})
