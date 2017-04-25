import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import AssignmentList from '@/components/AssignmentList'
import AssignmentView from '@/components/AssignmentView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List of assignments',
      component: AssignmentList
    },
    {
      path: '/assignments/:id',
      name: 'AssignmentView',
      component: AssignmentView
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
