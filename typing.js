const box = document.querySelector(".typing");
const text = [
    "No dzień dobry, ugułem... ^ Piwo jest jak rosół",
    "O... właśnie.... ^ Na pewno takiego czegoś nie było!",
    "CZEGO TY KRZYCZYSZ KNURZE?!"
];

const speed = 100; // im większa wartość, tym wolniejsze pisanie
const stop = 2000; // zatrzymanie między kolejnymi tekstami

let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
let activeDOMElement = box;

const typing = newTime => {
    if (newTime - oldTime > speed) {
        const letter = text[textIndex].substr(wordIndex, 1);
        if (wordIndex === text[textIndex].length) {
            if (textIndex === text.length - 1) return;
            return setTimeout(() => {
                box.textContent = "";
                textIndex++;
                wordIndex = 0;
                requestAnimationFrame(typing);
            }, speed);
        } else if (wordIndex === 0 || letter === "^") {
            const p = document.createElement("p");
            box.appendChild(p);
            activeDOMElement = p;
        }

        if (!(letter === "^")) {
            activeDOMElement.textContent += letter;
        }

        oldTime = newTime;
        wordIndex++;
    }
    requestAnimationFrame(typing);
};

typing();
