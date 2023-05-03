const express = require('express');
const app = express();

var nav = ["Acerca de Mi","Testimonio","Proyectos"]
var ref = ["Acerca","Testimonio","Proyectos"]
var test = ["¡Bienvenido a mi portafolio personal! Aquí podrás encontrar algunos de mis trabajos y logros más destacados, así como también información sobre mi trayectoria profesional y habilidades. Espero que disfrutes de mi portafolio y que encuentres todo lo que necesitas para conocerme mejor. Si tienes alguna pregunta o comentario, no dudes en contactarme.",
"Soy un pentester que está iniciando en el mundo de la seguridad informática. Mi objetivo es aprender todo lo necesario para poder identificar y explotar vulnerabilidades en sistemas y aplicaciones. Me apasiona encontrar soluciones a problemas complejos y ayudar a las empresas a mejorar su seguridad.",
"Estoy familiarizado con herramientas como Linux, HTB y Nmap, y estoy en constante aprendizaje para estar al tanto de las últimas tendencias y técnicas en el área de la seguridad. ¡Siempre estoy dispuesto a aprender y a aportar lo mejor de mí!",
]
var titulomio = ["Estudiante","Laboral","Skills"]
var mio = ["Actualmente soy estudiante del quinto semestre de la carrera de Diseño y Desarrollo de Software",
"Desarrolle mis pasantias como desarrollardor BackEnd en la empresa CCIP para mejorar el control de gasto y administracion de estos mismos, Me desarrolle como practicante de pentester en una empresa dedicada al rubro de las telecomunicaciones, descubriendo vulneravilidades y dando soluciones a estos.",
"Poseo diferentes habilidades mas que todo en el desarrollo BackEnd y el manejo de herramientas de pentesting."]
var tproy = ["Proyecto de Inicio","Primer Proyecto", "Proyecto COT Minera","CCIP Administrator"]
var dproy = ["Python","Laravel+View","Arduino+Android","Laravel+Android"]
var proyect = ["Proyecto para simular un cajero en Python que mostraba una boleta de las cosas que se ingresaba.",
"Una tienda Online que fue desarrollada en laravel como backend y View en el FrontEnd.",
"Un proyecto para controlar la temperatura en los almacenes de comida de las empresas usando Arduino y Android.",
"Un proyecto que usa la empresa CCIP actualmente para mejorar el control administrativo de la empresa."
]
var datos = {
  titulo:"Mi Portafolio",
  nombre:"Junior",
  frase:"La felicidad está en las pequeñas cosas",
  testimonio:test,
  tituloacerca:titulomio,
  tituloproyecto:tproy,
  desproyecto:dproy,
  proyecto:proyect,
  acerca:mio,
  navBar: nav,
  referencia:ref
}
// Configurar el motor de plantillas
app.set('views', './views');

app.use(express.static('public'));
app.engine('ejs', require('ejs').renderFile);
// Ruta para renderizar la plantilla Pug
app.get('/', (req, res) => {
  res.render('index.ejs', {datos:datos});
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
