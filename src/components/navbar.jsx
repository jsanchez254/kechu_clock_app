import React, { Component } from 'react';


import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faClock, faStopwatch, faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";


library.add(faImage, faClock, faStopwatch, faGlobeAmericas);

class navbar extends Component {
    render() { 
        return (
            <nav className = "navbar is-primary">
                <div className = "navbar-end">
                
                   {/*<div className = "navbar-item has-dropdown is-hoverable">
                        <div className = "navbar-link">
                            <FontAwesomeIcon icon = "globe-americas" size = "2x"/><span id = "underline"> ZONE</span>
                        </div>

                        <div className = "navbar-dropdown">
                            <a className = "navbar-item">
                                <h1 className = "is-size-6">PACIFIC TIME</h1>
                            </a>
                            <a className = "navbar-item">
                                <h1 className = "is-size-6">CENTRAL TIME</h1>
                            </a>
                        </div>
                    </div>*/}

                    <div className = "navbar-item" onClick = {this.props.onAlarm}>
                        <FontAwesomeIcon icon = "clock" size = "2x"/><span id = "underline">ALARM</span>
                    </div>

                    <div className = "navbar-item" onClick = {this.props.onTimer}>
                        <FontAwesomeIcon icon = "stopwatch" size = "2x" /><span id = "underline">TIMER</span>
                    </div>

                    <div className = "navbar-item has-dropdown is-hoverable" size = "2x" >
                        <div className = "navbar-link">
                            <FontAwesomeIcon icon = "image" size = "2x"/><span id = "underline">THEME</span>
                        </div>

                        <div className = "navbar-dropdown">
                            <a className = "navbar-item">
                                <h1 className = "is-size-6">ZELDA</h1>
                            </a>
                            <a className = "navbar-item">
                                <h1 className = "is-size-6">NATURE</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
          );
    }
}
 
export default navbar;