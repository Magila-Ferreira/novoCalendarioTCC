<html>
    <select onchange="javascript:selectMes(this);">
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
    </select>
</html>

// Seleciona a página inteira  
var eventoCalendario = document.querySelector(".evento__dropdown-mes");

// Seleciona todos os meses
var defineMes = eventoCalendario.querySelector("select");

// Variável calendar armazena as td limpas
var calendar = document.querySelector("#evento__calendario");

// Variável que receberá o calendário limpo:
var table = document.querySelector("tbody");

// Seleciona todos os campos 'td' 
var tdDia = eventoCalendario.querySelectorAll("td");

// Início do mês
var dia = 1;

defineMes.addEventListener('change', selectMes);

function selectMes() {

    // Variável armazena o conteúdo da variável mês, de forma separada (cada vez que passa pelo laço o conteúdo da variável muda)
    var mesDefinido = defineMes.value;

    if (mesDefinido === '1') {

        // Laço que percorrerá todos os campos 'td'
        for (var i = 0; i < tdDia.length; i++) {
            
            // Cria um array e coloca cada campo em un índice 'i' do array 'diasDaSemana' 
            var diasDaSemana = tdDia[i];

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

            // Verifica a posição do array para adicionar mais um dia 
            if (i >= 4 && i <= 35) {
                diasDaSemana.textContent = dia;
                console.log(diasDaSemana);
                dia++;
            } 
        } dia = '';

    } else if (mesDefinido === '2') {
        

        // Laço que percorrerá todos os campos 'td'
        for (var i = 0; i < tdDia.length; i++) {

            // Cria um array e coloca cada campo em un índice 'i' do array 'diasDaSemana' 
            var diasDaSemana = tdDia[i];

            // Modifica o CSS Background - DANGER  

            L1C7.classList.add("bg-danger");
            L2C1.classList.add("bg-danger");
            L2C7.classList.add("bg-danger");
            L3C1.classList.add("bg-danger");
            L3C7.classList.add("bg-danger");
            L4C1.classList.add("bg-danger");
            L4C7.classList.add("bg-danger");
            L5C1.classList.add("bg-danger");

            // Modifica o CSS Background - SECONDARY
            L1C2.classList.add("bg-secondary");
            L1C3.classList.add("bg-secondary");
            L1C4.classList.add("bg-secondary");
            L1C5.classList.add("bg-secondary");
            L1C6.classList.add("bg-secondary");
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

            // Verifica a posição do array para adicionar mais um dia 
            if (i >= 0 && i <= 28) {
                diasDaSemana.textContent = dia;
                dia++;
            } 
        } dia = ''; 
    
    }   else {
        table.appendChild(calendar);
    }      
}