function calcularSementes() {
    // Captura os valores dos inputs
    const area = parseFloat(document.getElementById('area').value);
    const density = parseFloat(document.getElementById('density').value);
    const germination = parseFloat(document.getElementById('germination').value);

    // Validação simples para garantir que os campos foram preenchidos corretamente
    if (isNaN(area) || isNaN(density) || isNaN(germination) || area <= 0 || density <= 0 || germination <= 0) {
        alert("Por favor, insira valores válidos e maiores que zero.");
        return;
    }

    // Cálculo base: Área x Sementes por m²
    let totalSeeds = area * density;

    // Ajuste baseado na taxa de germinação (Regra de três para compensar as sementes que não nascem)
    totalSeeds = totalSeeds * (100 / germination);

    // Arredonda para cima, já que não existem "meias" sementes
    const resultadoFinal = Math.ceil(totalSeeds);

    // Exibe o resultado na tela
    const resultBox = document.getElementById('result');
    const totalSeedsSpan = document.querySelector('#total-seeds span');
    
    totalSeedsSpan.textContent = resultadoFinal.toLocaleString('pt-BR');
    
    // Mostra a caixa de resultado removendo a classe 'hidden'
    resultBox.classList.remove('hidden');
}
