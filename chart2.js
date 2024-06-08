var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Grande', 'Média', 'Pequena'],

        datasets: [{
            label: 'Employees',
            data: [42, 12, 8],
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});

    document.addEventListener('DOMContentLoaded', function() {
        // Obtém o elemento do texto de status
        var statusText = document.getElementById('statusText');
        // Obtém o botão
        var statusButton = document.getElementById('statusButton');
        
        // Adiciona um ouvinte de evento de clique ao botão
        statusButton.addEventListener('click', function() {
            // Verifica o texto atual e muda para o oposto
            if (statusText.textContent === 'ON') {
                statusText.textContent = 'OFF';
            } else {
                statusText.textContent = 'ON';
            }
        });
    });