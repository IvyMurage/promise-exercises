const fetchWithTimeout = async (
  url,
  options,
  timeout = 5000
) => {
  const promise = new Promise((reject) =>
    setTimeout(
      reject(new Error("Request timed out")),
      timeout
    )
  );

  const responseFetch = fetch(url, options);

  try {
    const response = await Promise.race([
      promise,
      responseFetch,
    ]);
    console.log(response);

    if (!response.ok) throw new Error("Timeout!");
    return await response.json();
  } catch (err) {
    throw err;
  }
};

(async () => {
  try {
    const data = await fetchWithTimeout(
      "https://jsonplaceholder.typicode.com/users",
      {},
      10
    );
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
})();
