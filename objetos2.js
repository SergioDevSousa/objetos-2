const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
];

// function contaTotal(lista) {
//     return lista.length
// }
// console.log(contaTotal(carros))

//--------------------------------------

// Crie uma função que recebe a lista de carros como parâmetro e retorna a soma do preço dos veículos.

// function precoTotal(lista) {
//     const soma = lista.reduce((acumulador, carros) => acumulador + carros.preco, 0)
//     return `A soma do preço de todos veículos é R$ ${soma.toFixed(2).replace('.', ',')}`
// }
// console.log(precoTotal(carros))

//-----------------------------------------

//Crie uma função que recebe a lista de carros e a marca procurada como parâmetro, filtre e retorne todos veículos da marca.

// function filtraPorMarca(lista, marca) {
//     let veiculosPorMarca = [];

//     for (i = 0; i < lista.length; i++) {
//         if (lista[i].marca === marca)
//             veiculosPorMarca.push(lista[i])
//     }
//     return veiculosPorMarca;
// }
// console.log(filtraPorMarca(carros, 'VW'));
//---------------------------------------------

//Crie uma função que recebe a lista de carros e o acessório procurado como parâmetro, filtre e retorne todos veículos que tenham o acessório.

// function filtraPorAcessorio(lista, acessorios) {
//     const veiculosPorAcessorio = [];

//     for (i = 0; i < lista.length; i++){
//         for(j = 0; j < lista[i].acessorios.length; j++){
//             if(lista[i].acessorios[j] === acessorios){
//                 veiculosPorAcessorio.push(lista[i])
//             }
//         }
//     }
//     return veiculosPorAcessorio
// }
// console.log(filtraPorAcessorio(carros, 'Alarme', 'Trava', 'Ar', 'Vidro Elétrico' ));

//--------------------------------------------------

// Crie uma função que recebe a lista de carros como parâmetro, filtre e retorne todos veículos que sejam completos.

// function eCarroCompleto(lista) {
//     const veiculosCompletos = [];

//     for(i = 0; i<lista.length; i++){
//         if (lista[i].completo){
//             veiculosCompletos.push(lista[i]);
//         }

//     }
//     return veiculosCompletos
// }
// console.log(eCarroCompleto(carros))

//---------------------------------------------------

// Crie uma função para adicionar novos carros a lista. Retorne a lista de carros atualizada.

// const carro = [
//     {
//         modelo: "Classic",
//         marca: "Chevrolet",
//         ano: "2010",
//         cor: "Prata",
//         completo: true,
//         acessorios: ['Vidro Elétrico', 'Direção Hidraulica', 'Ar', 'Trava'],
//         preco: 20000.00
//     }
// ];

// function adicionaCarro(carroNovo) {
//     carros.push(carroNovo)
// }

// adicionaCarro(carro);
// console.log(carros);

//----------------------------------

// Crie uma função que recebe como parâmetro a lista de carros e o índice de um veículo.
// Remova o elemento referente ao indice e retorne a lista atualizada.
// Lembre-se de tratar quando a posição for inválida.

// function removeCarro(lista, indice) {
//     let carrosAtualizados = [];

//     for (i = 0; i < lista.length; i++){
//         if(i != indice){
//             carrosAtualizados.push(lista[i]);
//         }
//     }
//     if(carrosAtualizados.length < indice){
//         return 'Posição inválida';
//     }
//     return carrosAtualizados;
// }
// console.log(removeCarro(carros, 2))

//-----------------------------------------

// Crie uma função que recebe a lista de carros como parâmetro.
// Retorne a quantidade de carros com menos de 10 anos.

// function contaCarrosNovos(lista) {
//     let semiNovo = 0

//     for(let i = 0; i< lista.length; i++){
//         if (lista[i].ano >= 2013){
//             semiNovo++
//         }
//     }
//     return semiNovo
// }


// console.log(contaCarrosNovos(carros));

//-----------------------------------------

// Seu chefe percebeu que deixou de incluir um campo importante nos objetos, o campo 'donos'.
// Todos os carros da concessionária são de segunda mão.
// Com isso, desenvolva uma função que recebe como parâmetro a lista de carros, um índice da lista e um objeto pessoa. Dentro do objeto pessoa deve constar o nome do proprietário e um telefone para contato.
// Sabemos que não existe esta propriedade, então a propriedade donos deverá ser criada.
// Retorne a lista atualizada.

let pessoa = {
    nome: 'Sérgio',
    contato: '(81) 1111-1111'
};

function adicionaNovoObjeto(lista, indice, dono){

    for(let i = 0; i < lista.length; i++){
        lista[i].dono = {};
    }
    lista[indice].dono = dono;
}

adicionaNovoObjeto(carros, 0, pessoa);
console.log(carros);
