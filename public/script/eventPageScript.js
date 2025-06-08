document.addEventListener('DOMContentLoaded', () => {
    const dayButtons = document.querySelectorAll('.day-button');
    const timeButtons = document.querySelectorAll('.time-slot');

    // Cria um mapa com os dias da semana para comparação
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    // Para cada clique em um botão de dia
    dayButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Destacar botão ativo
            dayButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const diaSelecionado = button.textContent.trim(); // Ex: "Qua"

            timeButtons.forEach(btn => {
                const datetime = new Date(btn.dataset.datetime);
                const diaDoHorario = diasSemana[datetime.getDay()];

                // Mostra ou esconde conforme o dia
                if (diaDoHorario === diaSelecionado) {
                    btn.style.display = 'inline-block';
                } else {
                    btn.style.display = 'none';
                }
            });
        });
    });

    // Ativa exibição inicial (ex: mostrar apenas os de 'Qua' se for ativo por padrão)
    const botaoAtivo = document.querySelector('.day-button.active');
    if (botaoAtivo) botaoAtivo.click();
});