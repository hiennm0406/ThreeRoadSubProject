import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './router/router'
import store from './store/store'

// createApp.prototype.$axios = axios
// createApp.prototype.$api_url = "https://jsonplaceholder.typicode.com/"

const app = createApp(App)
app.use(VueSidebarMenu)
app.use(store)
app.use(router)
app.mount('#app')


import attack from './components/TitleComponent/Title/Attack.vue'
import phys from './components/TitleComponent/Title/Physic.vue'
import melee from './components/TitleComponent/Title/Melee.vue'
import range from './components/TitleComponent/Title/Range.vue'
import instantly from './components/TitleComponent/Title/Instantly.vue'
import single from './components/TitleComponent/Title/Single.vue'
import multi from './components/TitleComponent/Title/Multi.vue'
import effect from './components/TitleComponent/Title/Effect.vue'
import duration from './components/TitleComponent/Title/Duration.vue'
import bond from './components/TitleComponent/Title/Bond.vue'
import lightning from './components/TitleComponent/Title/Lightning.vue'
import fire from './components/TitleComponent/Title/Fire.vue'
import ice from './components/TitleComponent/Title/Ice.vue'
import anima from './components/TitleComponent/Title/Anima.vue'

app.component('attack', attack)
.component('phys', phys)
.component('melee', melee)
.component('range', range)
.component('instantly', instantly)
.component('single', single)
.component('effect', effect)
.component('duration', duration)
.component('bond', bond)
.component('lightning', lightning)
.component('fire', fire)
.component('ice', ice)
.component('anima', anima)
.component('multi', multi)