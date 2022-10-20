const colors = require ('colors');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Mi tercer respuesta desde  mi API en Express');
});

app.use(express.json());
app.post('/', (req, res) => {
    const body = req.body
    console.log('Recibí:', body);
    
    res.status(201).send();
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`.rainbow);
});
// console.log("Hola mundo...".rainbow);

