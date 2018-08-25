import React, { Component } from 'react';

    time = setInterval(getTime, 1000);	
    time = setInterval(getTime, 1000);
    function getTime(){
		var time = new Date();
		var hour = time.getHours();
		var sec =  time.getSeconds();
		var min = time.getMinutes();
		var zone = "PM";
		if(hour < 12){
			zone = "AM";
		}
		if(hour > 12){
			hour  = hour - 12;
		}
		if(hour < 10){
			hour = "0" + hour;
		}
		if(min < 10){
			min = "0" + min;
		}
		if(sec < 10){
			sec = "0" + sec;
        }
		document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + zone;
	}
	
class time extends Component {
    state = {  }
    render() { 
        return (
            <div id = "clock"></div>
          );
    }
}
 
export default time;
