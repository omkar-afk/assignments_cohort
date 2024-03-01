

let d = new Date;
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();

function change_time(){
    second++;
    if(second===60){
        minute++;
        second=0;
    }
    if(minute===60){
        hour++;
        minute =0
    }
    if(hour ===24){
        hour = 0;
    }
    console.log(`${hour}:${minute}:${second}`)
}



setInterval(change_time,1000)