
import zora from "../sounds/zora.mp3";

var alarmSet = ""; //TIME ALARM IS SET TO
var activate = 0; //MAKE SURE ONLY ONE SOURCE IS CREATED IN DOM

export function alarma(){
        var time = document.getElementById("displayTime").style.display = "none";
        var time = document.getElementById("displayTimer").style.display = "none";
        var alarm = document.getElementById("displayAlarm").style.display = "block";
}

export function backTime(){
    var time = document.getElementById("displayTime").style.display = "block";
    var alarm = document.getElementById("displayAlarm").style.display = "none";
    var alarm = document.getElementById("displayTimer").style.display = "none";
}

//call check every second
export function alarmActivate(time){
    alarmSet = time;
    console.log(time);
    setInterval(check, 1000);
    activate = 0;
}

//check when alarm happens
function check(){
    var time  = new Date();
    var hour = time.getHours();
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
        
    var tiempo = hour + ":" + min + ":" + zone; 
    if(alarmSet === tiempo && activate === 0){
        activate = 1;
        play(zora);
    }
}

//ALARM PLAY
function play(src){
    var source = document.createElement("source");
    source.src = src;
    source.type = "audio/mpeg"
    var parent = document.getElementById("myAudio");
    parent.appendChild(source);
    parent.play();
}
