export function alarma(){
        var time = document.getElementById("displayTime").style.display = "none";
        var alarm = document.getElementById("displayAlarm").style.display = "block";
}

export function backTime(){
    var time = document.getElementById("displayTime").style.display = "block";
    var alarm = document.getElementById("displayAlarm").style.display = "none";
}

