const searcbutton = document.getElementById('searchButton')
const searchInput = document.querySelector('.header__conteiner-list-input')

searcbutton.addEventListener('click', function () {
	if (searchInput.style.display === 'none') {
		searchInput.style.display = 'block'
	} else {
		searchInput.style.display = 'none'
	}
})
$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
	})
})

document
	.querySelector('.header__conteiner-burger-menu')
	.addEventListener('click', function () {
		this.classList.toggle('active')
		document.querySelector('.header__conteiner-nav').classList.toggle('open')
	})
