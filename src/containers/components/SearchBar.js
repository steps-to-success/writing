import React from 'react'
import {toggleStep, addSteps} from '../../reducers/index' // ../../actiono/index instead?

const SearchBar = (props) => {
  return (
    <div className="centered">
      <form className="group">
        <input
          type="text"
          placeholder="Search for Learning Objectives..."
          value={props.state}
          onChange={props.onChange}
        />
      </form>
      <div className="bar"></div>
      </div>
  );
}

  export default SearchBar