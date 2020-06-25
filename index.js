if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        
        // gamma: left to right
        var leftToRight = event.gamma;
        
        // beta: front back motion
        var frontToBack = event.beta;

        console.log("yes");
        document.body.innerHTML =   `<p> rotateDegrees: ${rotateDegrees.toFixed(2)} </p>
                                     <p> frontToBack: ${frontToBack.toFixed(2)} </p>
                                     <p> leftToRight: ${leftToRight.toFixed(2)} </p>`;
    }, true);
}else {
    console.log("no");
    document.body.innerHTML = "nope";
}


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
