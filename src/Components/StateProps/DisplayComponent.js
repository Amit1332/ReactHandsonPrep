import React, { useState } from 'react'
import { ClassComponent } from './ClassComponent'
import { FunctionalComponent } from './FunctionalComponent'

const DisplayComponent = () => {

  const [data , setData] =useState({
    gender:"male"
  })
  return (
    <>
    
    <FunctionalComponent name = "rahul" a = {4} b={5} data = {data}/>
    <br/>
    <ClassComponent name = "Amit Singh" age="23"/>


    
    </>
  )
}

export default DisplayComponent