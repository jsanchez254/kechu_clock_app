import React, { Component } from 'react';

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";


library.add(faArrowAltCircleUp, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight);

class alarm extends Component {
    blah(){

    }
    render() { 
        return ( 
            <React.Fragment>
                    <div className  ="columns">

                        <div className = "column is-2 is-offset-2">
                            <span className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "white"/> 
                            </span>
                        </div>
                        <div className = "column is-2 ">
                        <span className = "cursorAlarm">
                            <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "white"/>
                        </span>
                        </div>
                        <div className = "column is-2 ">
                        <span className = "cursorAlarm">
                            <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "white"/>
                        </span>
                        </div>
                        <div className = "column is-2">
                        <span className = "cursorAlarm">
                            <FontAwesomeIcon icon = "arrow-alt-circle-up" size = "5x" color = "white"/>
                        </span>
                        </div>
                    </div>
                
                    <div className = "columns">
                        <div className = "column is-2">
                            <button onClick = {this.props.onBack}className = "button is-warning is-large">BACK</button>
                        </div>
                        <div className = "column is-2" id = "alarm">00:</div>
                        <div className = "column is-2" id = "alarm">00:</div>
                        <div className = "column is-2" id = "alarm">00:</div>
                        <div className = "column is-2" id = "alarm">AM</div>
                        <div className = "column is-2">
                            <button className = "button is-success is-large">ENTER</button>
                        </div>
                    </div>

                    
                    <div className  ="columns">

                        <div className = "column is-2 is-offset-2">
                            <span className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-down" size = "5x" color = "white"/> 
                            </span>
                        </div>

                        <div className = "column is-2 ">
                            <span className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-down" size = "5x" color = "white"/>
                            </span>
                        </div>

                        <div className = "column is-2 ">
                            <span className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-down" size = "5x" color = "white"/>
                            </span>
                        </div>

                        <div className = "column is-2">
                            <span className = "cursorAlarm">
                                <FontAwesomeIcon icon = "arrow-alt-circle-down" size = "5x" color = "white"/>
                            </span>
                        </div>
                    </div>

                    
            </React.Fragment>
         );
    }
}
 
export default alarm;