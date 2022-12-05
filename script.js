let input = document.querySelector(".input").value;
let addBtn = document.querySelector(".add-btn");
let list = document.querySelector("ul");

// adding list items

addBtn.addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  let newItem = document.createElement("li");
  let text = document.createTextNode(input);
  newItem.appendChild(text);
  newItem.classList.add("list-item");
  if (input.trim() !== "") {
    document.getElementById("list-items").appendChild(newItem);
  } else {
    alert("Please enter a task");
  }
  document.getElementById("input").value = "";

  let span = document.createElement("span");
  let close = document.createTextNode("\u00D7");
  span.appendChild(close);
  span.classList.add("close");
  newItem.appendChild(span);
});

// marking as complete

list.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("list-item")) {
    ev.target.classList.toggle("complete");
  }
});

// removing list items

list.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("close")) {
    ev.target.parentElement.remove();
  }
});
