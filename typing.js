const box = document.querySelector(".typing");

const text = "No dzień dobry, ugułem...";

let wordIndex = 0;

const typing = () => {
    const letter = text.substr(wordIndex, 1);
    box.textContent += letter;
    wordIndex++;
};

typing();