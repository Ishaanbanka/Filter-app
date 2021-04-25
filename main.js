function preload(){

}

function filter_image(){

filter_color = document.getElementById("color").value;



}
function setup(){

canvas = createCanvas(640 , 480);

canvas.position(150, 250)

video=createCapture(VIDEO);

video.hide();

filter_color = "";

}

function draw(){

image(video, 230,150 , 220 , 200)

fill(255,0,0)
stroke(255,0,0)

circle(50,50,80)


fill(0,128,0)
stroke(0,128,0)

rect(90,40,460,20)

tint(filter_color)

fill(255,0,0)
stroke(300,0,0)

circle(55,460,80)


fill(0,128,0)
stroke(0,128,0)

rect(90,460,460,20)

fill(0,128,0)
stroke(0,128,0)

rect(90,50,20,460)

fill(255,0,0)
stroke(300,0,0)

circle(550,460,80)


fill(0,128,0)
stroke(0,128,0)

rect(550,45,20,430)



}

function take_snapshot(){

save("img1.png")


}