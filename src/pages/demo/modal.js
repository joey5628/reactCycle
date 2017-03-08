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

  onClose () {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <div>
        <button type="button" className="btn" onClick={this.showModal.bind(this)}>打开Modal</button>
        <Modal
          visible={this.state.visible}
          maskTransition={false}
          onClose={this.onClose.bind(this)}
          animation="fade"
          transitionName="zy-fade"
          transitionTimeout={500}>
        </Modal>
      </div>
    )
  }
}

export default ModalDemo
