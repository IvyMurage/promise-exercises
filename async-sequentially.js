const fetchAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const response_1 = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const response_2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (!response.ok) {
      throw new Error("Could not fetch JSON");
    }
  } catch (e) {}
};
