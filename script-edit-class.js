document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const classIndex = urlParams.get('index');

    // Carregar o horário salvo no localStorage
    let timetable = JSON.parse(localStorage.getItem('timetable')) || [];

    if (classIndex !== null && timetable[classIndex]) {
        const classInfo = timetable[classIndex];

        // Preencher os campos do formulário com os dados da aula
        document.getElementById('subject').value = classInfo.subject || '';
        document.getElementById('classroom').value = classInfo.classroom || '';
        document.getElementById('teacher').value = classInfo.teacher || '';
        document.getElementById('startTime').value = classInfo.startTime || '';
        document.getElementById('endTime').value = classInfo.endTime || '';
        document.getElementById('dayOfWeek').value = classInfo.dayOfWeek || 'Monday';

        // Salvando as alterações
        document.getElementById('editClassForm').addEventListener('submit', (e) => {
            e.preventDefault();

            // Atualizar os dados da aula
            timetable[classIndex] = {
                subject: document.getElementById('subject').value,
                classroom: document.getElementById('classroom').value,
                teacher: document.getElementById('teacher').value,
                startTime: document.getElementById('startTime').value,
                endTime: document.getElementById('endTime').value,
                dayOfWeek: document.getElementById('dayOfWeek').value,
            };

            // Salvar no localStorage
            localStorage.setItem('timetable', JSON.stringify(timetable));

            // Redirecionar de volta para o horário
            window.location.href = 'timetable.html';
        });
    } else {
        alert('Aula não encontrada.');
    }
});
