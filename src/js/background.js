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

function collapse() {}
var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling.firstElementChild.firstElementChild
      .nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.position === "relative") {
      content.style.position = "absolute";
    } else {
      content.style.position = "relative";
    }

    var icon = this.firstElementChild.firstElementChild;
    if (icon.classList === "right") {
      icon.classList.toggle("down");
    } else {
      icon.classList.toggle("right");
    }
  });
}
