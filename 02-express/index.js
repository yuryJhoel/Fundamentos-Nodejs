const express = require('express');
const morgan = require('morgan');
const app = express();
// Adquiriedo rutas
const routes = require("./routes")
const routesApi = require('./routes-api')

// Setting
app.set('appName','Mi primer servidor')
app.set('views',__dirname + '/views')

app.set('view engine','ejs');
// Midlewares
app.use(morgan("combined"));
// Rutas
app.use(routes)
app.use('/api',routesApi)
app.get('*',(req, res)=>{
    res.end("Archivo no encontrado")
})

app.listen(3000,()=>{
    console.log("Server on port 3000")
    console.log("Nombre de la app",app.get('appName'))
})
