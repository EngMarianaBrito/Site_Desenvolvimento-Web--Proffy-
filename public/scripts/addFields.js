//BOTÃO = Procurar -> Clicar -> Executar(duplica e cola na pagina)
document.querySelector('#add-time')
    .addEventListener('click', cloneField)

function cloneField() 
{
    const  newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    //Estrutura de repetição para a duplicação do campo em branco 
    fields.forEach(function(field)
    {    
        field.value = ""
    })
    

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
} 