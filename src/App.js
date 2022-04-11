
import './App.css';
import {connect} from 'react-redux'
import Index from './component'
import {changeSelection} from "./helper/myAction.js"
function App() {
  return (
    <div className="App">
     <Index/>
    </div>
  );
}

const mapStateToProps= state=>{
  return {
    list:state.list
  }
}

const mapDispatchToProps= dispatch=>{
  return {
    changeSelection: ()=>dispatch(changeSelection())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
