"use strict"

// Меню burger =========================================================================================================

window.onload = function () {
	adaptiveHeader();
}

window.addEventListener('resize', function () {
	adaptiveHeader();
});

function adaptiveHeader() {
	let factWidth = window.innerWidth;
	const headerBurger = document.querySelector('.header-menu__icon');
	let headerMenuBurger = document.querySelector('.header-menu');
	let menuBody = document.querySelector('.menu__body');
	let menu = document.querySelector('.menu__list');
	if (factWidth <= 767.98) {
		if (!menu.classList.contains('done')) {
			menu.classList.add('done');
			[menu].forEach(element => {
				headerMenuBurger.insertAdjacentElement('beforeend', element);
			});
		}
	} else if (factWidth > 767.98) {
		headerMenuBurger.classList.remove('_active');
		headerBurger.classList.remove('_active');
		if (menu.classList.contains('done')) {
			menu.classList.remove('done');
			[menu].forEach(element => {
				menuBody.insertAdjacentElement('afterbegin', element);
			});
		}
	}
}

const headerMenuList = document.querySelector('.menu__list');
const headerMenuBurger = document.querySelector('.header-menu');
const headerBurger = document.querySelector('.header-menu__icon');
if (headerBurger) {
	headerBurger.addEventListener("click", function (element) {
		headerBurger.classList.toggle('_active');
		headerMenuBurger.classList.toggle('_active');
		if (headerMenuBurger.classList.contains('_active')) {
			scrollStop();
		} else {
			scrollActive();
		}
	});
	headerMenuList.addEventListener("click", function (element) {
		headerBurger.classList.remove('_active');
		headerMenuBurger.classList.remove('_active');
		if (headerMenuBurger.classList.contains('_active')) {
			scrollStop();
		} else {
			scrollActive();
		}
	});
}

function scrollStop() {
	document.body.classList.add("stop-scrolling");
}
function scrollActive() {
	document.body.classList.remove("stop-scrolling");
}

// Меню burger ======================================================================================================================

// ibg cod=============================================================================================================

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(\'' + ibg[i].querySelector('img').getAttribute('src') + '\')';
		}
	}
}
ibg();

// ibg cod ================================================================================================================


// активация swiper =================================================================================================================

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 10,
	autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
	},
});

// активация swiper =========================================================================================

// Валидация ввода email===================================================================================================


const emailFild = document.getElementById('email');
const button = document.getElementById('button');
const response = document.getElementById('response');

button.addEventListener('click', function () {
	const email = emailFild.value;
	if (validateEmail(email)) {
		emailFild.classList.remove('_error');
		response.innerHTML = "";
	} else {
		emailFild.classList.add('_error');
		response.innerHTML = "Sorry, entered email incorrect";
	}
});

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

// Валидация ввода email =====================================================================================


