function load_page(page) {
    if (page == "index") {
        random_background();
        random_preview();
    } else {
        random_background();
    }
    var move_icon = document.getElementsByClassName("move-svg");
    var i;
    for (i = 0; i < move_icon.length; i++) {
        move_icon[i].classList.add("d-block");
        move_icon[i].classList.remove("d-none");
    }

    var icon_space = document.getElementsByClassName("impressum-card-header");
    var j;
    for (j = 0; j < icon_space.length; j++) {
        icon_space[j].style.marginRight = "50px";
    }
}

function random_background() {
    var img = [
        "url('/dist/img/background/bg-1.jpg')",
        "url('/dist/img/background/bg-2.jpg')",
        "url('/dist/img/background/bg-3.jpg')",
        "url('/dist/img/background/bg-4.jpg')",
        "url('/dist/img/background/bg-5.jpg')",
        "url('/dist/img/background/bg-6.jpg')",
        "url('/dist/img/background/bg-7.jpg')",
        "url('/dist/img/background/bg-8.jpg')",
        "url('/dist/img/background/bg-9.jpg')",
        "url('/dist/img/background/bg-10.jpg')",
    ];

    var random = Math.floor(Math.random() * img.length);
    document.body.style.backgroundImage = img[random];
}

function random_preview() {
    var bbw = ["/dist/img/preview/bbw/bbw.jpeg"];
    var bs24 = [
        "/dist/img/preview/bs24/bs24-1.jpeg",
        "/dist/img/preview/bs24/bs24-2.jpeg",
        "/dist/img/preview/bs24/bs24-3.jpeg",
        "/dist/img/preview/bs24/bs24-4.jpeg",
        "/dist/img/preview/bs24/bs24-5.jpeg",
    ];
    var img_bbw = document.getElementById("preview-img-bbw");
    var img_bs24 = document.getElementById("preview-img-bs24");

    var random_bbw = Math.floor(Math.random() * bbw.length);
    var random_bs24 = Math.floor(Math.random() * bs24.length);
    img_bbw.src = bbw[random_bbw];
    img_bs24.src = bs24[random_bs24];
}