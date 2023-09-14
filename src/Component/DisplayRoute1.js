import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import Store from '../Store/Store'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'

const DisplayRoute1 = () => {
  const[studata,setStuData]=useState([
    {
      id:1,
      Name:"John",
      Age:24,
      Course:"MERN",
      Batch:"October",
      
      },
      {
        id:2,
        Name:"Doe",
        Age:25,
        Course:"MERN",
        Batch:"November",
       
        },
        {
          id:3,
          Name:"Biden",
          Age:26,
          Course:"MERN",
          Batch:"September",
        },
          {
            id:4,
            Name:"Barar",
            Age:22,
            Course:"MERN",
            Batch:"September",
          
            },
            {
              id:5,
              Name:"Christ",
              Age:25,
              Course:"MERN",
              Batch:"December",
            
              },
  ]
    
    
  )
  return (
    <div>
      <BrowserRouter>
      <div className='navbar'>
      <NavLink className="home" to='./'>Home</NavLink>
      <NavLink className="home"to='./Student'>Student</NavLink>
      <NavLink className="home"to='./contact'>Contact Us</NavLink>
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Student' element={
          <Store.Provider value={{data:studata, dataFun:setStuData}}>
          <Student/>
          </Store.Provider>
        
        
        }/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/editstudent' element={
          <Store.Provider value={{data:studata, dataFun:setStuData}}>
          <EditStudent/>
          </Store.Provider>
        
        }/>
        <Route path='/addstudent' element={
           <Store.Provider value={{data:studata, dataFun:setStuData}}>
        <AddStudent/>
        </Store.Provider>
        }/>


    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default DisplayRoute1
