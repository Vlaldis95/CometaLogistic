import FormValidator from './FormValidator.js';

const selectChanel = document.querySelector('.popup__select_type_chanel');
const selectTax = document.querySelector('.popup__select-wrapper_type_tax');


// запуск валидации всех форм
Array.from(document.forms).forEach(item => {
  const formValid = new FormValidator({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
    },
    item
    );
    //включение валидации
    formValid.enableValidation();
 });

// добавлени поля выбора налога НДС
selectChanel.addEventListener('input', (e) => {
  e.target.value !== 'Физ.лицо'
  ? selectTax.classList.remove('popup__select-wrapper_closed')
  : selectTax.classList.add('popup__select-wrapper_closed');
});
