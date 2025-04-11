describe("update user",()=>{
    it('update user', () => {
        var newUser = {
            "name": "ilhams",
             "job": "zion resident"
        }
        cy.request("PUT","https://reqres.in/api/users/2", newUser).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.job).to.eq(newUser.job)
        })
    });
})