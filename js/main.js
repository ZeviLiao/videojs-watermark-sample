console.log("Hello")
const player = videojs('my-video',{
    sources:[{ src: "https://www.w3schools.com/html/movie.mp4" }],
    loop:true,
    muted:true,
    width:"600",
    height:"300",
    controls:true
    // no fullscreen
    // controlBar: {
    //     fullscreenToggle: false
    // },
    // userActions: {
    //     doubleClick: false
    // }
});

player.ITMAN_watermark({
    position:"center",
    opacity: 0.7,
    textContent:'Zevi'
});
