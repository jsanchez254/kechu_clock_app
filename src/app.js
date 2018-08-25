import React, { Component } from 'react';

//IMPORT JAVASCRIPT
import {changeBackground} from "./assets/JS/background.js";

//COMPONENTS IMPORTS
import Navbar from "./components/navbar"
import Themes from "./components/themes"
import Time from "./components/time"

//CSS IMPORTS
import 'bulma/css/bulma.css';
import "./assets/CSS/navbar.css";
import "./assets/CSS/background.css";
import "./assets/CSS/clock.css";

//IMAGE IMPORTS
import majoras from "./assets/images/majoras.jpg";
import nature1 from "./assets/images/nature1.jpg";
import nature from "./assets/images/nature.jpg";
import salamance from "./assets/images/salamance.jpg";
import zelda from "./assets/images/zelda.jpg";

class App extends Component {
    state = {
        backgrounds: [
            {id: 0, img: majoras},
            {id: 1, img: nature1},
            {id: 2, img: nature},
            {id: 3, img: salamance},
            {id: 4, img: zelda}
        ]
      };
    
    //WILL CHANGE THEME 
    handleTheme = (id) =>{
        var img;
        if(id === 0){
            img = majoras;
        }
        if(id === 1){
            img = nature1;
        }
        if(id === 2){
            img = nature;
        }
        if(id === 3){
            img = salamance;
        }
        if(id === 4){
            img = zelda;
        }
       changeBackground(img);
    }

    styles  = {
     backgroundImage: "url(" + majoras + ")"
    };

    render() { 
        return ( 
            <React.Fragment>
                <Navbar></Navbar>
                <section style={this.styles} className = "section is-medium is-flexible" id = "caca">
                    <div className = "columns">
                        <div className = "column is-10">
                            <Time></Time>
                        </div>
                        <div className = "column is-2">
                            <centered><Themes onTheme = {this.handleTheme} background = {this.state.backgrounds}></Themes></centered>
                        </div>
                    </div>
                </section>
            </React.Fragment>
         );
    }
}
 
export default App;