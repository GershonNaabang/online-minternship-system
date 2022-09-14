let myDocument = document.documentElement;
let btn = document.getElementById("fullScrnBtn1");
let btn2 = document.getElementById("fullScrnBtn2");
let fllscrnLi = document.getElementById("fllscrnLi")
btn.addEventListener("click", () => {
    if (myDocument.requestFullscreen) {
        myDocument.requestFullscreen();
        fllscrnLi.style.display = "none";
        fllscrnLi2.style.display = "block";
    } else {
        fllscrnLi.style.display = "block";
        fllscrnLi2.style.display = "none";
    }
});
btn2.addEventListener("click", () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        fllscrnLi2.style.display = "none";
        fllscrnLi.style.display = "block";
    } else {
        fllscrnLi.style.display = "none";
        fllscrnLi2.style.display = "block";
    }
});