// --- Exercício 1: Soma de Dois Números ---
function exercicio1_somarNumeros() {
    const resultadoSomaParagrafo = document.getElementById('resultadoSoma');
    resultadoSomaParagrafo.textContent = ''; 

    const numero1String = prompt('EXERCÍCIO 1:\nPor favor, digite o primeiro número para somar:');
    if (numero1String === null) {
        resultadoSomaParagrafo.textContent = 'Operação cancelada.';
        resultadoSomaParagrafo.className = 'error';
        return;
    }

    const numero2String = prompt('EXERCÍCIO 1:\nPor favor, digite o segundo número para somar:');
    if (numero2String === null) {
        resultadoSomaParagrafo.textContent = 'Operação cancelada.';
        resultadoSomaParagrafo.className = 'error';
        return;
    }

    const numero1 = parseFloat(numero1String);
    const numero2 = parseFloat(numero2String);

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoSomaParagrafo.textContent = 'Erro: Por favor, insira números válidos.';
        resultadoSomaParagrafo.className = 'error';
    } else {
        const soma = numero1 + numero2;
        resultadoSomaParagrafo.textContent = `A soma é: ${soma}`;
        resultadoSomaParagrafo.className = '';
    }
}

// --- Exercício 2: Saudação Personalizada ---
function exercicio2_obterNomeESaudar() {
    const saudacaoParagrafo = document.getElementById('saudacao');
    saudacaoParagrafo.textContent = ''; 

    const nome = prompt('EXERCÍCIO 2:\nOlá! Qual é o seu nome?');
    if (nome === null) {
        saudacaoParagrafo.textContent = 'Operação cancelada.';
        saudacaoParagrafo.className = 'error';
        return;
    }

    const sobrenome = prompt('EXERCÍCIO 2:\nE qual é o seu sobrenome?');
    if (sobrenome === null) {
        saudacaoParagrafo.textContent = 'Operação cancelada.';
        saudacaoParagrafo.className = 'error';
        return;
    }

    if (nome.trim() !== '' && sobrenome.trim() !== '') {
        const saudacaoCompleta = `Olá, ${nome.trim()} ${sobrenome.trim()}! Seja bem-vindo(a)!`;
        saudacaoParagrafo.textContent = saudacaoCompleta;
        saudacaoParagrafo.className = '';
    } else {
        saudacaoParagrafo.textContent = 'Erro: Por favor, digite seu nome e sobrenome para a saudação.';
        saudacaoParagrafo.className = 'error';
    }
}

// --- Exercício 3: Conversor de Reais para Dólar ---
async function exercicio3_converterReaisParaDolar() {
    const resultadoConversaoParagrafo = document.getElementById('resultadoConversao');
    resultadoConversaoParagrafo.textContent = 'Buscando cotação do dólar...';
    resultadoConversaoParagrafo.className = '';

    const valorReaisString = prompt('EXERCÍCIO 3:\nDigite o valor em Reais (R$) para converter para Dólar (US$):');
    if (valorReaisString === null) {
        resultadoConversaoParagrafo.textContent = 'Operação cancelada.';
        resultadoConversaoParagrafo.className = 'error';
        return;
    }

    const valorReais = parseFloat(valorReaisString);

    if (isNaN(valorReais) || valorReais < 0) {
        resultadoConversaoParagrafo.textContent = 'Erro: Por favor, insira números válidos.';
        resultadoConversaoParagrafo.className = 'error';
        return;
    }

    let taxaCambioDolar = null;

    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const data = await response.json();
        
        taxaCambioDolar = parseFloat(data.USDBRL.bid);

        if (isNaN(taxaCambioDolar) || taxaCambioDolar <= 0) {
            throw new Error('Não foi possível obter uma cotação válida do dólar.');
        }

    } catch (error) {
        console.error('Erro ao buscar cotação do dólar:', error);
        resultadoConversaoParagrafo.textContent = 'Erro ao obter cotação do dólar. Usando taxa padrão de R$ 5.00.';
        resultadoConversaoParagrafo.className = 'error';
        taxaCambioDolar = 5.00;
    }

    const valorDolar = valorReais / taxaCambioDolar;
    resultadoConversaoParagrafo.textContent = `R$ ${valorReais.toFixed(2)} equivalem a US$ ${valorDolar.toFixed(2)} (Cotação: R$ ${taxaCambioDolar.toFixed(4)})`;
    resultadoConversaoParagrafo.className = '';
    resultadoConversaoParagrafo.style.color = '#ffc107';
}

