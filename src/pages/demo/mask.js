import React, {
  Component
} from 'react'
import Mask from '../../components/Mask'

class maskDemo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggle () {
    let isShow = !this.state.visible
    this.setState({visible: isShow})
  }

  render () {
    return (
      <div>
        <button type="button" className="btn" onClick={this.toggle.bind(this)}>打开蒙板</button>
        <Mask visible={this.state.visible} handleClick={this.toggle.bind(this)} transition={true}>
          <span>111</span>
        </Mask>
      </div>
    )
  }
}

export default maskDemo
