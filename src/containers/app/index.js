
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../home'
import Search from '../components/Search'
import StepsToSuccess from '../components/StepsToSuccess'

class App extends React.Component{
  render(){
    return(
    <Router>
        <div className="container">
       <ul>
         <li><Link to="/">Home</Link></li>
       </ul>
      <Route path="/steps-to-success" render={() => <StepsToSuccess state={this.state} />} />    
      <Route exact path="/" component={Search} /> 
        </div>
    </Router>
    )
  }
}

export default App