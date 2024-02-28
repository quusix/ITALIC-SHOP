const searcbutton = document.getElementById('searchButton')
const searchInput = document.querySelector('.header__conteiner-list-input')

searcbutton.addEventListener('click', function () {
	if (searchInput.style.display === 'none') {
		searchInput.style.display = 'block'
	} else {
		searchInput.style.display = 'none'
	}
})
