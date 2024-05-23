let permissionGranted = false;
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        alert(`Alpha: ${event.alpha}, Beta: ${event.beta}, Gamma: ${event.gamma}`);
      permissionGranted = true;

        var x = event.beta;  // X軸
        var y = event.gamma; // Y軸
        var z = event.alpha; // Z軸

        var box = document.getElementById("mainpic");
        box.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    }, true);
} else {
    alert("您的設備不支持陀螺儀功能。");
}

function cl(){
    alert('koko')
}
console.log("DeviceOrientationEvent support:", window.DeviceOrientationEvent);
