var isOn = true;

function switchOff () {
    if(isOn == true) {
        alert("The light is on.");
        isOn = false;
    } else {
        alert("The light is off.");
        isOn = true;
    }
}