//============= RESPONSIVE CONTENTS ============

var isMobile;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
} else {
    isMobile = false;
}

const yellowBox = document.getElementById('yellowBox');
const otherYellowBoxLoc = document.getElementById('refMobileYellowBox');
const gridHome = document.getElementById('gridHome');
const circleBanner3 = document.getElementById('circleBanner3');

if (isMobile) {
    if (/iPhone|Android/i.test(navigator.userAgent)) {
        otherYellowBoxLoc.classList.add('yellowBox');
        yellowBox.classList.remove('yellowBox');

        otherYellowBoxLoc.innerHTML = `<div class="bigCircle"></div>`;
    } else if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase())) {
        yellowBox.innerHTML = `
        <div class="bigCircle"></div>
        <div class="smallCircle"></div>
        `;
    }

    gridHome.innerHTML = `
    <h1 class="gridTitle">Chicago’s <span>Free</span> Medical Check-Up and Weight Loss Consultation</h1>

    <p class="boxGridSubtitle">Only <span>11</span> spots available!</p>

    <div class="gridBox">
        <p class="boxGridText">Your offer ends in:</p>

        <div class="row">
            <div class="col">
                <p class="boxGridTextDate">DAYS</p>
                <p class="boxGridNumberTextDate" id="days">00</p>
            </div>

            <div class="col">
                <p class="boxGridTextDate">HOURS</p>
                <p class="boxGridNumberTextDate" id="hours">16</p>
            </div>

            <div class="col">
                <p class="boxGridTextDate">MINUTES</p>
                <p class="boxGridNumberTextDate" id="minutes">29</p>
            </div>

            <div class="col">
                <p class="boxGridTextDate">SECONDS</p>
                <p class="boxGridNumberTextDate" id="seconds">27</p>
            </div>
        </div>
    </div>

    <p class="gridText">Limited spots available due to the Physicians schedule and the high demand for service. No credit card or insurance required.</p>

    <div style="text-align: center;">
        <button class="buttonAppointment">Book my appointment</button>
    </div>
    `;

    circleBanner3.classList.add('circleBanner3');

    document.getElementById('btnBanner3').innerHTML = 'See patient stories';
}
//==============================================

//================= BOOK MY APPOINTMENT BUTTON ====================
const buttonsAppointment = document.getElementsByClassName('buttonAppointment');

for (let i = 0; i < buttonsAppointment.length; i++) {
    buttonsAppointment[i].addEventListener('click', () => {

        if (buttonsAppointment[i].textContent === 'See patient stories') {
            alert('Patient stories page');
        } else {
            alert('Booking page');
        }
    });
}
//=================================================================

//============= CHEVRON BUTTON ANIMATION FUNCTION ==================
const chevronButtons = document.getElementsByClassName('chevronBanner5');
var isChevronClick = new Array(chevronButtons.length).fill(false);

for (let i = 0; i < chevronButtons.length; i++) {
    chevronButtons[i].addEventListener('click', () => {
        isChevronClick[i] = !isChevronClick[i];

        if (isChevronClick[i]) {
            chevronButtons[i].classList.remove('chevronBanner5NoActive');
            chevronButtons[i].classList.add('chevronBanner5Active');
        } else {
            chevronButtons[i].classList.remove('chevronBanner5Active');
            chevronButtons[i].classList.add('chevronBanner5NoActive');
        }
    });
}
//=================================================================

//=================== TIME COUNTER FUNCTION ======================
const date = new Date("Aug 31, 2022 23:59:59 GMT-03:00").getTime();

const timeCounter = () => {
    const now = new Date().getTime();
    const timeleft = date - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('hours').innerHTML = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('minutes').innerHTML = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('seconds').innerHTML = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

setInterval(timeCounter, 1000);
//================================================================