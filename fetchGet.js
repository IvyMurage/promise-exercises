async function getDoc() {
  const response = await fetch(
    "https://developer.mozilla.org/en-US/docs/Web/API/fetch"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
}

getDoc();
