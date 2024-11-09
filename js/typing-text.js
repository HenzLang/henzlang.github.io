

const text = "Web Developer";
const typingText = document.getElementById("typing-text-span");
let i = 0;
const speed = 80;
const delay = 1000;

function typeText() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, speed);
    } else {
        typingText.textContent = "";
        i = 0;
        setTimeout(typeText, delay);
    }
}
typeText();