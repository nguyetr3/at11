module.exports = {
	port: process.env.PORT || 54321,
	cacheExpiration: 2 * 60 * 60 * 1000, //2h
	parserTimeout: 10 * 1000, //10s
	restaurants: [
	{ id: 1, name: 'U Daňováka', url: 'http://www.udanovaka.sk/obedove-menu/', module: 'danovak' },
	{ id: 11, name: 'Kaša', url: 'https://restauracie.sme.sk/restauracia/kasa-2_8386-petrzalka_664/denne-menu', module: 'kasa' },
	{ id: 3, name: 'ITB', url: 'http://www.citycantina.sk/prevadzka/1', module: 'itb' },
	{ id: 2, name: 'Giuliano', url: 'http://www.giuliano.sk/-denne-menu', module: 'giuliano' },
	{ id: 4, name: 'Alfa', url: 'http://restauracie.sme.sk/restauracia/restauracia-alfa_2512-petrzalka_664/denne-menu', module: 'alfa' },
	{ id: 5, name: 'Škôlka', url: 'http://jedalen.vysnivany.sk/ukazka-strany', module: 'skolka' },
	{ id: 6, name: 'Pizza Pazza', url: 'https://www.pizzeriaviennagate.sk/', module: 'pizzapazza' },
	{ id: 7, name: 'Kamenica - Corleone Pizza', url: 'http://www.pizzacorleone.sk/obedove-menu.html', module: 'kamenica' },
	{ id: 8, name: 'Numero Uno', url: 'http://www.numerouno.sk/denne-menu/', module: 'numerouno' },
	{ id: 9, name: 'Engerau restaurant', url: 'https://www.zomato.com/sk/bratislava/engerau-restaurant-petr%C5%BEalka-bratislava-v/denn%C3%A9-menu', module: 'engerau' },
	{ id: 10, name: 'Lokálka', url: 'http://www.lokalka.sk/kopcianska-2/', module: 'lokalka' },
	{ id: 12, name: 'Slunce', url:'https://www.zomato.com/cs/praha/american-bar-u-slunce-jinonice-praha-5/denn%C3%AD-menu', module: 'zomato'}
	],
	themes: {
		'jano': { name: 'Jano', template: '../views/index.html' },
		'matus': { name: 'Matúš', template: '../views/index3.html' },
		'iveta': { name: 'Iveta', template: '../views/index4.html' },
		'diana': { name: 'Diana', template: '../views/index6.html' },
		'telka': { name: 'Telka', template: '../views/index5.html' }
	}
};
