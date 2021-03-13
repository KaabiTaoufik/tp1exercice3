var list = new Array();
const name = document.getElementById("name");
const content = document.getElementById("content");
const div = document.querySelector("ol");
var del = document.querySelectorAll(".delete");
const submit = document
  .getElementById("submit")
  .addEventListener("click", (e) => {
    list.push(name.value + " : " + content.value);
    e.preventDefault();
    text = "";
    list.forEach((value, id) => {
      text +=
        "<li>" +
        value +
        "  <button class='delete'id=" +
        id +
        " type='button' onclick='onl(" +
        id +
        ")'>delete</button></li>";
    });
    div.innerHTML = text;
  });
function onl(id) {
  console.log(id);
  list.splice(id, 1);
  document.getElementById(id).parentNode.remove();
}
