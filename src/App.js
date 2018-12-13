import PropTypes from 'prop-types'
import routes from './routes'

const App = () => (
  routes
)

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
}

export default App