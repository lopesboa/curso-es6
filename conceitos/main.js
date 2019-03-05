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

class Matematica{
    static soma (a, b){
        return a + b;
    }

}

console.log(Matematica.soma(1, 2));