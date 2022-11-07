let ava = document.querySelector(".avatar");
let h3 = document.querySelector("h3");
let name = document.querySelector(".h4");
// ? кнопка редактрирования
let editBtn = document.querySelector("#editBtn");

// ? инпуты
let inpAva = document.querySelector("#avatar");
let inpH3 = document.querySelector("#nickname");
let inpName = document.querySelector("#name");

editBtn.addEventListener("click", function render() {
  ava.innerHTML = `<img src = "${inpAva}">`;
  h3.innerText = inpH3.value;
  name.innerText = inpName.value;
});
let API = "http://localhost:8000/cards";

let newcard = document.querySelectorO("#newcard");
newPost.addEventListener("click", () => {
    if(!postText.value || !imageUrl) {
      alert('Введите что нибудь')
    }
});
