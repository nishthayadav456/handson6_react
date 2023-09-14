import React, { useContext } from 'react'
import Store from '../Store/Store'
import { NavLink, useNavigate } from 'react-router-dom'
const Student = () => {
  const displaydata=useContext(Store)
  const Navi=useNavigate()
  
  console.log(displaydata)
 
  return (
    <div>
      <h1>Student details</h1>
      <button className="btn1"onClick={()=>Navi('/addstudent')}>Add New Student</button>
      <table border="1" width="75%" height="400px" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>

          
        </thead>
        <tbody>
        {displaydata.data.map((item,index)=>{
          // console.log(item)
          // console.log(index)
          return(
            <tr key ={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
             <td><NavLink to='/editstudent'state={{index}}> Edit</NavLink></td>
            </tr>
          )
        })}
        </tbody>
      </table>
      
    </div>
  )
}

export default Student
