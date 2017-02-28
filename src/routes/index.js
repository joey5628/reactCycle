export default {
  path: '/',
  component: require('../pages/Home.js').default,
  indexRoute: {
    component: require('../pages/Welcome.js').default
  },
  childRoutes: [
    require('./demo.js').default,
    // 强制“刷新”页面的 hack
    {
      path: 'redirect',
      component: require('../components/Redirect').default
    }
  ]

}
