const performFastAsync = async (apiUrl, duration) => {
  const controller = new AbortController();
  const signal = controller.signal;
  let clearTime;
  const promise = new Promise((_, reject) => {
    clearTime = setTimeout(() => {
      controller.abort();
      reject("Took too long");
    }, duration);
  });

  try {
    const response = await Promise.race([
      fetch(apiUrl, { signal }).then((data) => {
        clearTimeout(clearTime);
        return data.json();
      }),
      promise,
    ]);
    console.log("After", response);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
performFastAsync(
  "https://jsonplaceholder.typicode.com/todos/1",
  1000
)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
