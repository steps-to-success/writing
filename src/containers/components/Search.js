import React from 'react'
import {Link} from 'react-router-dom'
import TargetsApi from '../../targetsApi'
import SearchBar from './SearchBar'
import LoResults from './LoResults'
import Fuse from 'fuse.js'

let options = {
  keys: ['lO', 'stepsToSuccess']
};
let fuse = new Fuse(TargetsApi, options)
//was index.js AllLearningObjectives

class Search extends React.Component {
  
      constructor(props) {
          super(props);
          this.state = { 
            searchValue: "",
            result: []
          };
        
          this.handleChange = this.handleChange.bind(this);
          this.handleClick = this.handleClick.bind(this);
      }
    
      handleChange(event) {
        this.setState(
          {searchValue: event.target.value}
        )
        let result = fuse.search(this.state.searchValue);
        this.setState({result: result})
      }
    
      handleClick(index) {
        console.log('index: ', this.state.result[index])
        
      }
    
    
      render() {
          if (this.state.searchValue == "") {return (
            <div>
              <SearchBar onChange={this.handleChange} value={this.state.searchValue} state={this.state.searchValue}/>
              </div>
          );
    } else {
      return (
            <div>
              <SearchBar onChange={this.handleChange} value={this.state.searchValue} state={this.state.searchValue}/>
              <LoResults result={this.state.result} onClick={this.handleClick}/>
            </div>
      )
        }
      }
  }

export default Search