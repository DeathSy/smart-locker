import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

import { mapStateToProps, mapActionsToProps } from '../../utils/helper.js'

export const Landing = ({ push }) => (
  <div>
    <Link to='/dashboard'>to dashboard</Link>
  </div>
)

Landing.propTypes = {
  push: PropTypes.func
}

export default connect(mapStateToProps([]), mapActionsToProps({ push }))(
  Landing
)
