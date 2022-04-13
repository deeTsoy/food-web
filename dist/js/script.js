window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs');
    const timer = require('./modules/timer');
    const modal = require('./modules/modal');
    const forms = require('./modules/forms');
    const calc = require('./modules/calc');
    const slider = require('./modules/slider');
    const cards = require('./modules/cards');

    tabs();
    timer();
    modal();
    forms();
    calc();
    slider();
    cards();
});