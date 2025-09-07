var jadsdsEngine = new JadsdsEngine('mycanvas');
var jadsdsEngineB = new JadsdsEngine('mycanvasb');

window.onload = function () {
    loadNewAnimationA("sf2newfbf");
    loadNewAnimationB("sf2dj");
};

function loadNewAnimationA(nameAni) {
    jadsdsEngine.fixCanvasSize = false;
    jadsdsEngine.antiAlias = false;
    jadsdsEngine.stopAnimationWhenIsNotVisible = true;
    jadsdsEngine.loadAnimation(nameAni);
}

function loadNewAnimationB(nameAni) {
    jadsdsEngineB.fixCanvasSize = false;
    jadsdsEngineB.antiAlias = false;
    jadsdsEngineB.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineB.loadAnimation(nameAni);
}


