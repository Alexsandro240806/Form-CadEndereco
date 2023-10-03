'use stript'; // Modo restrito
//Consuido API e CPF, do Viacep
// https://viacep.com.br/

// Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

// Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa número irformado com expressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep); // verifica tamanho do cep digitando e executa função de validação de cep eNumero

//Função para preencher formulário
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//Consumo da API da ViaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValid(cep.value)){
        const dados = await fetch(url); // esperar
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres)
        }
    }else{
        alert('CEP incorreto');
    }
}
//Adicionar evento DOM ao input do CEP para execultar função pesquisarCEP
document.getElementById('cep').addEventListener('focusout',pesquisarCep);