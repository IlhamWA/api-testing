describe("add user",()=>{
    it('add user', () => {
        var user = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request("POST","https://reqres.in/api/users", user).then((response)=>{
            expect(response.status).equal(201)
        })
    });
})