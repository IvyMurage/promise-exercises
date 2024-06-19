function repeatEvery(time, callback) {
  setInterval(callback, time);
}

function repeatsetInterval() {
  console.log("repeating in progress");
}

console.log(repeatEvery(2000, repeatsetInterval));
