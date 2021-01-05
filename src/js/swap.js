function swap() {
  var leftID = document.getElementById("header_logo-left");
  rightID = document.getElementById("header_logo-right");
  leftSRC = leftID.src;
  rightSRC = rightID.src;
  leftID.src = rightSRC;
  rightID.src = leftSRC;

  var parent = document.getElementsByClassName("content_body");
  var i;

  for (i = 0; i < parent.length; i++) {
    var list = parent[i].children[0];
    var list2 = parent[i].children[1];
    parent[i].appendChild(list, list2);
  }
}

function swap_v2() {
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
