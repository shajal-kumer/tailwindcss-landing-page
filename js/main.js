const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const menuUL = document.querySelector(".menu ul");

mobileMenu.addEventListener("click", (e) => {
	menu.classList.toggle("!block");
	menu.classList.toggle("w-full");
	menu.classList.toggle("absolute");
	menu.classList.toggle("left-0");
	menu.classList.toggle("p-5");
	menu.classList.toggle("top-20");
	menu.classList.toggle("z-20");
	menuUL.classList.toggle("bg-bookmark-purple");
	menuUL.classList.toggle("p-5");
});

$(function () {
	$(".beefup").beefup();
});
