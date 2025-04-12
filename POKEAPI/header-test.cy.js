describe("Automate API with Pokeapi",()=>{
    it('succesfully validate header', () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon")
        cy.get("@pokemon").its("headers").its("content-type")
        .should("include","application/json; charset=utf-8")
    });
    it('successfully validate status', () => {
       cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("ditto") 
       cy.get("@ditto").its("status").should("equal",200)
    });
    it('successfully validate status using params', () => {
        cy.request({
            method : "GET",
            url : "https://pokeapi.co/api/v2/pokemon/ditto"
        }).as("user")
        cy.get("@user").its("status").should("equal",200)
    });
    it('validate content', () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemo")
        cy.get("@pokemo").its("body").should("include",{name: "ditto"})
    });
    it('validate contents', () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemos")
        cy.get("@pokemos").its("body").should("include",{name: "ditto"})
    });

    it('successfully validate negative response', () => {
        cy.request({
            method : "GET",
            url : "https://pokeapi.co/api/v2/pokemon/enjoy",
            failOnStatusCode: false
        }).as("enjoy")
        cy.get("@enjoy").its("status").should("equal",404)
    });
})