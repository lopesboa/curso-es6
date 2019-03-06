const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'}
];

const newUsuario = usuarios.map(usuario => usuario.idade);

console.log(newUsuario);

const company = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
);

console.log(company);
