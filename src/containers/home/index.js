import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleStep, addSteps } from '../../actions/index'
import Lo from '../learningObjectives/Lo'
import React from 'react'
import {Switch, Route} from 'react-router-dom'

const Home = () => (
  <div>Home</div>
)

const mapStateToProps = (state) => {  
  console.log('state mapStateToProps:', state)
  return(

  {
  addSteps: state.addSteps,
  completedSteps: state.toggleStep.completed
})}


const mapDispatchToProps = dispatch => bindActionCreators({
  toggleStep,
  addSteps,
  changePage: () => push('/learning-objectives'),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lo)