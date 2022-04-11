import React from 'react'
import List from './ListOfPan'
import Heading from './Heading'
import Desc from './Desc'
function index() {
  return (
    <div >
        <div className='absoluteBackground'></div>
         <Heading/>
         <hr/>
         <Desc/>
         <List/>
    </div>
  )
}

export default index