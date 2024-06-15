/* 
    Aileen Shi
    6/15/24
    CPSC 3750
    JS for Group Events
*/
// Make sure elements loaded first
document.addEventListener("DOMContentLoaded", function () {
    // Animation events
    const animRect = document.getElementById("anim-rect");
    const animText = document.getElementById("anim-text");

    animRect.addEventListener("animationstart", () => {
        animText.textContent = "Animation started";
    });
    
    animRect.addEventListener("animationend", () => {
        animText.textContent = "Animation ended";
    });
    
    animRect.addEventListener("animationiteration", () => {
        animText.textContent = "Animation iteration";
    });

    // Drag events
    const apple = document.getElementById("apple");
    const basket = document.getElementById("basket");
    const dragText = document.getElementById("drag-text");

    apple.addEventListener("dragstart", function(event) {
        dragText.textContent = "Started dragging";
    }); 

    apple.addEventListener("dragend", () => {
        dragText.textContent = "Stopped dragging";
    }); 
    
    basket.addEventListener("dragover", () => {
        dragText.textContent = "Drag over basket";
    });

    basket.addEventListener("dragenter", () => {
        dragText.textContent = "Apple entered basket";
    });

    basket.addEventListener("dragleave", () => {
        dragText.textContent = "Apple left basket";
    });

    basket.addEventListener("drop", function(event) {
        event.preventDefault();
        alert("Yay you dropped it in the basket!");
    });

    // Focus
    const focus1 = document.getElementById("focus1");
    const focus2 = document.getElementById("focus2");

    focus1.addEventListener("focus", () => {
        focus1.style.backgroundColor = "#c0edc0";
    });

    focus1.addEventListener("blur", () => {
        focus1.style.backgroundColor = "#b5b5b5";
    });
    
    focus2.addEventListener("focus", () => {
        focus2.style.backgroundColor = "#c0edc0";
    });

    focus2.addEventListener("blur", () => {
        focus2.style.backgroundColor = "#b5b5b5";
    });
    
});

// Input
function InputEvent() {
    document.getElementById("input-text").textContent = "Input event detected!"
}

// Mouse
function Mouse(element) {
    element.style.backgroundColor = "green";
}
