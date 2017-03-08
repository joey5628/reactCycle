import React, {
  Component,
  PropTypes,
  ReactNode
} from 'react'
import Mask from '../Mask/index'
import Animation from '../Animation'
import LazyRenderBox from './LazyRenderBox'
import './style/index.less'

function noop () {}

class Modal extends Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    // animated: PropTypes.bool,
    className: PropTypes.string,
    transitionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    animation: PropTypes.string, //目前支持 fade和zoom
    transitionTimeout: PropTypes.number,
    mask: PropTypes.bool,
    maskTransition: PropTypes.bool,
    maskTransitionName: PropTypes.string,
    maskAnimation: PropTypes.string,
    maskTransitionTimeout: PropTypes.number,
    zIndex: PropTypes.number,
    maskStyle: PropTypes.object,
    children: PropTypes.any,
    visible: PropTypes.bool,
    title: PropTypes.element,
    footer: PropTypes.element,
    wrapClassName: PropTypes.string,
    wrapStyle: PropTypes.object,
    style: PropTypes.object,
    onShow: PropTypes.func,
    onClose: PropTypes.func,
    afterClose: PropTypes.func
  }

  static defaultProps = {
    prefixCls: 'zy-modal',
    closable: true,
    maskClosable: true,
    animated: true,
    className: '',
    transitionName: 'zy-zoom',
    animation: '',
    mask: true,
    maskTransition: true,
    maskTransitionName: 'zy-zoom',
    maskTransitionTimeout: 100,
    maskAnimation: '',
    zIndex: undefined,
    maskStyle: null,
    visible: false,
    title: null,
    footer: null,
    wrapClassName: '',
    wrapStyle: {},
    style: {},
    onShow: noop,
    onClose: noop,
    afterClose: noop
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
    const props = this.props
    if (props.visible) {
      this.openTime = Date.now()
    }
  }

  getMaskElement () {
    const props = this.props
    let maskElement = null
    const maskTransition = props.maskTransition
    if (props.mask && props.visible) {
      maskElement = (
        <LazyRenderBox
          key='mask'
          style={this.getMaskStyle()}
          className={`${props.prefixCls}-mask`}
        ></LazyRenderBox>
      )
    }

    if (maskTransition) {
      const maskTransitionName = this.getMaskTransitionName()
      maskElement = (
        <Animation
          key="mask"
          transitionName={maskTransitionName}
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
    const props = this.props
    const closable = props.closable
    const { prefixCls, maskClosable } = props
    const wrapStyle = this.getWrapStyle()
    const dest = {
      width: '5.4rem', height: '3rem',
      'backgroundColor': '#fff',
      'border': '1px solid #ddd',

    }
    const style = Object.assign({}, props.style, dest)

    let dialogElement = null
    if (props.visible) {
      dialogElement = (
        <div
          ref="wrap"
          role="modal"
          className={`${prefixCls}-wrap ${props.wrapClassName || ''}`}
          aria-labelledby={props.title ? this.titleId : null}
          style={wrapStyle}
          onClick={maskClosable ? this.onMaskClick.bind(this) : undefined}
        >
          <LazyRenderBox
          key="dialog-element"
          role="document"
          ref="dialog"
          style={style}
          className={`${prefixCls} ${props.className || ''}`}
          >
            {props.children}
          </LazyRenderBox>

        </div>
      )
    }

    const transitionName = this.getTransitionName()
    dialogElement = (
      <Animation
        key="dialog"
        transitionName={transitionName}
        transitionEnterTimeout={props.transitionTimeout}
        transitionAppearTimeout={props.transitionTimeout}
        transitionLeaveTimeout={props.transitionTimeout}
      >
        {dialogElement}
      </Animation>
    )
    console.log(dialogElement)
    return dialogElement
  }

  getMaskTransitionName () {
    const props = this.props
    let maskTransitionName = props.maskTransitionName
    const maskAnimation = props.maskAnimation
    if (!maskTransitionName && maskAnimation) {
      maskTransitionName = `${prefixCls}-${maskAnimation}`
    }
    return maskTransitionName
  }

  getTransitionName () {
    const props = this.props
    let transitionName = props.transitionName
    const animation = props.animation
    if (!transitionName && animation) {
      transitionName = `${prefixCls}-${animation}`
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

  onMaskClick () {
    if (Date.now() - this.openTime < 300) {
      return ;
    }
    this.close()
  }

  close () {
    this.props.onClose()
  }

  render () {
    return (
      <div>
        {this.getMaskElement()}
        {this.getModalElement()}
      </div>
    )
  }

  /*render () {
    let node = this.props.visible ? (
      <div className="animation-item show">zhangyi</div>
    ) : null

    node = this.props.maskTransition ? (
      <Animation>
        {node}
      </Animation>
    ) : node

    return node
  }*/
}

export default Modal
