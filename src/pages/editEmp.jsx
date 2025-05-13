import React from 'react'
import Form from '../component/form'
import { useParams } from 'react-router-dom'
const EditEmp = () => {
   const id=useParams()
  return (
      <>
      <Form/>
      </>
    
  )
}

export default EditEmp
