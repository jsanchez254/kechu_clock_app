import React, { Component } from 'react';

//IMPORT JS
import {doTimeru} from "../assets/JS/timer.js";
import {revertTimer} from "../assets/JS/timer.js";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";


library.add(faArrowAltCircleUp, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight);

class timer extends Component {
    state = {
        hour: "00",
        second: "00",
        minute: "00"
    }

    render() { 
        return ( 
            <React.Fragment>
                <div id = "displayOutputTimer">
                    <div className = "columns is-centered">
                        <div className = "column is-7">
                            <span id = "timeString">
                                00:00:00
                            </span>
                        </div>
                        <div className = "column is-1 is-offset-1">
                            <button  onClick = {()=>revertTimer()}className = "button is-warning is-large">CANCEL</button>
                        </div>
                    </div>
                </div>

                <div id = "displayInputTimer">
                    <div className  ="columns ">

                        <div className = "column is-3 is-offset-1">
                            <span  onClick = {this.props.onIncreaseHour} className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "red"/> 
                            </span>
                        </div>
                        <div className = "column is-3 ">
                        <span  onClick = {this.props.onIncreaseMin} className = "cursorAlarm">
                            <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "red"/>
                        </span>
                        </div>
    
                        <div className = "column is-3">
                        <span  onClick = {this.props.onIncreaseSec} className = "cursorAlarm">
                            <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "red"/>
                        </span>
                        </div>
                    </div>
                    <br/>
                    <div className = "columns ">
                        <div className = "column is-1">
                            <button onClick = {this.props.onBack} className = "button is-danger is-large">BACK</button>
                        </div>
                        <div className = "column is-3" id = "timer">{this.props.hour}:</div>
                        <div className = "column is-3" id = "timer">{this.props.minute}:</div>
                        <div className = "column is-3" id = "timer">{this.props.second}</div>
                        <div className = "column is-1">
                            <button onClick = {() =>doTimeru(this.props.hour, this.props.minute, this.props.second)} className = "button is-success is-large">ENTER</button>
                            
                        </div>
                    </div>

                    <div className  ="columns ">

                        <div className = "column is-3 is-offset-1">
                            <span  onClick = {this.props.onDecreaseHour} className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-down" size = "5x" color = "red"/> 
                            </span>
                        </div>

                        <div className = "column is-3 ">
                            <span  onClick = {this.props.onDecreaseMin} className = "cursorAlarm">
                                <FontAwesomeIcon  icon = "arrow-alt-circle-down" size = "5x" color = "red"/>
                            </span>
                        </div>

                        <div className = "column is-3">
                            <span  onClick = {this.props.onDecreaseSec} className = "cursorAlarm">
                                <FontAwesomeIcon  icon = "arrow-alt-circle-down" size = "5x" color = "red"/>
                            </span>
                        </div>
                    </div>
                </div>
                    
            </React.Fragment>
         );
    }
}
 
export default timer;