// --- Exercício 1: Verificar Par, Ímpar ou Zero ---
function executarExercicio1() {
    alert("Iniciando Exercício 1: Par, Ímpar ou Zero.\nPrepare-se para digitar um número no próximo pop-up.");

    const entrada = prompt("EXERCÍCIO 1:\nPor favor, digite um número inteiro:");

    if (entrada === null || entrada.trim() === '') {
        alert("Operação cancelada ou nenhuma entrada fornecida para o Exercício 1.");
        return;
    }

    const numero = parseInt(entrada);

    if (isNaN(numero)) {
        alert(`EXERCÍCIO 1:\n"${entrada}" não é um número válido. Por favor, digite apenas caracteres numéricos.`);
    } else if (numero === 0) {
        alert(`EXERCÍCIO 1:\nO número ${numero} é zero.`);
    } else if (numero % 2 === 0) {
        alert(`EXERCÍCIO 1:\nO número ${numero} é par.`);
    } else {
        alert(`EXERCÍCIO 1:\nO número ${numero} é ímpar.`);
    }
}

// --- Exercício 2: Qual é o Maior Número ---
function executarExercicio2() {
    alert("Iniciando Exercício 2: Qual é o Maior Número.\nPrepare-se para digitar dois números nos próximos pop-ups.");

    const entrada1 = prompt("EXERCÍCIO 2:\nDigite o PRIMEIRO número:");
    if (entrada1 === null || entrada1.trim() === '') {
        alert("Operação cancelada ou primeira entrada não fornecida para o Exercício 2.");
        return;
    }
    const numero1 = parseFloat(entrada1);

    if (isNaN(numero1)) {
        alert(`EXERCÍCIO 2:\n"${entrada1}" não é um número válido. Por favor, digite apenas caracteres numéricos.`);
        return;
    }

    const entrada2 = prompt("EXERCÍCIO 2:\nDigite o SEGUNDO número:");
    if (entrada2 === null || entrada2.trim() === '') {
        alert("Operação cancelada ou segunda entrada não fornecida para o Exercício 2.");
        return;
    }
    const numero2 = parseFloat(entrada2);

    if (isNaN(numero2)) {
        alert(`EXERCÍCIO 2:\n"${entrada2}" não é um número válido. Por favor, digite apenas caracteres numéricos.`);
        return;
    }

    let resultado;
    if (numero1 > numero2) {
        resultado = `EXERCÍCIO 2:\nO primeiro número (${numero1}) é MAIOR que o segundo (${numero2}).`;
    } else if (numero2 > numero1) {
        resultado = `EXERCÍCIO 2:\nO segundo número (${numero2}) é MAIOR que o primeiro (${numero1}).`;
    } else {
        resultado = `EXERCÍCIO 2:\nAmbos os números (${numero1} e ${numero2}) são IGUAIS.`;
    }

    alert(resultado);
}

// --- Exercício 3: Verificação de Fila Preferencial ---
function executarExercicio3() {
    alert("Iniciando Exercício 3: Verificação de Fila Preferencial.\nVamos descobrir para qual fila você deve ir!");

    const isGestante = prompt("EXERCÍCIO 3:\nVocê é gestante? (Sim/Não)").trim().toLowerCase();

    if (isGestante === 'sim') {
        alert("EXERCÍCIO 3:\nExcelente! Você tem direito à fila preferencial. Dirija-se à fila preferencial.");
        return;
    } else if (isGestante === 'não') {
        const possuiDeficiencia = prompt("EXERCÍCIO 3:\nVocê possui alguma deficiência? (Sim/Não)").trim().toLowerCase();

        if (possuiDeficiencia === 'sim') {
            alert("EXERCÍCIO 3:\nÓtimo! Você tem direito à fila preferencial. Dirija-se à fila preferencial.");
            return;
        } else if (possuiDeficiencia === 'não') {
            const idade = parseInt(prompt("EXERCÍCIO 3:\nQuantos anos você tem? (Digite apenas o número)"));

            if (isNaN(idade) || idade < 0) {
                alert("EXERCÍCIO 3:\nIdade inválida. Por favor, digite um número positivo. Não foi possível determinar sua fila.");
                return;
            }

            if (idade >= 65) {
                alert("EXERCÍCIO 3:\nCerto! Você tem mais de 65 anos, então tem direito à fila preferencial. Dirija-se à fila preferencial.");
                return;
            } else {
                alert("EXERCÍCIO 3:\nVocê não se enquadra nos critérios para fila preferencial. Por favor, dirija-se à fila comum.");
                return;
            }
        } else {
            alert("EXERCÍCIO 3:\nResposta inválida para 'deficiência'. Por favor, responda 'Sim' ou 'Não'. Não foi possível determinar sua fila.");
            return;
        }
    } else {
        alert("EXERCÍCIO 3:\nResposta inválida para 'gestante'. Por favor, responda 'Sim' ou 'Não'. Não foi possível determinar sua fila.");
        return;
    }
}

