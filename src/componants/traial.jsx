import React from 'react';
import {useState,useEffect} from 'react';

// function trial(){
//     const{name,setname}=useState('navaneeth')
//     if(name==useState()){
//         const update =()=>{
//             setname(name+" ck ")

//         }
//      return update;
//     }

// console.log(update);

// }



//import { useState } from 'react';

// export default function Counter() {
//     const [counter, setCounter] = useState(5);
  
//     return (
//       <>
//         <span>{counter}</span>
//         <button onClick={() => {
//           setCounter(counter => counter + 5);
//           setCounter(counter => counter + 5);
//           alert(counter);
//           setCounter(counter => counter + 5);
//           setCounter(counter => counter + 5);
//         }}>Increment</button>
//       </>
//     )
//   }
  

  //output
  //15
  //25

  //conditional rendering example button.

  // function App(){
  //   const [loggedIn,setLoggedIn]=useState(true);

  //   const handleLoggedIn = ()=>setLoggedIn(true)
  //   const handleLoggedOut = ()=>setLoggedIn(false)

  //  return(
  //   <div>
  //     {
  //       loggedIn?(
  //         <div>
  //           <h1>welcome..!</h1>
  //           <button onClick={handleLoggedOut}> LogOut </button> 
  //         </div>
  //       ):(
  //         <div>
  //         <h1>Please log in.</h1>
  //         <button onClick={handleLoggedIn}>Login</button>
  //       </div>
  //       )
  //     }
  //   </div>
  //  )
  // }

function Trial (){
  const [count, setcount]= useState(null)

  function handleevent(){
    setcount(count +5);
  }

  return (
    <div>
      <h1>update both together</h1>
      <Mybutton count = {count} onClick={handleevent} />
      <Mybutton count = {count} onClick={handleevent} />
      
    </div>
  )
}

function Mybutton({count,onClick}){
  return(
    <div>
      <button onClick={onClick}>
        clicked on {count} times
      </button>
    </div>
  )
}

export default Trial;


