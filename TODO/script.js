const $ =document.querySelector.bind(document);

function addToDo(){
    let dv= document.createElement('div');
    $('#todos').appendChild(dv);
    dv.innerHTML = $('#todoInput').value;
    dv.classList.add('todo');

    dv.onclick = function(){
        dv.classList.toggle('completed');
    }
    dv.innerHTML = $('#todoInput').value;
    $('#todoInput').value='';

}