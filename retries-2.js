async function retries(
  url,
  options = {},
  retry,
  delay = 1000
) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Somthing went wrong");
    }
    return await response.json();
  } catch (err) {
    if (retry === 0) {
      throw err;
    }
    await new Promise((resolve, _) => {
      setTimeout(resolve, delay);
    });
    console.log("retrying", retry - 1);
    return retries(url, options, retry - 1, delay);
  }
}

(async () => {
  try {
    const data = await retries(
      "https://jsonplaceholder.typicode.com/users",
      {},
      2
    );
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
})();
