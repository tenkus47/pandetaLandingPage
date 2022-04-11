import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { scroller } from "react-scroll";
import LazyLoad from 'react-lazy-load';
import '../style/index.css'
function ListOfPan() {
const dispatch=useDispatch();
const scrollToSection = () => {
    scroller.scrollTo("root", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

function handleClick(list){
   dispatch({type:"changeSelection",data:list})
   scrollToSection()
}
const data=useSelector(data=>data.List)

  return (
    <div className="pandetaList" >  
{
 data.map(list=>      
            <div className="card" key={list.id} onClick={()=>handleClick(list)}>
                <LazyLoad offsetVertical={300}>
                  <img src={list.image} alt="image1"/>
               </LazyLoad>
               <div className="card-body">
                 <p className="card-text" >{list.name}</p>
               </div>
             </div>
        )
    }
   </div>
  )
}

export default ListOfPan