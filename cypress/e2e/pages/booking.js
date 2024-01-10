class BookingPage {

	constructor() {
		this.bookingIds = [];
		this.response = null;
	}

	getBookingIds(filters) {
		const endpoint = '/booking';
		this.response = cy.request({
			method: 'GET',
			url: endpoint

		  })
		  .then((response)=> {
			cy.wrap(response).as('postResponse');
			this.bookingIds = response.body.map(booking => booking.bookingid);
		}); 
	}

	getBookingIdsList() {
		return this.bookingIds
	}
}

module.exports = BookingPage;