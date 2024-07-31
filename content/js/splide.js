function splideTeam() {
    // Target the component using its classes
    let splides = document.querySelectorAll('.splide.is-team');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        // Initialize the slider with custom options
        new Splide(splides[i], {
            type: 'loop',
            gap: '.5rem',
            autoWidth: true,
            arrows: false,
            pagination: false,
            drag: false,
            autoScroll: {
                speed: .7,
                pauseOnHover: false // Disable pausing on hover
            }
        }).mount(window.splide.Extensions);
    }
}
splideTeam();