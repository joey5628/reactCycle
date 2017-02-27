import React, {Component} from 'react'
import {render} from 'react-dom'
import App from './App'

if (window && document) {
  window.onload = () => {
    render(<App />,
    document.getElementById('root'))
  }
}
