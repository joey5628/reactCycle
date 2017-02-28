import React, {
  Component
} from 'react';
import classNames from 'classnames'
import './style/index.less'


class Mask extends Component {
  static propTypes = {
    transparent: React.PropTypes.bool,
    isShow: React.PropTypes.bool,
    prefixCls: React.PropTypes.string
  }

  static defaultProps = {
    transparent: false,
    isShow: true,
    prefixCls: 'zy-mask'
  }

  render () {
    const {transparent, isShow, prefixCls, ...others} = this.props
    const className = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-hidden`]: !isShow,
      [`${prefixCls}-transparent`]: transparent
    })
    
    return (
      <div className={className} {...others}></div>
    )
  }
}

export default Mask
