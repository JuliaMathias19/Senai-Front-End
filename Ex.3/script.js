// --- Exercício 1: Cronômetro Simples ---
function executarExercicio1Cronometro() {
    alert("Iniciando Exercício 1: Cronômetro Simples.\nPor favor, digite um número de segundos entre 1 e 59.");

    let segundos;
    let entradaValida = false;

   
    while (!entradaValida) {
        const entrada = prompt("EXERCÍCIO 1:\nQuantos segundos deseja contar? (Número entre 1 e 59)");

        if (entrada === null) { 
            alert("Operação de cronômetro cancelada.");
            return; 
        }

        segundos = parseInt(entrada);

        
        if (isNaN(segundos) || segundos < 1 || segundos > 59) {
            alert(`"${entrada}" não é um número válido ou está fora do intervalo permitido (1 a 59). Por favor, digite um número válido.`);
        } else {
            entradaValida = true; 
        }
    }

    alert(`Cronômetro iniciado para ${segundos} segundo(s)!`);

    
    for (let i = segundos; i > 0; i--) {
        alert(`Faltam ${i} segundo(s)...`);
    }

    alert("Tempo esgotado! Cronômetro finalizado.");
}

// --- Exercício 2: Tabuada ---
function executarExercicio2Tabuada() {
    alert("Iniciando Exercício 2: Tabuada.\nVamos gerar a tabuada do número que você escolher.");

    let numero;
    let entradaValida = false;

    while (!entradaValida) {
        const entrada = prompt("EXERCÍCIO 2:\nDigite um número inteiro para ver a tabuada:");

        if (entrada === null) { 
            alert("Operação de tabuada cancelada.");
            return;
        }

        numero = parseInt(entrada);

        if (isNaN(numero)) {
            alert(`"${entrada}" não é um número válido. Por favor, digite apenas caracteres numéricos.`);
        } else {
            entradaValida = true;
        }
    }

    let mensagemTabuada = `Tabuada do ${numero}:\n\n`;

  
    for (let i = 1; i <= 10; i++) {
        mensagemTabuada += `${numero} x ${i} = ${numero * i}\n`;
    }

    alert(mensagemTabuada);
    alert("Fim da Tabuada!");
}

// --- Exercício 3: Números Pares ---
function executarExercicio3ParesIntervalo() {
    alert("Iniciando Exercício 3: Números Pares em Intervalo.\nVocê vai digitar dois números e eu mostrarei os pares entre eles.");

    let numero1, numero2;
    let entrada1Valida = false;
    let entrada2Valida = false;

    
    while (!entrada1Valida) {
        const entrada = prompt("EXERCÍCIO 3:\nDigite o PRIMEIRO número inteiro:");
        if (entrada === null) {
            alert("Operação cancelada.");
            return;
        }
        numero1 = parseInt(entrada);
        if (isNaN(numero1)) {
            alert(`"${entrada}" não é um número inteiro válido. Por favor, digite um número.`);
        } else {
            entrada1Valida = true;
        }
    }

    
    while (!entrada2Valida) {
        const entrada = prompt("EXERCÍCIO 3:\nDigite o SEGUNDO número inteiro:");
        if (entrada === null) {
            alert("Operação cancelada.");
            return;
        }
        numero2 = parseInt(entrada);
        if (isNaN(numero2)) {
            alert(`"${entrada}" não é um número inteiro válido. Por favor, digite um número.`);
        } else {
            entrada2Valida = true;
        }
    }

    
    const inicio = Math.min(numero1, numero2);
    const fim = Math.max(numero1, numero2);

    let numerosParesEncontrados = [];
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            numerosParesEncontrados.push(i);
        }
    }

    if (numerosParesEncontrados.length > 0) {
        alert(`EXERCÍCIO 3:\nOs números pares entre ${inicio} e ${fim} são:\n${numerosParesEncontrados.join(', ')}`);
    } else {
        alert(`EXERCÍCIO 3:\nNão foram encontrados números pares entre ${inicio} e ${fim}.`);
    }
}

