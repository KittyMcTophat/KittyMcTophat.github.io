$(() => {
    initializeSmolYuri();
});

function initializeSmolYuri() {
    let $SmolYuri = $("#SmolYuriImg");

    $SmolYuri.on("click", () => {
        let clickSound = new Audio("./sounds/squeak.mp3");
        clickSound.play();
    });
}
