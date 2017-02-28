import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './routes'
import 'normalize.css'
import './assets/css/base.less'

if (window && document) {
  window.onload = () => {
    ReactDom.render(
      <Router history={hashHistory} routes={routes}></Router>,
      document.getElementById('root')
    )
  }
}
