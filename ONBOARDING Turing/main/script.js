document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
    
});

function generateCalendar() {
    const calendarDates = document.getElementById('calendarDates');
    const currentDate = 30;
    
    const calendarData = [
        [null, null, null, 24, 25, 26, 27, 28, 1, 2],
        [3, 4, 5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14, 15, 16],
        [17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30],
        [31, 1, 2, 3, 4, 5, 6]
    ];
    
        calendarDates.innerHTML = '';
    
    
    calendarData.forEach((week, weekIndex) => {
        week.forEach((day, dayIndex) => {
            if (day === null) return;
            
            const dateElement = document.createElement('div');
            dateElement.classList.add('date');
            dateElement.textContent = day;
            
            if (day === currentDate) {
                dateElement.classList.add('current-date');
            }
            

            if ((weekIndex === 0 && day > 20) || (weekIndex === 5 && day < 10)) {
                dateElement.classList.add('prev-month');
            }
            
            calendarDates.appendChild(dateElement);
        });
    });
}

