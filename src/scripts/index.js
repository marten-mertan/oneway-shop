import initPopups from './parts/popups';
import initSliders from './parts/sliders';
import initForm from './parts/form';
import initHeader from './parts/header';

$(document).ready(() => {
    initSliders();
    initPopups();
    initForm();
    initHeader();
});