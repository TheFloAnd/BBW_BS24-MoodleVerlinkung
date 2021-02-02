"use strict";

$(document).ready(function () {
  //if cookie hasn't been set...
  if (document.cookie.indexOf("ModalShown=true") < 0) {
    $("#myModal").modal("show"); //Modal has been shown, now set a cookie so it never comes back

    $("#myModalClose").click(function () {
      $("#myModal").modal("hide");
    });
    document.cookie = "ModalShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  }
});

function swap() {
  var section = document.getElementsByClassName("section");
  var button = document.getElementById("swap_button");
  var parent = document.getElementById("content");
  button.parentNode.insertBefore(section[0], section[1]);
  section[0].parentNode.appendChild(button);
  button.parentNode.appendChild(section[0]);
}

function swap_order() {
  var section = document.getElementsByClassName("section");
  var button = document.getElementById("swap_button");
  section[0].parentNode.appendChild(button);
  button.parentNode.appendChild(section[1]);
}

function get_img() {
  var fs = require("fs");

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
  var img = ["url('/src/img/background/bg-1.jpg')", "url('/src/img/background/bg-2.jpg')", "url('/src/img/background/bg-3.jpg')", "url('/src/img/background/bg-4.jpg')", "url('/src/img/background/bg-5.jpg')", "url('/src/img/background/bg-6.jpg')", "url('/src/img/background/bg-7.jpg')", "url('/src/img/background/bg-8.jpg')", "url('/src/img/background/bg-9.jpg')", "url('/src/img/background/bg-10.jpg')"];
  var random = Math.floor(Math.random() * img.length);
  document.body.style.backgroundImage = img[random];
}