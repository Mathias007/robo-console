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
    const tl_blink = new TimelineMax();
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
