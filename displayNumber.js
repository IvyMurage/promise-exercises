function displNumber() {
  let count = 0;
  let countInterval = setInterval(() => {
    count += 1;
    console.log(count);
  }, 2000);
  console.log(count);
  if (count === 5) {
    clearInterval(countInterval);
  }
}

displNumber();
