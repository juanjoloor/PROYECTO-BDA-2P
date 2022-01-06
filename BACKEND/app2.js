

const cors = require('cors')
const mysql = require('mysql');
var express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./routes');
const PORT = 3050;
var app = express();

app.use(bodyParser.json());
app.use(cors())

const conenection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'password',
    database:'aereolina2'
  })

// Route
  app.get('/', (req,res) =>{
    res.send('Wlcome to my API')
  })


  // CRUD PASAJEROS
  app.get('/pasajeros', (req , res) =>{
      const sql = 'SELECT * FROM passenger';
      conenection.query(sql, (error,results)=>{
          if (error) throw error;
          if( results.length > 0){
              res.json(results)
          } else{
              res.send('No hay resultados')
          }
      });
  })


  app.post('/pasajeros', (req , res) =>{
    const sql = ' INSERT INTO passenger SET ?'
    const passengerObj = {
        passname: req.body.passname,
        passemail: req.body.passemail,
        passdob: req.body.passdob
    }
    conenection.query(sql, passengerObj , error =>{
        if ( error) throw error;
        res.send('Pasajero creado con exito')
   
    })
  })


  app.put('/pasajeros/:id', (req , res) =>{
    const { id } = req.params;
    const { passname , passemail, passdob } = req.body;
    const sql= ` UPDATE passenger SET passname = '${passname}' , passemail='${passemail}', passdob ='${passdob}' WHERE passid = ${id} `             
    conenection.query(sql,  error =>{
        if ( error) throw error;
        res.send('Pasajero actualizado con exito')
    })
  })


app.delete('/pasajeros/:id', (req , res) =>{
    const { id } = req.params;
    const sql= ` DELETE FROM passenger WHERE passid = ${id} `             
    conenection.query(sql,  error =>{
        if ( error) throw error;
        res.send('Borrando pasajero con exito')
    })
  })

// crud vuelos

app.get('/vuelos', (req , res) =>{
  const sql = 'SELECT * FROM flight';
  conenection.query(sql, (error,results)=>{
      if (error) throw error;
      if( results.length > 0){
          res.json(results)
      } else{
          res.send('No hay resultados')
      }
  });
})


app.post('/vuelos', (req , res) =>{
const sql = ' INSERT INTO flight SET ?'
const passengerObj = {
  flightsource: req.body.flightsource,
  flightdest: req.body.flightdest,
  flightdate: req.body.flightdate,
  flightseat: req.body.flightseat,
  flightcost: req.body.flightcost,
}
conenection.query(sql, passengerObj , error =>{
    if ( error) throw error;
    res.send('Pasajero creado con exito')

})
})


app.put('/vuelos/:id', (req , res) =>{
const { id } = req.params;
const { flightsource , flightdest, flightdate, flightseat, flightcost } = req.body;
const sql= ` UPDATE flight SET flightsource = '${flightsource}' , flightdest='${flightdest}', flightdate ='${flightdate}' , flightseat ='${flightseat}' , flightcost ='${flightcost}' WHERE flightid = ${id} `             
conenection.query(sql,  error =>{
    if ( error) throw error;
    res.send('Vuelo actualizado con exito')
})
})


app.delete('/vuelos/:id', (req , res) =>{
const { id } = req.params;
const sql= ` DELETE FROM flight WHERE flightid = ${id} `             
conenection.query(sql,  error =>{
    if ( error) throw error;
    res.send('Vuelo borrado con exito')
})
})

// crud reservas

app.get('/reservas', (req , res) =>{
  const sql = 'SELECT * FROM booking';
  conenection.query(sql, (error,results)=>{
      if (error) throw error;
      if( results.length > 0){
          res.json(results)
      } else{
          res.send('No hay resultados')
      }
  });
})

app.post('/reservas', (req , res) =>{
const sql = ' INSERT INTO booking SET ?'
const passengerObj = {
    bookdate: req.body.bookdate,
    flightid: req.body.flightid
}
conenection.query(sql, passengerObj , error =>{
    if ( error) throw error;
    res.send('Reserva creada con exito')

})
})


app.put('/reservas/:id', (req , res) =>{
const { id } = req.params;
const { bookdate , flightid } = req.body;
const sql= ` UPDATE booking SET bookdate = '${bookdate}' , flightid='${flightid}' WHERE bookingid = ${id} `             
conenection.query(sql,  error =>{
    if ( error) throw error;
    res.send('Reserva actualizada con exito')
})
})


app.delete('/pasajeros/:id', (req , res) =>{
const { id } = req.params;
const sql= ` DELETE FROM passenger WHERE passid = ${id} `             
conenection.query(sql,  error =>{
    if ( error) throw error;
    res.send('Borrando pasajero con exito')
})
})
  
conenection.connect(error =>{
    if (error) throw error;
    console.log('Database server runing')
});

app.listen(PORT , () => console.log('Servidor on port ${PORT}'));
