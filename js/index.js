const searcbutton = document.getElementById('searchButton')
const searchInput = document.querySelector('.header__conteiner-list-input')

var image = document.querySelector('.modal__window-image img')
var image1 = document.querySelector('.shop__card-cart-image-one')
var image2 = document.querySelector('.shop__card-cart-image-two')
var image3 = document.querySelector('.shop__card-cart-image-three')
var image4 = document.querySelector('.shop__card-cart-image-four')
var image5 = document.querySelector('.shop__card-cart-image-five')
var image6 = document.querySelector('.shop__card-cart-image-jacket')

image1.addEventListener('click', function () {
	image.src = './src/img/chain_earrings.svg'
})
image2.addEventListener('click', function () {
	image.src = './src/img/Necklace.svg'
})
image3.addEventListener('click', function () {
	image.src = './src/img/ring.webp'
})
image4.addEventListener('click', function () {
	image.src = './src/img/braslet.png'
})
image5.addEventListener('click', function () {
	image.src = './src/img/k20Braslet.png'
})
image6.addEventListener('click', function () {
	image.src = '../src/img/aura_contour_jacket.svg'
})
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
$(document).ready(function () {
	$('.shop__card-slider').slick({
		arrows: true,
		dots: false,
		autoplay: true,
		slidesToShow: 3,
		draggable: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	})
})

document
	.querySelector('.header__conteiner-burger-menu')
	.addEventListener('click', function () {
		this.classList.toggle('active')
		document.querySelector('.header__conteiner-nav').classList.toggle('open')
	})
