// Variável que armazena todo o calendário
var calendario = document.querySelector("#evento__calendario");

// Variável que armazena o cabeçalho da tabela
var thead = document.querySelector(".evento__diaSemana");

// Variável que armazena o select
var meses = document.getElementById("selectMes");

//var selected = document.querySelector(".text-selecao");

// Adiciona a classe invisível ao thead da tabela 
thead.classList.add("thead-invisivel");

// Função que chama o calendário correspondente ao mês do select
function selectMes(valor) {

    // Limpa o calendário antes do próximo select
    calendario.innerHTML = "";

    // Condicional para chamar o mês de Janeiro
    if (valor === '1') {

        // Remove a classe invisível da thead da tabela
        removeInvisivel(thead);

        // Chama a função populando o calendário
        populandoJaneiro(calendario);

    } else if (valor === '2') {

        removeInvisivel(thead);
        populandoFevereiro(calendario);

    } else if (valor === '3') {

        removeInvisivel(thead);
        populandoMarco(calendario);

    } else if (valor === '4') {

        removeInvisivel(thead);
        populandoAbril(calendario);

    } else if (valor === '5') {

        removeInvisivel(thead);
        populandoMaio(calendario);

    } else if (valor === '6') {

        removeInvisivel(thead);
        populandoJunho(calendario);

    } else {
        thead.classList.add("thead-invisivel");
    }
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

            // *****    Estilizando o calendário:      *****

            // Condicional que verifica as td correspondentes aos FDS e feriados de janeiro, estilizando-as.  
            switch (tdDia.textContent) {
                case '1':
                case '2':
                case '3':
                case '9':
                case '10':
                case '16':
                case '17':
                case '23':
                case '24':
                case '30':
                case '31':
                    tdDia.classList.add("bg-danger");
                    break;
                default:
                    tdDia.classList.add("bg-secondary-dark");
            }

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

            switch (tdDia.textContent) {
                case '6':
                case '7':
                case '13':
                case '14':
                case '15':
                case '16':
                case '17':
                case '20':
                case '21':
                case '27':
                case '28':
                    tdDia.classList.add("bg-danger");
                    break;
                default:
                    tdDia.classList.add("bg-secondary-dark");
            }
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

            switch (tdDia.textContent) {
                case '6':
                case '7':
                case '13':
                case '14':
                case '20':
                case '21':
                case '27':
                case '28':
                    tdDia.classList.add("bg-danger");
                    break;
                default:
                    tdDia.classList.add("bg-secondary-dark");
            }
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

            switch (tdDia.textContent) {
                case '2':
                case '3':
                case '4':
                case '8':
                case '10':
                case '11':
                case '17':
                case '18':
                case '21':
                case '24':
                case '25':
                    tdDia.classList.add("bg-danger");
                    break;
                default:
                    tdDia.classList.add("bg-secondary-dark");
            }
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

            switch (tdDia.textContent) {
                case '1':
                case '2':
                case '8':
                case '9':
                case '15':
                case '16':
                case '22':
                case '23':
                case '29':
                case '30':
                    tdDia.classList.add("bg-danger");
                    break;
                default:
                    tdDia.classList.add("bg-secondary-dark");
            }
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

            switch (tdDia.textContent) {
                case '3':
                case '5':
                case '6':
                case '12':
                case '13':
                case '19':
                case '20':
                case '26':
                case '27':
                    tdDia.classList.add("bg-danger");
                    break;
                    default:
                        tdDia.classList.add("bg-secondary-dark");
            }
            dia++;
        }
    }
    return junho;
}

// Função de remoção da classe invisível
function removeInvisivel(thead) {
    thead.classList.remove("thead-invisivel");

    return thead;
}

/*console.log("O indice é: " + meses.selectedIndex);
console.log("O texto é: " + meses.options[meses.selectedIndex].text);
console.log("A chave é: " + meses.options[meses.selectedIndex].value); */