function blowCandle(candle) {
    const flame = candle.querySelector('.flame');

    if (!flame) return; // Safety check if flame is missing

    // Stop flickering animation
    flame.style.animation = 'none';

    // Smoothly fade out the flame
    flame.style.transition = 'opacity 0.5s ease';
    flame.style.opacity = 0;

    // Change candle color to indicate it's blown out
    candle.style.backgroundColor = '#D3D3D3';
}

// Attach click event listener to all candles
document.querySelectorAll('.candle').forEach(candle => {
    candle.addEventListener('click', function () {
        blowCandle(this);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Show the "Make a Wish" popup on page load
    const popup = document.getElementById("wish-popup");
    popup.style.display = "flex"; // Show popup

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.style.opacity = "0"; 
        setTimeout(() => popup.style.display = "none", 500); 
    }, 3000);
});
let candlesBlownOut = 0; // Track number of candles blown out

function blowCandle(candle) {
    if (!candle.classList.contains('blown-out')) {
        candle.classList.add('blown-out');
        candlesBlownOut++;

        if (candlesBlownOut === 1) {
            document.getElementById('wish-popup').style.display = 'block';
            setTimeout(() => {
                document.getElementById('wish-popup').style.display = 'none';
            }, 2000);
        }

        if (candlesBlownOut === 4) {
            setTimeout(() => {
                document.getElementById('surprise-popup').style.display = 'block';
            }, 1000);
        }
    }
}
function triggerFirecrackers() {
    const container = document.getElementById('firecracker-container');
    container.style.display = 'block';

    const firecrackers = document.querySelectorAll('.firecracker');

    firecrackers.forEach((cracker) => {
        const randomX = Math.random() * window.innerWidth * 0.9;
        const randomY = Math.random() * window.innerHeight * 0.9;

        cracker.style.left = `${randomX}px`;
        cracker.style.top = `${randomY}px`;

        cracker.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;

        setTimeout(() => {
            cracker.style.display = 'none'; // Hide after animation
        }, 1000);
    });
}
