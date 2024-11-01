import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      name: 'teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          props: true,
          component: TeamMembers,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      },
    },
    {
      path: '/:notFound(.*)',
      redirect: '/teams',
    },
  ],
  scrollBehavior(to, form, savedPosition) {
    if (savedPosition) {
      return { left: 0, top: savedPosition };
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // this is globally affecting routing
  console.log(to, from);
  next();
});

router.afterEach((to, from) => {
  console.log(to, from);
});

export default router;
