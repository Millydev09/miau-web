function toggleMode(){
    const body = document .body;
    const botao = document.getElementById("btnMudar");

    body.classList.toggle ("dark-mode");
    if(body.classList("class-mode")){ 
        botao.textContent="Mudar para claro";

    } else {
        botao.textContent ="Mudar para escuro";
    }
}