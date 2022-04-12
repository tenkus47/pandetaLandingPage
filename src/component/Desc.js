import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ReactLoading from 'react-loading';

import '../style/desc.css'
function Desc() {
   const loading=useSelector(data=>data.loaded)
   const list=useSelector(data=>data.selection)
   var dispatch=useDispatch();
useEffect(()=>{
dispatch({type:'changeLoaded',data:true});
setTimeout(()=>{
  dispatch({type:'changeLoaded',data:false});
},500)
},[list])
  return ( <div className='discription' data-aos="zoom-in-down">
    {!loading ?(<>
   <div className='Img-desc'><img src={list?.image} alt='desc-data'/></div>
   
    <div className='card-desc'>
    <div className='name'>མཚན། : {list?.name}་</div>
   <div className='nameEng' style={{fontFamily:'monospace'}}>Name : {list?.nameEng}་</div>
   {list?.desc}</div>
    <div className='relLinks'>
        <button  className="button-54" >Downloads</button>
        <button  className="button-54" >Parkhang</button>
        <button  className="button-54" >Lopenling</button>
        <button  className="button-54" >BDRC</button>
        <button className="button-54" >Wikipedia</button>
    </div>
    </>

   ):(<div style={{display:'flex',gridColumn:'2/3',justifyContent:'center'}}>
     <ReactLoading type="spin" color="black" />
       </div> )
    }
  </div>
  )

}

export default Desc