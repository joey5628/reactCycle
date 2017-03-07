import React, {
  Component,
  PropTypes,
  ReactNode
} from 'react'
import Mask from '../Mask/index'
import LazyRenderBox from './LazyRenderBox'

function noop () {}

class Modal extends Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    // animated: PropTypes.bool,
    className: PropTypes.string,
    transitionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    animation: PropTypes.string,
    transitionTimeout: PropTypes.number,
    mask: PropTypes.bool,
    maskTransition: PropTypes.bool,
    maskTransitionName: PropTypes.string,
    maskTransitionTimeout: PropTypes.number,
    zIndex: PropTypes.number,
    maskStyle: PropTypes.object,
    children: PropTypes.any,
    visible: PropTypes.bool,
    title: ReactNode,
    footer: ReactNode,
    wrapClassName: PropTypes.string,
    onShow: PropTypes.func,
    onClose: PropTypes.func
  }

  static defaultProps = {
    prefixCls: 'zy',
    animated: true,
    className: '',
    transitionName: 'zy-zoom',
    animation: 'zoom',
    mask: true,
    maskTransition: true,
    maskTransitionName: 'zoom',
    maskTransitionTimeout: 100,
    zIndex: 999,
    maskStyle: null,
    visible: false,
    title: null,
    footer: null,
    wrapClassName: '',
    onShow: noop,
    onClose: noop
  }

  getMaskElement () {
    const props = this.props
    let maskElement
    if (props.mask) {
      const maskTransition = this.getMaskTransitionName()
      maskElement = (
        <LazyRenderBox
          key='maks'
          style={this.getMaskStyle()}
          className={`${props.prefixCls}-mask`}
          hiddenClassName={`${props.prefixCls}-mask-hidden`}
          visible={props.visible}
        ></LazyRenderBox>
      )
    }
    if (maskTransition) {
      maskElement = (
        <Animation
          key="mask"
          transitionName={props.maskTransitionName}
          transitionEnterTimeout={props.maskTransitionTimeout}
          transitionAppearTimeout={props.maskTransitionTimeout}
          transitionLeaveTimeout={props.maskTransitionTimeout}
        >
          {maskElement}
        </Animation>
      )
    }
    return maskElement
  }

  getModalElement () {

  }

  getMaskTransitionName () {
    const props = this.props
    let maskTransitionName = props.maskTransitionName
    const animation = props.animation
    if (!maskTransitionName && animation) {
      maskTransitionName = `${prefixCls}-${animation}`
    }
    return maskTransitionName
  }

  getTransitionName () {
    const props = this.props
    let transitionName = props.transitionName
    const animation = props.animation
    if (!transitionName && animation) {
      transitionName = `${prefixCls}-modal-${animation}`
    }
    return transitionName;
  }

  getZIndexStyle () {
    const style = {}
    const props = this.props
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex
    }
    return style
  }

  getMaskStyle () {
    return Object.assign({}, this.getZIndexStyle(), this.props.maskStyle)
  }

  getWrapStyle () {
    return Object.assign({}, this.getZIndexStyle(), this.props.wrapStyle)
  }

  render () {
    return (
      <div>
        {this.getMaskElement()}
      </div>
    )
  }
}
