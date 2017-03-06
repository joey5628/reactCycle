import React, {
  Component
} from 'react';
import Animation from '../Animation'
import classNames from 'classnames'
import './style/index.less'


class Mask extends Component {

  static propTypes = {
    transparent: React.PropTypes.bool,
    isShow: React.PropTypes.bool,
    prefixCls: React.PropTypes.string,
    handleClick: React.PropTypes.func,
  }

  static defaultProps = {
    transparent: false,
    isShow: true,
    prefixCls: 'zy-mask',
    handleClick: function () {}
  }

  render () {
    const {transparent, isShow, prefixCls, handleClick, ...others} = this.props
    console.log(handleClick)
    const className = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-transparent`]: transparent
    })
    let node = isShow ? <div className={className} {...others} onClick={handleClick}></div> : null

    return (
      <Animation>
        {node}
      </Animation>
    )
  }
}

export default Mask