// --- Exercício 4: Antecessor e Sucessor ---
function exercicio4_antecessorSucessor() {
    const resultadoAntecessorSucessorParagrafo = document.getElementById('resultadoAntecessorSucessor');
    resultadoAntecessorSucessorParagrafo.textContent = ''; 

    const numeroString = prompt('EXERCÍCIO 4:\nDigite um número inteiro para ver seu antecessor e sucessor:');

    if (numeroString === null) {
        resultadoAntecessorSucessorParagrafo.textContent = 'Operação cancelada.';
        resultadoAntecessorSucessorParagrafo.className = 'error';
        return;
    }

    const numero = parseInt(numeroString);

    if (isNaN(numero)) {
        resultadoAntecessorSucessorParagrafo.textContent = 'Erro: Por favor, insira um número inteiro válido.';
        resultadoAntecessorSucessorParagrafo.className = 'error';
    } else {
        const antecessor = numero - 1;
        const sucessor = numero + 1;
        resultadoAntecessorSucessorParagrafo.textContent = `O número digitado foi ${numero}.\nSeu antecessor é ${antecessor} e seu sucessor é ${sucessor}.`;
        resultadoAntecessorSucessorParagrafo.className = '';
        resultadoAntecessorSucessorParagrafo.style.color = '#6f42c1';
    }
}

// --- Exercício 5: Cálculo do Valor do Terreno ---
function exercicio5_calcularValorTerreno() {
    const resultadoValorTerrenoParagrafo = document.getElementById('resultadoValorTerreno');
    resultadoValorTerrenoParagrafo.textContent = ''; 

    const comprimentoString = prompt('EXERCÍCIO 5:\nDigite o COMPRIMENTO do terreno em metros (Ex: 25.0):');
    if (comprimentoString === null) {
        resultadoValorTerrenoParagrafo.textContent = 'Operação cancelada.';
        resultadoValorTerrenoParagrafo.className = 'error';
        return;
    }
    const comprimento = parseFloat(comprimentoString);

    const larguraString = prompt('EXERCÍCIO 5:\nDigite a LARGURA do terreno em metros (Ex: 10.5):');
    if (larguraString === null) {
        resultadoValorTerrenoParagrafo.textContent = 'Operação cancelada.';
        resultadoValorTerrenoParagrafo.className = 'error';
        return;
    }
    const largura = parseFloat(larguraString);

    const valorMetroQuadradoString = prompt('EXERCÍCIO 5:\nDigite o VALOR POR METRO QUADRADO do terreno em Reais (R$):');
    if (valorMetroQuadradoString === null) {
        resultadoValorTerrenoParagrafo.textContent = 'Operação cancelada.';
        resultadoValorTerrenoParagrafo.className = 'error';
        return;
    }
    const valorMetroQuadrado = parseFloat(valorMetroQuadradoString);

    if (isNaN(comprimento) || comprimento <= 0 || 
        isNaN(largura) || largura <= 0 || 
        isNaN(valorMetroQuadrado) || valorMetroQuadrado <= 0) {
        
        resultadoValorTerrenoParagrafo.textContent = 'Erro: Por favor, insira valores numéricos positivos para comprimento, largura e valor por metro quadrado.';
        resultadoValorTerrenoParagrafo.className = 'error';
    } else {
        const areaTotal = comprimento * largura;
        const valorTotalTerreno = areaTotal * valorMetroQuadrado;

        resultadoValorTerrenoParagrafo.innerHTML = `Comprimento do terreno: ${comprimento.toFixed(2)} m<br>`;
        resultadoValorTerrenoParagrafo.innerHTML += `Largura do terreno: ${largura.toFixed(2)} m<br>`;
        resultadoValorTerrenoParagrafo.innerHTML += `Área calculada: ${areaTotal.toFixed(2)} m²<br>`;
        resultadoValorTerrenoParagrafo.innerHTML += `Valor informado por metro quadrado: R$ ${valorMetroQuadrado.toFixed(2)}<br>`;
        resultadoValorTerrenoParagrafo.innerHTML += `**Valor TOTAL do terreno: R$ ${valorTotalTerreno.toFixed(2)}**`;
        
        resultadoValorTerrenoParagrafo.className = '';
        resultadoValorTerrenoParagrafo.style.color = '#fd7e14';
    }
}

