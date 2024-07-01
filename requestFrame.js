function fetchDataAndAnimate(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data fetched", data);
      return data;
    })
    .then((data) => {
      requestAnimationFrame(() => {
        // Update the UI with the fetched data
        console.log("Animating with data", data);
      });
    })
    .catch((error) =>
      console.error("Error fetching data", error)
    );
}

fetchDataAndAnimate(
  "https://jsonplaceholder.typicode.com/posts"
);
