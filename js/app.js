// Passando uma função ao realizar um click
document.getElementById("botaoJogar").onclick = () => { // Arrow function
    const jogadorCara = getMyElement("jogadorCara").value;
    const jogadorCoroa = getMyElement("jogadorCoroa").value;

    if (jogadorCara == "" || jogadorCoroa == "") {
        return alert("Digite os nomes");
    }
    
    const valor = Math.random();

    let imagem = "";
    let nomeVencedor = "";

    if (valor > 0.5) {
        imagem = "coroa";
        nomeVencedor = jogadorCoroa;
    } else {
        imagem = "cara";
        nomeVencedor = jogadorCara;
    }

    const caminhoImagem = `assets/images/${imagem}.jpg`;
    getMyElement("imagemMoeda").src = caminhoImagem;    
    alert(nomeVencedor);
}


function getMyElement(id) {
    return document.getElementById(id);
}










