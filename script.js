


document.addEventListener('DOMContentLoaded', () => {
    const mainText = document.getElementById('main-text');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    let hoverCount = 0;
    let clickCount = 0;
    const messages = ["poda pota", "en daw venna", "Please da yes sollu","en ivalo attitude","u know i like u","Please daw", ];


    function getRandomPosition() {
        const offset = 300; 
        const x = Math.random() * offset - offset / 2;
        const y = Math.random() * offset - offset / 2;
        return { x, y };
    }
    
    noButton.addEventListener('mouseover', () => {
        if (hoverCount < 7) {
            const { x, y } = getRandomPosition();
            noButton.style.transform = `translate(${x}px, ${y}px)`;
            hoverCount++;
        } else {
            noButton.style.transform = 'translate(0, 0)';
        }
    });
    

    noButton.addEventListener('click', () => {
        if (hoverCount >= 7) {
            if (clickCount < messages.length) {
                mainText.textContent = messages[clickCount];
                clickCount++;
            }
            const noScale = parseFloat(noButton.style.transform.replace('scale(', '')) || 1;
            const yesScale = parseFloat(yesButton.style.transform.replace('scale(', '')) || 1;
            noButton.style.transform = `scale(${noScale - 0.2})`;
            yesButton.style.transform = `scale(${yesScale + 0.2})`;
        }
    });

    yesButton.addEventListener('click', () => {
        mainText.textContent = "I like you";
        yesButton.style.transform = "scale(1.5)";
        noButton.style.transform = "scale(0.5)";
    });
});
