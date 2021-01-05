
const rick= fetch('https://rickandmortyapi.com/api/character')
    rick
        .then((res)=>res.json())
        .then((data)=>{console.log(data)
          let content1 =  document.querySelector('.content1')
          
  for (let i = 0; i<20; i++) {
    let codigo = `
    <div class="content2">
    
    <img src="${data.results[i].image}" class="img">
            <div class="content">
            
    
                <div class="flex-content">
                    <div>
    
                        <label> <b>Nombre:</b> ${data.results[i].name}</label> <br>     
                        <label > <b>Especie:</b> ${data.results[i].species}</label> 
                        <label> <b>Sexo: </b> ${data.results[i].gender}</label> 
    
    
                    </div>
    
                    <div>
                        <label> <b>Estado: </b> ${data.results[i].status}</label> <br>
                        <label> <b>Tipo:</b> ${data.results[i].type}</label>
                    </div>
    
    
    
                </div>
            </div>
    
     </div>`
     content1.innerHTML+= codigo

 }

  
            console.log(data.results[0].name)

        })
        .catch((e)=>console.log(e))
        

