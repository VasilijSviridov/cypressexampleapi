import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor" 
const AuthPage = require('../pages/auth');
let auth = new AuthPage;

When('a user makes a POST request to {string} with the following payload:', function (endpoint, payload) {
	expect(auth.createAuthToken(endpoint, payload)).to.not.equal('null');
});

Then('the response should contain a valid authentication token', function () {
	expect(auth.verifyTokenValid()).to.have.property('token').that.is.a('string');
});



