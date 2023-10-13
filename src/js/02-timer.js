import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]'); 
startBtn.setAttribute('disabled', 'disabled');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let timerId = null;
let timeForClear;
let selectDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectDate = selectedDates[0].getTime(); 
      if (selectDate < options.defaultDate.getTime()) {
        // alert('Please choose a date in the future');
        Notify.failure('Please choose a date in the future');
        startBtn.setAttribute('disabled', 'disabled');
      }
      else{
        startBtn.removeAttribute('disabled');
      }
    },
  };

flatpickr('#datetime-picker', options);
startBtn.addEventListener('click', startCount);
function startCount(){
    const dateNow = new Date();
    timeForClear = selectDate - dateNow;
    console.log(timeForClear);
    timerId = setInterval(showTime, 1000);
    startBtn.setAttribute('disabled', 'disabled');
}
function showTime(){
    const leaveTime = selectDate - new Date().getTime();
    const time = convertMs(leaveTime);
    days.textContent = addLeadingZero(time.days.toString());
    hours.textContent = addLeadingZero(time.hours.toString());
    minutes.textContent = addLeadingZero(time.minutes.toString());
    seconds.textContent = addLeadingZero(time.seconds.toString());
    if(leaveTime < 1000){
        clearInterval(timerId);
    }
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24; 
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}
  
function addLeadingZero(value) {
  if (value.length < 2) {
    return value.padStart(2 ,'0');
  }
  else {
    return value;
  }
}