
    // [START spanner_update_data]
    // Imports the Google Cloud client library
    const {Spanner} = require('@google-cloud/spanner');

    const projectId = 'shaped-shuttle-332922'; 
    const instanceId = 'proyecto-p2';
    const databaseId = 'vuelos';
    // Creates a client
    const spanner = new Spanner({
      projectId: projectId,
    });
    // Gets a reference to a Cloud Spanner instance and database
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);
  
  
    
  module.exports = database;
  