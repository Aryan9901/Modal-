/** @format */

// selectors

var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var statu = document.querySelector("h5");
var h6 = document.querySelector("h6");

// adding eventlisteners

var flag = 0;

btn.addEventListener("click", function () {
	if (flag == 0) {
		statu.innerHTML = "freinds";
		statu.style = "color:green;";
		h6.innerHTML = "Remove friend";
		flag = 1;
	} else {
		statu.innerHTML = "strangers";
		statu.style = "color:red;";
		h6.innerHTML = "Add friend";
		flag = 0;
	}
});
