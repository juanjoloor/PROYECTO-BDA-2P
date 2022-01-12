const spanner = require('../spanner.js');

class FlightController {
    constructor() {
        this.table = spanner.table('flight');
    }
    async getFlights() {
        const sql_query = {
            sql: 'SELECT * FROM flight',
          };
          try {
            const [rows] = await spanner.run(sql_query);
            return rows;
          } catch (error) {
            console.error('ERROR:', error);
          }
    }
    async createFlight(flight) { 
        try {
            this.table.insert(flight);
            return true;
        } catch (error) {
            console.error('ERROR:', error);
        }

    }
    async updateFlight(flight) {
        try{
            this.table.update(flight);
            return true;
        }
        catch(error){
            console.error('ERROR:', error);
        }
    }
    async deleteFlight(flight) {
      try{
          this.table.deleteRows(flight);
          return true;
      }
      catch(error){
          console.error('ERROR:', error);
      }
  }
}

module.exports = FlightController;
