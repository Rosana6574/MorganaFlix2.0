
const snowContainer = document.querySelector(".snow-container");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    snowflake.innerHTML = ["✧"], ["✴"], ["⊹"];

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = (3 + Math.random() * 5) + "s";
    snowflake.style.fontSize = (10 + Math.random() * 20) + "px";

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

setInterval(createSnowflake, 300);