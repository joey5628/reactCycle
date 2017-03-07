import React, {
  Component
} from 'react';
import Animation from '../Animation'
import classNames from 'classnames'
import './style/index.less'


class Mask extends Component {

  static propTypes = {
    transition: React.PropTypes.bool,
    visible: React.PropTypes.bool,
    prefixCls: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    transitionName: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ])
  }

  static defaultProps = {
    transition: true,
    visible: true,
    prefixCls: 'zy-mask',
    handleClick: function () {},
    transitionName: 'zy-zoom'
  }

  render () {
    const {visible, prefixCls, handleClick, ...others} = this.props
    delete others.transition
    delete others.transitionName
    const className = classNames({
      [`${prefixCls}`]: true
    })
    let node = visible ? <div className={className} {...others} onClick={handleClick}></div> : null

    node = this.props.transition ? (
      <Animation>
        {node}
      </Animation>
    ) : node

    return node
  }
}

export default Mask
