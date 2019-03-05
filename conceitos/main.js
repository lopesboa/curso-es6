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
function teste(x){
    let y = 2;

    if(x > 5){
        let y = 4;
        console.log(x, y);
    }
}

teste(10);

