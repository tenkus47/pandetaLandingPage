import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { scroller } from "react-scroll";
import LazyLoad from 'react-lazy-load';
import '../style/index.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
function ListOfPan() {

    
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])


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
 data.map((list,index)=>     
           <LazyLoad offsetVertical={300} key={index}> 
            <div className="card" data-aos={index%2===0?"fade-right":"fade-left"} key={list.id} onClick={()=>handleClick(list)}>
               
                  <img src={list.image}  alt="image1"/>
             
               <div className="card-body">
                 <p className="card-text" >{list.name}</p>
               </div>
             </div>
             </LazyLoad>
        )
    }
   </div>
  )
}

export default ListOfPan