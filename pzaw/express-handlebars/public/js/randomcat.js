const randomCatBtn = $('.main__catbox__btn')
const catBoxImage = $('.main__catbox__imagebox')

const getCatIamge = () => {
	$.ajax({
		method: 'POST',
		url: '/api/getcat',
		contentType: 'application/json',
		dataType: 'json',
		success: data => {
			catBoxImage.css('background-image', `url('${data.url}')`)
		},
		error: err => console.log(err),
	})
}

randomCatBtn.on('click', getCatIamge)
