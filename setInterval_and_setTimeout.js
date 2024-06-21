function setInterval_setTimeout() {
  var i = 0;
  var interval = setInterval(function () {
    console.log("Interval");
    i++;
    if (i === 5) {
      clearInterval(interval);
    }
  }, 1000);

  setTimeout(function () {
    console.log("Timeout");
  }, 3000);
}
setInterval_setTimeout();
