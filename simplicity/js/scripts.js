/* JS INICIAL PARA CEP/ENDEREÇO */
const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");
const inputTelefone = formulario.querySelector("#telefone");
const inputEndereco = formulario.querySelector("#endereco");
const inputBairro = formulario.querySelector("#bairro");
const inputCidade = formulario.querySelector("#cidade");
const inputEstado = formulario.querySelector("#estado");
const bStatus = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");

botaoLocalizar.addEventListener("click", function (event) {
    // Entre no site: viacep.com.br

    /* Pegar o cep digitado*/
    let cep = inputCep.value;

    /* CEP no padrão da API*/
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    // let url = "https://viacep.com.br/ws/"+cep+"/json/";


    /*  Ajax: Cumunicação assincrona com a viaCEP  usando a função chamada fetch. */

    //1) Fazer a conexão com API (ou acessar)
    fetch(url)

        //2) Recupere a resposta do acesso no formato JSON
        .then(resposta => resposta.json())

        //3) E então mostre os dados
        .then(dados => {
            if ("erro" in dados) {
                bStatus.innerHTML = "CEP não encontrado!";
                inputCep.focus();
            } else {
                bStatus.innerHTML = "CEP encontrado!";
                inputEndereco.value = dados.logradouro;
                inputBairro.value = dados.bairro;
                inputCidade.value = dados.localidade;
                inputEstado.value = dados.uf;
            }



        });

});



/* Lib VanillaMasker:
https://github.com/vanilla-masker/vanilla-masker */
VMasker(inputCep).maskPattern("99999-999");
VMasker(inputTelefone).maskPattern("(99) 9999-9999");