let sectionCards = document.getElementById("resultados-pesquisa")
let btnSearch = document.getElementById("btnSearch")
let inputSearch = document.getElementById("campo-pesquisa")

btnSearch.addEventListener("click", () =>{
    let inputSearchValue = inputSearch.value
    
    let data = ""
    if(inputSearchValue == ""){
        sectionCards.innerHTML = "<div class='item-resultado'><p>Nada foi Encontrado</p><div>"
        console.log("não achou");
        inputSearch.value = ""
        return
        
    }
    for(let dado of campeoes){
        
        //Transforma em minúsculo para otimizar a pesquisa
        valueInputLowerCase = inputSearchValue.toLowerCase()
        nameLowerCase = dado.nome.toLowerCase()
        descriptonLowerCase = dado.descricao

        //Se o nome do personagem conter os dados do campo de pesquisa, e o campo de pesquisa for diferente de vazio, então imprime os campeões que contém as letras digitadas
        if(nameLowerCase.includes(valueInputLowerCase)){
            data += `
                <div class="item-resultado">
            
                    <h2 class="texto-destaque">
                        ${dado.nome}
                    </h2>   
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                    <a href="${dado.link}" target="_blank" class="texto-destaque">
                        Saiba mais
                    </a>
                </div>
            ` 
        }
        if(!data){
            data = "<div class='item-resultado'><p>O campeão não existe</p><div>"    
        }
    }
    sectionCards.innerHTML = data
    inputSearch.value = ""
})