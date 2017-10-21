
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import AllLearningObjectives from '../learningObjectives'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/learning-objectives">Learning Objectives</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/learning-objectives" component={AllLearningObjectives} />
    </main>
  </div>
)

export default App