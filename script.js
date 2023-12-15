alert('Hello from Conjura!');

document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.interactive-background');

    // Function to create a dot at the cursor position
    function createDot(event) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${event.clientX}px`;
        dot.style.top = `${event.clientY}px`;
        background.appendChild(dot);

        // Remove the dot after the animation completes
        dot.addEventListener('animationend', () => {
            dot.remove();
        });
    }

    // Add event listener for mousemove to create dots
    background.addEventListener('mousemove', createDot);
});
