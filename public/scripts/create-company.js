// ! VOU ESCREVER O QUE FUI ENTENDENDO !

// Aqui é criado uma function para pegar os estados
function populateUf() {
    //pegando o seletor no HTML
    const ufSelect = document.querySelector("select[name=uf]");

    /*Aqui puxa a API, transformando em JSON e dps
    a variável 'states' recebe a lista*/
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        
        /*  percorre toda a lista de estados,
            percorrendo de um em um, para aparecer a listagem
            na página*/
        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    } )
}

//mandando executar a function
populateUf()

// Aqui é criado uma function para pegar as cidades (após inserir o estado)
function getCities(event) {
    //pegando os seletores no HTML
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("select[name=state]");

    //capturando o evento - os estados.
    const ufValue = event.target.value;

    //capturando a posição do evento - 'qual estado?!'
    const indexOfSelectedState = event.target.selectedIndex;

    stateInput.value = event.target.options[indexOfSelectedState].text;

    //passando o estado na URL de busca
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    //Liberando o campo para ser preenchido
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>";
    citySelect.disable = true;

    /*O Fetch fornece uma definição genérica de objetos de Request e Response 
    (e outras coisas envolvidas com solicitações de rede). Isso permitirá que
    eles sejam usados onde quer que sejam necessários no futuro, seja para
    service workers, Cache API e outras coisas similares que manipulam ou
    modifiquem pedidos e respostas ou qualquer tipo de caso de uso que possa
    exigir que você gere suas próprias responses programaticamente.*/

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        //abilitando a propriedade 'disable' do campo 'Cidade'
        citySelect.disable = false;

    } )
}

document
        .querySelector("select[name=uf]")
        .addEventListener("change", getCities)


//Com o que a empresa trabalha
//pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){

    const itemLi = event.target;

    //adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    console.log('ITEM ID: ', itemId)

    //verificar se existem itens selecionados, se sim
    // pegar os itens selecionados
    
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    } )

    // Se já estiver selecionado, tirar da seleção
    if(alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        } )

        selectedItems = filteredItems
    }else{
        // se não tiver selecionado, adicionar à seleção
        // adicionar à seleção

        selectedItems.push(itemId)
    }

    //console.log('selectedItems: ', selectedItems)

    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}