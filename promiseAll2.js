const userIds = [1, 2, 3, 4, 5];

const fetchUserData = (id) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => response.json());
};

const fetchMultipleUsers = async (userIds) => {
  const fetchUserDatas = userIds.map((userId) =>
    fetchUserData(userId)
  );

  const userResponses = await Promise.all(fetchUserDatas);
  return userResponses;
};

fetchMultipleUsers(userIds)
  .then((users) => {
    console.log("User Data:", users);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
