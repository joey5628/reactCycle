import React, {Component} from 'react'
import {render} from 'react-dom'

const App = () => (
  <div>sdsdsds</div>
)

if (window && document) {
  window.onload = () => {
    render(<App />,
    document.getElementById('root'))
  }
}
