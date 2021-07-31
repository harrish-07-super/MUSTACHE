function preload(){

}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
img=createCapture(VIDEO);
img.hide();

posenet=ml5.poseNet(img,modeloaded);


posenet.on("pose", getpose);

}

function modeloaded(){
    console.log("poseNet model is loaded");
}

function getpose(results){
if(results.length>0){

    console.log(results);

    console.log("nose x = " + results[0].pose.nose.x);

    console.log("nose y = " + results[0].pose.nose.y);

}
}


function draw(){
image(img,0,0,600,400);
}

function take_photo(){
    save("mustacheface.jpg");
}