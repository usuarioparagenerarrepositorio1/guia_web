const express = require('express');
const morgan = require('morgan');
const app = express();


//Se busca de forma secuencial para el formato de fondo y muestra.

//middle ware funciona de mejor manera para el servidor, controla los ingresos y entradas al servidor segun la peticion que se realice.*/

//setting
app.set('appName', 'Mi primer Servidor');
//no solo nombre del servidor sino que funciona de manera mas adecuada para el funcionamiento estructurado.

//esto es con el uso de plantilla en cuestion, antes se debe configurar con el dirname, prueba con console.log(__dirname)

app.set('views', __dirname + '/views')

app.set('view engine', 'ejs')

app.use(morgan('combined'));//'tiny', 'dev', 'short';
app.use((req, res, next) => {
  console.log('request url:' + req.url);
  next();
});// esto se debe pasar con next

app.use((req, res, next) => {
  console.log("paso por aqui!!");
  next();
});

//requiriendo rutas

const routes = require('./routes');
const router_api = require('./router_api');

/*app.get('/', (req, res) => {
  res.end("Hello mundo!");
}); */
//lo de arriba ahora con render

/*ahora esto se vuelve una forma de enrutamiendo en el archivo router.js
app.get('/', (req,res) => {
  res.render('index.ejs');
});

app.get('/login', (req, res) => {
  res.render("login/login.ejs");
});

app.get('*', (req, res) => {
  res.end("No se encontro algo!!");
});*/


app.use('/api', router_api); // esto es lo mismo que poner en archivo de origen app.get('/api', ...) en vez de app.get('/', ...)
app.use(routes);

app.get('*', (req, res) => {
  res.end("No se encontro algo!!");
});

app.listen(3000, () => {
  console.log("Esto funciona en el puerto 3000 con la variable: ", app.get('appName'));
});

