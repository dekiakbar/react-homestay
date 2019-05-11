import React,{Component} from 'react';

class Navbar extends Component{
    handleInput = (e) =>{
        this.props.handleSearch(e.target.value);
    }
    render(){
       return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Homestay</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="show-navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="show-navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <div className="form-inline">
                            <div className="input-group">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.handleInput} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
       )
   }
}

export default Navbar;