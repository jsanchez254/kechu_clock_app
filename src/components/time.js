import React, { Component } from 'react';	

setInterval(getTime, 1000);
export function getTime(){
		var alarm;
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
		var time = document.getElementById("clock"); 
		time.innerHTML = hour + ":" + min + ":" + sec + zone;
	}
	
class time extends Component {
    render() { 
        return (
            <div id = "clock"></div>
          );
    }
}
 
export default time;
