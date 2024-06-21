const fetchUserTodos = async () => {
  //the above async function returns a promise that is in pending state

  // the promise.all will return a single promise that will only fulfill once if all the promises have been fulfilled.
  const fetchPromises = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
  ]);
  const jsonresponses = fetchPromises.map((promise) =>
    promise.json()
  );
  const [users, todos] = await Promise.all(jsonresponses);
  console.log(users);
  console.log(todos);
  return users.map((user) => {
    return {
      ...user,
      todos: todos
        .filter(({ userId }) => user.id === userId)
        .map(({ id, title, completed }) => ({
          id,
          title,
          completed,
        })),
    };
  });
};

fetchUserTodos().then((userTodos) =>
  console.log(userTodos)
);
