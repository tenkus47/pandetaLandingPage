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
        <button>Downloads</button>
        <button>Parkhang</button>
        <button>Lopenling</button>
        <button>BDRC</button>
        <button>Wikipedia</button>
    </div>
   </div>):(null)
    }
   </>

  )
}

export default Desc