//cadeia de prototipos
var aluno = {
	serie: "1º Ano"
};

var bruna = {
	nome: "Bruna",
	idade: 7,
	__proto__: aluno
};

var jose = {
	nome: "José",
	idade: 6
};

Object.setPrototypeOf(jose, aluno);

console.log(bruna);
console.log(bruna.serie);

console.log(jose);
console.log(jose.serie);

//função fábrica
var criaAluno = function (nome, idade) {
	return {
		nome: nome,
		idade: idade,
		serie: "1º Ano"
	};
};

var bruna = criaAluno("Bruna", 7);
var jose = criaAluno("José", 6);

console.log(bruna);
console.log(jose);

//função construtora - new
var Aluno = function (nome, idade) {
	this.nome = nome;
	this.idade = idade;
};

Aluno.prototype.serie = "1º Ano";

//criando o objeto com o new
var bruna = new Aluno("Bruna", 7);
console.log(bruna);
console.log(bruna.serie);

//criando através de um objeto vazio e utilizando __proto__
var jose = {};
jose.__proto__ = Aluno.prototype;

//então, passamos como contexto e invocamos com o call ou apply
Aluno.call(jose, "José", 6);
//Aluno.apply(jose, ["José", 6]);
console.log(jose);
console.log(jose.serie);