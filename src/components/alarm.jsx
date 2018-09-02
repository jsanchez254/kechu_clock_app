import React, { Component } from 'react';

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";


library.add(faArrowAltCircleUp, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight);

class alarm extends Component {
    state = {
        time:"",
    };

    //WILL GET RIGHT TIME
    time = () =>{
        this.state.time = this.props.hour + ":" + this.props.min + ":" + this.props.tiempo;
        this.props.onActivate(this.state.time);
    }    

    render() { 
        return ( 
            <React.Fragment>
                    <div className  ="columns">

                        <div className = "column is-3 is-offset-1">
                            <span  onClick = {this.props.onIncreaseHrs} className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "yellow"/> 
                            </span>
                        </div>
                        <div className = "column is-3 ">
                        <span onClick = {this.props.onIncreaseMin} className = "cursorAlarm">
                            <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "yellow"/>
                        </span>
                        </div>
    
                        <div className = "column is-3">
                        <span onClick = {this.props.onTime} className = "cursorAlarm">
                            <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "yellow"/>
                        </span>
                        </div>
                    </div>
                    <br/>
                    <div className = "columns">
                        <div className = "column is-1">
                            <button onClick = {this.props.onBack}className = "button is-warning is-large">BACK</button>
                        </div>
                        <div className = "column is-3" id = "alarm">{this.props.hour}:</div>
                        <div className = "column is-3" id = "alarm">{this.props.min}:</div>
                        <div className = "column is-3" id = "alarm">{this.props.tiempo}</div>
                        <div className = "column is-1">
                            <button onClick = {this.time}className = "button is-success is-large">ENTER</button>
                        </div>
                    </div>

                    <div className  ="columns">

                        <div className = "column is-3 is-offset-1">
                            <span onClick = {this.props.onDecreaseHrs} className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-down" size = "5x" color = "yellow"/> 
                            </span>
                        </div>

                        <div className = "column is-3 ">
                            <span onClick = {this.props.onDecreaseMin} className = "cursorAlarm">
                                <FontAwesomeIcon  icon = "arrow-alt-circle-down" size = "5x" color = "yellow"/>
                            </span>
                        </div>

                        <div className = "column is-3">
                            <span onClick = {this.props.onTime} className = "cursorAlarm">
                                <FontAwesomeIcon  icon = "arrow-alt-circle-down" size = "5x" color = "yellow"/>
                            </span>
                        </div>
                    </div>

                    
            </React.Fragment>
         );
    }
}
 
export default alarm;