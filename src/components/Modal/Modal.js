import React, {
  Component
} from 'react'
import Dialog from '../Dialog/Dialog.js'
import './style/index.less'

class Modal extends Dialog {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Dialog {...this.props}></Dialog>
    )
  }
}
export default Modal
