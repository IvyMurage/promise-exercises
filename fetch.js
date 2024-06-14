let result = [];
async function foo1() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const data = await res.json();
  result.push(data);
}

console.log(foo1()); // Logs: Promise { <pending> }
