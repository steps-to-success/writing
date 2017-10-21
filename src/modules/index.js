
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import completedSteps from '../reducers/completedSteps'

export default combineReducers({
  routing: routerReducer,
  completedSteps
})

