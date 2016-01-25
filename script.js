//changes the 1st cake image;
document.getElementById("myImage1").onclick = function() {changeImage()};

	function changeImage() {
    var image = document.getElementById("myImage1");
    if (image.src.match("cake_violet")) {
        image.src = "Image/cakeBirds.jpg";
    }else if (image.src.match("cakeBirds")) {
        image.src = "Image/cake_blue.jpg";
    }else{
    	image.src = "Image/cake_violet.jpg";
    }
};
//changes 2nd cake image;
document.getElementById("myImage2").onclick = function() {imagePic()};

    function imagePic () {
    	var im = document.getElementById("myImage2");
    if (im.src.match("cake_red")) {
        im.src = "Image/cake_flowers.jpg";
    }else if (im.src.match("cake_flowers")) {
        im.src = "Image/cake_colorful.jpg";
    }else{
    	im.src = "Image/cake_red.jpg";
    }
};
//changes 3rd cake image;
document.getElementById("myImage3").onclick = function() {picChange()};

	function picChange() {
    var imge = document.getElementById("myImage3");
    if (imge.src.match("cake_rose")) {
        imge.src = "Image/cake_square.jpg";
    }else if (imge.src.match("cake_square")) {
        imge.src = "Image/cake_cool.jpg";
    }else{
    	imge.src = "Image/cake_rose.jpg";
    }
};
//MouseDown,Up events for the button;
document.getElementById("Button").addEventListener("onmousedown", mouseDown);
document.getElementById("Button").addEventListener("onmouseup", mouseUp);

function mouseDown() {
var imm = document.getElementById("Button");
    if (imm.src.match("Untitled-1")) {
        imm.src = "Image/Untitled-2.gif";
    } else {
        imm.src = "Image/Untitled-1.gif";
    }
};

function mouseUp() {
	var pic = document.getElementById("Button");
       if (pic.src.match("Untitled-2")) {
       	pic.src = "Image/Untitled-1.gif";
       }else{
       	pic.src = "Image/Untitled-2.gif";
       }
};