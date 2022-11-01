// function addMassage(){
//     var value =  document.getElementById("val")
//     var p = document.createElement("p")
//     var testNode = document.createTextNode(value.value)
//     p.appendChild(testNode)
//     var messages = document.getElementById('messages')
//     messages.appendChild(p)
//     console.log(messages)
//     value.value=""
// }

var list = document.getElementById("list");
function addTodo() {
    var text = document.getElementById("todo-item");

  if (text.value == "") {
    alert("please enter your task");
  } else {
    

    // Create Li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(text.value);
    li.setAttribute("class", "text");
    li.appendChild(liText);

    // Create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "editBtn");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);

    //Create Delete Button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("class", "btn");
    delBtn.setAttribute("onclick", "delList(this)");

    list.appendChild(li);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    text.value = "";
  }
}

function delList(e) {
  e.parentNode.remove();
}
function deleteAll() {
  var input = confirm("Delete all");
  if (input) {
    list.innerHTML = "";
    console.log(input);
  } else {
    console.log(input);
  }
}
function editItem(e) {
  var promValue = e.parentNode.firstChild.nodeValue;
  var newValue = prompt("Enter Edit Value", promValue);
  promValue = newValue;
  e.parentNode.firstChild.nodeValue = promValue;
  console.log(promValue);
}
