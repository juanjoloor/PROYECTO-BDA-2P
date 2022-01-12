const spanner = require('../spanner.js');
class BookingController {

    constructor() {
        this.table = spanner.table('booking');
    }
    async getBookings() {
        const query = {
            sql: 'SELECT * FROM booking INNER JOIN flight ON booking.flightid = flight.flightid',
        };
        try {
            const [rows] = await spanner.run(query);
            return rows;
        } catch (error) {
            console.error('ERROR:', error);
        }
    }
    async createBooking(booking) {
        try {
            this.table.insert(booking);
            return true;
        } catch (error) {
            console.error('ERROR:', error);
        }

    }
    async updateBooking(booking) {
        try{
            this.table.update(booking);
            return true;
        }
        catch(error){
            console.error('ERROR:', error);
        }
    }
    async deleteBooking(id) {
        spanner.runTransaction(async (err, transaction) => {
            if (error) {
                return;
            }
            try {
                const [rowCount] = await transaction.runUpdate({
                    sql: `DELETE FROM bookingdetails WHERE bookingid=${id}`,
                });
                console.log(`Dato eliminado de booking details.`);
            } catch (error) {
                console.error('ERROR:', error);
            }
            try {
                const [rowCount] = await transaction.runUpdate({
                    sql: `DELETE FROM booking WHERE bookingid=${id}`,
                })
                await transaction.commit();
            } catch (error) {
                console.error('ERROR:', error);
            }
          });
    }
}
module.exports = BookingController;
