import React, { Component, PropTypes } from 'react'
import {
  getChildrenFromProps,
  toArrayChildren
} from './util.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style/animation.less'

class Animation extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.any,
    transitionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    transitionEnter: PropTypes.bool,
    transitionAppear: PropTypes.bool,
    transitionLeave: PropTypes.bool,
    transitionEnterTimeout: PropTypes.number,
    transitionAppearTimeout: PropTypes.number,
    transitionLeaveTimeout: PropTypes.number
  }

  static defaultProps = {
    component: 'span',
    transitionName: 'zy-zoom',
    transitionEnter: true,
    transitionAppear: false,
    transitionLeave: true,
    transitionEnterTimeout: 100,
    transitionAppearTimeout: 100,
    transitionLeaveTimeout: 100
  }

  /**
   * 动画的生命周期
   */
  componentWillAppear () {}

  componentDidAppear () {}

  componentWillEnter () {}

  componentDidEnter () {}

  componentWillLeave () {}

  componentDidLeave () {}

  /**
   * 组件生命周期
   */
  componentWillReceiveProps (nextProps) {}

  render () {
    let {children, ...other} = this.props
    let newChildren = toArrayChildren(getChildrenFromProps(children))
    let node = null;
    node = newChildren.map((child) => {
      if (child === null || child === undefined) {
        return child
      }
      if (!child.key) {
        throw new Error('must set key for <animate> children');
      }
      return child
    })
    return (
      <ReactCSSTransitionGroup
        {...other}>
        {node}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Animation
