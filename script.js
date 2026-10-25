function greet(name) {
    return `Welcome to Bread Crumb Bakery, ${name}!`
}

const box   = document.querySelector("#msg");
const count = document.querySelector("#count");

box.addEventListener("input", () => {
  count.textContent = box.value.length;  // live update
});

//The const box and count elements are used to track the input and character count in the message box.
//The const count element is used to display the number of characters in the message box.
//The event listener on the box element updates the count element whenever the user types in the message box.