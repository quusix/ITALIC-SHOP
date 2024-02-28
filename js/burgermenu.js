document
	.querySelector('.header__conteiner-burger-menu')
	.addEventListener('click', function () {
		this.classList.toggle('active')
		document.querySelector('.header__conteiner-nav').classList.toggle('open')
	})