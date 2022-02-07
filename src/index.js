document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    inputToDoItem (document.getElementById("new-task-description").value);
    form.reset()
    
  });

});

function inputToDoItem(toDo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteToDo)
  btn.textContent = '♥'
  p.textContent = `${toDo}   `
  p.appendChild(btn);
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function deleteToDo(e){
  e.target.parentNode.remove()
}


