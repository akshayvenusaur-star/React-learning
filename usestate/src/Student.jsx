import React from 'react'

function Student(props) {
  return (
    <div>
      <h3>name:{props.name}</h3>
      <h4>age:{props.age}</h4>
    </div>
  )
}

export default Student
