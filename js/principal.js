var titulo = document.querySelector(".titulo"); //Seleciona os itens da classe titulo
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //Seleciona os itens de todas as classes cuja o nome for paciente

for(var i = 0; i < pacientes.length; i++){

    console.log(pacientes[i]);
    var paciente = pacientes[i]; //Atribuição simples para reaproveitar o código.
    
    var tdPeso = paciente.querySelector(".info-peso"); //Seleciona a classe
    var peso = tdPeso.textContent;//Pega o texto da classe 

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 400){
        console.log("peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido"); //Adicionando uma classe ao elemento selecionado.
    }

    if (altura <= 0 || altura >= 3.00){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido"); //Adicionando uma classe ao elemento selecionado.
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); //Determina casas decimais após a virgula.
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
/* Botão adicionar tem o método addEventListener que escuta o click e executa uma função anônima */
botaoAdicionar.addEventListener("click", function(event) { //Recebendo o evento como parametro para manipular
    /* Recebendo dados do input */

    event.preventDefault(); //Manipulando o evento, previnindo que ele não recarregue a página e mantenha os dados do input preenchidos
    
    var form = document.querySelector("#form-adicionar"); //Selecionando a tag do formulário adicionar
    var nome = form.nome.value; //Recebendo o valor que está dentro do input cujo o seu name é "nome"
    var peso = form.peso.value; //Recebendo o valor que está dentro do input cujo o seu name é "peso"
    var altura = form.altura.value; //Recebendo o valor que está dentro do input cujo o seu name é "altura"
    var gordura = form.gordura.value; //Recebendo o valor que está dentro do input cujo o seu name é "gordura"

    /* Inserindo dados na tabela */
    
    var pacienteTr = document.createElement("tr"); //Inserindo uma tag tr na página html 

    var nomeTd = document.createElement("td"); //Criando uma tag td e adicionando essa tag na variável criada.
    var pesoTd = document.createElement("td"); //Inserindo uma tag td e atribuindo a tag a variável criada
    var alturaTd = document.createElement("td"); //Inserindo uma tag td e atribuindo a tag a variável criada
    var gorduraTd = document.createElement("td"); //Inserindo uma tag td e atribuindo a tag a variável criada
    var imcTd = document.createElement("td"); //Inserindo uma tag td e atribuindo a tag a variável criada

    nomeTd.textContent = nome; //Atribuindo dentro da tag td, o valor recebido da variável nome que contem o valor do input
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd); //Adicionando dentro da tag pacienteTr, os filhos em forma da tag td
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes"); //Selecionando no documento o ID tabela-pacientes

    tabela.appendChild(pacienteTr); //As tags que estão dentro da variável pacienteTr, serão adicionadas dentro da variável tabela
});


  /*var inputFrase = document.querySelector('.frase');
    var botao = document.querySelector('.botao1');
    var copia = document.querySelector('.copia');

    function botaoHandler() {

        copia.textContent = inputFrase.value; //Pega o valor coletado do input e salva dentro do textContent da variável copia
        inputFrase.value = ''; //Limpa o valor do inputFrase
    }

    botao.addEventListener('click', botaoHandler); //Utiliza o escutador de evento do botão ao clicar e executa a função botaoHandler
    */

    