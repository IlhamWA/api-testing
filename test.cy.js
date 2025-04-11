const { expect } = require("chai");

describe("API TESTING", ()=>{
    it('GET all the Entities', () => {
        cy.request("GET","https://apichallenges.eviltester.com/sim/entities")
        .then((response)=>{
            expect(response.status).equal(200)
        })
    });
    it('GET a single Entity', () => {
        cy.request("GET","https://apichallenges.eviltester.com/sim/entities/1")
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).eq("entity number 1")
        })
    });
   it('create an Entity', () => {
    var user = {
        "name":"bob"
    }
        cy.request("POST","https://apichallenges.eviltester.com/sim/entities",user)
        .then((response)=>{
            expect(response.status).eq(201)
            expect(response.body.id).equal(11)
        })
   });
   it('POST to Amend an Entity', () => {
    var user = {
        "id":10,
        "name":"entity number 10",
        "description":""
    }
    cy.request("POST","https://apichallenges.eviltester.com/sim/entities/10", user)
    .then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.name).to.eq("eris")
    })
    
   });
   it('PUT to Amend an Entity', () => {
    var user = {
        "id":10,
        "name":"entity number 10",
        "description":""
      }
      cy.request("PUT","https://apichallenges.eviltester.com/sim/entities/10", user)
      .then((response)=>{
        expect(response.status).equal(200)
      })
   });
   it('DELETE an Entity', () => {
    cy.request("DELETE","https://apichallenges.eviltester.com/sim/entities/9")
    .then((response)=>{
        expect(response.status).equal(204)
    })
   });
})