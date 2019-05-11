import React,{Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/app.scss';
import Homestays from './components/Homestays';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';
import Navbar from './components/Navbar';
class App extends Component{

  constructor (props){
    super (props);
    this.state={
      homestays : [],
      selectedHomestay:null,
      allHomestays:[],
      search:""
    }
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/dekiakbar/fake-json/master/homestays.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          homestays:data,
          allHomestays:data
        })
      })
  }

  selectHomestay = (homestay) => {
    this.setState({
      selectedHomestay : homestay
    })
  }

  handleSearch = (e) =>{
    this.setState({
      homestays: this.state.allHomestays.filter((homestay) =>
        new RegExp(e,"i").exec(homestay.nama)
      )
    });
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
        <Navbar handleSearch={this.handleSearch} />
        <div className="wrapper row">

          <div className="main col-8">
            <div className="homestays row">
              
              {this.state.homestays.map((homestay) => {
                return <Homestays key={homestay.id} homestay={homestay} selectHomestay={this.selectHomestay}/>
              })}

            </div>
          </div>

          <div className="col-4">
              <div className="map">
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
      </div>
    );
  }
}

export default App;
