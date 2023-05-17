song1 = "";
song2 = "";
song1_status = "";
song2_status = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
function setup(){
    canvas = createCanvas(500,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet("video", modelLoaded);
    poseNet.on("pose", gotPoses);
}
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function draw(){
    image(video, 0, 0, 500, 600);
    fill("#FF0000");
    stroke("#FF0000");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}