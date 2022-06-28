import {createRouter, createWebHistory} from "vue-router";
import IndexView from '../views/IndexView.vue';
import AboutView from "../views/AboutView.vue";
import Error404View from "../views/error/Error404View.vue";
import PegawaiListView from "../views/Pegawai/PegawaiListView.vue";
import PegawaiDetailView from "../views/Pegawai/PegawaiDetailView.vue";
import PelangganDetailView from "../views/Pelanggan/PelangganDetailView.vue";
import PelangganListView from "../views/Pelanggan/PelangganListView.vue";
import KamarListView from "../views/Kamar/KamarListView.vue";
import KamarDetailView from "../views/Kamar/KamarDetailView.vue";

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/Pelanggan',
    name: 'pelanggan',
    component: PelangganListView,
    meta: {
      title: 'Mahasiswa list'
    }
  },
  {
    path: '/Pelanggan/:ID',
    name: 'pelanggan-detail',
    component: PelangganDetailView,
    meta: {
      title: 'Buku detail'
    }
  },
  {
    path: '/Pegawai',
    name: 'pegawai',
    component: PegawaiListView,
    meta: {
      title: 'Pegawai list'
    }
  },
  {
    path: '/Pegawai/:ID',
    name: 'pegawai-detail',
    component: PegawaiDetailView,
    meta: {
      title: 'Pegawai detail'
    }
  },
  {
    path: '/Kamar',
    name: 'kamar',
    component: KamarListView,
    meta: {
      title: 'Kamar list'
    }
  },
  {
    path: '/Kamar/:ID',
    name: 'kamar-detail',
    component: KamarDetailView,
    meta: {
      title: 'Kamar detail'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: Error404View,
    meta: {
      title: 'Error 404'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.afterEach((to, from, next) => {
  const metaTitle = to.meta.title;
  if(metaTitle){
    document.title = metaTitle+" - "+DEFAULT_TITLE;
  }else{
    document.title = DEFAULT_TITLE;
  }
})


export default router