import React, {
  Component
} from 'react'
import ReactDom from 'react-dom'
import Modal from '../../components/Modal/Modal.js'
import './style/animationDemo.less'

/*export default function () {
  let div = document.createElement('div')
  document.body.appendChild(div)

  ReactDom.render(
    <Modal
      visible
    ></Modal>, div
  )
}*/
class ModalDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  showModal () {
    this.setState({
      visible: true
    })
  }

  hideModal (e) {
    console.log('onClose', e)
    console.log('onClose', e.target)
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <div>
        <button type="button" className="btn" onClick={this.showModal.bind(this)}>打开Modal</button>
        <Modal
          prefixCls="zy-modal"
          visible={this.state.visible}
          maskTransition={true}
          maskTransitionName="zy-fade"
          maskTransitionTimeout={300}
          onClose={this.hideModal.bind(this)}
          animation="zoom"
          transitionName="zy-zoom"
          transitionTimeout={500}>
        </Modal>
      </div>
    )
  }
}

export default ModalDemo
