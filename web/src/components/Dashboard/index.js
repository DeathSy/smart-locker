import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { mapStateToProps, mapActionsToProps } from '../../utils/helper'

export const Index = ({ router, push }) => (
  <div>this is dashboard component</div>
)

Index.propTypes = {
  router: PropTypes.object,
  push: PropTypes.func
}

export default connect(mapStateToProps(['route']), mapActionsToProps({ push }))(
  Index
)
