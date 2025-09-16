var jadsdsEngine = new JadsdsEngine('mycanvas');
var jadsdsEngineB = new JadsdsEngine('mycanvasb');
var jadsdsEngineC = new JadsdsEngine('mycanvasc');

window.onload = function () {
    loadNewAnimationA("sf2newfbf");
    loadNewAnimationB("sf2dj");
    loadNewAnimationC("toy");
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

function loadNewAnimationC(nameAni) {
    jadsdsEngineC.fixCanvasSize = false;
    jadsdsEngineC.antiAlias = false;
    jadsdsEngineC.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineC.loadAnimation(nameAni);
}


