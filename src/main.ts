import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import '@/styles/global.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// choosing the icons
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


// Adding to the library
library.add(faUserCircle);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount('#app');