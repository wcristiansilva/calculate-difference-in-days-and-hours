const inputDate1 = document.querySelector('#date1');
const inputHour1 = document.querySelector('#hour1');
const moment2Date = document.querySelector('#date2');
const moment2Hour = document.querySelector('#hour2');
const btn = document.querySelector('.button');
const result = document.querySelector('#result');

// Added day and time at moment of load page
const actualDate = new Date();
const newActualDate = actualDate.toISOString().slice(0, 10); // convert to ISO string and get only the date

moment2Date.value = newActualDate;
// convert to string and added 0 before the minutes if minutes < 10
moment2Hour.value = actualDate.getHours() + ':' + actualDate.getMinutes().toString().padStart(2, '0'); 

// Function to calculate difference in days and hours between two dates and hours not counting leap years
calculateDiffInDays = () => {

    let newMoment1Date = new Date(inputDate1.value + ' ' + inputHour1.value);
    let newMoment2Date = new Date(moment2Date.value + ' ' + moment2Hour.value);

    if (newMoment2Date.getTime() > newMoment1Date.getTime()) {

        let diffInYears = Math.floor((newMoment2Date.getTime() - newMoment1Date.getTime()) / (1000 * 60 * 60 * 24 * 365));
        let diffInDMonth = Math.floor((newMoment2Date.getTime() - newMoment1Date.getTime()) / (1000 * 60 * 60 * 24 * 30));
        let diffInDays = Math.floor((newMoment2Date.getTime() - newMoment1Date.getTime()) / (1000 * 60 * 60 * 24));
        let diffInHours = Math.floor((newMoment2Date.getTime() - newMoment1Date.getTime()) / (1000 * 60 * 60));
        let diffInMinutes = Math.floor((newMoment2Date.getTime() - newMoment1Date.getTime()) / (1000 * 60));
        
        return `${diffInYears} anos, ${diffInDMonth} meses, ${diffInDays} dias, ${diffInHours} horas e ${diffInMinutes} minutos`

    } else {

        let diffInYears = Math.floor((newMoment1Date.getTime() - newMoment2Date.getTime()) / (1000 * 60 * 60 * 24 * 365));
        let diffInDMonth = Math.floor((newMoment1Date.getTime() - newMoment2Date.getTime()) / (1000 * 60 * 60 * 24 * 30));
        let diffInDays = Math.floor((newMoment1Date.getTime() - newMoment2Date.getTime()) / (1000 * 60 * 60 * 24));
        let diffInHours = Math.floor((newMoment1Date.getTime() - newMoment2Date.getTime()) / (1000 * 60 * 60));
        let diffInMinutes = Math.floor((newMoment1Date.getTime() - newMoment2Date.getTime()) / (1000 * 60));
        
        return `${diffInYears} anos, ${diffInDMonth} meses, ${diffInDays} dias, ${diffInHours} horas e ${diffInMinutes} minutos`
    }    
}

// Event listener 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const diffInDays = calculateDiffInDays();

    // Show result
    result.innerHTML = diffInDays;
});