var botaoLogar = document.querySelector("#form-verificacao");

botaoLogar.addEventListener("click", function() {
    var RM = botaoLogar.RM.value;
    var senha = botaoLogar.senha.value;
    var login = RM + senha;
});
