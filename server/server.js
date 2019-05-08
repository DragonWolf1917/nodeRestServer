//conf
require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//establece el formato de transmición url en x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //toda la info que venga en el formato anterior se convierte en Json

//NOTA: al estar en un middlewere, todas las peticiones pasan por el código de bodyParse

app.get('/usuarios', (req, res) => {
    res.send('get Usuario\n\tse usa para obtener un registro');
});

app.post('/usuarios', (req, res) => {
    let dataSended = req.body //este objeto es creado por el BodyParser para manejar la información enviada com Json
    dataSended.mensajeAdminYo = 'post Usuario\n\tse usa para crear un registro'
    res.json({ dataSended });
});

app.put('/usuarios/:id', (req, res) => {
    let reqId = req.params.id //esto apunta al ":id" del URI
    res.send('put Usuario\n\tse usa para actualizar un registro\nID requerido por la app:' + reqId);
});

app.delete('/usuarios', (req, res) => {
    res.send('delet Usuario\n\tse usa para "borrar" un registro (generalmente se cambia a un estado no disponible');
});

//NOTA: cada vez que se usa send, por defecto se envía en formato xml-html, para enviar formatos en JSON se puede incluir el objeto en el metodo send, o cambiar por el metodo JSO

app.listen(port, console.log(`listen at ${port}`));