import React, { Component } from 'react';

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faClock, faStopwatch, faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";


library.add(faImage, faClock, faStopwatch, faGlobeAmericas);

class navbar extends Component {
    render() { 
        return (
            <nav className = "navbar is-success">
                <div className = "navbar-start">

                    <div className = "navbar-item" size = "2x" >
                    <FontAwesomeIcon icon = "image" size = "2x"/><span id = "underline">THEME</span>
                    </div>
                
                    <div className = "navbar-item">
                    <FontAwesomeIcon icon = "globe-americas" size = "2x"/><span id = "underline"> ZONE</span>
                    </div>

                    <div className = "navbar-item">
                    <FontAwesomeIcon icon = "stopwatch" size = "2x" /><span id = "underline">TIMER</span>
                    </div>

                    <div className = "navbar-item">
                    <FontAwesomeIcon icon = "clock" size = "2x"/><span id = "underline">ALARM</span>
                    </div>
                </div>
            </nav>
          );
    }
}
 
export default navbar;