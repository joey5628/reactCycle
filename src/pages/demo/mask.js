import React, {
  Component
} from 'react'
import Mask from '../../components/Mask'

class maskDemo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }

  toggle () {
    let isShow = !this.state.isShow
    this.setState({isShow: isShow})
  }

  render () {
    return (
      <div>
        <button type="button" className="btn" onClick={this.toggle.bind(this)}>打开蒙板</button>
        <Mask isShow={this.state.isShow} handleClick={this.toggle.bind(this)}>
          <span>111</span>
        </Mask>
      </div>
    )
  }
}

export default maskDemo
