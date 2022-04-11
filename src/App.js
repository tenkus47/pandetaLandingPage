
import './App.css';
import Image1 from './img/1_guru.jpg';

function App() {
  return (
    <div className="App">
   
    <div class="heading">
        <h1>པན་གྲུབ་བཅུ་བདུན།</h1>
    </div>
     <hr/>
    <div class="pandetaList">
       <a href="data.html">
         <div class="card">
            <img src={Image1} class="card-img-top" alt="image1"/>
            <div class="card-body">
              <p class="card-text">སློབ་དཔོན་ཀླུ་སྒྲུབ།</p>
            </div>
          </div>
        </a>
</div>
    </div>
  );
}

export default App;
