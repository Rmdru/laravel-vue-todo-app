require('./bootstrap');

import * as Vue from "vue";

const { createApp } = Vue

import App from './vue/app.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTrash)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')