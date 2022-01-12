
var express = require('express');
const ApiVuelos = require('./routes');
const cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());
ApiVuelos(app);
app.listen(3000, () => {
  console.log(`Corriendo en http://localhost:3000`);
});
module.exports = app;



