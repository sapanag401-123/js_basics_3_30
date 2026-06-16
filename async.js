//async-shorten ta, non blocking
//sync-blocking
console.log("start");
console.log("processing");
console.log("end");

//async-shorter ta, non blocking, start garna background ma rakna ani taslaii xodna ani arko laii run garna
//settimeout
//setTimeout(callback, timer_out,...args)

console.log("start");

setTimeout(() =>{
    console.log("processing");

},200);
console.log("processing");
console.log("end");

console.log("start");


//cancle garna xa vana
    const timer_id = setTimerout(()=>{

    console.log("processing");

},200);
console.log(timer_id);
//clearTimeout(timer_id);
console.log(timer_id);
console.log("processing");
console.log("end");


//arg
    const timer_id = setTimerout(
        (a,b) =>{

    console.log("processing", a, b);

},
200,
12,
123,
);
// console.log(timer_id);
// //clearTimeout(timer_id);
// console.log(timer_id);
// console.log("processing");
console.log("end");


//setTimerinner

//hh:mm:ss- countdown timer
//implement with code
//1:12:09
//formate ma time garnu 
//every time show garnuparyo

//callback function- implement with code