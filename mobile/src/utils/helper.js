import { bindActionCreators } from 'redux'

export const mapStateToProps = props => state =>
  props.reduce((result, item) => {
    result[item] = state[item]
    return result
  }, {})

export const mapActionToProps = actions => dispatch =>
  bindActionCreators({ ...actions }, dispatch)
