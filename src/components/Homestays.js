import React,{Component} from 'react';
import Ratings from 'react-ratings-declarative';

class Homestays extends Component{
    handleClick= () =>{
        this.props.selectHomestay(this.props.homestay);
    }
    render(){
        const title = this.props.homestay.nama;
        const img = this.props.homestay.fotoUrl;
        const harga = `Rp. ${this.props.homestay.harga}K per Malam`
        return(
            <div className="col-4">
                <div className="card homestay" onMouseEnter={this.handleClick}>
                    <img className="card-img-top img-fluid" src={img} alt={title} />
                    <div className="card-body">
                        <div className="card-text">
                            <h6 className="homestay-title">{title}</h6>
                            <p className="homestay-price">{harga}</p>
                            <Ratings
                                rating={1}
                                widgetRatedColors="blue"
                                changeRating={5}
                                widgetDimensions="15px"
                                widgetSpacings="1px"
                            >
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                            </Ratings>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homestays;