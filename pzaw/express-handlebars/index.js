const express = require('express')
const exHb = require('express-handlebars')
const fs = require('fs')
const path = require('path')
const catsDb = require('./cats-db')

const app = express()
const port = process.env.PORT || 8080

Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)]
}

app.engine('handlebars', exHb.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public/css'))
app.use(express.static('public/imgs'))
app.use(express.static('public/js'))
app.get('/', (req, res) => {
	res.render('home', {
		title: 'Strona główna',
	})
})

app.get('/randomcat', (req, res) => {
	res.render('randomcat', {
		title: 'Losowy kotek',
		useJs: ['randomcat.js'],
	})
})

app.get('/contact', (req, res) => {
	res.render('contact', {
		title: 'Kontakt',
	})
})

app.get('/funfacts', (req, res) => {
	res.render('funfacts', {
		title: 'Ciekawostki',
		useJs: ['funfacts.js'],
		funfact: catsDb.funfacts.random(),
	})
})

app.get('/quiz', (req, res) => {
	const catsQuiz = []
	for (; catsQuiz.length < 10; ) {
		let randomQuestion = catsDb.quiz.random()

		if (catsQuiz.indexOf(randomQuestion) === -1) catsQuiz.push(randomQuestion)
	}

	res.render('quiz', {
		title: 'Koci Quiz',
		useJs: ['quiz.js'],
		catsQuiz,
	})
})

app.get('/videos', (req, res) => {
	res.render('videos', {
		title: 'Kocie filmy',
	})
})

app.post('/api/getcat', (req, res) => {
	const imagesDirectory = path.join(__dirname, 'public/imgs')
	fs.readdir(imagesDirectory, (err, files) => {
		const randomCatFile = files.random()
		const response = JSON.stringify({
			url: randomCatFile,
		})

		res.send(response)
	})
})

app.post('/api/getfunfact', (req, res) => {
	const response = JSON.stringify({
		funFact: catsDb.funfacts.random(),
	})
	res.send(response)
})

app.listen(port, () => console.log(`Server started at PORT:${port}`))
