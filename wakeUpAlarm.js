function createAlarm(personName, delayTime) {
  return new Promise((resolve, reject) => {
    delayTime < 2
      ? reject("Delay is not sufficient")
      : setTimeout(
          () => resolve(`Wake Up ${personName}`),
          delayTime * 1000
        );
  });
}

createAlarm("John", 4)
  .then((message) => {
    console.log(message); // output "Wake up John" after 4 seconds
  })
  .catch((error) => {
    console.error(error);
  });

createAlarm("John", 1)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); // output "Delay is not sufficient"
  });
