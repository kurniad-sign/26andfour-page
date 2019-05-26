const navBurger = document.querySelector('.c-nav__burger');
const closeBurger = document.querySelector('.c-nav__close');
const mbNav = document.querySelector('.c-nav__mobile .c-nav__list');
const scrollBtn = document.querySelector('.pg-hero__scroll');

navBurger.addEventListener('click', () => {
	if (!mbNav.classList.contains('ut--is-open')) {
		mbNav.classList.add('ut--is-open');
	}
});

closeBurger.addEventListener('click', () => {
	if (mbNav.classList.contains('ut--is-open')) {
		mbNav.classList.remove('ut--is-open');
	}
});