// --- Exercício 6: Consumo Médio do Veículo ---
function exercicio6_calcularConsumoMedio() {
    const resultadoConsumoMedioParagrafo = document.getElementById('resultadoConsumoMedio');
    resultadoConsumoMedioParagrafo.textContent = ''; // Limpa o resultado anterior

    const distanciaString = prompt('EXERCÍCIO 6:\nDigite a distância percorrida pelo veículo em KM (Ex: 300.5):');
    if (distanciaString === null) {
        resultadoConsumoMedioParagrafo.textContent = 'Operação cancelada.';
        resultadoConsumoMedioParagrafo.className = 'error';
        return;
    }
    const distancia = parseFloat(distanciaString);

    const combustivelString = prompt('EXERCÍCIO 6:\nDigite o total de combustível gasto em litros (Ex: 25.0):');
    if (combustivelString === null) {
        resultadoConsumoMedioParagrafo.textContent = 'Operação cancelada.';
        resultadoConsumoMedioParagrafo.className = 'error';
        return;
    }
    const combustivel = parseFloat(combustivelString);

    if (isNaN(distancia) || distancia <= 0 || 
        isNaN(combustivel) || combustivel <= 0) {
        
        resultadoConsumoMedioParagrafo.textContent = 'Erro: Por favor, insira valores numéricos positivos para distância e combustível.';
        resultadoConsumoMedioParagrafo.className = 'error';
    } else {
        const consumoMedio = distancia / combustivel;

        resultadoConsumoMedioParagrafo.innerHTML = `Distância percorrida: ${distancia.toFixed(2)} KM<br>`;
        resultadoConsumoMedioParagrafo.innerHTML += `Combustível gasto: ${combustivel.toFixed(2)} Litros<br>`;
        resultadoConsumoMedioParagrafo.innerHTML += `**Consumo médio do veículo: ${consumoMedio.toFixed(2)} km/l**`;
        
        resultadoConsumoMedioParagrafo.className = '';
        resultadoConsumoMedioParagrafo.style.color = '#20c997';
    }
}

// --- Exercício 7: Média Aritmética de Notas ---
function exercicio7_calcularMediaNotas() {
    const resultadoMediaNotasParagrafo = document.getElementById('resultadoMediaNotas');
    resultadoMediaNotasParagrafo.textContent = ''; 

    let notas = [];
    let inputsValidos = true;

    for (let i = 1; i <= 4; i++) {
        const notaString = prompt(`EXERCÍCIO 7:\nDigite a nota ${i} (entre 0 e 10):`);
        if (notaString === null) {
            resultadoMediaNotasParagrafo.textContent = 'Operação cancelada.';
            resultadoMediaNotasParagrafo.className = 'error';
            inputsValidos = false;
            break;
        }

        const nota = parseFloat(notaString);

        if (isNaN(nota) || nota < 0 || nota > 10) {
            resultadoMediaNotasParagrafo.textContent = 'Erro: Por favor, insira notas válidas entre 0 e 10.';
            resultadoMediaNotasParagrafo.className = 'error';
            inputsValidos = false;
            break;
        }
        notas.push(nota);
    }

    if (inputsValidos) {
        const somaDasNotas = notas.reduce((acc, current) => acc + current, 0);
        const media = somaDasNotas / notas.length;

        resultadoMediaNotasParagrafo.innerHTML = `Notas inseridas: ${notas.join(', ')}<br>`;
        resultadoMediaNotasParagrafo.innerHTML += `**Média Aritmética: ${media.toFixed(2)}**`;
        
        resultadoMediaNotasParagrafo.className = '';
        resultadoMediaNotasParagrafo.style.color = '#8a2be2';
    }
}

// --- Exercício 8: Conversor de Temperatura  ---
function exercicio8_converterFahrenheitParaCelsius() {
    const resultadoConversaoTemperaturaParagrafo = document.getElementById('resultadoConversaoTemperatura');
    resultadoConversaoTemperaturaParagrafo.textContent = ''; 

    const fahrenheitString = prompt('EXERCÍCIO 8:\nDigite a temperatura em Fahrenheit (°F):');
    if (fahrenheitString === null) { 
        resultadoConversaoTemperaturaParagrafo.textContent = 'Operação cancelada.';
        resultadoConversaoTemperaturaParagrafo.className = 'error';
        return;
    }

    const fahrenheit = parseFloat(fahrenheitString);

    if (isNaN(fahrenheit)) {
        resultadoConversaoTemperaturaParagrafo.textContent = 'Erro: Por favor, insira um valor numérico válido para a temperatura.';
        resultadoConversaoTemperaturaParagrafo.className = 'error';
    } else {
    
        const celsius = (fahrenheit - 32) * (5 / 9);

        resultadoConversaoTemperaturaParagrafo.innerHTML = `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>`;
        resultadoConversaoTemperaturaParagrafo.innerHTML += `**Temperatura em Celsius: ${celsius.toFixed(2)} °C**`;
        
        resultadoConversaoTemperaturaParagrafo.className = '';
        resultadoConversaoTemperaturaParagrafo.style.color = '#e6007a';
    }
}

