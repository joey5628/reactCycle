import React, { Component } from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Animation from '../../components/Animation';
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

  componentDidMount () {
    console.log(111)
    console.log(this.group)
    console.log(this.group.props.children)
    console.log(React.isValidElement(this.group.props.children))
    React.Children.forEach(this.group.props.children, (child) => {
      console.log(child)
      console.log(child.key)
    })
  }

  componentDidUpdate () {
    console.log(222)
    console.log(this.group.props.children)
    console.log(React.isValidElement(this.group.props.children))
  }

  render () {
    let className = classNames({
      'animation-item': true,
      'show': this.state.isShow
    })
    let node = []
    for(let i = 0; i < 2; i++) {
      node.push(<div className={className} key={`key-${i}`}>
        这是一个测试啊
      </div>)
    }
    return (
      <div>
        <button type="button" onClick={this.handleTest.bind(this)}>点击</button>
        <Animation ref={(c) => { this.group = c }}
          transitionName="zy-fade"
          transitionEnterTimeout={500}
          transitionAppearTimeout={500}
          transitionLeaveTimeout={500}>
          {
            node
            //this.state.isShow ? node : null
          }
        </Animation>
      </div>
    )
  }
}

export default AnimationDemo
