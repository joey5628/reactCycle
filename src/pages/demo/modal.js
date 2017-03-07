import React, {
  Component
} from 'react'
import ReactDom from 'react-dom'
import Modal from '../../components/Modal/Modal.js'

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
          visible={this.state.visible}>
        </Modal>
      </div>
    )
  }
}

export default ModalDemo
