const spanner = require('../spanner.js');

class BookingDetailsController {
    constructor() {
        this.table = spanner.table('bookingdetails');
    }
    async getBookingDetails() {
        const query = {
            sql: 'SELECT * FROM bookingdetails',
        };
        try {
            const [rows] = await spanner.run(query);
            return rows;
        } catch (error) {
            console.error('ERROR:', error);
        }
    }
    async createBookingDetail(bookingdetail) {
        try {
            this.table.insert(bookingdetail);
            return true;
        } catch (error) {
            console.error('ERROR:', error);
        }

    }
    async updateBookingDetail(bookingdetail) {
        try{
            this.table.update(bookingdetail);
            return true;
        }
        catch(error){
            console.error('ERROR:', error);
        }
    }

}
module.exports = BookingDetailsController;
