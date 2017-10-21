import React from 'react'
import {Link} from 'react-router-dom'
import TargetsApi from '../../targetsApi'

const AllLearningObjectives = () => {
  return (
    <div>
      <ul>
        {
          TargetsApi.all().map(lO => (
            <li key={lO.id}>
              <Link to={`/learning-objectives/${lO.id}`}>{lO.text}</Link>
            </li>
          )
          )
        }
      </ul>
    </div>
  )
}

export default AllLearningObjectives