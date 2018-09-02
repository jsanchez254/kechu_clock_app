import React, { Component } from 'react';

//IMPORT JAVASCRIPT
import {changeBackground} from "./assets/JS/background.js";
import {alarma} from "./assets/JS/alarm.js";
import {backTime} from "./assets/JS/alarm.js";
import {alarmActivate} from "./assets/JS/alarm.js";
import {timeru} from "./assets/JS/timer.js";

//COMPONENTS IMPORTS
import Navbar from "./components/navbar";
import Themes from "./components/themes";
import Time from "./components/time";
import Alarm from "./components/alarm";
import Timer from "./components/timer";

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
        ],
        //ALARM VARUABLES
        hour: "00",
        minute: "00",
        time: "AM",
        //TIMER VARUABLES
        TimerHour: "00",
        TimerMinute: "00",
        TimerSecond: "00"
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

    //WILL HANDLE DISPLAY OF ALARM
    handleAlarm = () =>{
        alarma();
    }

    //WILL HANDLE DISPLAY OF TIMER
    handleTimer = () =>{
        timeru();
    }

    //HANDLES BACK TO CLOCK FROM ALARM
    handleBackToTime = () =>{
        backTime();
    }

///////////////////ALARM!!!//////////////////////////////////////
    //HANDLE INCREASE OF ALARM BUTTONS -- HOUR
    handleIncreaseHour =() =>{
        if(this.state.hour < 12){
            this.state.hour++;
            if(this.state.hour < 10){
                this.state.hour = "0" + this.state.hour;
            }
        }
        else if(this.state.hour === 12){
            this.state.hour = "00";
        }
        this.setState({hour: this.state.hour});
    }

    //HANDLE INCREASE OF ALARM BUTTONS -- MINUTE
    handleIncreaseMin =() =>{
        if(this.state.minute < 59){
            this.state.minute++;
            if(this.state.minute < 10){
                this.state.minute = "0" + this.state.minute;
            }
        }
        else if(this.state.minute === 59){
            this.state.minute = "00";
        }
        this.setState({minute: this.state.minute});
    }

    //HANDLE DECREASE HOUR
    handleDecreaseHour =()=>{
        if(this.state.hour > 0){
            this.state.hour--;
            if(this.state.hour < 10){
                this.state.hour = "0" + this.state.hour;
            }
        }
        else if(this.state.hour === "00"){
            this.state.hour = 12;
        }
        this.setState({hour: this.state.hour});
    }

    //HANDLE DECREASE MINUTE
    handleDecreaseMin =()=>{
        if(this.state.minute > 0){
            this.state.minute--;
            if(this.state.minute < 10){
                this.state.minute = "0" + this.state.minute;
            }
        }
        else if(this.state.minute === "00"){
            this.state.minute = 59;
        }
        this.setState({minute: this.state.minute});
    }

////////////////TIMER!!//////////////////////////////////////

    //HANDLE TIMER HOUR
    handleTimerHourIn = () =>{
        if(this.state.TimerHour < 48){
            this.state.TimerHour++;
            if(this.state.TimerHour < 10){
                this.state.TimerHour = "0" + this.state.TimerHour;
            }
        }
        else{
            this.state.TimerHour = "00";
        }
        this.setState({TimerHour: this.state.TimerHour})
    }

    //HANDLE TIMER MINUTE
    handleTimerMinuteIn = () =>{
        if(this.state.TimerMinute < 59){
            this.state.TimerMinute++;
            if(this.state.TimerMinute < 10){
                this.state.TimerMinute = "0" + this.state.TimerMinute;
            }
        }
        else{
            this.state.TimerMinute = "00";
        }
        this.setState({TimerMinute: this.state.TimerMinute})
    }

    //HANDLE TIMER SECOND
    handleTimerSecondIn = () =>{
        if(this.state.TimerSecond < 59){
            this.state.TimerSecond++;
            if(this.state.TimerSecond < 10){
                this.state.TimerSecond = "0" + this.state.TimerSecond;
            }
        }
        else{
            this.state.TimerSecond = "00";
        }
        this.setState({TimerSecond: this.state.TimerSecond})
    }

    //HANDLE TIMER HOUR DECREASE
    handleTimerHourDe = () =>{
        if(this.state.TimerHour > 0){
            this.state.TimerHour--;
            if(this.state.TimerHour < 10){
                this.state.TimerHour = "0" + this.state.TimerHour;
            }
        }
        else if(this.state.TimerHour === "00"){
            this.state.TimerHour = 48;
        }
        this.setState({TimerHour: this.state.TimerHour})
    }

    //HANDLE TIMER HOUR DECREASE
    handleTimerMinuteDe = () =>{
        if(this.state.TimerMinute > 0){
            this.state.TimerMinute--;
            if(this.state.TimerMinute < 10){
                this.state.TimerMinute = "0" + this.state.TimerMinute;
            }
        }
        else if(this.state.TimerMinute === "00"){
            this.state.TimerMinute = 59;
        }
        this.setState({TimerMinute: this.state.TimerMinute})
    }

    //HANDLE TIMER HOUR DECREASE
    handleTimerSecondDe = () =>{
        if(this.state.TimerSecond > 0){
            this.state.TimerSecond--;
            if(this.state.TimerSecond < 10){
                this.state.TimerSecond = "0" + this.state.TimerSecond;
            }
        }
        else if(this.state.TimerSecond === "00"){
            this.state.TimerSecond = 59;
        }
        this.setState({TimerSecond: this.state.TimerSecond})
    }

/////////////////////////////////////////////////////////////
    //HANDLE ALARM ACTIVATE
    handleAlarmActivate =(time)=>{
        alarmActivate(time);
    }

    //HANDLE TIME
    handleTime = () =>{
        if(this.state.time === "AM"){
            this.state.time = "PM";
        }
        else{
            this.state.time = "AM";
        }
        this.setState({time: this.state.time});
    }

    styles  = {
     backgroundImage: "url(" + majoras + ")"
    };

    render() { 
        return ( 
            <React.Fragment>
                <Navbar onTimer = {this.handleTimer} onAlarm = {this.handleAlarm}></Navbar>
                <section style={this.styles} className = "section is-medium is-flexible" id = "caca">
                    <div className = "columns">
                        <div className = "column is-10">
                            <div id = "displayTime">
                                <Time></Time>
                            </div>
                            <div id = "displayAlarm">
                                <Alarm onIncreaseMin = {this.handleIncreaseMin} onIncreaseHrs = {this.handleIncreaseHour} min = {this.state.minute} 
                                onDecreaseHrs = {this.handleDecreaseHour} onDecreaseMin = {this.handleDecreaseMin} onActivate = {this.handleAlarmActivate} 
                                 onTime = {this.handleTime} hour = {this.state.hour} onBack = {this.handleBackToTime} tiempo = {this.state.time}></Alarm>
                            </div>
                            <div id = "displayTimer">
                                <Timer hour = {this.state.TimerHour} second = {this.state.TimerSecond} minute = {this.state.TimerMinute} 
                                onBack = {this.handleBackToTime} TimerHour = {this.state.TimerHour}
                                 TimerMinuto = {this.state.TimerMinute} onDecreaseHour = {this.handleTimerHourDe}
                                 onIncreaseHour = {this.handleTimerHourIn} onIncreaseMin = {this.handleTimerMinuteIn}
                                 onDecreaseMin = {this.handleTimerMinuteDe} onIncreaseSec = {this.handleTimerSecondIn}
                                 onDecreaseSec = {this.handleTimerSecondDe}
                                TimerSecond = {this.TimerSecond}
                                >
                                </Timer>
                            </div>
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