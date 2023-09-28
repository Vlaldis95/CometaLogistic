const menuBurger = document.querySelector(".menu-burger");
const menuBurgerSpans = menuBurger.querySelectorAll(".menu-burger__item");
const header = document.querySelector(".header");
const headerNavContainer = header.querySelector(".header__nav-container");
const headerButton = header.querySelector(".header__button");
const anchors = document.querySelectorAll('a[href*="#"]');
const intro = document.querySelector(".intro");
const introArrow = intro.querySelector(".intro__arrow");
const introText = intro.querySelector(".intro__text");
const swiper = document.querySelector(".advantages__swiper");
const root = document.querySelector(".root");

function closeHeaderMenu() {
  header.classList.remove("header_opened");
  headerNavContainer.classList.remove("header__nav-container_opened");
  headerButton.classList.remove("header__button_opened");
  root.classList.remove("root__burger_opened");
  menuBurgerSpans.forEach(function (item) {
    item.classList.remove("menu-burger__item_active");
  });
}

function toggleHeaderMenu() {
  header.classList.toggle("header_opened");
  root.classList.toggle("root__burger_opened");
  headerNavContainer.classList.toggle("header__nav-container_opened");
  headerButton.classList.toggle("header__button_opened");
  menuBurgerSpans.forEach(function (item) {
    item.classList.toggle("menu-burger__item_active");
  });
}

menuBurger.addEventListener("click", toggleHeaderMenu);
introArrow.addEventListener("click", () => {
  intro.classList.add("intro_clicked");
  introArrow.classList.add("intro__arrow_hidden");
  introText.classList.add("intro__text_clicked");
});

// перемещение к элементам сайта
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    closeHeaderMenu();
  });
});
