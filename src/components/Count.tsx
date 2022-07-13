import React from 'react'
interface ICountText{
  label:string,
}
const Count = ({label}:ICountText) => {
  return (
    <h1>
      {label}
    </h1>
  )
}

export default Count
