/*
[x] Descobrir quando o botão for clicado
[x] Pegar o que foi escrito no input
[] Enviar para o N8N
[] Receber o que o N8N recebeu
[] Mostrar na tela o que ele respondeu
*/

let webhook = "https://tuliovitor.app.n8n.cloud/webhook/animacao-css";

async function cliqueiNoBotao() {
    let textoInput = document.querySelector(".input-animacao").value;
    let codigo = document.querySelector(".area-codigo");
    let areaResultado = document.querySelector(".area-resultado");
    
    let resposta = await fetch(webhook , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta: textoInput })
    })

    let resultado = await resposta.json();

    let info = JSON.parse(resultado.resposta);

    console.log(info);

    codigo.innerHTML = info.code;
    areaResultado.innerHTML = info.preview;

    document.head.insertAdjacentHTML("beforeend", "<style>" + info.style + "</style>");
}