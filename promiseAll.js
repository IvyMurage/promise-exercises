const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
];

const fetchMultipleAPIs = async (apiUrls) => {
  let singlePromise = await Promise.all(
    apiUrls.map((url) => fetch(url))
  );
  let resolvedValues = singlePromise.map((result) =>
    result.json()
  );
  return await Promise.all(resolvedValues);
};
fetchMultipleAPIs(apiUrls)
  .then((results) => {
    console.log("Combined Results:", results);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
