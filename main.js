function setup(){
    canvas = createCanvas(500 , 500)
    canvas.position(560 , 95)

    video = createCapture(VIDEO)
    video.size(500 , 500)

    posenet = ml5.poseNet(video , modeloaded)
    posenet.on("pose" , gotposes)
}

function modeloaded(){
    console.log("Posenet Is Loaded")
}

function gotposes(result){
    if(result.length > 0){
        console.log(result)
    }
}