// --- Exercício 4: Entrada na Festa por Idade ---
function executarExercicio4() {
    alert("Iniciando Exercício 4: Entrada na Festa por Idade.\nVamos verificar se você pode entrar na festa!");

    const idadeEntrada = prompt("EXERCÍCIO 4:\nPor favor, digite sua idade:");

    if (idadeEntrada === null || idadeEntrada.trim() === '') {
        alert("Operação cancelada ou nenhuma idade fornecida para o Exercício 4.");
        return;
    }

    const idade = parseInt(idadeEntrada);

    if (isNaN(idade) || idade < 0) {
        alert("EXERCÍCIO 4:\nIdade inválida. Por favor, digite um número inteiro positivo.");
    } else if (idade < 16) {
        alert("EXERCÍCIO 4:\nVocê possui menos de 16 anos. Desculpe, você não pode entrar na festa.");
    } else if (idade >= 16 && idade <= 18) {
        alert("EXERCÍCIO 4:\nSua idade está entre 16 e 18 anos. Você pode entrar na festa apenas acompanhado(a) de um responsável.");
    } else { // Idade > 18
        alert("EXERCÍCIO 4:\nVocê possui mais de 18 anos. Bem-vindo(a) à festa!");
    }
}

// --- Exercício 5: Sistema de Login ---
function executarExercicio5() {
    alert("Iniciando Exercício 5: Sistema de Login.\nPor favor, insira suas credenciais.");

    const loginCorreto = "julialinda";
    const senhaCorreta = "julialinda";

    const loginDigitado = prompt("EXERCÍCIO 5:\nDigite o login:");
    if (loginDigitado === null) {
        alert("Login cancelado.");
        return;
    }
    const senhaDigitada = prompt("EXERCÍCIO 5:\nDigite a senha:");
    if (senhaDigitada === null) {
        alert("Login cancelado.");
        return;
    }

    const isLoginCorreto = (loginDigitado === loginCorreto);
    const isSenhaCorreta = (senhaDigitada === senhaCorreta);

    if (isLoginCorreto && isSenhaCorreta) {
        alert("EXERCÍCIO 5:\nBem-vindo(a)!");
    } else if (!isLoginCorreto && isSenhaCorreta) {
        alert("EXERCÍCIO 5:\nApenas o login está incorreto.");
    } else if (isLoginCorreto && !isSenhaCorreta) {
        alert("EXERCÍCIO 5:\nApenas a senha está incorreta.");
    } else { 
        alert("EXERCÍCIO 5:\nO login e a senha estão incorretos.");
    }
}

// --- Exercício 6: Quiz de Conhecimentos Gerais (Atualizado) ---
function executarExercicio6() {
    alert("Iniciando Exercício 6: Quiz de Conhecimentos Gerais!\nResponda todas as 3 perguntas. O resultado final será exibido no final.");

    let erros = 0; 

   
    const resposta1 = prompt(
        "EXERCÍCIO 6 - Pergunta 1 de 3:\nQual é o livro mais vendido pelo mundo?\n" +
        "A) Bíblia Sagrada\n" +
        "B) O Pequeno Príncipe\n" +
        "C) O Senhor dos Anéis"
    );

    if (resposta1 === null) { 
        alert("Quiz cancelado. Por favor, recarregue a página para tentar novamente.");
        return;
    }

    const resposta1Normalizada = resposta1.trim().toLowerCase();
    if (!(resposta1Normalizada === 'a' || resposta1Normalizada === 'bíblia sagrada')) {
        alert("Resposta incorreta para a Pergunta 1. A resposta certa é 'A) Bíblia Sagrada'.");
        erros++;
    } else {
        alert("Resposta correta para a Pergunta 1!");
    }

    
    const resposta2 = prompt(
        "EXERCÍCIO 6 - Pergunta 2 de 3:\nQual é o filme com maior bilheteria de todos os tempos?\n" +
        "A) Titanic\n" +
        "B) Vingadores Ultimato\n" +
        "C) Avatar"
    );

    if (resposta2 === null) { 
        alert("Quiz cancelado. Por favor, recarregue a página para tentar novamente.");
        return;
    }

    const resposta2Normalizada = resposta2.trim().toLowerCase();
    if (!(resposta2Normalizada === 'c' || resposta2Normalizada === 'avatar')) {
        alert("Resposta incorreta para a Pergunta 2. A resposta certa é 'C) Avatar'.");
        erros++;
    } else {
        alert("Resposta correta para a Pergunta 2!");
    }

    
    const resposta3 = prompt(
        "EXERCÍCIO 6 - Pergunta 3 de 3:\nQual o país mais novo do mundo?\n" +
        "A) Montenegro\n" +
        "B) Sudão do Sul\n" +
        "C) Palau"
    );

    if (resposta3 === null) { 
        alert("Quiz cancelado. Por favor, recarregue a página para tentar novamente.");
        return;
    }

    const resposta3Normalizada = resposta3.trim().toLowerCase();
    if (!(resposta3Normalizada === 'b' || resposta3Normalizada === 'sudão do sul')) {
        alert("Resposta incorreta para a Pergunta 3. A resposta certa é 'B) Sudão do Sul'.");
        erros++;
    } else {
        alert("Resposta correta para a Pergunta 3!");
    }

    
    if (erros === 0) {
        alert("Parabéns! Você acertou todas as 3 perguntas!\nVocê GANHOU o Quiz!");
    } else {
        alert(`Fim de jogo. Você PERDEU o Quiz.\nVocê cometeu ${erros} erro(s).`);
    }
}