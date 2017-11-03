
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { toggleStep, addSteps } from '../reducers/index'


export default combineReducers({
  addSteps,
  routing: routerReducer,
  toggleStep,
  
})

