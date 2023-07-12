import React from 'react'

function Subdiv({text, logo}) {
  return (
    <div className='subdiv'>
      <div className="subdiv-left">
        {logo}
      </div>
      {text}
    </div>
  )
}

export default Subdiv
