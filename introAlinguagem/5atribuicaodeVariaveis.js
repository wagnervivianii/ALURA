// Aprendemos que ao trabalharmos com números que possuem casas decimais, deveremos utilizar o ponto (.), afinal a vírgula possui outra função no código.

// Agora estudaremos mas a fundo a atribuição de variáveis, então criaremos um novo arquivo 5-atribuicaoDeVariaveis.js, que terá o seguinte conteúdo e concatenações :
console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const nome = "Ricardo";
const sobrenome = "Bugan"; 

console.log(nome + sobrenome);

// Ao executarmos o programa no Powershell, notaremos que a reposta será RicardoBugan, sem espaçamento. Para resolver essa questão poderemos simplesmente adicionar um espaço entre nome e o sinal de concatenação +, algo como (nome + " " sobrenome)ou utilizar a vírgula:

console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const nome = "Ricardo";
const sobrenome = "Bugan"; 

console.log(nome, sobrenome);

// Existem outras maneiras de trabalhar com strings, isto é, textos. Podemos declarar nossos textos entre crases. Podemos realizar concatenações, mas neste caso não utilizaremos o sinal "+". Nas versões mais novas do JavaScript conseguimos fazer a interpolação de variáveis por meio de ${}:

console.log(`Meu nome é ${nome} ${sobrenome}`); 

// Em nosso código, atribuímos todas as nossas variáveis como const, então a sobrescrição de dados não é possível. Mudaremos então os tipo das variável nome para let, pois ele permite mudanças:
let nome = "Ricardo"

// A definição let existe e eventualmente precisaremos utilizá-la, mas podemos encontrar novos caminhos para manter nosso código mais condizente com as boas práticas. Como por exemplo criar uma nova variável que condense nome e sobrenome:
const nomeCompleto = nome + sobrenome;