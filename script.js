const currentDate = new Date();
document.getElementById('submitButton').addEventListener('click',function(){
    const dateTimeValu = document.querySelector('.input').value;
    const targateDate = new Date(dateTimeValu);
const difference = currentDate-targateDate;
 function updateTime(){
    const currentTime = new Date();
    const difference  = targateDate-currentTime;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference %(1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference %(1000 * 60)) / 1000);
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("Minut").innerText = minutes
    document.getElementById("Second").innerText = seconds
    if(difference<0){
        clearInterval(interval)
        document.getElementById("timer").innerText = "Even is start now ";
    }
    
}
const interval = setInterval(updateTime,1000)
updateTime();
});



