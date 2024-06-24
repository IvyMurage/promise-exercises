const fetchAndLog = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

fetchAndLog().then((data) => console.log("Data:", data));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
