import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard';

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/*webpackChunkName:"PokemonLayout"*/'@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home', name: 'pokemon-home',
                component: import(/*webpackChunkName:"ListPage"*/'@/modules/pokemon/pages/ListPage')
            },
            {
                path: 'about', name: 'pokemon-about',
                component: import(/*webpackChunkName:"AboutPage"*/'@/modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemonid',
                component: import(/*PokemonPage:"PokemonPage"*/'@/modules/pokemon/pages/PokemonPage'),
                props: (route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? { id: 1 } : { id }
                }
            },
            {
                path: '/',
                redirect: { name: 'pokemon-about' } //'pokemon/home'
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter:[isAuthenticatedGuard],
        component: () => import(/*webpackChunkName:"DbzLayout"*/'@/modules/dbz/layouts/DbzLayout'),
        children: [
            {
                path: 'characters', name: 'dbz-characters',
                component: import(/*webpackChunkName:"ListPage"*/'@/modules/dbz/pages/Characters')
            },
            {
                path: 'about', name: 'dbz-about',
                component: import(/*webpackChunkName:"AboutPage"*/'@/modules/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }

        ]
    },
    { path: '/pathMatch(.*)*', component: import(/*PokemonPage:"404"*/'@/modules/shared/pages/npf') }

]

const router = createRouter({

    history: createWebHashHistory(),
    routes,
})
/* --Guard Global sincrono 
router.beforeEach((to, from, next) => {
        console.log({ to, from, next });
    
        const random = Math.random() * 100
        if (random > 50) {
            console.log(random, 'autenticado')
            next()
        } else {
            console.log(random, 'bloqueado por bE Guard')
            next({ name: 'pokemon-home' })
        }
        
    })
        */

/* --Guard Global asincrono */
const canAccess = () => {
    return new Promise(resolve => {
        const random = Math.random() * 100
        if (random > 50) {
            console.log(random, 'autenticado')
            resolve(true)
        } else {
            console.log(random, 'bloqueado por bE Guard')
            resolve(false)
        }
    })
}
router.beforeEach(async (to, from, next) => {
    const authorized = await canAccess()

    authorized
        ? next()
        : next({ name: 'pokemon-home' })
})


export default router