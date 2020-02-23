const box = document.querySelector(".typing");
const text = [
    "No dzień dobry, ugułem...",
    "O... właśnie....",
    "CZEGO TY KRZYCZYSZ KNURZE?!"
];

let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
let speed = 100; // im większa wartość, tym wolniejsze pisanie

const typing = newTime => {
    if (wordIndex === text[textIndex].length) {
        return setTimeout(() => {
            box.textContent = "";
            textIndex++;
            wordIndex = 0;
            requestAnimationFrame(typing);
        }, 2000);
    }
    if (newTime - oldTime > speed) {
        oldTime = newTime;
        const letter = text[textIndex].substr(wordIndex, 1);
        box.textContent += letter;
        wordIndex++;
    }
    requestAnimationFrame(typing);
};

typing();
