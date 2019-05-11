import React,{Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/app.scss';
import Homestays from './components/Homestays';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';

class App extends Component{

  constructor (props){
    super (props);
    this.state={
      homestays : [],
      selectedHomestay:null
    }
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/dekiakbar/f31eff6542920ceea46db42df1e6513f/raw/f2d6798cd8bb54d1064a38e85df3c82b93b713fa/homestay.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          homestays:data
        })
      })
  }

  selectHomestay = (homestay) => {
    this.setState({
      selectedHomestay : homestay
    })
  }

  render(){
    let center={
      lat:-7.180564,
      lng:106.4649628
    }

    if(this.state.selectedHomestay){
      center={
        lat:this.state.selectedHomestay.lat,
        lng:this.state.selectedHomestay.lng
      }
    }
    return (
      <div className="App">
        <div className="wrapper row">

          <div className="main col-6">
            <div className="homestays row">
              
              {this.state.homestays.map((homestay) => {
                return <Homestays key={homestay.id} homestay={homestay} selectHomestay={this.selectHomestay}/>
              })}

            </div>
          </div>

          <div className="map col-6">
              <GoogleMapReact center={center} zoom={16}>
                {
                  this.state.homestays.map((homestay) => {
                    return <Marker key={homestay.id} lat={homestay.lat} lng={homestay.lng} harga={homestay.harga} selected={homestay === this.state.selectedHomestay} />
                  })
                }
              </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
