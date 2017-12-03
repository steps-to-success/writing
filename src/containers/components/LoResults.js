import React from 'react';
import {Link} from 'react-router-dom'

const LoResults = (props) => {
    console.log('props loresults', props)
    let Los = props.result.map((learningObj, index) => {
      console.log('learningObj:', learningObj)
      return <Link to="/steps-to-success" className="loResults" onClick={props.onClick.bind(this,index)}>
        {learningObj.lO}</Link>;
    })
    
    return (
      <div>
        {Los}
      </div>
    )
  }

  export default LoResults