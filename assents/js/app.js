const btn = document.getElementById('btn');
let hex = document.getElementById('hexCode');

function randomColor() {
    let letters = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
}
  return color;
}

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
    hex.innerHTML = randomColor();
});
document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const colors = [
        ['#8a2be2', '#ff4500'], // BlueViolet, OrangeRed
        ['#00ced1', '#ffd700'], // DarkTurquoise, Gold
        ['#9370db', '#3cb371']  // MediumPurple, MediumSeaGreen
    ];
    let currentColorSetIndex = 0;

    function changeLineColors() {
        currentColorSetIndex = (currentColorSetIndex + 1) % colors.length;
        const [color1, color2] = colors[currentColorSetIndex];

        root.style.setProperty('--color-one', color1);
        root.style.setProperty('--color-two', color2);
    }

    // Change colors every 4 seconds
    setInterval(changeLineColors, 4000);

    // Initial call to set colors
    changeLineColors();
});