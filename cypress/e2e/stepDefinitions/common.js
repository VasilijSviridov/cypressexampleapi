import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor" 

Given('the API base URL is {string}', function (baseUrl) {
    apiUrl = baseUrl;
});

Then('the response status code should be {int}', (statusCode) => {
	cy.get('@postResponse').should((response)=>{
        expect(response.status).to.equal(statusCode);
    });
});
