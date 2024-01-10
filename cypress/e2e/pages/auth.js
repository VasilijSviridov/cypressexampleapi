class AuthPage {

	constructor() {
		let token = null
		let response = null
	}

	createAuthToken(endpoint, payload) {
		let requestBody = JSON.parse(payload);
		cy.request('POST', endpoint, requestBody)
		.then((response)=> {
			cy.wrap(response).as('postResponse');
			this.token = response.body.token
			this.response = response.body
		}); 
		return this.token
	}

	verifyTokenValid() {
		return this.response
	}
}

module.exports = AuthPage;