// --- Exercício 4: Jogo de Adivinhação ---
function executarExercicio4Adivinhacao() {
    alert("Iniciando Exercício 4: Jogo de Adivinhação!\nEu escolhi um número entre 1 e 10. Tente adivinhar!");

    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let acertou = false;
    let tentativas = 0;

    while (!acertou) {
        const palpiteEntrada = prompt("EXERCÍCIO 4:\nQual é o seu palpite? (Número entre 1 e 10)");

        if (palpiteEntrada === null) {
            alert("Jogo cancelado. Que pena!");
            return;
        }

        const palpite = parseInt(palpiteEntrada);
        tentativas++;

        if (isNaN(palpite) || palpite < 1 || palpite > 10) {
            alert(`"${palpiteEntrada}" não é um número válido ou está fora do intervalo (1 a 10). Tente novamente.`);
        } else if (palpite === numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s)!`);
            acertou = true;
        } else {
            
            const diferenca = Math.abs(palpite - numeroSecreto);

            if (diferenca <= 2) { 
                alert("Está quente! Tente novamente.");
            } else {
                alert("Está frio! Tente novamente.");
            }
        }
    }
}

// --- Exercício 5: Sistema de Login ---
function executarExercicio5Login() {
    alert("Iniciando Exercício 5: Sistema de Login.\nVocê tem 3 tentativas para acessar.");

    const loginCorreto = "julialinda";
    const senhaCorreta = "julialinda";
    let tentativasRestantes = 3;

    while (tentativasRestantes > 0) {
        if (tentativasRestantes === 1) {
            alert("Última tentativa, mais um erro seu acesso será bloqueado!");
        }

        const loginDigitado = prompt(`EXERCÍCIO 5:\nTentativas restantes: ${tentativasRestantes}\nDigite o LOGIN:`);
        if (loginDigitado === null) { 
            alert("Login cancelado. Você pode tentar novamente mais tarde.");
            return;
        }

        const senhaDigitada = prompt(`EXERCÍCIO 5:\nTentativas restantes: ${tentativasRestantes}\nDigite a SENHA:`);
        if (senhaDigitada === null) { 
            alert("Login cancelado. Você pode tentar novamente mais tarde.");
            return;
        }

        const isLoginCorreto = (loginDigitado === loginCorreto);
        const isSenhaCorreta = (senhaDigitada === senhaCorreta);

        if (isLoginCorreto && isSenhaCorreta) {
            alert("EXERCÍCIO 5:\nBem-vindo(a)! Acesso concedido.");
            return; 
        } else {
            tentativasRestantes--;

            if (!isLoginCorreto && !isSenhaCorreta) {
                alert(`EXERCÍCIO 5:\nLogin e senha incorretos. Você tem ${tentativasRestantes} tentativa(s) restante(s).`);
            } else if (!isLoginCorreto) {
                alert(`EXERCÍCIO 5:\nLogin incorreto. Você tem ${tentativasRestantes} tentativa(s) restante(s).`);
            } else { 
                alert(`EXERCÍCIO 5:\nSenha incorreta. Você tem ${tentativasRestantes} tentativa(s) restante(s).`);
            }
        }
    }

    
    alert("Acesso bloqueado! Você excedeu o número de tentativas.");
}

// --- Exercício 6: Desenhar Pirâmide ---
function executarExercicio6Piramide() {
    alert("Iniciando Exercício 6: Desenhar Pirâmide.\nVocê dirá quantos andares deseja e eu desenharei a pirâmide!");

    let andares;
    let entradaValida = false;

    while (!entradaValida) {
        const entrada = prompt("EXERCÍCIO 6:\nQuantos andares a pirâmide deve ter? (Digite um número inteiro positivo)");

        if (entrada === null) { 
            alert("Operação de pirâmide cancelada.");
            return;
        }

        andares = parseInt(entrada);

        if (isNaN(andares) || andares <= 0) {
            alert(`"${entrada}" não é um número inteiro positivo válido. Por favor, digite um número maior que zero.`);
        } else {
            entradaValida = true;
        }
    }

    let piramide = "";
    for (let i = 1; i <= andares; i++) {
       
        const espacos = " ".repeat(andares - i);
       
        const asteriscos = "*".repeat(2 * i - 1);
        piramide += espacos + asteriscos + "\n";
    }

    alert(`EXERCÍCIO 6:\nPirâmide de ${andares} andares:\n\n${piramide}`);
    alert("Desenho da pirâmide concluído!");
}

// --- NOVO Exercício 7: Desenhar Retângulo ---
function executarExercicio7Retangulo() {
    alert("Iniciando Exercício 7: Desenhar Retângulo.\nInforme a largura e a altura para o seu retângulo de asteriscos.");

    let largura, altura;
    let larguraValida = false;
    let alturaValida = false;

    
    while (!larguraValida) {
        const entradaLargura = prompt("EXERCÍCIO 7:\nDigite a LARGURA do retângulo (número inteiro positivo):");
        if (entradaLargura === null) {
            alert("Operação cancelada.");
            return;
        }
        largura = parseInt(entradaLargura);
        if (isNaN(largura) || largura <= 0) {
            alert(`"${entradaLargura}" não é uma largura válida. Digite um número inteiro positivo.`);
        } else {
            larguraValida = true;
        }
    }

    
    while (!alturaValida) {
        const entradaAltura = prompt("EXERCÍCIO 7:\nDigite a ALTURA do retângulo (número inteiro positivo):");
        if (entradaAltura === null) {
            alert("Operação cancelada.");
            return;
        }
        altura = parseInt(entradaAltura);
        if (isNaN(altura) || altura <= 0) {
            alert(`"${entradaAltura}" não é uma altura válida. Digite um número inteiro positivo.`);
        } else {
            alturaValida = true;
        }
    }

    let retangulo = "";
    const linhaDeAsteriscos = "*".repeat(largura); 
    for (let i = 0; i < altura; i++) {
        retangulo += linhaDeAsteriscos + "\n";
    }

    alert(`EXERCÍCIO 7:\nRetângulo de ${largura}x${altura} asteriscos:\n\n${retangulo}`);
    alert("Desenho do retângulo concluído!");
}