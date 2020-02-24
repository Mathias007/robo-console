const bars = () => {
    const tl_bars = new TimelineMax({ onComplete: bars });

    const scale = () => {
        return 0.1 + Math.random() * 3;
    };

    const color = () => {
        const colors = ["green", "red", "yellow", "blue"];
        return colors[Math.floor(Math.random() * 4)];
    };

    // const voiceBars = document.querySelector("#voice-bars");
    const barsElement = document.querySelectorAll("#voice-bars > *");
    tl_bars.set(barsElement, { y: -30, transformOrigin: "50% 50%" });
    tl_bars.staggerTo(
        barsElement,
        0.7,
        {
            scaleY: scale,
            repeat: 1,
            yoyo: true,
            fill: color,
            ease: Bounce.easeIn
        },
        0.15
    );
    return tl_bars;
};

const blink = () => {
    const tl_blink = new TimelineMax({
        repeat: -1,
        repeatDelay: 3,
        delay: 2
    });
    const eyes = document.querySelectorAll("#eye-left, #eye-right");
    tl_blink
        .set(eyes, {
            transformOrigin: "50% 50%"
        })
        .to(eyes, 0.1, {
            scaleY: 0,
            fill: "#231f20"
        })
        .to(eyes, 0.05, {
            scaleY: 1,
            fill: "#48b3e6"
        })
        .to(
            eyes,
            0.15,
            {
                scaleY: 0,
                fill: "#231f20"
            },
            "+=0.5"
        )
        .to(eyes, 0.1, {
            scaleY: 1,
            fill: "#48b3e6"
        });
    return tl_blink;
};

const move = legs => {
    // console.log(elements);
    const tl_move = new TimelineMax();
    tl_move.staggerTo(
        legs,
        0.5,
        {
            y: -60,
            repeat: -1,
            yoyo: true,
            ease: Power0.easeNone
        },
        0.5
    );
    return tl_move;
};

// główna linia czasu
const master = new TimelineMax();
master.add("start");
master.add(bars(), "start");
master.add(move(document.querySelectorAll("#leg-right, #leg-left")), "start");
master.add(blink(), "start");
