import React from 'react'
import { useSelector } from 'react-redux'
import '../style/desc.css'
function Desc() {
   const list=useSelector(data=>data.selection)
  return (<>
    {list?.id ?( 
   <div className='discription'>
   <div className='Img-desc'><img src={list.image} alt='desc-data'/></div>
  
    <div className='card-desc'>
    <div className='name'>མཚན། : {list.name}་</div>
   <div className='nameEng' style={{fontFamily:'monospace'}}>Name : {list.nameEng}་</div>
   {list.desc}</div>
    <div className='relLinks'>
        <button  className="button-54" role="button">Downloads</button>
        <button  className="button-54" role="button">Parkhang</button>
        <button  className="button-54" role="button">Lopenling</button>
        <button  className="button-54" role="button">BDRC</button>
        <button className="button-54" role="button">Wikipedia</button>
    </div>
   </div>):(null)
    }
   </>

  )
}

export default Desc