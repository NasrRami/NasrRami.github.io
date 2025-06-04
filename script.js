document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Random horizontal position
        heart.style.left = Math.random() * 100 + "vw";

        // Random fall speed (3s - 6s)
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        heartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Create hearts every 400ms
    setInterval(createHeart, 400);
});