async function parallelurl() {
  try {
    const response = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);

    const data = response.map((res) => res.json());
    return await Promise.all(data);
  } catch (e) {
    throw e;
  }
}
parallelurl()
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
