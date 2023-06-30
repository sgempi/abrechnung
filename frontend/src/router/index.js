import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import SettingsPage from '../components/SettingsPage.vue'
import ApprovePage from '../components/ApprovePage.vue'
import ExaminePage from '../components/ExaminePage.vue'
import MyTravelsPage from '../components/MyTravelsPage.vue'
import TravelPage from '../components/TravelPage.vue'
import axios from 'axios'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresAuth: false}
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage,
    meta: { requiresAuth: true}
  },
  {
    path: '/approve/:_id([0-9a-fA-F]{24})?',
    name: 'Approve',
    component: ApprovePage,
    meta: { requiresAuth: true},
    props: route => ({ _id: route.params._id })
  },
  {
    path: '/examine',
    name: 'Examine',
    component: ExaminePage,
    meta: { requiresAuth: true}
  },
  {
    path: '/examine/:_id([0-9a-fA-F]{24})/:endpointSuffix?',
    name: 'Examine Travel',
    component: TravelPage,
    meta: { requiresAuth: true},
    props: route => ({ _id: route.params._id, parentPages: [{link: '/examine', title: 'labels.examine'}], endpointPrefix: 'examine/', endpointSuffix: route.params.endpointSuffix})
  },
  {
    path: '/travel/:_id([0-9a-fA-F]{24})',
    name: 'Travel',
    component: TravelPage,
    meta: { requiresAuth: true},
    props: route => ({ _id: route.params._id, parentPages: [{link: '/', title: 'headlines.myTravels'}]})
  },
  {
    path: '/',
    name: 'MyTravels',
    component: MyTravelsPage,
    meta: { requiresAuth: true},
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

async function auth() {
  var auth = false;
  try {
    const res = await axios.get(process.env.VUE_APP_BACKEND_URL + '/api/user', {
      withCredentials: true,
    })
    auth = res.status === 200
  } catch (error) {
    if (error.response.status !== 401){
      console.log(error)
    }
  }
  return auth
}

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth && !await auth()) {
    return {path: '/login', query: { redirect: to.fullPath }}
  }
})


export default router
