const db = require('./src/config/connection');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();



const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
.then( () => console.log('Conectado a la base de datos'))
.catch( (err) => console.error(err) );

db.sync()
.then( () => console.log('Base de datos sincronizada con éxito'));

app.get('/api/', (req, res) => {
    res.send('Petición escuchada correctamente');
})

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`Servidor escuchando en el el puerto ${process.env.SERVER_PORT}`)
})
