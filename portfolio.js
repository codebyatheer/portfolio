

document.addEventListener("DOMContentLoaded", () => {


    const date = new Date();
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Day = Days[date.getDay()];

    setTime();
    setDay();
    const timerInterval = setInterval(setTime, 500);


    function setTime() {
        const now = new Date();
        const Minutes = now.getMinutes();
        const Hour = now.getHours();
        document.getElementById("clock-hour").textContent = Hour.toString().padStart(2, '0');
        document.getElementById("clock-minutes").textContent = Minutes.toString().padStart(2, '0');

    }

    function setDay() {

        document.getElementById("clock-day").textContent = Day.toString();

    };


});

function showPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}


window.addEventListener("click", function (event) {
    let popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});



//about folder
function Me() {

    document.getElementById("bio").style.display = "flex";
    document.getElementById("its-me").style.display = "flex";
    document.getElementById("Skills").style.display = "none";
    document.getElementById("Tools").style.display = "none";
    document.getElementById("Langs").style.display = "none";


};
function Skills() {

    document.getElementById("Skills").style.display = "flex";
    document.getElementById("its-me").style.display = "none";
    document.getElementById("bio").style.display = "none";
    document.getElementById("Tools").style.display = "none";
    document.getElementById("Langs").style.display = "none";


};
function Tools() {

    document.getElementById("Skills").style.display = "none";
    document.getElementById("its-me").style.display = "none";
    document.getElementById("bio").style.display = "none";
    document.getElementById("Tools").style.display = "flex";
    document.getElementById("Langs").style.display = "none";


};

function Lang() {

    document.getElementById("Skills").style.display = "none";
    document.getElementById("its-me").style.display = "none";
    document.getElementById("bio").style.display = "none";
    document.getElementById("Tools").style.display = "none";
    document.getElementById("Langs").style.display = "flex";


};


const cs = [

    "icons/cs-1.png",

    "icons/cs-2.png",

    "icons/cs-3.png",

    "icons/cs-4.png",

    "icons/cs0.png"

];


const Hhay = [

    "icons/HAY1.png",

    "icons/HAY0.png"

];

const mth = [

    "icons/MTH1.png",

    "icons/MTH2.png",

    "icons/MTH3.png",

    "icons/MTH0.png"

];

const vc = [

    "icons/vc1.png",

    "icons/vc2.png",

    "icons/vc3.png",

    "icons/vc4.png",

    "icons/vc0.png"

];

const cl1 = [

    "icons/cl1-1.png",

    "icons/cl1-2.png",

    "icons/cl1-0.png"


];

const cl2 = [

    "icons/cl2-1.png",

    "icons/cl2-2.png",

    "icons/cl2-3.png",

    "icons/cl2-0.png"


];


let current = 0;

function nextPic(IDs, list) {

    let nlist = list;

    let name = IDs;

    current = (current + 1) % nlist.length;

    document.getElementById(name).src = nlist[current];

}

function pastPic(IDs, list) {

    let nlist = list;

    let name = IDs;

    current = (current - 1) % nlist.length;

    if (current < 0) {
        current = nlist.length - 1;
    }

    document.getElementById(name).src = nlist[current];

} 
