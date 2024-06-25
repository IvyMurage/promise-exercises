async function xmlRequest() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/post"
  );
  xhr.send();
}

xmlRequest();
