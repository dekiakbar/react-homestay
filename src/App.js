import React,{Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/app.scss';
import Homestays from './components/Homestays';
class App extends Component{

  constructor (props){
    super (props);
    this.state={
      homestays : []
    }
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/dekiakbar/f31eff6542920ceea46db42df1e6513f/raw/06b0c3947dcc7820f1d956bfc3166a7df35f7dd9/homestay.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          homestays:data
        })
      })
  }

  render(){
    const homestay={
      "nama"  : "Hotel Maju Mundur",
      "fotoUrl" : "https://drive.google.com/uc?id=1Z16fbOIpI9H_JglsSJ1V8MNG6UloURlM",
      "harga" : 900
    }
    return (
      <div className="App">
        <div className="wrapper row">

          <div className="main col-7">
            <div className="homestays row">
              
              {this.state.homestays.map((homestay) => {
                return <Homestays key={homestay.id} homestay={homestay} />
              })}

            </div>
          </div>

          <div className="map col-5">
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
