function promiseChain() {
  return new Promise((resolve, _) => {
    resolve("this is a promise");
  });
}

promiseChain()
  .then(
    (res) =>
      new Promise((resolve, _) => {
        resolve(res);
      })
  )
  .then((data) => console.log("hello", data));
