import React from 'react'
import { Illustration, Shape } from 'react-zdog'


const Test = () => {
  return (
    <Illustration zoom={8}>
      <Shape stroke={20} color="lightblue" rotate={{ x: Math.PI }} />
    </Illustration>
  )
}

export default Test;
