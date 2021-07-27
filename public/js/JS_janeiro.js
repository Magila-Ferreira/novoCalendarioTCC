// Variável que armazena todo o calendário
var calendario = document.querySelector("#evento__calendario");

var meses = document.getElementById("selectMes");

function selectMes(valor) {

    // Limpando o calendário
    calendario.innerHTML = "";

    if (valor === '1') {

        // Chamando a função montaCalendario janeiro
        var janeiro = montaCalendarioSeis(calendario);        

    } else if (valor === '2') {

        // Chama a função montaCalendario fevereiro
        var fevereiro = montaCalendarioCinco(calendario);
        
    } else if (valor === '3') {

        // Chama a função montaCalendario março
        var marco = montaCalendarioCinco(calendario);

    } else if (valor === '4') {

        // Chama a função montaCalendario abril
        var abril = montaCalendarioCinco(calendario);

    } else if (valor === '5') {

        // Chama a função montaCalendario maio
        var maio = montaCalendarioSeis(calendario);

    } else {

        // Chama a função montaCalendario junho
        var junho = montaCalendarioCinco(calendario);
    }

    console.log("O mês selecionado foi: " + valor);
}

// Funções:

// *****    Montar calendário:      *****

// Cinco Semanas:
function montaCalendarioCinco(cinco) {
    for (var n = 0; n < 5; n++) {

        // Variável que criará as tr  
        var semanaTr = document.createElement("tr");

        // Relaciona cada tr como filha do calendário
        calendario.appendChild(semanaTr);

        // Variável que armazena uma tr
        for (var i = 0; i < 7; i++) {

            // Variável que cria cada td
            var diaTd = document.createElement("td");

            // Relaciona cada td como filha da tr
            semanaTr.appendChild(diaTd);
        }
    }
    return cinco;
};

// Seis Semanas:
function montaCalendarioSeis(seis) {
    for (var n = 0; n < 6; n++) {

        // Variável que criará as tr  
        var semanaTr = document.createElement("tr");

        // Relaciona cada tr como filha do calendário
        calendario.appendChild(semanaTr);

        // Variável que armazena uma tr
        for (var i = 0; i < 7; i++) {

            // Variável que cria cada td
            var diaTd = document.createElement("td");

            // Relaciona cada td como filha da tr
            semanaTr.appendChild(diaTd);
        }
    }
    return seis;
};










/*console.log("O indice é: " + meses.selectedIndex);
console.log("O texto é: " + meses.options[meses.selectedIndex].text);
console.log("A chave é: " + meses.options[meses.selectedIndex].value); */
