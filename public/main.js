// Elements
const dayIn = document.getElementById('dayIn');
const monthIn = document.getElementById('monthIn');
const yearIn = document.getElementById('yearIn');

const inputFields = [dayIn, monthIn, yearIn];

const dayOut = document.getElementById('dayOut');
const monthOut = document.getElementById('monthOut');
const yearOut = document.getElementById('yearOut');

const calculateBtn = document.getElementById('calculateBtn');
const message = document.getElementById('message');

// Calculate Button
calculateBtn.addEventListener('click', () => {

    // Check if input is empty
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value == '') {
            inputFields[i].classList.add('border-red');
            showMessage('This field is required');
            return;
        } else {
            inputFields[i].classList.remove('border-red');
            showMessage('');
        }
    }

    const d = parseInt(dayIn.value);
    const m = parseInt(monthIn.value);
    const y = parseInt(yearIn.value);
    const birthDate = new Date(y, m, d);
    
    const currentDate = new Date();

    // Validate given birthdate
    if (!isDateInPast(birthDate, currentDate)){
        showMessage('Date must be in the past');
        return;
    } else {
        showMessage('');
    }

    if (!isValidDate(birthDate, currentDate)){
        showMessage('Date is not valid');
        return;
    } else {
        showMessage('');
    }

    // Age Calculation
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - (birthDate.getMonth() - 1);
    let days = currentDate.getDate() - birthDate.getDate();
    
    // Adjust for negative months or days
    if (months < 0 || (months === 0 && days < 0)) {
        years = years - 1;
        months = months + 12;
    }
    if (days < 0) {
        months--;
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += lastDayOfMonth;
    }

    // Display Values
    dayOut.innerText = days;
    monthOut.innerText = months;
    yearOut.innerText = years;
});

const isDateInPast = (date, currentDate) => {
    if (date - currentDate < 0) {
        return true;
    } else {
        showMessage('');
        return false;
    };
}

const isValidDate = (date) => {
    if (date.getDate() < new Date(date.getFullYear(), date.getMonth(), 0).getDate()) {
        return true;
    } else {
        return false;
    }
}

// Display Message
function showMessage(msg) {
    message.innerText = msg;
}