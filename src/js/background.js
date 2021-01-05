function get_img() {
  const fs = require("fs");

  var img = [""];

  fs.readdir(testFolder, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      img.push("url('../img/background/bg-" + file + ".jpg')");
    });
  });
  console.log(img);
  return img;
}

function random_background() {
  var img = [
    "url('/src/img/background/bg-1.jpg')",
    "url('/src/img/background/bg-2.jpg')",
    "url('/src/img/background/bg-3.jpg')",
    "url('/src/img/background/bg-4.jpg')",
    "url('/src/img/background/bg-5.jpg')",
    "url('/src/img/background/bg-6.jpg')",
    "url('/src/img/background/bg-7.jpg')",
    "url('/src/img/background/bg-8.jpg')",
    "url('/src/img/background/bg-9.jpg')",
    "url('/src/img/background/bg-10.jpg')",
  ];

  var random = Math.floor(Math.random() * img.length);
  document.body.style.backgroundImage = img[random];
}
