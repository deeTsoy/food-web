import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import forms from './modules/forms';
import calc from './modules/calc';
import slider from './modules/slider';
import cards from './modules/cards';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-06-11');
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    calc();
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    cards();
});