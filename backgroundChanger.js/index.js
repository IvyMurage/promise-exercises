const backgroundColorChanger = () => {
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    newColor += Math.floor(Math.random() * 10);
  }

  body.style.backgroundColor = newColor;
};

let body = document.body;
body.style.height = "100vh";

function backgroundColorPromise() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(backgroundColorChanger());
    }, 3000);
  });
}

backgroundColorPromise();
