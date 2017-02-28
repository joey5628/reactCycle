import React, {
  Component,
  PropTypes
} from 'react'
import './style/index.less'

class Header extends Component {

  constructor (props) {
    super(props)
  }

  static defaultProps = {
    title: ''
  }

  static propTypes = {
    title: PropTypes.string
  }

  render () {
    return (
      <header>
        <span>
          {this.props.title}
        </span>
      </header>
    )
  }
}

export default Header
