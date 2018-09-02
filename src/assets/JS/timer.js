var hour, minute, second;
var interval;
export function timeru(){
    var time = document.getElementById("displayTime").style.display = "none";
    var time = document.getElementById("displayTimer").style.display = "block";
    var alarm = document.getElementById("displayAlarm").style.display = "none";
}

export function revertTimer(){
    var hello = document.getElementById("displayInputTimer").style.display = "block";
    var hello1 = document.getElementById("displayOutputTimer").style.display = "none";
    clearInterval(interval);
}

export function doTimeru(hour1, minute1, second1){
    var hello = document.getElementById("displayInputTimer").style.display = "none";
    var hello1 = document.getElementById("displayOutputTimer").style.display = "block";
    hour = hour1;
    minute = minute1;
    second = second1;
    console.log(hour, minute, second);
   interval =  setInterval(doTimer, "1000");
}

function doTimer(){
    var ishour = false;
    if(second == "00"){
        if(minute > 0){
            minute-=1;
            if(minute < 10){
                minute = "0" + minute;
            }
        }
        second = 60;
        if(minute === "00"){
            if(hour > 0){
                hour-=1;
                ishour = true;
                if(hour < 10){
                    hour = "0" + hour;
                }
            }
            if(ishour){
                minute = 59;
            }
        }
    }
    second-=1;
    if(second < 10){
        second = "0" + second
    }
    document.getElementById("timeString").innerHTML = hour + ":" + minute + ":" + second;
    if(hour === "00" && minute === "00" && second === "00"){
        document.getElementById("timeString").innerHTML = "DONE BITCH!";
        clearInterval(interval);
    }

}