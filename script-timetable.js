document.addEventListener('DOMContentLoaded', () => {
    const classModal = document.getElementById('classModal');
    const closeModal = document.getElementById('closeModal');
    const editClassButton = document.getElementById('editClassButton');

    // Carregar o horário salvo no localStorage
    let timetable = JSON.parse(localStorage.getItem('timetable')) || [];

    function setupTimetable() {
        timetable.forEach((classInfo, index) => {
            const classCell = document.getElementById(`class-${index}`);
            if (classCell) {
                // Preencher a célula da tabela com a informação da aula
                classCell.textContent = classInfo.subject; // Pode ser modificado para incluir mais detalhes
                classCell.onclick = () => openClassModal({ ...classInfo, index }); // Passa a aula e o índice para o modal
            }
        });
    }

    function openClassModal(classInfo) {
        // Preencher o modal com os dados da aula
        document.getElementById('modalSubject').textContent = classInfo.subject || '';
        document.getElementById('modalClassroom').textContent = classInfo.classroom || '';
        document.getElementById('modalTeacher').textContent = classInfo.teacher || '';
        document.getElementById('modalStartTime').textContent = classInfo.startTime || '00:00';
        document.getElementById('modalEndTime').textContent = classInfo.endTime || '00:00';
        document.getElementById('modalDayOfWeek').textContent = classInfo.dayOfWeek || 'Monday';

        // Exibir o modal
        classModal.style.display = "block";

        // Adicionar listener ao botão de editar
        editClassButton.onclick = () => {
            // Redirecionar para a página de edição passando o índice da aula na URL
            window.location.href = `edit-class.html?index=${classInfo.index}`;
        };
    }

    // Código de fechamento do modal
    closeModal.onclick = () => {
        classModal.style.display = "none";
    };

    // Inicializar a tabela com dados
    setupTimetable();
});
