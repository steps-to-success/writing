import React from 'react';

const Steps = (props) => {
    return (
        <div>
        <h2>{props.lO.text}</h2>
        <ul onClick={props.onClick}>
        {props.steps}
        </ul>
      </div>
      );
  }

  export default Steps