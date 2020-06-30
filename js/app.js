// Passando uma função ao realizar um click
document.getElementById("botaoJogar").onclick = () => { // Arrow function
    let valor = Math.random();

    let imagem = "";

    if (valor > 0.5) {
        imagem = "coroa";
    } else {
        imagem = "cara";
    }

    let caminhoImagem = `assets/images/${imagem}.jpg`;
    document.getElementById("imagemMoeda").src = caminhoImagem;    
}



// let alunoA = "Jonathan";
// let alunoB = "Maria";

// // Arrays - Vetores
// let nomeAlunos = ["Jonathan","Maria","João","Pedro"];


// // Laço de repetição - Percorrendo o Array
// for(let i = 0; i < 4; i++) {
//     console.log("Nome do Aluno: " + nomeAlunos[i]);
// }

// let contador = 0;

// // Estrutura de repetição - Percorrendo o Array com paradas.
// // while (contador < 3) {
// //     console.log("Teste");
    
// // }


