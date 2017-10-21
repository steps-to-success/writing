
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Home from '../home'
import LearningObjectives from '../learningObjectives/LearningObjectives'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/learning-objectives">Learning Objectives</Link>
    </header>

    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/learning-objectives' component={LearningObjectives} />
      </Switch>
    </main>
  </div>
)

export default App