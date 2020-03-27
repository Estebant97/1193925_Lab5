let button = document.getElementById("add");
let userInput = document.getElementById("input");
let flag = false;
let cont = 0;
function init(){
    taskManager();
}
// quizas tengan que ir en una sola function para persistencia de ids
function taskManager(){
    button.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(userInput.value);
        cont++;
        if(userInput.value != ''){
        let result = document.querySelector('.result');
        result.innerHTML += `<div id="tarea${cont}" style="width:500px;height:100px;border:1px solid #000;"> <li id="input${cont}"> ${userInput.value}</li> <button type="submit" id="check${cont}" onClick="check(this.id)">Check</button> <button type="submit" id="delete${cont}" onClick="del(this.id)">Delete</button> </div>`
        }
    });

}
function del(clicked_id)
{
    let size = clicked_id.length;
    let id = clicked_id[size-1];
    console.log(id);
    let del = document.getElementById(`${clicked_id}`);
        event.preventDefault();
        let tasker = document.getElementById(`tarea${id}`);
        tasker.remove();
}


function check(clicked_id)
{
    let size = clicked_id.length;
    let id = clicked_id[size-1];
    console.log(id);
    let check = document.getElementById(`${clicked_id}`);
    event.preventDefault();
    let task = document.getElementById(`input${id}`);
    console.log(task)
    if(flag != true){
        flag = false;
        task.classList.toggle('checked');
        console.log(task.classList)
    } else{
        flag = true;
        task.classList.toggle('checked');
        console.log(task.classList)
    }
}
init();