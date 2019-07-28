/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
// require('../css/app.css');
import "../scss/betwiggy.scss";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');
import Selectize from "@rixbeck/be-twiggy/assets/js/Selectize";

document.addEventListener('DOMContentLoaded', () => {
    Selectize.init(document.querySelectorAll('.project-filters .selectize'));
});

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
