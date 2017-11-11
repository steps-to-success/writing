export const ADD_STEPS = 'ADD_STEPS';
export const TOGGLE_STEP = 'TOGGLE_STEP';

export const addSteps = (lO) => {
    return dispatch => {
        dispatch({
            type: 'ADD_STEPS',
            id: lO.id
        })
    } 
}

export const toggleStep = (lO) => {
    console.log('here toggleStep called')
    return dispatch => {
        dispatch({
            type: 'TOGGLE_STEP',
            id: lO.id,
            completed: false
        })
    }
}



//action creators needed for async operations
// see: https://github.com/notrab/create-react-app-redux/blob/master/src/modules/counter.js

// export function callAddSteps(lO) {
//     return (dispatch) => {
//       dispatch(this.addSteps(lO))
//       return setTimeout(() => {
//         dispatch({
//           type: INCREMENT
//         })
//       }, 3000)
//     }
//   }

// export function callToggleStep(lO) {
//     return (dispatch) => {
//       dispatch(toggleStep(lO))
//     }
//   }