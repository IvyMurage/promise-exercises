const fetchData = async (url, retries) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      if (retries === 0)
        throw new Error("Something went wrong");
      console.log(retries);
      fetchData(url, retries - 1);
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

fetchData(
  "https://jsonplaceholder.typicode.com/posts",
  5
).then((data) => {
  console.log(data);
});
