import './style.css';
import Alpine from 'alpinejs';
import api from './data/api';

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('facts', api)
})

Alpine.start();