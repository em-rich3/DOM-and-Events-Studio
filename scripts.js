// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
    const landButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    const originalLeftPosition = rocket.style.left;
    const originalBottomPosition = rocket.style.bottom;


    takeOffButton.addEventListener("click", function () {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight + 10000;
            rocket.style.bottom = '120px';

        }
    })

    landButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight - spaceShuttleHeight;
        rocket.style.bottom = originalBottomPosition;
        rocket.style.left = originalLeftPosition;

    })
    
    abortMissionButton.addEventListener("click", function () {
        let confirm =window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight - spaceShuttleHeight;
            rocket.style.bottom = originalBottomPosition;
            rocket.style.left = originalLeftPosition;
        }
    })

    leftButton.addEventListener("click", function () {
        console.log('left', rocket.style.left);
        if (parseInt(rocket.style.left) > 0) {
            rocket.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
        }
        
    })

    rightButton.addEventListener("click", function () {
        console.log('right', rocket.style.left);
        if (parseInt(rocket.style.left) < (shuttleBackground.offsetWidth - rocket.offsetWidth)) {
            rocket.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
        }
        
    })

    upButton.addEventListener("click", function () {
        console.log('up', rocket.style.bottom);
        if (parseInt(rocket.style.bottom) <= (shuttleBackground.offsetHeight - rocket.offsetHeight)) {
            rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
        }
        
        
    })

    downButton.addEventListener("click", function () {
        console.log('down', rocket.style.bottom);
        if (parseInt(rocket.style.bottom) > 0) {
            rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';
        }
    })

}


window.onload = init;
