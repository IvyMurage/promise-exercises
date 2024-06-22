function displNumber() {
  let count = 0;
  let countInterval = setInterval(() => {
    console.log(count++);
  }, 2000);
  setTimeout(() => clearInterval(countInterval), 5000);
}

displNumber();
