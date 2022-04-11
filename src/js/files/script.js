// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const block = document.querySelector('.page__main-block_01');
const button = document.querySelector('.main-block__button');

button.addEventListener('click', function() {
   block.classList.add('active');
})