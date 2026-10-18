import React from 'react';
import Usestate from './Usestate'
import Student from './Student'
import Usememo from '../Usememo'
import Callback from './Callback';
import Listandkey from './Listandkey';


function App() {
  return (
    <div>
      <h1>i am from app</h1>


      <h1>usestate</h1>
      <Usestate />
  

    <>

    <h1>props</h1>
          <Student name="Akshay" age={20} />
            <Student name="Ravi" age={18} />
            <Student name="Priya" age={17}/>
        </>

      <h1>usememo</h1>
   <Usememo/>

   <h1>callback</h1>
   <Callback/>

   <h1>list and key</h1>
   <Listandkey/>

   <Routerpage></Routerpage>
       
    </div>
  )
}

export default App
