 
//Daily challenge: To do list
// empty array of tasks
let tasks = [];
// add task function
addTask()
function addTask() {
let input  = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks  = document.querySelector('.listTasks');

//add button disabled
input.addEventListener('keyup', () => {
    if(input.value.trim()!= 0 ){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
});

// add new item to list
addBtn.addEventListener('click', () => {
// check if input is not empty
    if(input.value.trim()!= 0){
        let newItem=document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `  
                <div class="item-btn">
                <i class="fa-solid fa-xmark"></i>
                <input type="checkbox" class="checkbox">
                </div>
                <p> ${input.value} </p> `
             
        tasks.appendChild(newItem);
        input.value='';
        doneTask(newItem);
    }else{
        alert('Please enter a task')
    }
})

//delete item from list
function deleteTask(event) {
tasks.addEventListener('click', (e) =>{
if(e.target.classList.contains('fa-xmark')){
    e.target.parentElement.parentElement.remove();
}
})
}
deleteTask();

  function doneTask(event) {
    let checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => {
        let item = e.target.parentElement.parentElement;
        item.classList.toggle('completed');
      })
    })
  }
  doneTask()
}