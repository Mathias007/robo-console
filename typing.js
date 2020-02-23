const box = document.querySelector(".typing");
const text = "No dzień dobry, ugułem...";

let wordIndex = 0;
let oldTime = 0;
let speed = 100; // im większa wartość, tym wolniejsze pisanie

const typing = newTime => {
    if (newTime - oldTime > speed) {
        oldTime = newTime;
        const letter = text.substr(wordIndex, 1);
        box.textContent += letter;
        wordIndex++;
    }
    requestAnimationFrame(typing);
};

typing();
