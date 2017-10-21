const completedSteps = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_STEP':
            return state.map(step => 
                (step.id === action.id)
                    ? {...step, completed: !step.completed}
                    : todo
            )
        default: return state;
    }
}

export default completedSteps;