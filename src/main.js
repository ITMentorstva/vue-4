import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";

// http://localhost:8080/ -> /
// http://localhost:8080/products -> /products
// mojSajt.com/products -> /products

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: HomeView}, // http://localhost:8080/
        {path: '/products', name: 'Products', component: ProductsView}
    ],
});

createApp(App)
    .use(router)
    .mount('#app');