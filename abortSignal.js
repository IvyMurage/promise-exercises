async function abortRequest(url) {
  try {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => controller.abort(), 1000);
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e.message);
  }
}
abortRequest("https://jsonplaceholder.typicode.com/posts");
