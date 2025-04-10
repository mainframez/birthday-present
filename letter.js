// Show the popup when 'Surprise' button is clicked
document.getElementById('surprise-btn').addEventListener('click', function () {
    alert("🎉 Surprise! Enjoy the fireworks! 🎆"); // Show message popup
    document.getElementById('surprise-popup').style.display = 'block';
    startFireworks();
});

// Close the popup
function closePopup() {
    document.getElementById('surprise-popup').style.display = 'none';
}

// Show the surprise popup
function showSurprise() {
    const popup = document.getElementById("surprise-popup");
    popup.style.display = "block";
    startFireworks(); // Trigger the fireworks
}

// Close the popup
function closeSurprise() {
    const popup = document.getElementById("surprise-popup");
    popup.style.display = "none";
}

function startFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Firework {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.particles = [];

            for (let i = 0; i < 80; i++) {
                this.particles.push({
                    x: this.x,
                    y: this.y,
                    speed: Math.random() * 7 + 3,
                    angle: Math.random() * Math.PI * 2,
                    radius: Math.random() * 4 + 2,
                    alpha: 1,
                });
            }
        }

        draw() {
            this.particles.forEach(particle => {
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.radius * 4
                );
                gradient.addColorStop(0, '#ffffff'); // Bright white core
                gradient.addColorStop(0.3, this.color); // Vibrant core
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fade effect

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.globalAlpha = particle.alpha;
                ctx.fill();
            });
        }

        update() {
            this.particles.forEach(particle => {
                particle.x += Math.cos(particle.angle) * particle.speed;
                particle.y += Math.sin(particle.angle) * particle.speed;
                particle.alpha -= 0.015;
            });

            this.particles = this.particles.filter(particle => particle.alpha > 0);
        }
    }

    const fireworks = [];

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const colors = [
            '#ff0000', '#ff8c00', '#ffff00', 
            '#00ff00', '#00ffff', '#0000ff', 
            '#8a2be2', '#ff1493', '#f0f'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        fireworks.push(new Firework(x, y, color));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fireworks.forEach((firework, index) => {
            firework.draw();
            firework.update();

            if (firework.particles.length === 0) {
                fireworks.splice(index, 1);
            }
        });

        if (Math.random() < 0.3) {
            createFirework();
        }

        requestAnimationFrame(animate);
    }

    animate();
}

window.onload = function () {
    if (localStorage.getItem('showFireworks') === 'true') {
        startFireworks();
        localStorage.removeItem('showFireworks');
    }
};
