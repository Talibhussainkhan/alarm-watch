let clock = document.getElementById("clock");
let alarmTime = document.getElementById("alarm-time");
let alarmSet = null;
let alarmAudio = document.getElementById("alarm-audio");
let alarmBtn = document.getElementById("alarm-btn");

function updateClock (){
    clock.innerText= moment().format(' h:mm:ss a');
    if(alarmSet === clock.innerText){
        triggeredAlarm();
        alarmBtn.disabled = false;
    }
}
function setAlarm  (){
    alarmSet = moment(alarmTime.value, "HH:mm:ss").format("hh:mm:ss A").toLowerCase().slice(1);
    alarmTime.value = ""
}
function  triggeredAlarm(){
alarmAudio.play();
}
function muteAlarm(){
    alarmAudio.muted = true;
}

setInterval(updateClock, 1000)


