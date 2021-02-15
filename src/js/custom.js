function load_page(page) {
    if (page == "index") {
        random_background();
        random_preview();
    } else {
        random_background();
    }
    //swap_order();
}
/*
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
    const fs = require("fs");

    var img = [""];

    fs.readdir(testFolder, function(err, files) {
        if (err) {
            return console.log("Unable to scan directory: " + err);
        }
        files.forEach(function(file) {
            img.push("url('../img/background/bg-" + file + ".jpg')");
        });
    });
    console.log(img);
    return img;
}
*/
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

function random_preview() {
    var bbw = ["/src/img/preview/bbw/bbw.png"];
    var bs24 = [
        "/src/img/preview/bs24/bs24-1.jpeg",
        "/src/img/preview/bs24/bs24-2.jpeg",
        "/src/img/preview/bs24/bs24-3.jpeg",
        "/src/img/preview/bs24/bs24-4.jpeg",
        "/src/img/preview/bs24/bs24-5.jpeg",
    ];
    //var img_bbw = document.getElementById("preview-img-bbw");
    var img_bs24 = document.getElementById("preview-img-bs24");

    //var random_bbw = Math.floor(Math.random() * bbw.length);
    var random_bs24 = Math.floor(Math.random() * bs24.length);
    //img_bbw.src = bbw[random_bbw];
    img_bs24.src = bs24[random_bs24];
}