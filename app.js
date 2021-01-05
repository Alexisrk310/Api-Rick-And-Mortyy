
const response = fetch('https://rickandmortyapi.com/api/character')
    response
        .then((res)=> res.json())
        .then((data)=> {
            let container =  document.querySelector('.content1')
            data.results.forEach((character) => {
                let card = `
                <div class="content2">
                <img src="${character.image}" class="img">
                        <div class="content">
                            <div class="flex-content">
                                <div>   
                                    <label> <b>Nombre:</b> ${character.name}</label> <br>     
                                    <label > <b>Especie:</b> ${character.species}</label> 
                                    <label> <b>Sexo: </b> ${character.gender}</label>  
                                </div> 
                                <div>
                                    <label> <b>Estado: </b> ${character.status}</label> <br>
                                    <label> <b>Tipo:</b> ${character.type}</label>
                                </div>
                            </div>
                        </div>  
                 </div>`
                container.innerHTML+= card
             }  )
        })
        .catch((e)=>console.log(e))
