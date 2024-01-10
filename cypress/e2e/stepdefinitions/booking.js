import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor" 
const BookingPage = require('../pages/booking');
let booking = new BookingPage();

When('a user retrieves booking IDs with the following filters:', function (dataTable) {
	const filters = dataTable.hashes()[0]; // Assuming only one set of filters is provided
	booking.getBookingIds(filters);
});
  
Then('the response should contain booking IDs', function () {
	const bookingIds = booking.getBookingIdsList();
	expect(bookingIds).to.be.an('array').that.is.not.empty;
});