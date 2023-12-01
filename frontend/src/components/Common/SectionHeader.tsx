import React from 'react'

const SectionHeader = ({text }:{text:string}) => {
  return (
    <h1 className="text-4xl text-center mb-10">
        {text}
    </h1>
  )
}

export default SectionHeader