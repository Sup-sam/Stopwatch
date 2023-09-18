let display = document.getElementById("displayTime");

let [seconds , minutes , hours] = [0, 0 ,0];

let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
//3 lines below is for make th numbers like 00 00 00 not just 0 0 0
    let hour = hours < 10 ? "0" + hours : hours;
    let minute = minutes < 10 ? "0" + minutes : minutes;
    let second = seconds < 10 ? "0" + seconds : seconds;


    // display.innerHTML = hours + ":" + minutes + ":"+ seconds ; i comment this and replace it with a variable up to see 00 00 00
    display.innerHTML = hour + ":" + minute + ":"+ second ;
}
function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}

function watchPause(){
    clearInterval(timer);
}

function watchReload(){
    clearInterval(timer);
    [seconds , minutes , hours] = [0, 0 ,0];
    display.innerHTML = "00:00:00";
}