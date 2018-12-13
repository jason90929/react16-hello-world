import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
const { increment, decrement } = actions.counter

class Counter extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    const {
      count
    } = this.props

    return (
      <div className="counter">
        <p>數值: {count}</p>
        <button onClick={this.props.doIncrement}>+</button>
        <button onClick={this.props.doDecrement}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  doIncrement: PropTypes.func.isRequired,
  doDecrement: PropTypes.func.isRequired
}

Counter.defaultProps = {
  count: 0
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  doIncrement: () => dispatch(increment()),
  doDecrement: () => dispatch(decrement())
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
