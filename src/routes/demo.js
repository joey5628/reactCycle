export default {
  path: 'demo',
  childRoutes: [
    {
      path: 'mask',
      component: require('../pages/demo/mask.js').default
    },
    {
      path: 'animation',
      component: require('../pages/demo/animation.js').default
    },
    {
      path: 'modal',
      component: require('../pages/demo/modal.js').default
    }
  ]
}
