import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AllLearningObjectives from './index'
import Lo from './Lo'

const LearningObjectives = () => {
    return (
        <Switch>
            <Route exact path='/learning-objectives' component={AllLearningObjectives} />
            <Route path='/learning-objectives/:id' component={Lo} />
        </Switch>
    )
}

export default LearningObjectives