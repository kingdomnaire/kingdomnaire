import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import HostPageView from '@/views/HostPageView.vue';
import GameBoardView from '@/views/GameBoardView.vue';
import GuestPageView from '@/views/GuestPageView.vue';
import AddQuestionView from '@/views/AddQuestionView.vue';
import MessageView from '@/views/MessageView.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/hostScreen',
    name: 'hostScreen',
    component: HostPageView
  },
  {
    path: '/guestScreen',
    name: 'guestScreen',
    component: GuestPageView
  },
  {
    path: '/dashboard/panel',
    name:'panel',
    component: GameBoardView
  },
  {
    path: '/dashboard/question',
    name: 'question',
    component: AddQuestionView
  },
  {
    path: '/dashboard/message',
    name: 'message',
    component: MessageView
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});


export default router;