document.getElementById('surpriseBtn').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    // GSAP animation
    gsap.from("#message p", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "bounce.out"
    });

    // Animating title and description
    gsap.to("#title", {
        duration: 1,
        scale: 1.2,
        color: "#ff1493",
        ease: "power2.inOut"
    });

    gsap.to("#description", {
        duration: 1.5,
        opacity: 0.5,
        y: -10,
        ease: "power2.inOut"
    });
});
