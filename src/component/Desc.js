import React from 'react'
import { useSelector } from 'react-redux'
import ReactLoading from 'react-loading';

import '../style/desc.css'
function Desc() {
   const loaded=useSelector(data=>data.loaded)
   const list=useSelector(data=>data.selection)
  return (<>
    {list?.id ?( 
   <div className='discription' data-aos="zoom-in-down">
   <div className='Img-desc'><img src={list.image} alt='desc-data'/></div>
   
    <div className='card-desc'>
    <div className='name'>མཚན། : {list.name}་</div>
   <div className='nameEng' style={{fontFamily:'monospace'}}>Name : {list.nameEng}་</div>
   {list.desc}</div>
    <div className='relLinks'>
        <button  className="button-54" >Downloads</button>
        <button  className="button-54" >Parkhang</button>
        <button  className="button-54" >Lopenling</button>
        <button  className="button-54" >BDRC</button>
        <button className="button-54" >Wikipedia</button>
    </div>
   </div>):(
       <center>
       {loaded ?(<ReactLoading type="spin" height={'20px'} width={'20px'} />):
          null
       }  
         </center>)
    }
   </>

  )
}

export default Desc