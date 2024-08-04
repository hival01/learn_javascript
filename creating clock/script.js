const button = document.getElementById('stop');
const button1 = document.getElementById('resume');

button.addEventListener('click',()=>{
    clearInterval(interval);
})
button1.addEventListener('click',()=>{
    interval = setInterval(showTime , 1000);
})

function showTime(){
    const currentDate = new Date();
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    document.getElementById('time').innerText = time;
}


