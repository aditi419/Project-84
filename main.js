canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "trycar1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpeg";

function add() {
    backgroundImage_Tag = new Image();
    backgroundImage_Tag.onload = uploadBackground;
    backgroundImage_Tag.src = background_image;

    roverImage_Tag = new Image();
    roverImage_Tag.onload = uploadcar1;
    roverImage_Tag.src = car1_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImage_Tag, 0, 0, canvas.width, canvas.height);
}

function uploadroverImage() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height) ;
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == "37") {
       car1_left();
       console.log("left arrow key");
    }

    if (keyPressed == "38") {
        car1_up();
        console.log("up arrow key");
    }

    if (keyPressed == "39") {
        car1_right();
        console.log("right arrow key");
    }

    if (keyPressed == "40") {
        car1_down();
        console.log("down arrow key");
    }

    if (keyPressed == "87") {
        car2_up();
        console.log("key w");
    }
}