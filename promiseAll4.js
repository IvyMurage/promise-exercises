const promises = [
  Promise.resolve("Promise 1 resolved"),
  Promise.reject("Promise 2 rejected"),
  Promise.resolve("Promise 3 resolved"),
  Promise.reject("Promise 4 rejected"),
];

const handleMixedPromises = (promises) => {
  // Your implementation here

  const fecthedPromises = promises.map((promise) => {
    return promise
      .then((result) => result)
      .catch((error) => error);
  });
  return Promise.all(fecthedPromises);
};

handleMixedPromises(promises)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
