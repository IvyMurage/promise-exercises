function tick() {
  let count = 0;
  let countInterval = setInterval(() => {
    count++;
    console.log("tick");

    if (count === 5) {
      clearInterval(countInterval);
      console.log("After Cancel", countInterval);
    }
  }, 1000);
  console.log("Before cancel", countInterval);
}

tick();
