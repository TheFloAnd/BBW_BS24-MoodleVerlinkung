function load_page(page) {
	if (page == "index") {
		random_preview();
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

	if (getCookie("accept_banner") != "true") {
		show_banner();
	}
}

function random_preview() {
	var bbw = ["bbw.jpeg"];
	var bs24 = [
		"bs24-1.jpeg",
		"bs24-2.jpeg",
		"bs24-3.jpeg",
		"bs24-4.jpeg",
		"bs24-5.jpeg",
	];
	var img_bbw = document.getElementById("preview-img-bbw");
	var img_bs24 = document.getElementById("preview-img-bs24");

	var random_bbw = Math.floor(Math.random() * bbw.length);
	var random_bs24 = Math.floor(Math.random() * bs24.length);
	img_bbw.src = "/dist/img/preview/bbw/" + bbw[random_bbw];
	img_bs24.src = "/dist/img/preview/bs24/" + bs24[random_bs24];
}

function setCookie(cname, cvalue) {
	if (typeof cname == "undefined") return;
	if (typeof cvalue == "undefined") return;

	document.cookie = cname + "=" + cvalue;

	if (cname == "accept_banner") {
		hide_banner();
	}
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function show_banner() {
	document.getElementById("info-banner").classList.remove("d-none");
}
function hide_banner() {
	document.getElementById("info-banner").classList.add("d-none");
}