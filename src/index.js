import React from "react";
import ReactDOM from "react-dom";
import("./index.css");
import logo from './logo.png';

ReactDOM.render(
    <div class="logo">
        <img src={logo} className="logo" alt="logo" />

    </div>,
    document.getElementById("logo")

);

ReactDOM.render(
    <div class="input">
        <input type="text" placeholder="Enter notes" id="queries" />

        <input type="button" value="ADD" id="add" />

    </div>,
    document.getElementById("root")

);


document.getElementById("add").addEventListener("click", function () {
    createTasks();
    document.getElementById("queries").value="";
})


let container = document.getElementById("notes");



function createTasks() {

    let notes;

    if (localStorage.getItem('notes') == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('notes'));
    }
    let title = document.getElementById("queries").value;


    let obj = {
        title: title
    }

    notes.push(obj);

    localStorage.setItem("notes", JSON.stringify(notes))
    updateDom();

}

function updateDom() {
    container.innerHTML = "";

    let data =  JSON.parse(localStorage.getItem('notes'));

    data.forEach(task => {
        let box = document.createElement("div");

        let title = document.createElement("p");
        title.textContent = task.title;
        

        

        box.append(title);
        container.append(box);
        
    });


}
updateDom();