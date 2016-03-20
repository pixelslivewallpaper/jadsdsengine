
window.onload = function () {

    loadHelpUS("sgagb");
    loadHow();
};

var jadsdsEngineHelp = new JadsdsEngine('canvasHelp');
jadsdsEngineHelp.fixCanvasSize = false;
jadsdsEngineHelp.renderMode = RenderMode.Advanced;
jadsdsEngineHelp.antiAlias = true;
jadsdsEngineHelp.stopAnimationWhenIsNotVisible = true;

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