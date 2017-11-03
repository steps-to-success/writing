const initialState = [{
    completed: false
}];

export const addSteps = (state = ['1'], action) => {
    console.log('action::', action)
    switch (action.type) {
        case 'ADD_STEP':
            return {
                ...state,
                id: action.id
            }
        default: return state;
    }
}

// shouldn't return an object in addSteps?? maybe map over state..

// below was named completedSteps but changed it to same as action..

export const toggleStep = (state = initialState, action) => {
    console.log('action togglestep::', action)
    switch (action.type) {
        case 'TOGGLE_STEP':
            return state.map(step => 
                (step.id === action.id)
                    ? {...step, completed: !step.completed}
                    : step
            )
        default: return state;
    }
}

