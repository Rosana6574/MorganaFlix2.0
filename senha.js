
const senhaCorreta = "88ovelha47h";

function verificarSenha(){

    const senhaDigitada = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagemErro");

    if(senhaDigitada === senhaCorreta){

        localStorage.setItem("indexPermitido","true");
        window.location.href = "TelaPrincipal.html";

    }else{

        mensagem.textContent = "Mágica incorreta";

    }

}

function mostrarSenha(){
    const input = document.getElementById("senha");

    if(input.type === "password"){
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Animação da neve

const snowContainer = document.querySelector(".snow-container");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    snowflake.innerHTML = Math.random() > 0.5 ? "❅" : "❆";

    snowflake.style.left = Math.random() * window.innerWidth + "px";

    snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";

    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

setInterval(createSnowflake, 200);
