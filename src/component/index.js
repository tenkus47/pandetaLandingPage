import React from 'react'
import List from './ListOfPan'
import Heading from './Heading'
import Desc from './Desc'
import {prayer} from '../helper/prayerMarquee'
function Index() {


  return (
    <div >
        <div className='absoluteBackground'></div>
         <Heading/>
         <hr/>
         <Desc/>
         <List/>
         <footer><marquee>{prayer}</marquee></footer>
    </div>
  )
}

export default Index