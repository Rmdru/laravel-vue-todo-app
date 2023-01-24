require('./bootstrap');

import * as Vue from "vue";

import App from './vue/app.vue'

const { createApp } = Vue

createApp(App).mount('#app')