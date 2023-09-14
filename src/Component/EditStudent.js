import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Store from '../Store/Store';
const EditStudent = () => {
  const Navigate=useNavigate();
  const indexData=useLocation().state.index;
  const contextData=useContext(Store)
  console.log(indexData)

  //creating a object
  const updateData={
    Name:contextData.data[indexData].Name,
    Age:contextData.data[indexData].Age,
    Course:contextData.data[indexData].Course,
    Batch:contextData.data[indexData].Batch
  }
  function handleChange(e){
    updateData[e.target.name]=e.target.value;
  }
  const handleUpdate=()=>{
     console.log(contextData.data[indexData]);
    contextData.data[indexData]=updateData;
    console.log(updateData)
    Navigate('/Student')
  }
    
  return (
    <div>
     
       <label className="con1">Name</label>
      <input className="box1" type='text' name='Name' placeholder={contextData.data[indexData].Name} onChange={handleChange}/><br/>
      <label  className="con2">Age</label>
      <input className="box2" type='number' name='Age' placeholder={contextData.data[indexData].Age} onChange={handleChange}/><br/>
      <label  className="con3">Course</label>
      <input className="box3"  type='text' name='Course' placeholder={contextData.data[indexData].Course} onChange={handleChange}/><br/>
      <label  className="con4">Batch</label>
      <input  className="box4" type='text' name='Batch' placeholder={contextData.data[indexData].Batch} onChange={handleChange}/><br/>
     
      <button  className="btn3"onClick={()=>Navigate('/Student')}>Cancel</button>
      <button className="btn2"onClick={handleUpdate}>Submit</button>
    </div>
  )
}

export default EditStudent
