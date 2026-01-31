function replaceButtonWithIframe(element, src) {
    const coverart = document.getElementById("coverart");
    const gameContainer = document.getElementById('game-container');
    const gameframe = createIframe(coverart.height, src);
    const fullscreenButton = createFullscreenButton();
    gameContainer.replaceChild(gameframe, element);
    gameContainer.appendChild(fullscreenButton);
}

function createIframe(coverHeight, src) {
    let gameframe = document.createElement("iframe");
    // Setting the values for the attributes
    gameframe.setAttribute("class", "centered");
    gameframe.src = src;
    gameframe.width= "100%";
    gameframe.height = coverHeight;
    gameframe.style.border = "black 3px solid";
    gameframe.style.borderRadius = "40px";
    gameframe.allow = "fullscreen";
    gameframe.innerText = "Your browser doesn't support iframes"
    return gameframe;
}

function createFullscreenButton() {
    let fullscreenButton = document.createElement("button");
    fullscreenButton.setAttribute("class", "btn btn-link");
    fullscreenButton.style.opacity = "90%";
    fullscreenButton.style.float = "right";
    fullscreenButton.style.position = "absolute";
    fullscreenButton.style.bottom = "2em";
    fullscreenButton.style.right = "2em";
    fullscreenButton.style.zIndex = "50";
    fullscreenButton.innerText = "Full screen";
    fullscreenButton.addEventListener("click", function () {
        document.getElementsByTagName('iframe')[0].requestFullscreen();
    })
    return fullscreenButton;
}