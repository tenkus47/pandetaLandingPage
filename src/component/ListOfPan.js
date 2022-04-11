import React from 'react'
import {data } from '../helper/pandetaInfo'
import '../style/index.css'
function ListOfPan() {

  return (
    <div className="pandetaList" >  
{
 data.map(list=>       
            <div className="card" key={list.id}>
               <img src={list.image} className="card-img-top" alt="image1"/>
               <div className="card-body">
                 <p className="card-text">{list.name}</p>
               </div>
             </div>
     
        )
    }
   </div>
  )
}

export default ListOfPan