import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/app.scss';
import Homestays from './components/Homestays';
function App() {
  return (
    <div className="App">
      <div className="wrapper row">
        <div className="main col-6">
          <div className="homestays">
            <Homestays/>
          </div>
        </div>

        <div className="map col-6">
        
        </div>
      </div>
    </div>
  );
}

export default App;
