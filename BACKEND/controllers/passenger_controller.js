const spanner = require('../spanner.js');

class PassengerController {
    constructor() {
        this.table = spanner.table('passenger');
    }
    async getPassengers() {
        const sql_query = {
            sql: 'SELECT * FROM passenger',
          };
          try {
            const [rows] = await spanner.run(sql_query);
            return rows;
          } catch (error) {
            console.error('ERROR:', error);
          } 
    }
    async createPassenger(passenger) {
        try {
            this.table.insert(passenger);
            return true;
        } catch (error) {
            console.error('ERROR:', error);
        }
    }
    async updatePassenger(passenger) {
        try{
            this.table.update(passenger);
            return true;
        }
        catch(error){
            console.error('ERROR:', error);
        }
    }
    async deletePassenger(passenger) {
      try{
          this.table.deleteRows(passenger);
          return true;
      }
      catch(error){
          console.error('ERROR:', error);
      }
  }
}

module.exports = PassengerController;
