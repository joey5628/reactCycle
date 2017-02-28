import React from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'

const Welcome = () => (
  <div>
    <Header title="demo"></Header>
    <div className="link-box">
      <Link
        to="/demo/mask"
        className="nav-link">
        蒙板
      </Link>
    </div>
  </div>
)

export default Welcome