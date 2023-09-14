import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Store from '../Store/Store';
const AddStudent= () => {
  const Navigate=useNavigate();
  
  const contextData=useContext(Store)
  console.log(contextData.data)
 
  //creating a object
  const newData={
    Name:'',
    Age:'',
    Course:'',
    Batch:''
  }
  function handleChange(e){
    newData[e.target.name]=e.target.value;
  }
  const handleClick=()=>{
    contextData.data.push(newData)
    Navigate('/Student')
  }
    
  return (
    <div>
     
       <label className="con1">Name </label>
      <input className="box1" type='text' name='Name' placeholder="Enter your name" onChange={handleChange}/><br/>
      <label  className="con2">Age</label>
      <input className="box2" type='number' name='Age' placeholder="Enter your age" onChange={handleChange}/><br/>
      <label  className="con3">Course</label>
      <input className="box3"  type='text' name='Course' placeholder="Enter course" onChange={handleChange}/><br/>
      <label  className="con4">Batch</label>
      <input  className="box4" type='text' name='Batch' placeholder="Enter Batch" onChange={handleChange}/><br/>
     
      <button  className="btn3"onClick={()=>Navigate('/Student')}>Cancel</button>
      <button className="btn2"onClick={handleClick}>Submit</button>
    </div>
  )
}

export default AddStudent
