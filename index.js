if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        
        // gamma: left to right
        var leftToRight = event.gamma;
        
        // beta: front back motion
        var frontToBack = event.beta;


        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
        console.log("yes");
        document.body.innerHTML = "yes";
    }, true);
    
    
}else {
    console.log("no");
    document.body.innerHTML = "nope";
}

var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
    // do something amazing
    console.log("orientation");
    console.log(rotateDegrees);
    console.log(leftToRight);
    console.log(frontToBack);
};

function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    // Do something awesome.
    console.log("xyz");
    console.log(x);
    console.log(y);
    console.log(z);
}

window.addEventListener("devicemotion", handleMotionEvent, true);
