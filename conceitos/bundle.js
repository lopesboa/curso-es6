"use strict";

// ############ CLASSES ES6 ############
// class List{
//     constructor(){
//         this.data = [];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoLis extends List{
//     constructor(){
//         super();
//         this.usuario = 'Lopes';
//     }
//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }
// var MinhaLista = new TodoLis();
// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('Novo Todo');
// };
// MinhaLista.mostraUsuario();
// STATIC METHOD
// class Matematica{
//     static soma (a, b){
//         return a + b;
//     }
// }
// console.log(Matematica.soma(1, 2));
// ############ CONT & LET ############
// function teste(x){
//     let y = 2;
//     if(x > 5){
//         let y = 4;
//         console.log(x, y);
//     }
// }
// teste(10);
// ############ ARRAY OPARATIONS ############
// const arr = [1, 3, 4, 5, 8, 9];

/**
*   MAP
*   It serves to traverse the array and return a new or the same information
*/
// const newArr = arr.map(function(item, index){
//     return item + index;
// });
// console.log(newArr);

/**
 * REDUCE
 * Serves to consume every ARRAY an transform into a single 
 * variable, usually a number
 * */
// const sum = arr.reduce(function(total, next){
//     return total + next;
// });
// console.log(sum);

/**
 * FILTER
 * Serves to filter a ARRAY */
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filter);

/**
 * FILTER
 * Is used to check if there is any information inside in the 
 * array or if we can find this information inside the array
 */
// const find = arr.find(function(item){
//     return item === 4;
// });
// console.log(find);

/**
 * ############ ARROW FUNCTIONS ############ 
 * */
// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(function(item){
//     return item * 2;
// });
// const newArr = arr.map(item => item * 2);
// console.log(newArr);
// const teste = () => ({nome: 'Lopes'});
// console.log(teste());

/**
 * ############ DEFAULT VALUE ############
 */
// function soma(a = 3, b = 6){
//     return a + b;
// }
// const soma = (a = 3, b = 6) =>  a + b;
// console.log(soma(1));
// console.log(soma());

/**
 * ############ OBJECT DESTRUCTURING ############
 */
// const usuario ={
//     nome: 'Lopes',
//     idade: 31,
//     endereco: {
//         cidade: 'Guaratinguetá',
//         estado: 'SP'
//     }
// };
// const {nome, idade, endereco:{cidade} } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// function mostraNome({ nome, idade }){
//     console.log(nome, idade);
// }
// mostraNome(usuario);

/**
 * ############ REST/SPREAD OPERATORS
 */
// REST IN OBJECT
// const usuario = {
//     nome: 'Lopes',
//     idade: 31,
//     empresa: 'Jobless'
// };
// const {nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);
// REST IN ARRAY
// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// REST IN FUNCTION
// function soma(a, b, ...params){
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 3, 4));
// SPREAD
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// const usuario1 = {
//     nome: 'Lopes',
//     idade: 31,
//     empresa: 'Bakongo'
// };
// const usuario2 = {...usuario1, nome: 'Naiara' };
// console.log(usuario2);

/**
 * LITERAL TEMPLATE
 */
var nome = 'Lopes';
var idade = 31; // console.log('Meu nome é ' + nome + 'e tenho ' + idade + ' anos');

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos"));
