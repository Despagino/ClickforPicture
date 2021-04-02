function myfirst() {
    document.getElementById("header").innerHTML = "IT WORKED!!";
    document.getElementById("header").style.cssText = 'font-size:2em;text-align:center; color: white;background:url("https://wallpapercave.com/wp/wp3212381.jpg"); background-size:cover; background-repeat: no-repeat;';
    document.getElementById("header").setAttribute("onclick", "myfirst()");
}

function mysecond() {
    document.getElementById("content").innerHTML = "STEPHEN CURRY";
    document.getElementById("content").style.cssText = 'font-size:2em;text-align:center; color: white;background:url("https://images.daznservices.com/di/library/omnisport/75/27/stephencurry-cropped_10flibuo4oylm1auxz5yobh7u0.jpg?t=-514405887&quality=100"); background-size:cover; background-repeat: no-repeat;';
}

function mythird() {
    document.getElementById("main").innerHTML = "LEBRON JAMES";
    document.getElementById("main").style.cssText = 'font-size:2em;color: white;background:url("https://www.tampabay.com/resizer/8PHuMy7O7UMWhw-Kx5iUyK_OByM=/1600x900/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/6BSL5DHGARD45N3VMGYFDYFA74.jpg"); background-size:cover; background-repeat: no-repeat; width:100%';
}


function myfourth() {
    document.getElementById("footer").innerHTML = "GOAT";
    document.getElementById("footer").style.cssText = 'font-size:2em;color: white; background:url("https://i.pinimg.com/originals/e6/bf/8a/e6bf8a82c43427740b9f2328ea35ca1b.jpg"); background-size:cover; background-repeat: no-repeat; background-position:center;';
