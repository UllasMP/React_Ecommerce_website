import React from 'react'
import myContext from './Mycontext'

function MyState(props) {
    const state = {
        name: "Ullas MP",
        rollno: "BE 4th Year"
    }
  return (
    <myContext.Provider value={state}>
       {props.children}
    </myContext.Provider>
  )
}

export default MyState