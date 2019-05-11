import React,{Component} from 'react';

class Homestays extends Component{

    render(){
        const title = `${this.props.homestay.nama} - Rp. ${this.props.homestay.harga}K`
        const img = this.props.homestay.fotoUrl;
        return(
            <div className="col-6">
                <div className="card homestay">
                    <img className="card-img-top" src={img} alt={title} />
                    <div className="card-body">
                        <h6 className="card-title">
                            {title}
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homestays;