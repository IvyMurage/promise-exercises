async function promiseResolve() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 1000);
  });
}

promiseResolve().then((result) => console.log(result));
