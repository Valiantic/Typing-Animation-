const text = document.querySelector(".headText")

const writeText = () => {
    setTimeout(() => {
        text.textContent = "Wow";
        text.style.color = "rgb(48, 196, 255)";
    }, 0);
    setTimeout(() => {
        text.textContent = "Wazzup";
        text.style.color = "rgb(255, 72, 0)";
    }, 4000);
    setTimeout(() => {
        text.textContent = "How are you";
        text.style.color = "rgb(198, 42, 255)";
    }, 8000);
}

writeText();
setInterval(writeText, 12000);