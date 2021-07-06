// Seleciona a página inteira  
var eventoCalendario = document.querySelector(".evento__dropdown-mes");

// Seleciona todos os meses
var defineMes = eventoCalendario.querySelectorAll("#mes");

// Laço de repetição que percorre o array de meses
for (var i = 0; i < defineMes.length; i++) {

    // Variável que salva cada mês de forma separada na variável mês (cada vez que passa pelo laço a variável mês assume um valor diferente)
    var mes = defineMes[i];

    // Variável armazena o conteúdo da variável mês, de forma separada (cada vez que passa pelo laço o conteúdo da variável muda)
    var mesDefinido = mes.textContent;

    // Define o início do mês
    var dia = 1;

    // Verifica qual mês foi selecionado 
    switch (mesDefinido) {

        // Condicionais para o CASO 1 - JANEIRO   
        case 'JANEIRO':

            // Seleciona todos os campos 'td' 
            var tdDia = eventoCalendario.querySelectorAll("td");

            // Laço que percorrerá todos os campos 'td'
            for (var i = 0; i < tdDia.length; i++) {

                // Cria um array e coloca cada campo em un índice 'i' do array 'diasDaSemana' 
                var diasDaSemana = tdDia[i];

                // Limpa o textContent das 'td'
                diasDaSemana.textContent = '';
                
                // Modifica o CSS Background - DANGER  
                L1C6.classList.add("bg-danger");
                L1C7.classList.add("bg-danger");
                L2C1.classList.add("bg-danger");
                L2C7.classList.add("bg-danger");
                L3C1.classList.add("bg-danger");
                L3C7.classList.add("bg-danger");
                L4C1.classList.add("bg-danger");
                L4C7.classList.add("bg-danger");
                L5C1.classList.add("bg-danger");
                L5C7.classList.add("bg-danger");
                L6C1.classList.add("bg-danger");
                
                // Modifica o CSS Background - SECONDARY
                L2C2.classList.add("bg-secondary");
                L2C3.classList.add("bg-secondary");
                L2C4.classList.add("bg-secondary");
                L2C5.classList.add("bg-secondary");
                L2C6.classList.add("bg-secondary");
                L3C2.classList.add("bg-secondary");
                L3C3.classList.add("bg-secondary");
                L3C4.classList.add("bg-secondary");
                L3C5.classList.add("bg-secondary");
                L3C6.classList.add("bg-secondary");
                L4C2.classList.add("bg-secondary");
                L4C3.classList.add("bg-secondary");
                L4C4.classList.add("bg-secondary");
                L4C5.classList.add("bg-secondary");
                L4C6.classList.add("bg-secondary");
                L5C2.classList.add("bg-secondary");
                L5C3.classList.add("bg-secondary");
                L5C4.classList.add("bg-secondary");
                L5C5.classList.add("bg-secondary");
                L5C6.classList.add("bg-secondary");

                // Verifica a posição do array para adicionar o número di dia 
                if (i >= 5 && i <= 35) {
                    diasDaSemana.textContent = dia;
                    
                    dia++;
                }

                console.log(diasDaSemana);

            }      

            break;
    }





}




/*

    var eventoForm = eventoCalendario.querySelector(".evento__form");

    var defineData = eventoForm.querySelector(".defineData");

    var descricao = eventoForm.querySelector("#evento__descricao");

    var botaoLimpar = eventoForm.querySelector("#limpar");

    var botaoEnviar = eventoForm.querySelector("#enviar");



*/