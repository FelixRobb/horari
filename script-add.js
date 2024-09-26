document.addEventListener('DOMContentLoaded', () => {
    const timetableForm = document.getElementById('timetableForm');
    const taskForm = document.getElementById('taskForm');

    // Load existing timetable from local storage
    let timetable = JSON.parse(localStorage.getItem('timetable')) || [];

    // Add class to timetable
    timetableForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const classInfo = {
            subject: document.getElementById('subject').value,
            classroom: document.getElementById('classroom').value,
            teacher: document.getElementById('teacher').value,
            startTime: document.getElementById('startTime').value,
            endTime: document.getElementById('endTime').value,
            dayOfWeek: document.getElementById('dayOfWeek').value,
            notes: document.getElementById('notes').value,
        };
        timetable.push(classInfo);
        localStorage.setItem('timetable', JSON.stringify(timetable));
        timetableForm.reset();
        alert('Class added successfully!');
    });

    // Add task functionality
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement task functionality here (if needed)
        alert('Task added successfully!');
        taskForm.reset();
    });

    document.getElementById('viewTimetableButton').addEventListener('click', () => {
        window.location.href = 'timetable.html';
    });

    document.getElementById('backButton').addEventListener('click', () => {
        window.history.back();
    });
});
