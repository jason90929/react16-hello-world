import React from 'react'
import PropTypes from 'prop-types'
import routes from './routes'

const App = ({ history }) => (
  routes
)

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
}

export default App