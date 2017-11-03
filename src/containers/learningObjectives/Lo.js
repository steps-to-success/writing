import React from 'react'
import TargetsApi from '../../targetsApi'
import Steps from './Steps'
import {toggleStep, addSteps} from '../../actions/index' // ../../reducers/index instead?

const Lo = (props) => {
  console.log('props in lo::', props)
    const lO = TargetsApi.get(
      parseInt(props.match.params.id, 10)
    )
    if (!lO) {
      return <div>Sorry, no learning objective was found</div>
    }
    //addSteps(lO);  //shouldn't be here? on component did mount instead?
    const steps2success = lO.stepsToSuccess.map((step, index) => {
      return (
        <li className="step" key={index}>
          {step}
        </li>  
      )
    })

    return (
    <Steps steps={steps2success} lO={lO} onClick={toggleStep}/>
    )
  }

  export default Lo