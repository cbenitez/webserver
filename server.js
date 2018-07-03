const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public') );

//partials
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');

app.get( '/', ( req, res ) => {
	res.render('home',{
		title: 'Web server | Demo',
		nombre: 'christian'
	});
});

app.get( '/about', (req, res) => {
	res.render('about', {
		title: 'About | Demo',
		request: req.url
	});
});

app.listen( port, () => {
	console.log('Escuchando peticiones en el puerto ' + port);
});