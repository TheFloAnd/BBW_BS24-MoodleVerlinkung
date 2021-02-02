"use strict";

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