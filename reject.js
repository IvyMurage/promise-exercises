function rejectPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Error!"), 2000);
  });
}

rejectPromise()
  .then()
  .catch((err) => console.log(err));
