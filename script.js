// Dados do gráfico
const redesSociais = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube', 'TikTok'];
const usuarios = [200, 300, 150, 100, 400, 250]; // Adicionei valores para YouTube e TikTok

// Cria um array de pares [rede social, número de usuários]
const dadosCombinados = redesSociais.map((rede, index) => {
    return { rede, usuarios: usuarios[index] };
});

// Ordena os dados do maior para o menor
dadosCombinados.sort((a, b) => b.usuarios - a.usuarios);

// Separa os dados ordenados em arrays para Plotly
const xOrdenado = dadosCombinados.map(d => d.rede);
const yOrdenado = dadosCombinados.map(d => d.usuarios);

// Dados do gráfico
const data = [{
    x: xOrdenado,
    y: yOrdenado,
    type: 'bar',
    marker: {
        color: '#F05454' // Cor das colunas
    }
}];

// Layout do gráfico
const layout = {
    title: {
        text: 'Quantidade de Usuários por Rede Social',
        font: {
            color: '#F05454', // Cor do título
            size: 24 // Tamanho da fonte do título
        }
    },
    xaxis: {
        title: {
            text: 'Redes Sociais',
            font: {
                color: '#F05454' // Cor da label
            }
        }
    },
    yaxis: {
        title: {
            text: 'Número de Usuários (milhares)',
            font: {
                color: '#F05454' // Cor da label
            }
        }
    },
    paper_bgcolor: 'rgba(0, 0, 0, 0)', // Fundo transparente
    plot_bgcolor: 'rgba(0, 0, 0, 0)', // Fundo transparente
};

// Configurações para tornar o gráfico não interativo
const config = {
    staticPlot: true // Torna o gráfico não interativo
};

// Renderiza o gráfico
Plotly.newPlot('grafico', data, layout, config);
