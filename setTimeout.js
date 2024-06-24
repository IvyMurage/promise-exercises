function display(callback) {
  setTimeout(callback, 3000);
}

function displayText() {
  console.log("how are you?");
}

display(displayText);
