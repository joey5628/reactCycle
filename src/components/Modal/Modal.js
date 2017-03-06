import React {
  Component,
  PropTypes,
  ReactNode
} from 'react'

class Modal extends Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    animated: PropTypes.bool,
    className: PropTypes.string,
    transitionName: PorpsTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mask: PropTypes.bool,
    maskTransitionName: PropTypes.string,
    maskTransparent: PropTypes.bool,
    children: PropTypes.any,
    visible: PropTypes.bool,
    title: ReactNode,
    footer: ReactNode,
    wrapClassName: PorpsTypes.string,
    onShow: PropTypes.func,
    onClose: PropTypes.func
  }

  static defaultProps = {
    prefixCls: 'zy-modal',
    animated: true,
    className: '',
    transitionName: 'zoom',
    mask: true,
    maskTransitionName: 'zoom',
    maskTransparent: false,
  }

  render () {
    return ()
  }
}
