const c = document.getElementById("canvas").getContext("2d");
const bA = document.getElementById("bA");
const bB = document.getElementById("bB");

bA.onclick = function (ev) {
  alert("reset");
  init();
};

bB.onclick = function (ev) {
  c.fillText("button B clicked", 250, 300);
};

function init() {
  c.clearRect(0, 0, c.width, c.height);

  c.fillStyle = "black";
  c.strokeRect(0, 0, 500, 400);

  c.fillStyle = "blue";
  c.fillRect(10, 10, 480, 380);

  c.fillStyle = "orange";
  c.font = "small-caps bold 24px sans-serif";
  c.textAlign = "center";
  c.fillText("Hello code hackerz!", 250, 200);
}

init();
