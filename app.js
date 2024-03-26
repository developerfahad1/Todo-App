
let inputTodo = document.querySelector(`#todo`);
let ol = document.querySelector(`ol`);
let arr = [];

function addTodo() {
    ol.innerHTML = "";
    arr.push(inputTodo.value);
    inputTodo.value = "";
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <button onclick="deletTodo(${i})">Delete</button> <button onclick=
        "editTodo(${i})">Edit</button>
        </li>`

    }



}


function deletTodo(index) {
    ol.innerHTML="";
    console.log(`delete todo`, index)
    arr.splice(index , 1 )

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <button onclick="deletTodo(${i})">Delete</button> <button onclick=
        "editTodo(${i})">Edit</button>
        </li>`

    }
}

function editTodo(index) {
    ol.innerHTML=""
    console.log(`edit todo`, index);
    let updatedvalue = prompt("Enter Updated Value");
    arr.splice(index,1,updatedvalue)
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <button onclick="deletTodo(${i})">Delete</button> <button onclick=
        "editTodo(${i})">Edit</button>
        </li>`

    }
}
