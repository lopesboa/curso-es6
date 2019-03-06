class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin (){
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
    
}

const user1 = new Usuario("teste@teste.com", "senha123");
const adm1 = new Admin("teste@teste.com", "senha123");

console.log(user1.isAdmin());
console.log(adm1.isAdmin());