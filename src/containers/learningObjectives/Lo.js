import React from 'react'
import TargetsApi from '../../targetsApi'
import Steps from './Steps'

const Lo = (props) => {
    const lO = TargetsApi.get(
      parseInt(props.match.params.id, 10)
    )
    if (!lO) {
      return <div>Sorry, no learning objective was found</div>
    }
    const steps = lO.stepsToSuccess.map((step, index) => {
      return (
        <li className="step" key={index}>
          {step}
        </li>  
      )
    })
    return (
    <Steps {...props} steps={steps} lO={lO} onClick={props.onClick}/>
    )
  }

  export default Lo