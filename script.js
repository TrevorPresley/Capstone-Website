function greet(name) {
    return `Welcome to Bread Crumb Bakery, ${name}!`
}

const box   = document.querySelector("#msg");
const count = document.querySelector("#count");

box.addEventListener("input", () => {
  count.textContent = box.value.length;  // live update
});