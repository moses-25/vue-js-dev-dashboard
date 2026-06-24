import { createApp } from 'vue';
// import the main App components 
import App from './App.vue';
// import the vue application router
import router from "./router";
// or import router from "./router/index.js";

//import the styles
import './Styles/App.css';

/*
*create the vue application inside the HTML element with the id app and use the vue.js router
*/

createApp(App)
    .use(router)
    .mount('#app')
