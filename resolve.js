function resolve() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success!"), 1000);
  });
}

resolve().then((res) => console.log(res));

Promise.resolve(
  setTimeout(() => console.log("success"), 1000)
);
