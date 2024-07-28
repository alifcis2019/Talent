let xPos = 0;

gsap.timeline()
    .set(dragger, { opacity: 0 }) // Make the drag layer invisible
    .set(ring, { rotationY: 180 }) // Set initial rotationY so the parallax jump happens off-screen
    .set('.img', { // Apply transform rotations to each image
        rotateY: (i) => i * -38,
        transformOrigin: '50% 50% 600px',
        z: -500,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: 'hidden'
    })
    .from('.img', {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo'
    });

// Infinite rotation animation
gsap.to(ring, {
    rotationY: '+=360', // Rotate by 360 degrees
    duration: 100, // Duration of the rotation (adjust as needed)
    ease: 'none', // No easing for a smooth loop
    repeat: -1, // Infinite loop
    onUpdate: () => { gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) }) }
});

function getBgPos(i) { // Returns the background-position string to create parallax movement in each image
    return (-gsap.utils.wrap(0, 360, gsap.getProperty(ring, 'rotationY') - 180 - i * 38) / 360 * 400) + 'px 0px';
}
