var basetime = Date.now();

// FPS
var fps = 1000/30;


function animate_handler() {
    var now   = Date.now();
    var check = now - basetime;
    if( check / fps >= 1 ) {
        basetime = now;

        draw();
    }

    requestAnimationFrame( animate_handler, fps );
}

function draw() {

}

animate_handler();
