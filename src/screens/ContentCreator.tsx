import React from 'react'
import { NavLink } from 'react-router'

const ContentCreator: React.FC = () => {
  return (
    <div>
      <NavLink to={'/create/campaign'} end>Create a Campaign</NavLink>
    </div>
  )
}

export default ContentCreator