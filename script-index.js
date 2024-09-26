document.addEventListener('DOMContentLoaded', () => {
    const upcomingClassesContainer = document.getElementById('upcomingClasses');

    // Load existing timetable from local storage
    let timetable = JSON.parse(localStorage.getItem('timetable')) || [];

    // Function to display the next classes based on current time
    function displayUpcomingClasses() {
        const now = new Date();
        const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        const upcomingClasses = timetable.filter(classInfo => {
            const [startHour, startMinute] = classInfo.startTime.split(':').map(Number);
            return classInfo.dayOfWeek === currentDay &&
                (startHour > currentHour || (startHour === currentHour && startMinute > currentMinute));
        });

        upcomingClasses.sort((a, b) => new Date(`1970-01-01T${a.startTime}:00`) - new Date(`1970-01-01T${b.startTime}:00`));

        upcomingClassesContainer.innerHTML = '';
        upcomingClasses.forEach(classInfo => {
            const listItem = document.createElement('li');
            listItem.textContent = `${classInfo.subject} in ${classInfo.classroom} with ${classInfo.teacher} at ${classInfo.startTime}`;
            upcomingClassesContainer.appendChild(listItem);
        });
    }

    // Button actions
    displayUpcomingClasses();

    document.getElementById('addClassButton').addEventListener('click', () => {
        window.location.href = 'add.html';
    });

    document.getElementById('viewTimetableButton').addEventListener('click', () => {
        window.location.href = 'timetable.html';
    });
});
