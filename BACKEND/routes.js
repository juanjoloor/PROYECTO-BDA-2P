const express = require('express');
const PassengerController = require('./controllers/passenger_controller');
const FlightController = require('./controllers/flight_controller');
const BookingController = require('./controllers/booking_controller');

function ApiVuelos(app) {
    const router = express.Router();
    app.use('/', router);
    const passengerController = new PassengerController();
    router.get('/passengers',
        async function (req, res, next) {
            try {
                const data = await passengerController.getPassengers();
                res.json({
                    data: data,
                });
            } catch (error) {
                console.log(error)
            }
        }     
    );
    router.post('/passengers',
        async function (req, res, next) {
            try {
                const data = await passengerController.createPassenger(req.body);
                res.json({
                    mensaje: "Pasajero creado con exito"
                });
            } catch (error) {
                console.log(error)
            }
        }
    );
    router.put('/passengers/:id',
        async function (req, res, next) {
            try {
                const data = await passengerController.updatePassenger(req.body);
                res.json({
                    mensaje: "Pasajero actualizado crrectamente"
                });
            } catch (error) {
                console.log(error)
            }
        }
    );
    router.delete('/passengers/:id',
        async function (req, res, next) {
            try {
                const data = await passengerController.deletePassenger(req.params.id);
                res.json({
                    data: data,
                    mensaje: "Pasajero eliminado correctamente"
                });
            } catch (error) {
                console.log(error)
            }
        }
    );
    const flightController = new FlightController();
    router.get('/flights',
        async function (req, res) {
            try {
                const data = await flightController.getFlights();
                res.json({
                    data: data,
                    mensaje: "Flights obtenidas con exito"
                });
            } catch (error) {
                console.log(error);
            }
        }
    );
    router.post('/flights',
        async function (req, res) {
            try {
                const data = await flightController.createFlight(req.body);
                res.json({
                    data: data,
                    mensaje: "Flight creada con exito"
                });
            } catch (error) {
                console.log(error);
            }
        }
    );
    router.put('/flights/:id',
        async function (req, res) {
            try {
                const data = await flightController.updateFlight(req.body);
                res.json({
                    data: data,
                    mensaje: "Flight actualizada con exito"
                });
            } catch (error) {
                console.log(error);
            }
        }
    );
    router.delete('/flights/:id',
        async function (req, res) {
            try {
                const data = await flightController.deleteFlight(req.params.id);
                res.json({
                    data: data,
                    mensaje: "Flight eliminada con exito"
                });
            } catch (error) {
                console.log(error);
            }
            
        }
    );
    const bookingController = new BookingController();
    router.get('/bookings',
        async function (req, res) {
            try {
                const data = await bookingController.getBookings();
                res.json({
                    data: data,
                    mensaje: "Bookings obtenidos con exito"
                });
            } catch (error) {
                console.log(error);
            }
        }
    );
    router.post('/bookings',
        async function (req, res) {
            try {
                const data = await bookingController.createBooking(req.body);
                res.json({
                    data: data,
                    mensaje: "Booking creado con exito"
                });
            } catch (error) {
                console.log(error);
            }
        }
    );
    router.put('/bookings/:id',
        async function (req, res) {
            try {
                const data = await bookingController.updateBooking(req.body);
                res.json({
                    data: data,
                    mensaje: "Booking actualizado con exito"
                });
            } catch (error) {
                console.log(error);
            }
        }
    );
    router.delete('/bookings/:id',
    async function (req, res) {
        try {
            const data = await bookingController.deleteBooking(req.params.id);
            res.json({
                data: data,
                mensaje: "Booking eliminado con exito"
            });
        } catch (error) {
            console.log(error);
        }
    }
);
}

module.exports = ApiVuelos;