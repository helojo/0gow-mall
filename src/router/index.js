// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'
import Category from '../pages/category/category.vue'
import My from '../pages/my/my.vue'
import Cart from '../pages/cart/cart.vue'

Vue.use(VueRouter);

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'Home',
            redirect: '/home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/category',
            name: 'Category',
            component: Category
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/my',
            name: 'My',
            component: My
        }
    ]
})