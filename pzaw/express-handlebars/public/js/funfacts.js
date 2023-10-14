const factTitle = $('.main__factsbox__title')
const funFactText = $('.main__factsbox__funfact')
const getFunFact = () => {
	$.ajax({
		method: 'POST',
		url: '/api/getfunfact',
		contentType: 'application/json',
		dataType: 'json',
		success: data => {
			const funFact = data.funFact

			funFactText.text(funFact)
		},
		error: err => console.log(err),
	})
}

factTitle.on('click', getFunFact)
