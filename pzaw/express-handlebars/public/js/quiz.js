const quizQuestions = $('.main__quizbox__quiz__element')
const quizBtn = $('.main__quizbox__quiz__btn')
const infoText = $('.main__quizbox__quiz__info')

const showInfo = (text, type) => {
	infoText.text(text)
	switch (type) {
		case 'success':
			infoText.css('color', 'green')
			break
		case 'error':
			infoText.css('color', 'rgb(204, 20, 20)')
	}
}

const checkAnswers = () => {
	let goodAnswers = 0
	quizQuestions.each(function (index) {
		if (goodAnswers === null) return

		const question = $(this)
		const answer = question.data('answer')
		const checkedInput = question.children('input:checked')
		let checkedAnswer = null

		if (checkedInput.hasClass('answerTrue')) checkedAnswer = true
		else if (checkedInput.hasClass('answerFalse')) checkedAnswer = false

		if (checkedAnswer === null) return (goodAnswers = null)

		if (answer === checkedAnswer) goodAnswers++
	})

	return goodAnswers
}

const finishQuiz = () => {
	const goodAnswers = checkAnswers()
	if (goodAnswers === null) return showInfo('Zaznacz wszystkie odpowiedzi!', 'error')

	showInfo(`${goodAnswers}/${quizQuestions.length} poprawnych odpowiedzi`, 'success')
}

quizBtn.on('click', finishQuiz)
