const endDate = "18 May 2025 12:00 AM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

// const clock = ()=> { // arrow function

// }


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end);
    // console.log(now);
    const diff = (end - now) / 1000;

    if(diff<0) return; // if time is reached then time cant go to minus

    // console.log(diff);
    inputs[0].value = Math.floor(diff  / 3600 / 24);     // Convert into days
    inputs[1].value = Math.floor(diff/3600)%24 ; // convert into hours
    inputs[2].value = Math.floor(diff/60) % 60 ; // convert into Minutes
    inputs[3].value = Math.floor(diff) % 60 ; // convert into Seconds

}

// initial call

clock();

setInterval(
    ()=>{
        clock();
    }, 
    1000
)