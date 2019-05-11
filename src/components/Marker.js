import React,{Component} from 'react';

class Marker extends Component{
    render(){
        let classes = "marker";
        if(this.props.selected){
            classes+=" selected"
        }
        return(
            <div className={classes}>{this.props.harga}K</div>
        )
    }
}

export default Marker;