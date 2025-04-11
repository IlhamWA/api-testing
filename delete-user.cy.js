describe("delete user",()=>{
    it('delete user', () => {
        cy.request("DELETE","https://reqres.in/api/users/1").then((response)=>{
            expect(response.status).eq(204)
        })
    });
})