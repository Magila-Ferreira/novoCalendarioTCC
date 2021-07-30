// Variável que armazena todo o calendário
var calendario = document.querySelector("#evento__calendario");

// Variável que armazena o select
var meses = document.getElementById("selectMes");

// Função que chama o calendário correspondente ao mês do select
function selectMes(valor) {

    // Limpa o calendário antes do próximo select
    calendario.innerHTML = "";

    // Condicional para chamar o mês de Janeiro
    if (valor === '1') {

        // Chama a função populando o calendário
        populandoJaneiro(calendario);

    } else if (valor === '2') {

        populandoFevereiro(calendario);

    } else if (valor === '3') {

        populandoMarco(calendario);

    } else if (valor === '4') {

        populandoAbril(calendario);

    } else if (valor === '5') {

        populandoMaio(calendario);

        // Exceção para chamar o mês de Junho
    } else {

        populandoJunho(calendario);
    }

    // Imprime o valor do mês selecionado na select
    //console.log("O mês selecionado foi: " + valor);
}

// Funções:

// *****    Montar calendário:      *****

// Cinco Semanas:
function montaCalendarioCinco(cinco) {

    // Laço que percorrerá as 5 linhas do calendário 
    for (var n = 0; n < 5; n++) {

        // Variável que criará as tr  
        var semanaTr = document.createElement("tr");

        // Relaciona cada tr como filha do calendário
        calendario.appendChild(semanaTr);

        // Laço que percorrerá as 7 colunas do calendário 
        for (var i = 0; i < 7; i++) {

            // Variável que cria cada td
            var diaTd = document.createElement("td");

            // Relaciona cada td como filha da tr
            semanaTr.appendChild(diaTd);
        }
    }

    // retorno da função montaCalendárioCinco
    return cinco;
};

// Seis Semanas:
function montaCalendarioSeis(seis) {

    for (var n = 0; n < 6; n++) {
        var semanaTr = document.createElement("tr");
        calendario.appendChild(semanaTr);

        for (var i = 0; i < 7; i++) {
            var diaTd = document.createElement("td");
            semanaTr.appendChild(diaTd);
        }
    }
    return seis;
};

// *****    Populando o calendário:      *****

// JANEIRO:
function populandoJaneiro(janeiro) {

    // Variável que armazena o calendário de janeiro
    var janeiro = montaCalendarioSeis(calendario);

    // Variável que armazena todas as td do calendário de janeiro
    var tdDias = janeiro.querySelectorAll("td");

    // Variável que armazena o primeiro dia do mês
    var dia = 1;

    // Laço que percorrerá todas as td do mês
    for (var i = 0; i < tdDias.length; i++) {

        // Variável flexível - conforme o laço percorre as td, a variável tdDia corresponde a td do i que o laço está percorrendo, até que todo o array tdDias seja percorrido dentro da definição máxima do i. 
        var tdDia = tdDias[i];

        // Condicional que determina o início e fim do mês dentro das td 
        if (i > 4 && i < 36) {

            // Popula a tdDia do laço com o valor do dia
            tdDia.textContent = dia;

            // Atualiza o valor do dia a cada volta do laço
            dia++;
        }
    }

    // retorna o mês completo 
    return janeiro;
}

// FEVEREIRO:
function populandoFevereiro(fevereiro) {
    var fevereiro = montaCalendarioCinco(calendario);
    var tdDias = fevereiro.querySelectorAll("td");
    var dia = 1;

    for (var i = 0; i < tdDias.length; i++) {
        var tdDia = tdDias[i];
 
        if (i > 0 && i < 29) {
            tdDia.textContent = dia;
            dia++;
        }
    }
    return fevereiro;
}

// MARÇO:
function populandoMarco(marco) {
    var marco = montaCalendarioCinco(calendario);
    var tdDias = marco.querySelectorAll("td");
    var dia = 1;

    for (var i = 0; i < tdDias.length; i++) {
        var tdDia = tdDias[i];

        if (i > 0 && i < 32) {
            tdDia.textContent = dia;
            dia++;
        }
    }
    return marco;
}

// ABRIL
function populandoAbril(abril) {
    var abril = montaCalendarioCinco(calendario);
    var tdDias = abril.querySelectorAll("td");
    var dia = 1;

    for (var i = 0; i < tdDias.length; i++) {
        var tdDia = tdDias[i];

        if (i > 3 && i < 34) {
            tdDia.textContent = dia;
            dia++;
        }
    }
    return abril;
}

// MAIO:
function populandoMaio(maio) {
    var maio = montaCalendarioSeis(calendario);
    var tdDias = maio.querySelectorAll("td");
    var dia = 1;

    for (var i = 0; i < tdDias.length; i++) {
        var tdDia = tdDias[i];

        if (i > 5 && i < 37) {
            tdDia.textContent = dia;
            dia++;
        }
    }
    return maio;
}

// JUNHO:
function populandoJunho(junho) {
    var junho = montaCalendarioCinco(calendario);
    var tdDias = junho.querySelectorAll("td");
    var dia = 1;

    for (var i = 0; i < tdDias.length; i++) {
        var tdDia = tdDias[i];

        if (i > 1 && i < 32) {
            tdDia.textContent = dia;
            dia++;
        }
    } 
    return junho;
}

/*console.log("O indice é: " + meses.selectedIndex);
console.log("O texto é: " + meses.options[meses.selectedIndex].text);
console.log("A chave é: " + meses.options[meses.selectedIndex].value); */