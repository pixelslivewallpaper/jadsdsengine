
window.onload = function () {
    imgA = document.getElementById("miniA");
    imgB = document.getElementById("miniB");

    loadHelpUS("sgagb");
    loadHow();
};

var jadsdsEngineHelp = new JadsdsEngine('canvasHelp');
jadsdsEngineHelp.fixCanvasSize = false;
jadsdsEngineHelp.renderMode = RenderMode.Advanced;
jadsdsEngineHelp.antiAlias = true;
jadsdsEngineHelp.stopAnimationWhenIsNotVisible = true;

var imgA, imgB;

function changeImage(abc) {
    if (abc == 1) {
        imgA.style.display = "none";
        imgB.style.display = "";
    }
    else {
        imgB.style.display = "none";
        imgA.style.display = "";
    }
}

function loadHelpUS(ani) {
    jadsdsEngineHelp.unloadAnimation();
    jadsdsEngineHelp.loadAnimation(ani);
}

function loadHow() {
    var jadsdsEngineHowA = new JadsdsEngine('canvasHowA');
    jadsdsEngineHowA.fixCanvasSize = false;
    jadsdsEngineHowA.renderMode = RenderMode.Advanced;
    jadsdsEngineHowA.antiAlias = false;
    jadsdsEngineHowA.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineHowA.loadAnimation("howitworks");

    var jadsdsEngineHowB = new JadsdsEngine('canvasHowB');
    jadsdsEngineHowB.fixCanvasSize = false;
    jadsdsEngineHowB.renderMode = RenderMode.Advanced;
    jadsdsEngineHowB.antiAlias = false;
    jadsdsEngineHowB.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineHowB.loadAnimation("howitworksb");

    var jadsdsEngineHowC = new JadsdsEngine('canvasHowC');
    jadsdsEngineHowC.fixCanvasSize = false;
    jadsdsEngineHowC.renderMode = RenderMode.Advanced;
    jadsdsEngineHowC.antiAlias = false;
    jadsdsEngineHowC.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineHowC.loadAnimation("howitworksc");
}

function openChest(tdc) {
    document.getElementById(tdc).style.backgroundImage = "url('styles/images/chest2.png')";
}
