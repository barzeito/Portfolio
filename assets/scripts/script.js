particlesJS("particles", {
    particles: {
        number: {
            value: 75,
            density: {
                enable: true,
                value_area: 650,
            },
        },
        color: {
            value: "#ED500A",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 1,
                color: "#F8E6DE",
            },
        },
        opacity: {
            value: 1,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});