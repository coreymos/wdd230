document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamicCalendar');
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    container.innerHTML = createCalendar(month, year);
});

function createCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    let calendarHTML = `<div class="calendar">
                           <div class="month">${getMonthName(month)} ${year}</div>
                           <div class="weekdays">
                             <div>Sun</div><div>Mon</div><div>Tue</div>
                             <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                           </div>
                           <div class="days">`;

    // Empty cells for days of the week before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHTML += `<div class="empty"></div>`;
    }

    // Filling in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarHTML += `<div>${day}</div>`;
    }

    calendarHTML += `</div></div>`;
    return calendarHTML;
}

function getMonthName(monthIndex) {
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}
