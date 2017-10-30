import { bindActionCreators } from 'redux'

export const mapStateToProps = props => state =>
  props.reduce((result, item) => {
    result[item] = state[item]
  }, {})

export const mapActionToProps = actions => dispatch =>
  bindActionCreators({ ...actions }, dispatch)
