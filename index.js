let ranking = 0;

let heroi = ["Samuel", 10000];
let nivelHeroi = heroi[1];

let classificacaoHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (nivelHeroi <= 1000) {
    ranking = 0;
} else if (nivelHeroi > 1000 && nivelHeroi <= 2000) {
    ranking = 1;
} else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
    ranking = 2;
} else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
    ranking = 3;
} else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    ranking = 4;
} else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
    ranking = 5;
} else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    ranking = 6;
} else if (nivelHeroi >= 10001) {
    ranking = 7;
}

console.log(`O Herói de nome ${heroi[0]} está no nível de ${classificacaoHeroi[ranking]}`);
