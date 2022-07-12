import "./Card.css";
import { images } from './image';
import "./App.css";
import { useState } from 'react';


function App() {
  const [imgClick, setImgClick] = useState();

  return (
    <div className="App">
      <h1>Düsseldorf Sehenswürdigkeiten</h1>
      <div className="container">
        <img src={imgClick} alt="selected" className="selected"/>
      </div>
      <div className="imgBox">
        {images.map((item) => { 
        const{name, img} = item;
        return (
          <img src={img} onClick={() => setImgClick(img)} alt="duesseldorf" />
         )
        })};
      </div>


    
    </div>
  );
}

export default App;
