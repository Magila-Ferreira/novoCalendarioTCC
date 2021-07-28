// Variável que armazena todo o calendário
var calendario = document.querySelector("#evento__calendario");

var meses = document.getElementById("selectMes");

function selectMes(valor) {

    if (valor === '1') { 

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

    } else if (valor === '2') {

        for (var n = 0; n < 2; n++) {

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
    }
    console.log("O mês selecionado foi: " + valor);
}




/*console.log("O indice é: " + meses.selectedIndex);
console.log("O texto é: " + meses.options[meses.selectedIndex].text);
console.log("A chave é: " + meses.options[meses.selectedIndex].value); */
