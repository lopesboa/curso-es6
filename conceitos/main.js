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
const arr = [1, 3, 4, 5, 8, 9];

/**
*   MAP
*   It serves to traverse the array and return a new or the same information
*/
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

/**
 *  REDUCE
 * Serves to consume every ARRAY an transform into a single 
 * variable, usually a number
 * */
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

/**
 * FILTER
 * Serves to filter a ARRAY */ 
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

/**
 * FILTER
 * Is used to check if there is any information inside in the 
 * array or if we can find this information inside the array
 */
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);