//Ao final da página HTML, antes do fechamento do body, linkar o documento js à página -- Para a página renderizar primeiro seu conteúdo e depois executar os códigos JS -- EVITA LENTIDÃO DA PÁGINA <script src="script.js"></script>

//Variável armazena dados que serão usados durante a execução do programa

const primeiroNome = "Percy"; //constante CONST que recebe valores, geralmente imutáveis
//como o valor que está recebendo é um texto, esse tipo de dado é chamado de STRING
//STRING sempre estará entre aspas, tanto simples quanto duplas

const ultimo_nome = "Jackson";

const nome_completo = primeiroNome + " " + ultimo_nome;
console.log(nome_completo);
console.log(primeiroNome + " " + ultimo_nome);
console.log(`${primeiroNome} ${ultimo_nome}`);
console.log(primeiroNome, ultimo_nome);
//há a possibilidade de CONCATENAR variáveis e criar uma nova
//CONCATENAR = juntar
//concatenei as constantes primeiro_nome e ultimo_nome e criei uma nova com o valor dessa concatenação

// ao concatenar, os valores ficam grudados, pois há a junção desses valores, para espaçar, precisa de um espaço entre aspas

let idade = 22; //variável LET que recebe valores mutáveis, consegue redeclarar novos valores durante a execução do programa
//como o valor que está recebendo são números, esse tipo de dado é chamado de NUMBER
//NUMBER não faz uso de aspas, se ele estiver entre aspas, é tratado pelo programa como string

let ano_nascimento = 2000;

//ao concatenar números, seus valores são somados
let ano_atual = idade + ano_nascimento;
console.log(ano_atual);

const bola_preco = 4;
const criancas = 2;
const ganho_total = bola_preco * criancas;
console.log(ganho_total + " reais");

const humano = true;
console.log(humano);
//o tipo de dado que a CONST HUMANO recebe é true, ou seja, é um BOOLEAN
//BOLEAN recebe valores como TRUE e FALSE apenas
//bastante usados em condicionais (if/else)

////////////////////////////////////////////////////////////
let numero_telefone = null;
console.log(numero_telefone);
//a variável LET recebe NULL como valor
//NULL represente vazio, ou seja, não tem valor, o número de telefone não foi informado

//É DIFERENTE DE

let numero;
console.log(numero);
//a variavel numero recebe UNDEFINED como valor
//UNDEFINED representa valor não definido, ou seja, uma variável que foi criada e não recebeu um valor específico

/////////////////////////// IF ELSE
//condições para algo acontecer ou deixar de acontecer

if (primeiroNome.substring(0, 1) === "P" || numero === 12) {
  console.log("O nome começa com P ou o número é 12");
} else {
  console.log("Nem o nome começa com P nem o número é 12");
}

const fim_de_semana = true;

if (fim_de_semana) {
  console.log("Bora descansar!!");
} else if (fim_de_semana === "sexta") {
  console.log("Segura mais um cado que o descanso tá vindo");
} else {
  console.log(":/");
}

//////////////////////////////
let teste_numero = 10;
let teste_segundo_numero = "10";

if (teste_numero === teste_segundo_numero) {
  console.log("São iguais");
} else {
  console.log("São diferentes");
}
/////////////////////////

if (idade >= 18) {
  console.log("Você pode aprender a dirigir");
}

//////////////////////////////ARRAY[]
//ARRAYS são listas que contém dados que serão usados ou acessados durante a execução do projeto

let jogos = ["SMW", "Zelda", "Pokemon", "GTA", "lol"];

jogos.push("Mario Odyssey");
//PUSH adiciona um item ao final da lista
jogos.unshift("Minecraft");
//UNSHIFT adiciona um item no início da lista

jogos.pop();
//POP remove o último item da lista
jogos.shift();
//SHIFT remove o primeiro item da lista

let melhores_jogos = jogos.slice(0, 3);
console.log(melhores_jogos);
//SLICE "fatia" o array
// é sempre a última posição - 1
//no exemplo slice(0, 3) mostra os jogos que estão entre a posições 0 e 2

console.log(jogos);

///////////////////////OBJETOS{}
//OBJETO é uma coleção de dados

let super_mario_world = {
  nascimento: 1990,
  pais: "Japão",
  criador: "Shigeru Miyamoto"
};
console.log(super_mario_world);

super_mario_world.console = "Super Nintendo";
super_mario_world.avaliacao = "supimpa";
delete super_mario_world.nascimento;

console.log(super_mario_world.criador);
console.log(super_mario_world);

///////////////////////////LOOPS - WHILE E FOR
//LOOPS - estrutura de repetição que vão realizar os códigos até que a condição imposta

//FOR (início, condição, resolução) - vai realizar as condições um número finito de vezes

for (let x = 0; x <= 10; x++) {
  console.log(x);
}
// variável x começa com valor 0 e enquanto x for menor ou igual a 10, somar + 1 -- contagem crescente

for (let w = 10; w >= 0; w--) {
  console.log(w);
}
// variável w começa com valor 10 e enquanto w for menor ou igual a 0, subtrai - 1 -- contagem descrevente

for (let q = 0; q <= 100; q += 2) {
  console.log(q);
}
// variável q começa com valor 0 e enquanto q for menor ou igual a 100, somar de 2 em 2, ou seja, apenas os números pares

for (let p = 1; p <= 77; p += 2) {
  console.log(p);
}
// variável p começa com valor 1 e enquanto p for menor ou igual a 77, somar de 2 em 2, ou seja, apenas o pares.

//WHILE vai realizar as condições em um número infinito de vezes
//WHILE (condição) {
//  console.log(variavel)
//variavel operação
//}

//1 - Criar um loop que conte de 1 até 10 usando FOR

for (let a = 1; a <= 10; a++) {
  console.log(a);
}

let e = 1;
while (e <= 10) {
  console.log(e);
  e++;
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE

let b = 10;
while (b >= 1) {
  console.log(b);
  b--;
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100

for (let c = 1; c <= 100; c += 2) {
  console.log(c);
}

//4- Criar um loop que conte todos os números pares de 0 a 100

for (let d = 0; d <= 100; d += 2) {
  console.log(d);
}

//////////////////////////FUNCTION

// Funções são blocos de códigos reutilizáveis, isso significa que não precisamos reescrever o mesmo código varias vezes. Criamos o código atrelamos ele a um nome e sempre que precisarmos podemos chamar esse código usando esse nome.

function olaAlgumaCoisa() {
  console.log(`Olá ${nome_completo}`);
}
olaAlgumaCoisa();

function saudacoes(name) {}
saudacoes();
