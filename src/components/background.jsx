import React, { Component } from 'react';
import majoras from "../assets/images/majoras.jpg";

class background extends Component {
    state = {  }
    render() { 
        return ( 
        <div> 
            <img onClick = {()=>this.props.onTheme(this.props.id)} className  = "size" src = {this.props.img}/>
        </div>
         );
    }
}
 
export default background;