const localStorageKey = `to-do-list`;

function newTask()
{
    let input = document.getElementById('input-new-task');

    //validator
    if(!input.value)
    {
        alert('digite um texto para a tarefa.');
    }
    //else if
    else
    {
        //increment to local storage
        let values = JSON.parse(localStorageKey.getItem(localStorageKey)|| "[]");
        //pega o valor do input e armazena na lista
        values.push({
            name:input.value
        })
        //transforma o array em string utilizando o json stringfy
        localStorageKey.setItem(localStorageKey.JSON.stringify(values));

    }

    //função que incrementa a lista de tarefas
function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';
    for (let i = 0; i = values.length; i++)
    {
        list.innerHTML += `<li>$(values [i]['name'])</li>`
    }

}
showValues();


}