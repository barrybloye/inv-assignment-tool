import Vue from 'vue'
import Router from 'vue-router'
import AssignmentList from '@/components/AssignmentList'
import AssignmentView from '@/components/AssignmentView'
import CreateAssignment from '@/components/CreateAssignment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'List of Assignments',
      path: '/assignments',
      component: AssignmentList
    },
    {
      name: 'View Assignment',
      path: '/assignment/:id',
      component: AssignmentView
    },
    {
      name: 'Create Assignment',
      path: '/create',
      component: CreateAssignment
    },
    {
      path: '*',
      redirect: '/assignments'
    }
  ]
})
