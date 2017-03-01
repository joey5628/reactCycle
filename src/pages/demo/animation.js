import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classNames from 'classnames'
import './style/animationDemo.less'

class AnimationDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow: false
    }
  }

  handleTest () {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render () {
    let className = classNames({
      'animation-item': true,
      show: this.state.isShow
    })
    let node = this.state.isShow ? (
      <div className={className}>
        这是一个测试啊
      </div>) : null
    return (
      <div>
        <button type="button" onClick={this.handleTest.bind(this)}>点击</button>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {node}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default AnimationDemo
