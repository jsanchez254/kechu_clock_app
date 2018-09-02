import React, { Component } from 'react';
import Background from "./background";


class themes extends Component {
    render() { 
        return ( 
                <div className = "contenedor">
                    {/*<center><button className = "button is-primary is-outlined">&#x2191;</button></center>*/}
                    <br/>
                    {this.props.background.map(background =>
                        <Background onTheme = {this.props.onTheme} id = {background.id} key = {background.id} img = {background.img}/>)
                    }
                    <br/>
                    {/*<center><button className = "button is-primary is-outlined">&#x2193;</button></center>*/}
                </div>
          );
    }
}
 
export default themes;