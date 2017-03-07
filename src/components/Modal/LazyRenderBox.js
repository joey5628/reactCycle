import React, {
  Component
} from 'react'

class LazyRenderBox extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let className = this.props.className
    if (!!this.props.hiddenClassName && !this.props.visible) {
      className += ` ${this.props.hiddenClassName}`
    }

    let props = Object.assign({}, this.props)
    delete props.hiddenClassName
    delete props.visible
    props.className = className

    return <div {...props}></div>
  }
}

export default LazyRenderBox
