import { bindActionCreators } from 'redux'

export const mapStateToProps = props => state =>
  props.reduce((result, item) => {
    result[item] = state[item]
    return result
  }, {})

export const mapActionsToProps = actions => dispatch =>
  bindActionCreators({ ...actions }, dispatch)
