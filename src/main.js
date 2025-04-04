import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHouse, faBook, faCircleUser, faAddressBook } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faHouse, faBook, faCircleUser, faAddressBook);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
